load("@io_bazel_rules_go//go:def.bzl", "go_library", "go_test")

go_library(
    name = "overlayfs",
    srcs = ["overlayfs.go"],
    importpath = "github.com/buildbuddy-io/buildbuddy/enterprise/server/remote_execution/overlayfs",
    visibility = ["//visibility:public"],
    deps = [
        "//server/util/disk",
        "//server/util/status",
        "//server/util/tracing",
    ],
)

go_test(
    name = "overlayfs_test",
    srcs = ["overlayfs_test.go"],
    target_compatible_with = ["@platforms//os:linux"],
    deps = [
        ":overlayfs",
        "//server/testutil/testfs",
        "@com_github_docker_go_units//:go-units",
        "@com_github_stretchr_testify//require",
        "@org_golang_x_sync//errgroup",
    ],
)

go_test(
    name = "overlayfs_benchmark_test",
    srcs = ["overlayfs_test.go"],
    args = [
        "-test.bench=.",
        "-test.skip=^Test",
    ],
    tags = ["manual"],
    target_compatible_with = ["@platforms//os:linux"],
    deps = [
        ":overlayfs",
        "//server/testutil/testfs",
        "@com_github_docker_go_units//:go-units",
        "@com_github_stretchr_testify//require",
        "@org_golang_x_sync//errgroup",
    ],
)

package(default_visibility = ["//enterprise:__subpackages__"])
