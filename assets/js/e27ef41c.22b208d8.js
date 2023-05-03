"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[133],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return b}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),p=n,b=c["".concat(l,".").concat(p)]||c[p]||h[p]||r;return o?a.createElement(b,i(i({ref:t},d),{},{components:o})):a.createElement(b,i({ref:t},d))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},92671:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=o(83117),n=o(80102),r=(o(67294),o(3905)),i=["components"],s={slug:"distributed-scheduling-for-faster-builds",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",author:"Tyler Williams",author_title:"Co-founder @ BuildBuddy",date:"2022-04-07:08:00:00",author_url:"https://www.linkedin.com/in/tyler-williams-80480519b/",author_image_url:"https://avatars.githubusercontent.com/u/141737?v=4",image:"/img/distributed-scheduling.png",tags:["engineering","go","sparrow","scheduler"]},l=void 0,u={permalink:"/blog/distributed-scheduling-for-faster-builds",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/distributed-scheduling-for-faster-builds.md",source:"@site/blog/distributed-scheduling-for-faster-builds.md",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",date:"2022-04-07T08:00:00.000Z",formattedDate:"April 7, 2022",tags:[{label:"engineering",permalink:"/blog/tags/engineering"},{label:"go",permalink:"/blog/tags/go"},{label:"sparrow",permalink:"/blog/tags/sparrow"},{label:"scheduler",permalink:"/blog/tags/scheduler"}],readingTime:6.145,hasTruncateMarker:!0,authors:[{name:"Tyler Williams",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/tyler-williams-80480519b/",imageURL:"https://avatars.githubusercontent.com/u/141737?v=4"}],frontMatter:{slug:"distributed-scheduling-for-faster-builds",title:"Distributed Scheduling for Faster Builds",description:"The distributed scheduler that powers BuildBuddy remote execution",author:"Tyler Williams",author_title:"Co-founder @ BuildBuddy",date:"2022-04-07:08:00:00",author_url:"https://www.linkedin.com/in/tyler-williams-80480519b/",author_image_url:"https://avatars.githubusercontent.com/u/141737?v=4",image:"/img/distributed-scheduling.png",tags:["engineering","go","sparrow","scheduler"]},prevItem:{title:"Bazel Remote Cache Debugging",permalink:"/blog/bazel-remote-cache-debugging"},nextItem:{title:"Meet rules_xcodeproj",permalink:"/blog/meet-rules_xcodeproj"}},d={authorsImageUrls:[void 0]},c=[],h={toc:c},p="wrapper";function b(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(p,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's start with \"what's BuildBuddy\" for the kids in back. In short, we provide a UI, distributed cache, and remote execution platform for your Bazel builds. That means we securely compile your code, cache the artifacts, and help you visualize the results. We make it possible to build projects like Tensorflow from your laptop in under 5 minutes instead of 90 minutes."),(0,r.kt)("p",null,"Obviously to do all this, we have to handle some thorny engineering challenges, one of which is scheduling remote executions. For that, we have a scheduler. The scheduler just matches actions (basically jobs) received by our API to remote workers that actually do the work. If you think of a full build of something like Tensorflow as a 10 course meal, a single action is like a recipe for a tiny part of that meal. To make it easier to visualize, here's a real action from building BuildBuddy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# this action just uses gcc to compile zlib/infback.c into an object file, zlib/infback.o\n/usr/bin/gcc -U_FORTIFY_SOURCE -fstack-protector -Wall -Wunused-but-set-parameter \\\n  -Wno-free-nonheap-object -fno-omit-frame-pointer -g0 -O2 -D_FORTIFY_SOURCE=1 \\\n  -DNDEBUG -ffunction-sections -fdata-sections -MD -MF \\\n  bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.d \\\n  -frandom-seed=bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.o \\\n  -iquote external/zlib -iquote bazel-out/k8-opt-exec-34F00540/bin/external/zlib \\\n  -isystem external/zlib/zlib/include \\\n  -isystem bazel-out/k8-opt-exec-34F00540/bin/external/zlib/zlib/include -g0 \\\n  -Wno-unused-variable -Wno-implicit-function-declaration -fno-canonical-system-headers \\\n  -Wno-builtin-macro-redefined -D__DATE__="redacted" -D__TIMESTAMP__="redacted" \\\n  -D__TIME__="redacted" -c external/zlib/infback.c -o \\\n  bazel-out/k8-opt-exec-34F00540/bin/external/zlib/_objs/zlib/infback.o\n')),(0,r.kt)("p",null,"And here's another:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# this action uses protobufjs to generate typescript bindings for a protobuf file\nbazel-out/host/bin/external/npm/protobufjs/bin/pbts.sh\n--out=bazel-out/k8-fastbuild/bin/proto/buildbuddy_service_ts_proto.d.ts\nbazel-out/k8-fastbuild/bin/proto/buildbuddy_service_ts_proto.js\n--bazel_node_modules_manifest=bazel-out/k8-fastbuild/bin/proto/__buildbuddy_service_ts_proto_pbts.module_mappings.json\n")),(0,r.kt)("p",null,"So you get the idea, building a binary involves compiling and linking many different libraries etc and a single action is usually one of those commands. Great."),(0,r.kt)("p",null,"So let's say we have hundreds or thousands of these actions hitting our API at a time, and a pool of remote workers ready to run them. Let's get to it. If you're like me, your first thought here is ",(0,r.kt)("em",{parentName:"p"},"load balancer"),". I mean, why not? These are just requests that need to get to a pool of machines, and load balancers are a really common, well understood way to do this."),(0,r.kt)("p",null,"In the very early days, this is what we did. We ran nginx in front of a pool of executors. And it kind of worked! But the results were... lumpy. In a typical web application, most requests served by load balancers are pretty homogeneous. They are static file lookups or simple page actions that all usually take under a second to serve. But our requests were very heterogenous: the fastest ones were simple gcc compile commands that generated a single object file and could finish in 10s of milliseconds. The slowest ones were gigantic slow link statements that required every single object file and took 30+ seconds to link. Or even worse, test actions that ran a unit test binary and took 30+ minutes to run."),(0,r.kt)("p",null,"What happened is that the load balancer would assign tasks in a round robin fashion and put two large tasks on the same worker, while other workers were sitting there idle, and the build would take much longer than it should."),(0,r.kt)("p",null,"I should mention that I really wanted this to work, because I didn't want to write a scheduler. It seemed complex and risky. I would much rather use something simple and well tested than build a custom critical piece of infrastructure like a scheduler. In fact I went through all kinds of machinations to avoid doing this, from using different load balancing techniques like least loaded or exponential weighted moving average (EWMA) to trying to split the work into multiple load balancer targets, to using the Kubernetes scheduler."),(0,r.kt)("p",null,"And in the end, nothing worked well. The core reason a load balancer was such a poor fit here is that it didn't know the size of the requests it was routing. It seemed possible to give the load balancer some hints about this, but it would have meant writing our own load balancing algorithm, or relying on a very complex routing configuration. Neither option sounded appealing, and both negated my whole rationale for using a load balancer in the first place, namely that they are fast and easy."),(0,r.kt)("p",null,"So I went and did some reading about schedulers, and found this really lovely paper ",(0,r.kt)("a",{parentName:"p",href:"https://cs.stanford.edu/~matei/papers/2013/sosp_sparrow.pdf"},"https://cs.stanford.edu/~matei/papers/2013/sosp_sparrow.pdf")," about a distributed scheduler called Sparrow. This paper is great because it's short and clearly written, and it talks about some cool ideas. The biggest idea is the power of two choices."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.eecs.harvard.edu/~michaelm/postscripts/mythesis.pdf"},"The Power of Two Choices in Randomized Load Balancing")),(0,r.kt)("p",{parentName:"admonition"},"In a typical load balancer, some metrics are kept about how loaded a worker is based on how long it takes to serve a request, and then the load balancer uses those metrics to decide where to assign new requests. The metrics are stale though, being based on past requests, which leads to some non-optimal behavior. A better way to assign requests is just to pick two random workers and assign to the least loaded of the two. This leads to an exponential improvement in the maximum load.")),(0,r.kt)("p",null,"Sparrow modifies two-choices slightly, and also introduces the idea of Late-Binding. In many schedulers, each worker maintains a queue and the scheduler tries to assign work to the worker with the shortest queue. The problem with this, and one of the core reasons it doesn't give good performance on our workloads, is that queue length is not a good indicator of how long a task will take. Late-binding solves this by enqueuing a task on multiple workers, and then the first worker to get to the task takes it. This effectively avoids the problems of huge single tasks blocking other work."),(0,r.kt)("p",null,"Another reason this paper is so great is because the authors actually implemented Sparrow, ported Apache Spark to use it, and then analyzed the results. Side note: I wish more papers were like this! So fun to read."),(0,r.kt)("p",null,"Sparrow is a ",(0,r.kt)("em",{parentName:"p"},"distributed")," scheduling algorithm, so no single node holds the entire state of the world. This is really important for us at BuildBuddy because we want our infrastructure to be resilient. When an API server or backend worker restarts or goes down, for whatever reason, we don't want it to impact customer builds."),(0,r.kt)("p",null,"So with this paper as a basis, I went and implemented Sparrow in Go, which was not nearly as hard as I'd made it out to be. It maybe took a few days, which was far less time than I'd spent trying to find alternative solutions. The lead author of the paper was even happy to help clarify things over email. And when I replaced our load balancer with it, the results were pretty much instantly far better than anything we'd had before. No longer were builds timing out because of unequal load distribution. Even better, due to the distributed nature of the algorithm, we could run our workers on cheap preemptible compute machines that are often restarted and not worry about losing tasks. (These machines are less than half the cost!)"),(0,r.kt)("p",null,"We still use this scheduler in production today, and it's working well for us. We've made some modifications to the way requests are routed, but fundamentally this algorithm is the same one in the paper, the same one powering all remote execution on BuildBuddy today."),(0,r.kt)("p",null,"If you want to learn more about BuildBuddy or try it, check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/introduction/"},"our docs"),". And if you enjoy this kind of problem solving and engineering work, ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/careers/"},"we\u2019re hiring"),"!"))}b.isMDXComponent=!0}}]);