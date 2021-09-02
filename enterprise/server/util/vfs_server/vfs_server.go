package vfs_server

import (
	"context"
	"fmt"
	"io"
	"net"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"syscall"

	"github.com/buildbuddy-io/buildbuddy/enterprise/server/remote_execution/container"
	"github.com/buildbuddy-io/buildbuddy/enterprise/server/remote_execution/dirtools"
	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/remote_cache/digest"
	"github.com/buildbuddy-io/buildbuddy/server/util/alert"
	"github.com/buildbuddy-io/buildbuddy/server/util/log"
	"github.com/buildbuddy-io/buildbuddy/server/util/status"
	"github.com/hanwen/go-fuse/v2/fs"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	gstatus "google.golang.org/grpc/status"

	repb "github.com/buildbuddy-io/buildbuddy/proto/remote_execution"
	vfspb "github.com/buildbuddy-io/buildbuddy/proto/vfs"
)

type fileHandle struct {
	srv *Server

	mu        sync.Mutex
	f         *os.File
	openFlags uint32
}

type Server struct {
	env           environment.Env
	workspacePath string

	server *grpc.Server

	mu                 sync.Mutex
	context            context.Context
	remoteInstanceName string
	inputFiles         map[string]*repb.FileNode
	nextHandleID       uint64
	fileHandles        map[uint64]*fileHandle
}

func New(env environment.Env, workspacePath string) *Server {
	return &Server{
		env:           env,
		workspacePath: workspacePath,
		inputFiles:    make(map[string]*repb.FileNode),
		fileHandles:   make(map[uint64]*fileHandle),
		nextHandleID:  1,
	}
}

func (p *Server) Prepare(ctx context.Context, fsLayout *container.FileSystemLayout) error {
	p.mu.Lock()
	defer p.mu.Unlock()

	p.remoteInstanceName = fsLayout.RemoteInstanceName

	_, dirMap, err := dirtools.DirMapFromTree(fsLayout.Inputs)
	if err != nil {
		return err
	}

	dirsToMake := make(map[string]struct{})
	var walkDir func(dir *repb.Directory, path string) error
	walkDir = func(dir *repb.Directory, path string) error {
		dirsToMake[path] = struct{}{}
		for _, childDirNode := range dir.GetDirectories() {
			childDir, ok := dirMap[digest.NewKey(childDirNode.Digest)]
			if !ok {
				return status.NotFoundErrorf("could not find dir %q", childDirNode.Digest)
			}
			if err := walkDir(childDir, filepath.Join(path, childDirNode.GetName())); err != nil {
				return err
			}
		}
		for _, childFileNode := range dir.GetFiles() {
			path := filepath.Join(path, childFileNode.GetName())
			p.inputFiles[path] = childFileNode
		}
		for _, symLink := range dir.GetSymlinks() {
			if err := os.Symlink(symLink.Target, filepath.Join(path, symLink.Name)); err != nil {
				return err
			}
		}
		return nil
	}

	err = walkDir(fsLayout.Inputs.GetRoot(), "")
	if err != nil {
		return err
	}

	for _, dir := range fsLayout.OutputDirs {
		dirsToMake[dir] = struct{}{}
	}
	for _, file := range fsLayout.OutputFiles {
		dirsToMake[filepath.Dir(file)] = struct{}{}
	}
	for dir := range dirsToMake {
		dir := filepath.Join(p.workspacePath, dir)
		if err := os.MkdirAll(dir, 0755); err != nil {
			return err
		}
	}
	return nil
}

func (p *Server) computeFullPath(relativePath string) (string, error) {
	fullPath := filepath.Clean(filepath.Join(p.workspacePath, relativePath))
	if !strings.HasPrefix(fullPath, p.workspacePath) {
		return "", status.PermissionDeniedError("open request outside of workspace")
	}
	return fullPath, nil
}

func syscallErrProto(sysErr error) *vfspb.SyscallError {
	errno := fs.ToErrno(sysErr)
	return &vfspb.SyscallError{Errno: uint32(errno)}
}

// syscallErrStatus creates a gRPC status error that includes the given syscall error code.
func syscallErrStatus(sysErr error) error {
	s := gstatus.New(codes.Unknown, fmt.Sprintf("syscall error: %s", sysErr))
	s, err := s.WithDetails(syscallErrProto(sysErr))
	// should never happen
	if err != nil {
		alert.UnexpectedEvent("could_not_make_syscall_err", "err: %s", err)
	}
	return s.Err()
}

func (h *fileHandle) open(ctx context.Context, req *vfspb.OpenRequest, handleID uint64) (*vfspb.OpenResponse, error) {
	fullPath, err := h.srv.computeFullPath(req.GetPath())
	if err != nil {
		return nil, err
	}

	h.srv.mu.Lock()
	fileNode, ok := h.srv.inputFiles[req.GetPath()]
	h.srv.mu.Unlock()
	if ok {
		ff := dirtools.NewBatchFileFetcher(ctx, h.srv.remoteInstanceName, h.srv.env.GetFileCache(), h.srv.env.GetByteStreamClient(), h.srv.env.GetContentAddressableStorageClient())
		fileMap := dirtools.FileMap{
			digest.NewKey(fileNode.GetDigest()): {&dirtools.FilePointer{
				FullPath:     fullPath,
				RelativePath: req.GetPath(),
				FileNode:     fileNode,
			}},
		}
		if err := ff.FetchFiles(fileMap, &dirtools.DownloadTreeOpts{}); err != nil {
			return nil, err
		}
	}

	f, err := os.OpenFile(fullPath, int(req.GetFlags()), os.FileMode(req.GetMode()))
	if err != nil {
		return nil, syscallErrStatus(err)
	}
	h.f = f
	h.openFlags = req.GetFlags()
	return &vfspb.OpenResponse{HandleId: handleID}, nil
}

// TODO(vadim): investigate if we can allow parallel reads
func (h *fileHandle) read(req *vfspb.ReadRequest) (*vfspb.ReadResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	buf := make([]byte, req.GetNumBytes())
	n, err := h.f.ReadAt(buf, req.GetOffset())
	if err != nil && err != io.EOF {
		return nil, err
	}
	return &vfspb.ReadResponse{Data: buf[:n]}, nil
}

func (h *fileHandle) allocate(req *vfspb.AllocateRequest) (*vfspb.AllocateResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	if err := syscall.Fallocate(int(h.f.Fd()), req.GetMode(), req.GetOffset(), req.GetNumBytes()); err != nil {
		return nil, err
	}
	return &vfspb.AllocateResponse{}, nil
}

func (h *fileHandle) write(req *vfspb.WriteRequest) (*vfspb.WriteResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	var n int
	var err error
	if int(h.openFlags)&os.O_APPEND != 0 {
		n, err = h.f.Write(req.GetData())
	} else {
		n, err = h.f.WriteAt(req.GetData(), req.GetOffset())
	}

	if err != nil {
		return nil, err
	}
	return &vfspb.WriteResponse{NumBytes: uint32(n)}, nil
}

func (h *fileHandle) fsync(req *vfspb.FsyncRequest) (*vfspb.FsyncResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	if err := h.f.Sync(); err != nil {
		return nil, err
	}
	return &vfspb.FsyncResponse{}, nil
}

func (h *fileHandle) flush(req *vfspb.FlushRequest) (*vfspb.FlushResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	// Flush may be called more than once for the same handle if the user duplicated the FD.
	// We can't close our local FD until all the user FDs are closed.

	fd, err := syscall.Dup(int(h.f.Fd()))
	if err != nil {
		return nil, err
	}
	if err := syscall.Close(fd); err != nil {
		return nil, err
	}
	return &vfspb.FlushResponse{}, nil
}

func (h *fileHandle) release(req *vfspb.ReleaseRequest) (*vfspb.ReleaseResponse, error) {
	h.mu.Lock()
	defer h.mu.Unlock()

	if err := h.f.Close(); err != nil {
		return nil, err
	}
	h.f = nil
	return &vfspb.ReleaseResponse{}, nil
}

func (p *Server) Open(ctx context.Context, request *vfspb.OpenRequest) (*vfspb.OpenResponse, error) {
	p.mu.Lock()
	ctx = p.context
	handleID := p.nextHandleID
	p.nextHandleID++
	fh := &fileHandle{srv: p}
	p.fileHandles[handleID] = fh
	p.mu.Unlock()
	return fh.open(ctx, request, handleID)
}

func (p *Server) getFileHandle(id uint64) (*fileHandle, error) {
	p.mu.Lock()
	defer p.mu.Unlock()
	fh, ok := p.fileHandles[id]
	if !ok {
		return nil, status.NotFoundErrorf("file handle %d not found", id)
	}
	return fh, nil
}

func (p *Server) Allocate(ctx context.Context, request *vfspb.AllocateRequest) (*vfspb.AllocateResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	return fh.allocate(request)
}

func (p *Server) Read(ctx context.Context, request *vfspb.ReadRequest) (*vfspb.ReadResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	return fh.read(request)
}

func (p *Server) Write(ctx context.Context, request *vfspb.WriteRequest) (*vfspb.WriteResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	return fh.write(request)
}

func (p *Server) Fsync(ctx context.Context, request *vfspb.FsyncRequest) (*vfspb.FsyncResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	return fh.fsync(request)
}

func (p *Server) Flush(ctx context.Context, request *vfspb.FlushRequest) (*vfspb.FlushResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	return fh.flush(request)
}

func (p *Server) Release(ctx context.Context, request *vfspb.ReleaseRequest) (*vfspb.ReleaseResponse, error) {
	fh, err := p.getFileHandle(request.GetHandleId())
	if err != nil {
		return nil, err
	}
	rsp, err := fh.release(request)
	p.mu.Lock()
	delete(p.fileHandles, request.GetHandleId())
	p.mu.Unlock()
	return rsp, err
}

func (p *Server) getAttr(fullPath string) (*vfspb.Attrs, error) {
	fi, err := os.Stat(fullPath)
	if err != nil {
		return nil, syscallErrStatus(err)
	}
	return &vfspb.Attrs{
		Size: fi.Size(),
		Perm: uint32(fi.Mode().Perm()),
	}, nil
}

func (p *Server) GetAttr(ctx context.Context, request *vfspb.GetAttrRequest) (*vfspb.GetAttrResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}

	attrs, err := p.getAttr(fullPath)
	if err != nil {
		return nil, err
	}
	return &vfspb.GetAttrResponse{Attrs: attrs}, nil
}

func (p *Server) SetAttr(ctx context.Context, request *vfspb.SetAttrRequest) (*vfspb.SetAttrResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}

	if request.SetPerms != nil {
		if err := os.Chmod(fullPath, os.FileMode(request.SetPerms.Perms)); err != nil {
			return nil, syscallErrStatus(err)
		}
	}

	if request.SetSize != nil {
		if err := os.Truncate(fullPath, request.SetSize.GetSize()); err != nil {
			return nil, syscallErrStatus(err)
		}
	}

	attrs, err := p.getAttr(fullPath)
	if err != nil {
		return nil, err
	}
	return &vfspb.SetAttrResponse{Attrs: attrs}, nil
}

func (p *Server) Rename(ctx context.Context, request *vfspb.RenameRequest) (*vfspb.RenameResponse, error) {
	oldFullPath, err := p.computeFullPath(request.GetOldPath())
	if err != nil {
		return nil, err
	}
	oldNewPath, err := p.computeFullPath(request.GetNewPath())
	if err != nil {
		return nil, err
	}

	if err := os.Rename(oldFullPath, oldNewPath); err != nil {
		return nil, syscallErrStatus(err)
	}

	return &vfspb.RenameResponse{}, nil
}

func (p *Server) Mkdir(ctx context.Context, request *vfspb.MkdirRequest) (*vfspb.MkdirResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}
	if err := os.Mkdir(fullPath, os.FileMode(request.GetPerms())); err != nil {
		return nil, syscallErrStatus(err)
	}
	return &vfspb.MkdirResponse{}, nil
}

func (p *Server) Rmdir(ctx context.Context, request *vfspb.RmdirRequest) (*vfspb.RmdirResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}
	log.Warningf("Remove %q", fullPath)
	if err := os.Remove(fullPath); err != nil {
		log.Warningf("Remove failed: %s", err)
		return nil, syscallErrStatus(err)
	}
	return &vfspb.RmdirResponse{}, nil
}

func (p *Server) Symlink(ctx context.Context, request *vfspb.SymlinkRequest) (*vfspb.SymlinkResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}

	target := request.GetTarget()

	var targetFullPath string
	// If the symlink target is an absolute path, rewrite it with the real location in the workspace.
	if strings.HasPrefix(target, "/") {
		target = filepath.Join(p.workspacePath, target)
		targetFullPath = target
	} else {
		targetFullPath = filepath.Join(filepath.Dir(fullPath), target)
	}

	// Check that nothing sneaky is going on.
	// TODO(vadim): check if you could still do something shady by moving a relative symlink to a higher directory
	if !strings.HasPrefix(filepath.Clean(targetFullPath), p.workspacePath) {
		return nil, status.PermissionDeniedError("symlink target outside of workspace")
	}

	if err := os.Symlink(target, fullPath); err != nil {
		return nil, syscallErrStatus(err)
	}
	return &vfspb.SymlinkResponse{}, nil
}

func (p *Server) Unlink(ctx context.Context, request *vfspb.UnlinkRequest) (*vfspb.UnlinkResponse, error) {
	fullPath, err := p.computeFullPath(request.GetPath())
	if err != nil {
		return nil, err
	}
	if err := os.Remove(fullPath); err != nil {
		return nil, syscallErrStatus(err)
	}
	return &vfspb.UnlinkResponse{}, nil
}

func (p *Server) Start(lis net.Listener) error {
	p.server = grpc.NewServer()
	vfspb.RegisterFileSystemServer(p.server, p)
	go func() {
		_ = p.server.Serve(lis)
	}()
	return nil
}

func (p *Server) Stop() {
	p.mu.Lock()
	for _, fh := range p.fileHandles {
		_, _ = fh.release(&vfspb.ReleaseRequest{})
	}
	p.mu.Unlock()
	p.server.Stop()
}

func (p *Server) SetExecutionContext(ctx context.Context) {
	p.mu.Lock()
	p.context = ctx
	p.mu.Unlock()
}
