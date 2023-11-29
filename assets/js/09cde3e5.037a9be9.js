"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6436],{67455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(85893),i=t(11151);const o={id:"enterprise-api",title:"API Documentation",sidebar_label:"Enterprise API"},s=void 0,r={id:"enterprise-api",title:"API Documentation",description:"The BuildBuddy API let's you programmatically obtain information about your Bazel builds. API access available to Enterprise BuildBuddy Customers.",source:"@site/../docs/enterprise-api.md",sourceDirName:".",slug:"/enterprise-api",permalink:"/docs/enterprise-api",draft:!1,unlisted:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-api.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1701284306,formattedLastUpdatedAt:"Nov 29, 2023",frontMatter:{id:"enterprise-api",title:"API Documentation",sidebar_label:"Enterprise API"},sidebar:"someSidebar",previous:{title:"Enterprise Mac RBE Setup",permalink:"/docs/enterprise-mac-rbe"},next:{title:"Prometheus Metrics",permalink:"/docs/prometheus-metrics"}},l={},c=[{value:"GetInvocation",id:"getinvocation",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Service",id:"service",level:3},{value:"Example cURL request",id:"example-curl-request",level:3},{value:"Example cURL response",id:"example-curl-response",level:3},{value:"GetInvocationRequest",id:"getinvocationrequest",level:3},{value:"GetInvocationResponse",id:"getinvocationresponse",level:3},{value:"InvocationSelector",id:"invocationselector",level:3},{value:"Invocation",id:"invocation",level:3},{value:"GetLog",id:"getlog",level:2},{value:"Endpoint",id:"endpoint-1",level:3},{value:"Service",id:"service-1",level:3},{value:"Example cURL request",id:"example-curl-request-1",level:3},{value:"Example cURL response",id:"example-curl-response-1",level:3},{value:"GetLogRequest",id:"getlogrequest",level:3},{value:"GetLogResponse",id:"getlogresponse",level:3},{value:"LogSelector",id:"logselector",level:3},{value:"Log",id:"log",level:3},{value:"GetTarget",id:"gettarget",level:2},{value:"Endpoint",id:"endpoint-2",level:3},{value:"Service",id:"service-2",level:3},{value:"Example cURL request",id:"example-curl-request-2",level:3},{value:"Example cURL response",id:"example-curl-response-2",level:3},{value:"GetTargetRequest",id:"gettargetrequest",level:3},{value:"GetTargetResponse",id:"gettargetresponse",level:3},{value:"TargetSelector",id:"targetselector",level:3},{value:"Target",id:"target",level:3},{value:"GetAction",id:"getaction",level:2},{value:"Endpoint",id:"endpoint-3",level:3},{value:"Service",id:"service-3",level:3},{value:"Example cURL request",id:"example-curl-request-3",level:3},{value:"Example cURL response",id:"example-curl-response-3",level:3},{value:"GetActionRequest",id:"getactionrequest",level:3},{value:"GetActionResponse",id:"getactionresponse",level:3},{value:"ActionSelector",id:"actionselector",level:3},{value:"Action",id:"action",level:3},{value:"GetFile",id:"getfile",level:2},{value:"Endpoint",id:"endpoint-4",level:3},{value:"Service",id:"service-4",level:3},{value:"Example cURL request",id:"example-curl-request-4",level:3},{value:"Example cURL response",id:"example-curl-response-4",level:3},{value:"GetFileRequest",id:"getfilerequest",level:3},{value:"GetFileResponse",id:"getfileresponse",level:3},{value:"File",id:"file",level:3},{value:"DeleteFile",id:"deletefile",level:2},{value:"Endpoint",id:"endpoint-5",level:3},{value:"Service",id:"service-5",level:3},{value:"Example cURL request",id:"example-curl-request-5",level:3},{value:"DeleteFileRequest",id:"deletefilerequest",level:3},{value:"DeleteFileResponse",id:"deletefileresponse",level:3},{value:"ExecuteWorkflow",id:"executeworkflow",level:2},{value:"Endpoint",id:"endpoint-6",level:3},{value:"Service",id:"service-6",level:3},{value:"Example cURL request",id:"example-curl-request-6",level:3},{value:"ExecuteWorkflowRequest",id:"executeworkflowrequest",level:3},{value:"ExecuteWorkflowResponse",id:"executeworkflowresponse",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The BuildBuddy API let's you programmatically obtain information about your Bazel builds. API access available to Enterprise BuildBuddy Customers."}),"\n",(0,a.jsxs)(n.p,{children:["Requests can be made via JSON or using Protobuf. The examples below are using the JSON API. For a full overview of the service, you can view the ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/service.proto",children:"service definition"})," or the ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/proto/api/v1",children:"individual protos"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"getinvocation",children:"GetInvocation"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"GetInvocation"})," endpoint allows you to fetch invocations associated with a commit SHA or invocation ID. View full ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/invocation.proto",children:"Invocation proto"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/GetInvocation\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Retrieves a list of invocations or a specific invocation matching the given\n// request selector.\nrpc GetInvocation(GetInvocationRequest) returns (GetInvocationResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetInvocation\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the invocation ID ",(0,a.jsx)(n.code,{children:"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-response",children:"Example cURL response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "invocation": [\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea"\n      },\n      "success": true,\n      "user": "runner",\n      "durationUsec": "221970000",\n      "host": "fv-az278-49",\n      "command": "build",\n      "pattern": "//...",\n      "actionCount": "1402",\n      "createdAtUsec": "1623193638545989",\n      "updatedAtUsec": "1623193638545989",\n      "repoUrl": "https://github.com/buildbuddy-io/buildbuddy",\n      "commitSha": "800f549937a4c0a1614e65501caf7577d2a00624",\n      "role": "CI"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getinvocationrequest",children:"GetInvocationRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Request passed into GetInvocation\nmessage GetInvocationRequest {\n  // The selector defining which invocations(s) to retrieve.\n  InvocationSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"getinvocationresponse",children:"GetInvocationResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response from calling GetInvocation\nmessage GetInvocationResponse {\n  // Invocations matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Invocation invocation = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"invocationselector",children:"InvocationSelector"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// The selector used to specify which invocations to return.\nmessage InvocationSelector {\n  // One invocation_id or commit_sha is required.\n\n  // Optional: The Invocation ID.\n  // Return only the invocation with this invocation ID.\n  string invocation_id = 1;\n\n  // Optional: The commmit SHA.\n  // If set, only the invocations with this commit SHA will be returned.\n  string commit_sha = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"invocation",children:"Invocation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:'// Response from calling GetInvocation\nmessage GetInvocationResponse {\n  // Invocations matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Invocation invocation = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n\n// Each Invocation represents metadata associated with a given invocation.\nmessage Invocation {\n  // The resource ID components that identify the Invocation.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n  }\n\n  // The resource ID components that identify the Invocation.\n  Id id = 1;\n\n  // Whether or not the build was successful.\n  bool success = 3;\n\n  // The user who performed this build.\n  string user = 4;\n\n  // The duration of this build, from start to finish.\n  int64 duration_usec = 5;\n\n  // The host this build was executed on.\n  string host = 6;\n\n  // The command performed (usually "build" or "test").\n  string command = 7;\n\n  // The build patterns specified for this build.\n  string pattern = 8;\n\n  // The number of actions performed.\n  int64 action_count = 9;\n\n  // The time this invocation was created and updated, respectively. Invocations\n  // are created as soon as the first event is received from the client and\n  // updated with subsequent events until they are finalized.\n  int64 created_at_usec = 13;\n  int64 updated_at_usec = 14;\n\n  // A URL to the git repo this invocation was for.\n  string repo_url = 15;\n\n  // The commit SHA that this invocation was for.\n  string commit_sha = 16;\n\n  // The role played by this invocation. Ex: "CI"\n  string role = 19;\n\n  // The git branch that this invocation was for.\n  string branch_name = 20;\n\n  // The invocation\'s build metadata. Only included if include_metadata = true.\n  repeated InvocationMetadata build_metadata = 21;\n\n  // The invocation\'s workspace status.\n  // Only included if include_metadata = true.\n  repeated InvocationMetadata workspace_status = 22;\n\n  // Bazel exit code name for the invocation.\n  // At the time of writing, valid exit code names are listed here:\n  // https://github.com/bazelbuild/bazel/blob/b3602eb14cf27494a0a754bc215ec2b94d13d89b/src/main/java/com/google/devtools/build/lib/util/ExitCode.java#L42-L72\n  // Ex: "INTERRUPTED".\n  string bazel_exit_code = 23;\n}\n\n// Key value pair containing invocation metadata.\nmessage InvocationMetadata {\n  string key = 1;\n  string value = 2;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"getlog",children:"GetLog"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"GetLog"})," endpoint allows you to fetch build logs associated with an invocation ID. View full ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/log.proto",children:"Log proto"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-1",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/GetLog\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-1",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Retrieves the logs for a specific invocation.\nrpc GetLog(GetLogRequest) returns (GetLogResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-1",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetLog\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the invocation ID ",(0,a.jsx)(n.code,{children:"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-response-1",children:"Example cURL response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "log": {\n    "contents": "\\u001b[32mINFO: \\u001b[0mStreaming build results to: https://app.buildbuddy.io/invocation/c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b389565ce91f59e5b1330988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:195:14: Multiple values in \'deps\' is deprecated in google_devtools_remoteexecution_v1test_remote_execution_java_grpc\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b3895654ce91f9e5b1300988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:195:14: Multiple values in \'deps\' is deprecated in remote_execution_java_grpc\\n\\u001b[33mDEBUG: \\u001b[0m/private/var/tmp/_bazel_siggi/d74b3895654ce91f9e5b1300988b81f0/external/io_grpc_grpc_java/java_grpc_library.bzl:82:14: in srcs attribute of @remoteapis//:remote_execution_java_grpc: Proto source with label @remoteapis//build/bazel/remote/execution/v2:remote_execution_proto should be in same package as consuming rule\\n\\u001b[32mINFO: \\u001b[0mAnalyzed 9 targets (52 packages loaded, 1700 targets configured).\\n\\u001b[32mINFO: \\u001b[0mFound 9 targets...\\n\\u001b[32mINFO: \\u001b[0mFrom Generating Descriptor Set proto_library @googleapis//:google_watch_v1_proto:\\ngoogle/watcher/v1/watch.proto:21:1: warning: Import google/protobuf/empty.proto but not used.\\n\\u001b[32mINFO: \\u001b[0mElapsed time: 2.615s, Critical Path: 1.21s\\n\\u001b[32mINFO: \\u001b[0m32 processes: 16 internal, 11 darwin-sandbox, 5 worker.\\n\\u001b[32mINFO:\\u001b[0m Build completed successfully, 32 total actions\\n"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getlogrequest",children:"GetLogRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Request passed into GetLog\nmessage GetLogRequest {\n  // The selector defining which logs(s) to retrieve.\n  LogSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"getlogresponse",children:"GetLogResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response from calling GetLog\nmessage GetLogResponse {\n  // Log matching the request, possibly capped by a server limit.\n  Log log = 1;\n\n  // Token to retrieve the next page of the log, or empty if there are no\n  // more logs.\n  string next_page_token = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"logselector",children:"LogSelector"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// The selector used to specify which logs to return.\nmessage LogSelector {\n  // Required: The Invocation ID.\n  // Return only the logs associated with this invocation ID.\n  string invocation_id = 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"log",children:"Log"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Each Log represents a chunk of build logs.\nmessage Log {\n  // The resource ID components that identify the Log.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n  }\n\n  // The resource ID components that identify the Log.\n  Id id = 1;\n\n  // The contents of the log.\n  string contents = 3;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"gettarget",children:"GetTarget"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"GetTarget"})," endpoint allows you to fetch targets associated with a given invocation ID. View full ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/target.proto",children:"Target proto"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-2",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/GetTarget\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-2",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Retrieves a list of targets or a specific target matching the given\n// request selector.\nrpc GetTarget(GetTargetRequest) returns (GetTargetResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-2",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetTarget\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the invocation ID ",(0,a.jsx)(n.code,{children:"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-response-2",children:"Example cURL response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "target": [\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL3Rvb2xzL3JlcGxheV9hY3Rpb246cmVwbGF5X2FjdGlvbl9saWI"\n      },\n      "label": "//tools/replay_action:replay_action_lib",\n      "status": "BUILT",\n      "ruleType": "go_library",\n      "language": "go"\n    },\n    ...{\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL2VudGVycHJpc2UvYXBwOmNvcHlfYXBwX2J1bmRsZV9zb3VyY2VtYXA"\n      },\n      "label": "//enterprise/app:copy_app_bundle_sourcemap",\n      "status": "BUILT",\n      "ruleType": "genrule"\n    },\n    {\n      "id": {\n        "invocationId": "c7fbfe97-8298-451f-b91d-722ad91632ea",\n        "targetId": "aWQ6OnYxOjovL2VudGVycHJpc2U6YnVpbGRidWRkeQ"\n      },\n      "label": "//enterprise:buildbuddy",\n      "status": "BUILT",\n      "ruleType": "go_binary",\n      "language": "go"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"gettargetrequest",children:"GetTargetRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Request passed into GetTarget\nmessage GetTargetRequest {\n  // The selector defining which target(s) to retrieve.\n  TargetSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 3;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"gettargetresponse",children:"GetTargetResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response from calling GetTarget\nmessage GetTargetResponse {\n  // Targets matching the request invocation, possibly capped by a\n  // server limit.\n  repeated Target target = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"targetselector",children:"TargetSelector"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// The selector used to specify which targets to return.\nmessage TargetSelector {\n  // Required: The Invocation ID.\n  // All actions returned will be scoped to this invocation.\n  string invocation_id = 1;\n\n  // Optional: The Target ID.\n  // If set, only the target with this target id will be returned.\n  string target_id = 2;\n\n  // Optional: Tag\n  // If set, only targets with this tag will be returned.\n  string tag = 3;\n\n  // Optional: The Target label.\n  // If set, only the target with this target label will be returned.\n  string label = 4;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"target",children:"Target"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Each Target represents data for a given target in a given Invocation.\nmessage Target {\n  // The resource ID components that identify the Target.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n\n    // The Target ID.\n    string target_id = 2;\n  }\n\n  // The resource ID components that identify the Target.\n  Id id = 1;\n\n  // The label of the target Ex: //server/test:foo\n  string label = 2;\n\n  // The aggregate status of the target.\n  Status status = 3;\n\n  // When this target started and its duration.\n  Timing timing = 4;\n\n  // The type of the target rule. Ex: java_binary\n  string rule_type = 5;\n\n  // Tags applied to this target (if any).\n  repeated string tag = 6;\n\n  // The language of the target rule. Ex: java, go, sh\n  string language = 7;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"getaction",children:"GetAction"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"GetAction"})," endpoint allows you to fetch actions associated with a given target or invocation. View full ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/action.proto",children:"Action proto"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-3",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/GetAction\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-3",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Retrieves a list of targets or a specific target matching the given\n// request selector.\nrpc GetAction(GetActionRequest) returns (GetActionResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-3",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"selector\": {\"invocation_id\":\"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845\"}}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetAction\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the invocation ID ",(0,a.jsx)(n.code,{children:"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-response-3",children:"Example cURL response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n   "action":[\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovLzpzdGF0aWM",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         }\n      },\n      [...]\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovL2VudGVycHJpc2UvYXBwOnN0eWxl",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         },\n         "file":[\n            {\n               "name":"enterprise/app/style.css",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/e21b1e3411792e17e698be879a3548527d620c65953986c96d5a81f933e776aa/68837",\n               "hash":"e21b1e3411792e17e698be879a3548527d620c65953986c96d5a81f933e776aa",\n               "sizeBytes":68837\n            }\n         ]\n      },\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovLzp2ZXQ",\n            "configurationId":"9a01374ae0e8164eec90f708e7a997520994e71b433a5265c89582c4490d75e9",\n            "actionId":"aWQ6OnYxOjpidWlsZA"\n         },\n         "file":[\n            {\n               "name":"vet_/vet",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/915edf6aca4bd4eac3e4602641b0633a7aaf038d62d5ae087884a2d8acf0926a/7029420",\n               "hash":"915edf6aca4bd4eac3e4602641b0633a7aaf038d62d5ae087884a2d8acf0926a",\n               "sizeBytes":7029420,\n            }\n         ]\n      },\n      {\n         "id":{\n            "invocationId":"c6b2b6de-c7bb-4dd9-b7fd-a530362f0845",\n            "targetId":"aWQ6OnYxOjovL2VudGVycHJpc2Uvc2VydmVyL3Rlc3QvaW50ZWdyYXRpb24vcmVtb3RlX2NhY2hlOnJlbW90ZV9jYWNoZV90ZXN0",\n            "configurationId":"00e90e1ab7325d5e63d03bfe5f808477b2bb66ca6ae9af26c036cae67ee81cf9",\n            "actionId":"aWQ6OnYxOjp0ZXN0LVNfMy1SXzEtQV8x"\n         },\n         "file":[\n            {\n               "name":"test.log",\n               "uri":"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216",\n               "hash":"09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888",\n               "sizeBytes":216\n            }\n         ]\n      }\n   ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getactionrequest",children:"GetActionRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Request passed into GetAction\nmessage GetActionRequest {\n  // The selector defining which action(s) to retrieve.\n  ActionSelector selector = 1;\n\n  // The next_page_token value returned from a previous request, if any.\n  string page_token = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"getactionresponse",children:"GetActionResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response from calling GetAction\nmessage GetActionResponse {\n  // Actions matching the request, possibly capped a server limit.\n  repeated Action action = 1;\n\n  // Token to retrieve the next page of results, or empty if there are no\n  // more results in the list.\n  string next_page_token = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"actionselector",children:"ActionSelector"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// The selector used to specify which actions to return.\nmessage ActionSelector {\n  // Required: The Invocation ID.\n  // All actions returned will be scoped to this invocation.\n  string invocation_id = 1;\n\n  // Optional: The Target ID.\n  // If set, all actions returned will be scoped to this target.\n  string target_id = 2;\n\n  // Optional: The Configuration ID.\n  // If set, all actions returned will be scoped to this configuration.\n  string configuration_id = 3;\n\n  // Optional: The Action ID.\n  // If set, only the action with this action id will be returned.\n  string action_id = 4;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"action",children:"Action"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// An action that happened as part of a configured target. This action could be\n// a build, a test, or another type of action.\nmessage Action {\n  // The resource ID components that identify the Action.\n  message Id {\n    // The Invocation ID.\n    string invocation_id = 1;\n\n    // The Target ID.\n    string target_id = 2;\n\n    // The Configuration ID.\n    string configuration_id = 3;\n\n    // The Action ID.\n    string action_id = 4;\n  }\n\n  // The resource ID components that identify the Action.\n  Id id = 1;\n\n  // A list of file references for action level files.\n  repeated File file = 2;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"getfile",children:"GetFile"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"GetFile"})," endpoint allows you to fetch files associated with a given url. View full ",(0,a.jsx)(n.a,{href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/proto/api/v1/file.proto",children:"File proto"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-4",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/GetFile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-4",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Streams the File with the given uri.\n// - Over gRPC returns a stream of bytes to be stitched together in order.\n// - Over HTTP this simply returns the requested file.\nrpc GetFile(GetFileRequest) returns (stream GetFileResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-4",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"uri\":\"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\"}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/GetFile\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the file uri ",(0,a.jsx)(n.code,{children:"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-response-4",children:"Example cURL response"}),"\n",(0,a.jsx)(n.p,{children:"The file contents."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'exec ${PAGER:-/usr/bin/less} "$0" || exit 1\nExecuting tests from //enterprise/server/test/integration/remote_cache:remote_cache_test\n-----------------------------------------------------------------------------\nPASS\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getfilerequest",children:"GetFileRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:'// Request object for GetFile\nmessage GetFileRequest {\n  // File URI corresponding to the `uri` field in the File message.\n  //\n  // If the BuildBuddy instance supports ZSTD transcoding, the literal string\n  // "/blobs/" in the URI (third-to-last path segment) may be replaced with\n  // "/compressed-blobs/zstd/", and the server will return a compressed payload.\n  //\n  // Examples:\n  // * Uncompressed blob with remote instance name of "ci":\n  //   bytestream://remote.buildbuddy.io/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\n  //\n  // * zstd-compressed blob with no remote instance name:\n  //   bytestream://remote.buildbuddy.io/compressed-blobs/zstd/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\n  string uri = 1;\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"getfileresponse",children:"GetFileResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response object for GetFile\nmessage GetFileResponse {\n  // The file data.\n  bytes data = 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"file",children:"File"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// A file associated with a BuildBuddy build.\nmessage File {\n  string name = 1;\n  string uri = 2;\n  string hash = 3;\n  int64 size_bytes = 4;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"deletefile",children:"DeleteFile"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"DeleteFile"})," endpoint allows you to delete a specific cache entry, which is associated with a uri.\nThis can be used to address cache poisoning."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-5",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/DeleteFile\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-5",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Delete the File with the given uri.\nrpc DeleteFile(DeleteFileRequest) returns (DeleteFileResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-5",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -d '{\"uri\":\"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216\"}' \\\n  -H 'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  https://app.buildbuddy.io/api/v1/DeleteFile\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure to replace ",(0,a.jsx)(n.code,{children:"YOUR_BUILDBUDDY_API_KEY"})," and the file uri ",(0,a.jsx)(n.code,{children:"bytestream://remote.buildbuddy.io/buildbuddy-io/buildbuddy-internal/ci/blobs/09e6fe6e1fd8c8734339a0a84c3c7a0eb121b57a45d21cfeb1f265bffe4c4888/216"})," with your own values."]}),"\n",(0,a.jsx)(n.h3,{id:"deletefilerequest",children:"DeleteFileRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Request object for DeleteFile\nmessage DeleteFileRequest {\n  // URI of file to delete.\n  //\n  // CAS URI format:\n  // <instance_name>/<blobs|compressed-blobs/zstd>/<digest_hash>/<digest_size>\n  // Action cache URI format:\n  // <instance_name>/<blobs|compressed-blobs/zstd>/ac/<digest_hash>/<digest_size>\n  //\n  // Examples:\n  // * CAS artifact:\n  //   compressed-blobs/zstd/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * CAS artifact with remote_instance_name\n  //   my_remote_instance_name/blobs/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * Action cache artifact:\n  //   blobs/ac/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  //\n  // * Action cache artifact with remote_instance_name\n  //   my_remote_instance_name/blobs/ac/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/2084\n  string uri = 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"deletefileresponse",children:"DeleteFileResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"// Response object for DeleteFile\nmessage DeleteFileResponse {}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"executeworkflow",children:"ExecuteWorkflow"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ExecuteWorkflow"})," endpoint lets you trigger a Buildbuddy Workflow for the given repository and branch."]}),"\n",(0,a.jsxs)(n.p,{children:["Note: Github App authentication is required. The API does not support running legacy workflows. See\n",(0,a.jsx)(n.a,{href:"https://www.buildbuddy.io/docs/workflows-setup/",children:"https://www.buildbuddy.io/docs/workflows-setup/"})," for more information on how to setup workflows with\nGithub App authentication."]}),"\n",(0,a.jsx)(n.h3,{id:"endpoint-6",children:"Endpoint"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"https://app.buildbuddy.io/api/v1/ExecuteWorkflow\n"})}),"\n",(0,a.jsx)(n.h3,{id:"service-6",children:"Service"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:"rpc ExecuteWorkflow(ExecuteWorkflowRequest) returns (ExecuteWorkflowResponse);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-curl-request-6",children:"Example cURL request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -d \'{"repo_url":"https://github.com/buildbuddy-io/buildbuddy-ci-playground", "ref": "main", "action_names": ["Build and test (Mac M1)"]}\' \\\n  -H \'x-buildbuddy-api-key: YOUR_BUILDBUDDY_API_KEY\' \\\n  -H \'Content-Type: application/json\' \\\n  https://app.buildbuddy.io/api/v1/ExecuteWorkflow\n'})}),"\n",(0,a.jsx)(n.h3,{id:"executeworkflowrequest",children:"ExecuteWorkflowRequest"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:'message ExecuteWorkflowRequest {\n  // URL of the repo the workflow is running for\n  // Ex. "https://github.com/some-user/acme"\n  string repo_url = 1;\n  // Reference for where the workflow should be run (currently only branch names\n  // are supported) Ex. "cool-feature" or "main"\n  string ref = 2;\n\n  // OPTIONAL FIELDS\n\n  // Names of the workflow actions to execute. Correspond to actions\n  // in buildbuddy.yaml, or actions in the default workflow config if\n  // buildbuddy.yaml is missing from the repo.\n  //\n  // If this is not set, will execute all actions in the workflow config.\n  //\n  // Ex. ["Browser Tests", "Docker tests"]\n  repeated string action_names = 3;\n  // Whether to run the workflow in a clean container. This prevents all\n  // existing workflow containers from being reused, so using this flag is not\n  // encouraged.\n  bool clean = 4;\n  // VISIBILITY build metadata used for the workflow invocation.\n  // Workflow invocations are private by default, but this can be\n  // set to "PUBLIC" to make the workflow invocation public.\n  string visibility = 5;\n  // If true, start the workflow but do not wait for the status to be returned.\n  bool async = 6;\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"executeworkflowresponse",children:"ExecuteWorkflowResponse"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-protobuf",children:'message ExecuteWorkflowResponse {\n  message ActionStatus {\n    // Corresponds to an action in buildbuddy.yaml, or an action name in the\n    // default workflow config if buildbuddy.yaml is missing from the repo. Ex.\n    // "Test all targets"\n    string action_name = 1;\n\n    // The BuildBuddy invocation ID from executing the action.\n    string invocation_id = 2;\n\n    // The gRPC status from executing the action, or from starting the action if\n    // async is true.\n    google.rpc.Status status = 3;\n  }\n\n  // A list of the actions executed by the API, or actions started if async is\n  // true.\n  repeated ActionStatus action_statuses = 1;\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);