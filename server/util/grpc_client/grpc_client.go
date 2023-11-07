package grpc_client

import (
	"context"
	"crypto/tls"
	"math"
	"net/url"
	"time"

	"github.com/buildbuddy-io/buildbuddy/server/environment"
	"github.com/buildbuddy-io/buildbuddy/server/rpc/interceptors"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/keepalive"
)

// DialSimple handles some of the logic around detecting the correct GRPC
// connection type and applying relevant options when connecting.
//
// This function should be used when dialing from outside of BuildBuddy servers
// such as from cli tools and the like. When dialing from BuildBuddy servers
// (app, executor) you should use DialInternal.
func DialSimple(target string, extraOptions ...grpc.DialOption) (*grpc.ClientConn, error) {
	dialOptions := CommonGRPCClientOptions()
	dialOptions = append(dialOptions, extraOptions...)
	u, err := url.Parse(target)
	if err == nil {
		if u.User != nil {
			dialOptions = append(dialOptions, grpc.WithPerRPCCredentials(newRPCCredentials(u.User.String())))
		}
		if u.Scheme == "grpcs" {
			dialOptions = append(dialOptions, grpc.WithTransportCredentials(credentials.NewTLS(&tls.Config{})))
		} else {
			dialOptions = append(dialOptions, grpc.WithInsecure())
		}

		if u.Scheme == "grpcs" && u.Port() == "" {
			u.Host += ":443"
		}

		if u.Scheme != "unix" {
			target = u.Host
		}
	}

	// Connect to host/port and create a new client
	return grpc.Dial(target, dialOptions...)
}

// DialInternal is similar to DialSimple, but it adds additional interceptors
// (such as client identity) based on the specified environment.
//
// Outside of BuildBuddy servers, DialSimple should be used instead.
func DialInternal(env environment.Env, target string, extraOptions ...grpc.DialOption) (*grpc.ClientConn, error) {
	opts := []grpc.DialOption{interceptors.GetUnaryClientIdentityInterceptor(env), interceptors.GetStreamClientIdentityInterceptor(env)}
	opts = append(opts, extraOptions...)
	return DialSimple(target, opts...)
}

type rpcCredentials struct {
	authorization string
}

func newRPCCredentials(authorization string) *rpcCredentials {
	return &rpcCredentials{
		authorization: authorization,
	}
}

func (c *rpcCredentials) GetRequestMetadata(ctx context.Context, uri ...string) (map[string]string, error) {
	return map[string]string{
		"authorization": c.authorization,
	}, nil
}

func (c *rpcCredentials) RequireTransportSecurity() bool {
	return false
}

func CommonGRPCClientOptions() []grpc.DialOption {
	return []grpc.DialOption{
		interceptors.GetUnaryClientInterceptor(),
		interceptors.GetStreamClientInterceptor(),
		grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(math.MaxInt32)),
		grpc.WithKeepaliveParams(keepalive.ClientParameters{
			// After a duration of this time if the client doesn't see any activity it
			// pings the server to see if the transport is still alive.
			Time: 30 * time.Second,

			// After having pinged for keepalive check, the client waits for a duration
			// of Timeout and if no activity is seen even after that the connection is
			// closed.
			Timeout: 20 * time.Second,

			// If true, client sends keepalive pings even with no active RPCs.
			PermitWithoutStream: true,
		}),
	}
}
