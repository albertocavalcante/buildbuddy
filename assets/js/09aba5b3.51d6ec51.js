"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1616],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,b=c["".concat(l,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,i[1]=u;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88178:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],u={id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},l=void 0,d={unversionedId:"cloud",id:"cloud",title:"Cloud Quickstart",description:"Cloud BuildBuddy is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more.",source:"@site/../docs/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/cloud",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cloud.md",tags:[],version:"current",lastUpdatedBy:"Vadim Berezniker",lastUpdatedAt:1684457135,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{id:"cloud",title:"Cloud Quickstart",sidebar_label:"Cloud Quickstart"},sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"On-prem Quickstart",permalink:"/docs/on-prem"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Verifying your installation",id:"verifying-your-installation",level:2},{value:"Authentication",id:"authentication",level:2},{value:"More features",id:"more-features",level:2}],p={toc:c},f="wrapper";function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"Cloud BuildBuddy")," is a fully managed SaaS solution for Enterprise Bazel features. It provides a results store & UI, remote build caching, remote build execution, and more."),(0,a.kt)("p",null,"It's easy to get set up and is free for individuals and open source projects. For companies, we offer an ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise"},"Enterprise")," version of BuildBuddy that contains advanced features like OIDC Auth, API access, and more."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To use BuildBuddy's Results UI, you just need to configure Bazel to send build events to our cloud BuildBuddy instance. The easiest way to do this is with a ",(0,a.kt)("inlineCode",{parentName:"p"},".bazelrc")," file in the root of your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"build --bes_results_url=https://app.buildbuddy.io/invocation/\nbuild --bes_backend=grpcs://remote.buildbuddy.io\n")),(0,a.kt)("p",null,"That's it, 2 lines and you're up and running. For more advanced configurations, see the ",(0,a.kt)("a",{parentName:"p",href:"#authentication"},"Authentication")," and ",(0,a.kt)("a",{parentName:"p",href:"#more-features"},"More features")," sections below."),(0,a.kt)("h2",{id:"verifying-your-installation"},"Verifying your installation"),(0,a.kt)("p",null,"Now, when you build or test with Bazel, it will print a url where you can view your build or test results. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tylerw@lunchbox:~/buildbuddy-io/buildbuddy$ bazel build server:all\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Analyzed 13 targets (0 packages loaded, 0 targets configured).\nINFO: Found 13 targets...\nINFO: Elapsed time: 0.212s, Critical Path: 0.01s\nINFO: 0 processes.\nINFO: Streaming build results to: https://app.buildbuddy.io/invocation/24a37b8f-4cf2-4909-9522-3cc91d2ebfc4\nINFO: Build completed successfully, 1 total action\n")),(0,a.kt)("p",null,"You can \u2318 + double-click on these urls to quickly view the invocation's details."),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"BuildBuddy Cloud offers three authentication options which are easy to configure on BuildBuddy Cloud:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Unauthenticated")," - your build logs are uploaded over an encrypted gRPCS/TLS connection and be accessible with anyone you share your BuildBuddy URL with, without credentials. They will not be associated with any BuildBuddy account or organization."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API key based auth")," - your build logs are uploaded over an encrypted gRPCS/TLS connection, and will be associated with your account. Only your account and members of your BuildBuddy organization will be able to view your build logs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Certificate based auth")," - your build logs are uploaded over an encrypted ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mTLS")," (mutual TLS) connection. Only your account and members of your BuildBuddy organization will be able to view your build logs.")),(0,a.kt)("p",null,"To configure one of these authentication methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/"},"Create")," a BuildBuddy account."),(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/docs/setup"},"Quickstart page")," which will now contain authentication options.")),(0,a.kt)("p",null,"For more information see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide-auth"},"Authentication Guide"),"."),(0,a.kt)("h2",{id:"more-features"},"More features"),(0,a.kt)("p",null,"For instructions on how to configure additional BuildBuddy features like Remote Build Caching, Remote Build Execution, and more:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/"},"Create")," a BuildBuddy account."),(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://app.buildbuddy.io/docs/setup"},"Quickstart page")," which has instructions on enabling Remote Build Cache, Remote Build Execution, and more.")),(0,a.kt)("p",null,"For more information on getting started with Remote Build Execution, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/rbe-setup"},"RBE setup docs"),"."))}b.isMDXComponent=!0}}]);