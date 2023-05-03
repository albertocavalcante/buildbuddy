"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3084],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return r?n.createElement(b,a(a({ref:t},d),{},{components:r})):n.createElement(b,a({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91884:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],u={slug:"meet-buildbuddy",title:"Meet BuildBuddy",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-03-04:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["company","product"]},l=void 0,s={permalink:"/blog/meet-buildbuddy",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/meet-buildbuddy.md",source:"@site/blog/meet-buildbuddy.md",title:"Meet BuildBuddy",description:"BuildBuddy is a managed Bazel build system --- it brings a Google-style development environment to any company in minutes.",date:"2020-03-04T12:00:00.000Z",formattedDate:"March 4, 2020",tags:[{label:"company",permalink:"/blog/tags/company"},{label:"product",permalink:"/blog/tags/product"}],readingTime:1.085,hasTruncateMarker:!1,authors:[{name:"Siggi Simonarson",title:"Co-founder @ BuildBuddy",url:"https://www.linkedin.com/in/siggisim/",imageURL:"https://avatars.githubusercontent.com/u/1704556?v=4"}],frontMatter:{slug:"meet-buildbuddy",title:"Meet BuildBuddy",author:"Siggi Simonarson",author_title:"Co-founder @ BuildBuddy",date:"2020-03-04:12:00:00",author_url:"https://www.linkedin.com/in/siggisim/",author_image_url:"https://avatars.githubusercontent.com/u/1704556?v=4",tags:["company","product"]},prevItem:{title:"BuildBuddy joins Y Combinator",permalink:"/blog/buildbuddy-joins-y-combinator"}},d={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BuildBuddy is a managed ",(0,i.kt)("a",{parentName:"p",href:"https://bazel.build/"},"Bazel")," build system --- it brings a Google-style development environment to any company in minutes."),(0,i.kt)("p",null,"The first product we've built is an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-core_model"},"open-core")," Bazel build log viewer. It consumes the Bazel ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/build-event-protocol.html"},"build event protocol")," and makes logs accessible through a user-friendly web UI. If you're familiar with ",(0,i.kt)("a",{parentName:"p",href:"https://mike-bland.com/2012/10/01/tools.html#tap-and-sponge"},"Google's Sponge tool")," - it's basically an open source version of that. It's available in 3 forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Open source")," - You can find the core product open source and free to use with an MIT license on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy"},"GitHub"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cloud hosted")," - We also offer a cloud hosted version of the product at ",(0,i.kt)("a",{parentName:"li",href:"https://buildbuddy.io/"},"buildbuddy.io"),". Plans range from a free version for personal use to an enterprise version suited for companies with complex needs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"On-prem")," - We offer an enterprise version of the product that you can run on-premises or in your own cloud. This version comes with all the bells and whistles - like dashboards, user accounts, and dedicated support.")),(0,i.kt)("p",null,"The Bazel build log viewer is just the start. We're working on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/remote-caching.html"},"shared build cache"),", ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/remote-execution.html"},"remote build execution"),", and more."),(0,i.kt)("p",null,"Our end goal is to take the pain out of managing Bazel, so you can focus on building your product."),(0,i.kt)("p",null,"Reach out to us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," if you're interested, we'd love to chat!"))}b.isMDXComponent=!0}}]);