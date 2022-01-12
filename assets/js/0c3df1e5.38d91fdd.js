"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4045],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4938:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return c},default:function(){return h}});var o=n(7462),a=n(3366),i=(n(7294),n(4137)),r=["components"],l={slug:"meet-buildbuddy-workflows",title:"Meet BuildBuddy Workflows",author:"Brandon Duffany",author_title:"Engineer @ BuildBuddy",date:"2021-06-30:12:00:00",author_url:"https://www.linkedin.com/in/brandon-duffany-39b7217a",author_image_url:"https://avatars.githubusercontent.com/u/2414826?v=4",image:"/img/workflows.png",tags:["product"]},s=void 0,u={permalink:"/blog/meet-buildbuddy-workflows",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/meet-buildbuddy-workflows.md",source:"@site/blog/meet-buildbuddy-workflows.md",title:"Meet BuildBuddy Workflows",description:"Traditional CI systems, like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin.",date:"2021-06-30T12:00:00.000Z",formattedDate:"June 30, 2021",tags:[{label:"product",permalink:"/blog/tags/product"}],readingTime:4.66,truncated:!1,authors:[{name:"Brandon Duffany",title:"Engineer @ BuildBuddy",url:"https://www.linkedin.com/in/brandon-duffany-39b7217a",imageURL:"https://avatars.githubusercontent.com/u/2414826?v=4"}],prevItem:{title:"BuildBuddy v2.5.0 Release Notes",permalink:"/blog/buildbuddy-v2-5-0-release-notes"},nextItem:{title:"Introducing BuildBuddy v2",permalink:"/blog/introducing-buildbuddy-v2"}},d={authorsImageUrls:[void 0]},c=[{value:"Introducing a Bazel-focused CI Solution",id:"introducing-a-bazel-focused-ci-solution",children:[],level:2},{value:"How fast are BuildBuddy Workflows?",id:"how-fast-are-buildbuddy-workflows",children:[],level:2},{value:"How did we make BuildBuddy Workflows so fast?",id:"how-did-we-make-buildbuddy-workflows-so-fast",children:[{value:"Fast connection to BuildBuddy RBE",id:"fast-connection-to-buildbuddy-rbe",children:[],level:3},{value:"Hosted, Warm, Bazel instances",id:"hosted-warm-bazel-instances",children:[],level:3}],level:2},{value:"How do I use BuildBuddy Workflows?",id:"how-do-i-use-buildbuddy-workflows",children:[],level:2},{value:"Other changes in BuildBuddy v2.3",id:"other-changes-in-buildbuddy-v23",children:[{value:"Dependency graph visualization",id:"dependency-graph-visualization",children:[],level:3},{value:"Clickable RBE Actions",id:"clickable-rbe-actions",children:[],level:3}],level:2}],p={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Traditional ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_integration"},"CI systems"),", like Jenkins, Travis, CircleCI, and BuildKite, are built around the concept of a pipeline. Pipelines allow you to specify a list of build/test steps to run for each commit or pull request to your repo. Pipelines are great because you can run many in parallel across multiple machines. Unfortunately, there are often dependencies between these pipelines, for example a build step that must be completed before a test step can begin."),(0,i.kt)("p",null,"Some tools, like ",(0,i.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/pipelines/"},"GitLab Pipelines"),", attempt to solve this problem by allowing you to specify dependencies between pipelines. This approach is better, but forces you to manually maintain the relationships between pipelines in a pile of YAML configuration files. As the number of dependencies grow, any sufficiently complex CI system ",(0,i.kt)("a",{parentName:"p",href:"https://gregoryszorc.com/blog/2021/04/07/modern-ci-is-too-complex-and-misdirected/"},"starts to resemble a build system"),"."),(0,i.kt)("p",null,"None of these pipeline-based approaches are well suited for Bazel's approach to dependency management and remote build execution, which involves generating a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"Directed Acyclic Graph")," of all build and test actions. Bazel's approach allows for optimal parallelization and caching of these actions. It also enables rebuilding and retesting only affected targets, saving both engineering time and compute resources."),(0,i.kt)("h2",{id:"introducing-a-bazel-focused-ci-solution"},"Introducing a Bazel-focused CI Solution"),(0,i.kt)("p",null,"In today's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/releases/tag/v2.3.0"},"BuildBuddy v2.3 release"),", which is now live on BuildBuddy Cloud, we're launching ",(0,i.kt)("strong",{parentName:"p"},"BuildBuddy Workflows"),". BuildBuddy Workflows is a Continuous Integration (CI) solution for Bazel repositories hosted on GitHub (with support for other providers coming soon)."),(0,i.kt)("p",null,"Like other CI solutions, Workflows give you the confidence that your code\nbuilds successfully and passes all tests before you merge pull requests or\ndeploy a new release."),(0,i.kt)("p",null,"But because BuildBuddy Workflows were built for Bazel repos and tightly\nintegrated with BuildBuddy RBE and Remote Caching, they are ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"really fast")),"."),(0,i.kt)("h2",{id:"how-fast-are-buildbuddy-workflows"},"How fast are BuildBuddy Workflows?"),(0,i.kt)("p",null,"We've used BuildBuddy Workflows on our own repos for the past few\nmonths, comparing them side-by-side with our existing CI solution built on GitHub Actions with BuildBuddy RBE and Remote Caching enabled."),(0,i.kt)("p",null,"By leveraging warm, hosted, Bazel processes, as well as BuildBuddy's\nremote caching and execution, Workflows dramatically sped up our CI runs.\nCompared to our previous solution (which used BuildBuddy RBE and Remote Caching on GitHub Runners), we reduced the median duration by nearly ",(0,i.kt)("strong",{parentName:"p"},"8X")," ","\u2014"," with most CI runs completing in just a few seconds."),(0,i.kt)("p",null,"This overlapping histogram chart shows the complete picture. Note that\nthe majority of BuildBuddy workflow runs took 30 seconds or less, while\nnearly all runs on GitHub Actions took at least 2 minutes and 15 seconds:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overlapping histogram comparing BuildBuddy and GitHub actions",src:n(94).Z})),(0,i.kt)("h2",{id:"how-did-we-make-buildbuddy-workflows-so-fast"},"How did we make BuildBuddy Workflows so fast?"),(0,i.kt)("p",null,"In addition to convenience and security, one of our main goals for Workflows\nwas to maximize performance, even for very large source repositories."),(0,i.kt)("p",null,"We did this in two main ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensuring a ",(0,i.kt)("strong",{parentName:"li"},"fast network connection between Bazel and BuildBuddy's RBE & caching servers"),"."),(0,i.kt)("li",{parentName:"ol"},"Running workflows against ",(0,i.kt)("strong",{parentName:"li"},"hosted, warm, Bazel instances"),".")),(0,i.kt)("h3",{id:"fast-connection-to-buildbuddy-rbe"},"Fast connection to BuildBuddy RBE"),(0,i.kt)("p",null,"In our experience, network latency is often the biggest bottleneck in many Bazel Remote Build Execution and Remote Caching setups."),(0,i.kt)("p",null,"The solution here was simple: run Workflows on executors in the same datacenters where BuildBuddy RBE and Cache nodes are deployed."),(0,i.kt)("p",null,"With GitHub actions or other CI solutions, the network connection might\nbe fast (particularly after the recent network optimizations we made in\n",(0,i.kt)("a",{parentName:"p",href:"/blog/introducing-buildbuddy-v2"},"BuildBuddy v2"),") ","\u2014"," but not nearly as fast\nas having workflow runners on the same local network as BuildBuddy\nitself."),(0,i.kt)("h3",{id:"hosted-warm-bazel-instances"},"Hosted, Warm, Bazel instances"),(0,i.kt)("p",null,"Once you have a sufficiently fast RBE and Remote Caching setup, and have removed network bottlenecks ","\u2014"," the CI bottleneck often becomes Bazel's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/main/glossary.html#analysis-phase"},"analysis phase"),"."),(0,i.kt)("p",null,"By re-using warm Bazel processes when possible, we're able to re-use Bazel's analysis cache across CI runs of the same repo. This can save several minutes per build, depending on the size of your repository and the number of external dependencies being pulled in."),(0,i.kt)("p",null,"This is similar to how ",(0,i.kt)("a",{parentName:"p",href:"https://dl.acm.org/doi/pdf/10.1145/3395363.3397371"},"Google's Build Dequeuing Service")," performs workspace selection:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A well-chosen workspace can increase the build speed by an\norder of magnitude by reusing the various cached results from the\nprevious execution. ","[...]"," We have observed that builds that execute the same targets as a previous\nbuild are effectively no-ops using this technique")),(0,i.kt)("h2",{id:"how-do-i-use-buildbuddy-workflows"},"How do I use BuildBuddy Workflows?"),(0,i.kt)("p",null,"BuildBuddy Workflows are launching today, in Beta, for all GitHub users. You can get started with BuildBuddy Workflows by checking out our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.buildbuddy.io/docs/workflows-setup/"},"setup guide"),".\nIf you've already linked your GitHub account to BuildBuddy, it'll only take\nabout 30 seconds to enable Workflows for your repo ","\u2014"," just select a repo\nto link, and we'll take care of the rest!"),(0,i.kt)("h2",{id:"other-changes-in-buildbuddy-v23"},"Other changes in BuildBuddy v2.3"),(0,i.kt)("p",null,"While the main focus of BuildBuddy v2.3 has been on launching BuildBuddy Workflows, the release also contains several other features, in addition to lots of bug fixes and performance improvements."),(0,i.kt)("h3",{id:"dependency-graph-visualization"},"Dependency graph visualization"),(0,i.kt)("p",null,"We added dependency graph visualizations for ",(0,i.kt)("inlineCode",{parentName:"p"},"bazel query")," commands that use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--output graph")," parameter. This visualization is zoom-able and pan-able, and can render graphs with thousands of edges."),(0,i.kt)("p",null,"Here's an example of a command you can run to generate a graph:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bazel query '//...' --output graph --bes_backend=cloud.buildbuddy.io --bes_results_url=https://app.buildbuddy.io/invocation/\n")),(0,i.kt)("p",null,"And the resulting output:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bazel query dependency graph visualization",src:n(793).Z})),(0,i.kt)("h3",{id:"clickable-rbe-actions"},"Clickable RBE Actions"),(0,i.kt)("p",null,"For actions executed with BuildBuddy Remote Build Execution, you can now click on individual actions to get the full set of command arguments, environment variables, execution metadata, output files, and more:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RBE actions view",src:n(9791).Z})),(0,i.kt)("p",null,"That's it for this release! As always, message us on ",(0,i.kt)("a",{parentName:"p",href:"https://buildbuddy.slack.com"},"Slack")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/issues/new"},"file an issue"),"\nif you need help, run into any issues, or have feature requests!"))}h.isMDXComponent=!0},9791:function(e,t,n){t.Z=n.p+"assets/images/clickable_rbe_actions-b84f3ec0c36dc979c413ba2c5c26c874.png"},793:function(e,t,n){t.Z=n.p+"assets/images/query_graph-ff815911e109abcfc4e56255bebfcdd4.png"},94:function(e,t,n){t.Z=n.p+"assets/images/workflows-5e3a4008b17abce93baa478089e90f9b.png"}}]);