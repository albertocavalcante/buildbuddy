load("@io_bazel_rules_go//go:def.bzl", "go_library", "go_test")

# TODO(sluongng): ensure all //enterprise code are not dependency of FOSS code
# gazelle:default_visibility //enterprise:__subpackages__,//cli/remotebazel:__pkg__
package(default_visibility = [
    "//cli/remotebazel:__pkg__",
    "//enterprise:__subpackages__",
])

go_library(
    name = "dirtools",
    srcs = ["dirtools.go"],
    importpath = "github.com/buildbuddy-io/buildbuddy/enterprise/server/remote_execution/dirtools",
    deps = [
        "//proto:remote_execution_go_proto",
        "//proto:resource_go_proto",
        "//server/environment",
        "//server/interfaces",
        "//server/remote_cache/cachetools",
        "//server/remote_cache/digest",
        "//server/util/claims",
        "//server/util/fastcopy",
        "//server/util/log",
        "//server/util/proto",
        "//server/util/status",
        "//third_party/singleflight",
        "@org_golang_google_genproto_googleapis_bytestream//:bytestream",
        "@org_golang_x_sync//errgroup",
    ],
)

go_test(
    name = "dirtools_test",
    size = "small",
    srcs = ["dirtools_test.go"],
    deps = [
        ":dirtools",
        "//enterprise/server/remote_execution/filecache",
        "//proto:remote_execution_go_proto",
        "//proto:resource_go_proto",
        "//server/remote_cache/byte_stream_server",
        "//server/remote_cache/content_addressable_storage_server",
        "//server/remote_cache/digest",
        "//server/testutil/testdigest",
        "//server/testutil/testenv",
        "//server/testutil/testfs",
        "//server/util/hash",
        "//server/util/prefix",
        "//server/util/proto",
        "@com_github_stretchr_testify//assert",
        "@com_github_stretchr_testify//require",
        "@org_golang_google_genproto_googleapis_bytestream//:bytestream",
        "@org_golang_x_sync//errgroup",
    ],
)
