"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3378],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(b,r(r({ref:t},s),{},{components:n})):o.createElement(b,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return s},toc:function(){return p},default:function(){return m}});var o=n(7462),i=n(3366),a=(n(7294),n(4137)),r=["components"],u={slug:"buildbuddy-v1-1-0-release-notes",title:"BuildBuddy v1.1.0 Release Notes",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-07-15:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["product","release-notes"]},l=void 0,d={permalink:"/blog/buildbuddy-v1-1-0-release-notes",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/buildbuddy-v1-1-0-release-notes.md",source:"@site/blog/buildbuddy-v1-1-0-release-notes.md",title:"BuildBuddy v1.1.0 Release Notes",description:"Excited to share that v1.1.0 of BuildBuddy is live on both Cloud Hosted BuildBuddy and open source via Github and Docker!",date:"2020-07-15T12:00:00.000Z",formattedDate:"July 15, 2020",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"release-notes",permalink:"/blog/tags/release-notes"}],readingTime:3.66,truncated:!1,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4"}],prevItem:{title:"BuildBuddy v1.2.1 Release Notes",permalink:"/blog/buildbuddy-v1-2-1-release-notes"},nextItem:{title:"BuildBuddy v1.0.6 Release Notes",permalink:"/blog/buildbuddy-v1-0-6-release-notes"}},s={authorsImageUrls:[void 0]},p=[{value:"<strong>New to Open Source BuildBuddy</strong>",id:"new-to-open-source-buildbuddy",children:[],level:2},{value:"New to Cloud &amp; Enterprise BuildBuddy",id:"new-to-cloud--enterprise-buildbuddy",children:[],level:2}],c={toc:p};function m(e){var t=e.components,u=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Excited to share that v1.1.0 of BuildBuddy is live on both ",(0,a.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud Hosted BuildBuddy")," and open source via ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy"},"Github")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/SETUP.md#docker-image"},"Docker"),"!"),(0,a.kt)("p",null,"Thanks to everyone that has tested open source and cloud-hosted BuildBuddy. We've made lots of improvements in this release based on your feedback."),(0,a.kt)("p",null,"A special thank you to our new contributors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SrodriguezO"},"Sergio Rodriguez Orellana")," who contributed support for making dense mode the default view mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/timgl?lang=en"},"Tim Glaser")," who made some major improvements to our documentation.")),(0,a.kt)("p",null,"Our focus for this release was on our new Remote Build Execution platform. This release marks a huge step in fulfilling our mission of making developers more productive by supporting the Bazel ecosystem."),(0,a.kt)("p",null,"BuildBuddy's Remote Build Execution platform supports executing your Bazel build and tests in parallel across thousands of machines with automatic scaling, support for custom Docker images, and more.\xa0We've been iterating on and testing BuildBuddy RBE\xa0for months with companies of different sizes, and are excited to now make it available to everyone."),(0,a.kt)("p",null,"While BuildBuddy RBE is not yet fully open source, we're offering Cloud RBE for free to individuals and open source projects to show our appreciation to the open source community."),(0,a.kt)("p",null,"We'll be adding more documentation on getting started with BuildBuddy RBE\xa0in the coming weeks, but in the meantime feel free to email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:rbe@buildbuddy.io"},"rbe@buildbuddy.io")," or ping us in the ",(0,a.kt)("a",{parentName:"p",href:"https://join.slack.com/t/buildbuddy/shared_invite/zt-e0cugoo1-GiHaFuzzOYBPQzl9rkUR_g"},"BuildBuddy Slack")," and we'll be happy to help you get started."),(0,a.kt)("h2",{id:"new-to-open-source-buildbuddy"},(0,a.kt)("strong",{parentName:"h2"},"New to Open Source BuildBuddy")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cache & remote execution badges -\xa0"),"BuildBuddy invocations pages now show badges that indicate whether or not caching and remote execution are enabled. Clicking on these badges takes you to instructions on how to configure these if they're enabled for your BuildBuddy instance.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9021).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remote build execution configuration options")," - the BuildBuddy configuration widget has now been updated to enable configuring of remote build execution if it's enabled for your BuildBuddy instance.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4091).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Better build status support")," - BuildBuddy now better distinguishes between in-progress, failed, passed, and cancelled builds with new colorful status indicators, favicons, and more.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3020).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Improved documentation and new website")," - we've completely revamped the BuildBuddy documentation, and it's now sync'd between GitHub and ",(0,a.kt)("a",{parentName:"li",href:"https://buildbuddy.io/docs/"},"buildbuddy.io/docs/"),", so your docs will be fresh regardless of where you're reading them.\xa0We'll be adding new sections on configuring RBE\xa0in the coming weeks. We've also completely revamped the BuildBuddy website to make it easier to navigate and perform actions like requesting a quote, or subscribing to our ",(0,a.kt)("a",{parentName:"li",href:"#wf-form-Newsletter-Form"},"newsletter"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5136).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Test run grid")," - BuildBuddy will now automatically display test runs as a grid when a single test target is run more than 10 times. This supports the use case of finding and fixing flaky tests by running them with ",(0,a.kt)("strong",{parentName:"li"},"--runs_per_test=100"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8560).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Performance and reliability improvements")," - we put a lot of work into improving performance and reliability in this release. This includes changes like better event flushing (no more getting stuck on 15 build events), better shutdown behavior, speed improvements and optimizations in build artifact uploading and downloading, and more.")),(0,a.kt)("p",null,"\u200d"),(0,a.kt)("h2",{id:"new-to-cloud--enterprise-buildbuddy"},"New to Cloud & Enterprise BuildBuddy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Remote Build Execution")," - BuildBuddy Cloud and enterprise on-prem now support Remote Build Execution. Features include custom Docker image support, automatic scaling, multiple caching layers, and more. Additional features like Mac support, viewing of remote build actions in BuildBuddy, and more are coming soon.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5018).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Invocation grouping")," - BuildBuddy invocations can now be grouped by commit and by repo.\xa0These can be populated in one of three ways:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"automatically by common CI\xa0environments like CircleCI and GitHub actions"),(0,a.kt)("li",{parentName:"ol"},"manually by using build flags ",(0,a.kt)("strong",{parentName:"li"},"--build_metadata=REPO_URL=")," and ",(0,a.kt)("strong",{parentName:"li"},"--build_metadata=COMMIT_SHA="),"\u200d"),(0,a.kt)("li",{parentName:"ol"},"by using a ",(0,a.kt)("strong",{parentName:"li"},"--workspace_status_command")," script like ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/workspace_status.sh"},"this one"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4555).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"New cloud endpoint")," - BuildBuddy now exposes a L7 load balanced gRPCS cloud endpoint at ",(0,a.kt)("strong",{parentName:"p"},"cloud.buildbuddy.io")," which can be used for BES, cache, and remote execution (see our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/.bazelrc#L25"},".bazelrc")," for an example).\xa0We'll gradually be migrating users to this from the old events.buildbuddy.io, and cache.buildbuddy.io endpoints with port numbers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Easier enterprise deployment")," - deploying enterprise BuildBuddy is now just as easy as deploying open source BuildBuddy, with a one line install script that deploys to your Kubernetes cluster.\xa0It takes your ",(0,a.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config"},"BuildBuddy configuration file")," as a parameter so you can easily configure things to your needs."))),(0,a.kt)("p",null,"That's it for this release. Stay tuned for more updates coming soon!"),(0,a.kt)("p",null,"As always, we love your feedback - email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," with any questions, comments, or thoughts."))}m.isMDXComponent=!0},9021:function(e,t,n){t.Z=n.p+"assets/images/cache-badge-2c38a521bbb47b4240f5016ae47e7a42.png"},4555:function(e,t,n){t.Z=n.p+"assets/images/commits-67300a39792504155c47b2449cb56778.png"},4091:function(e,t,n){t.Z=n.p+"assets/images/config-options-f6eddae01c7327f660d86cc302e51096.png"},5136:function(e,t,n){t.Z=n.p+"assets/images/docs-333e2f9bf7a699f717bae58b936b06d0.png"},3020:function(e,t,n){t.Z=n.p+"assets/images/favicon-37b6e558a8c93c2773a11d1051f95231.png"},5018:function(e,t,n){t.Z=n.p+"assets/images/rbe-63771a45e6865e1125e29a41c7d9bc6e.png"},8560:function(e,t,n){t.Z=n.p+"assets/images/test-runs-035a2816fbde63e269214936ef4a7a14.png"}}]);