"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4566],{4137:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return r?o.createElement(m,l(l({ref:t},d),{},{components:r})):o.createElement(m,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8163:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(4137)),l=["components"],a={id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},c=void 0,u={unversionedId:"troubleshooting-rbe",id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",description:"Remote connection/protocol failed with: execution failed",source:"@site/../docs/troubleshooting-rbe.md",sourceDirName:".",slug:"/troubleshooting-rbe",permalink:"/docs/troubleshooting-rbe",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/troubleshooting-rbe.md",tags:[],version:"current",lastUpdatedBy:"Maggie Lou",lastUpdatedAt:1682536029,formattedLastUpdatedAt:"4/26/2023",frontMatter:{id:"troubleshooting-rbe",title:"Troubleshooting RBE Failures",sidebar_label:"RBE Failures"},sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Slow Uploads",permalink:"/docs/troubleshooting-slow-upload"}},d=[{value:"Remote connection/protocol failed with: execution failed",id:"remote-connectionprotocol-failed-with-execution-failed",children:[],level:2},{value:"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns",id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns",children:[],level:2},{value:"exec user process caused &quot;exec format error&quot;",id:"exec-user-process-caused-exec-format-error",children:[],level:2},{value:"rpc error: code = Unavailable desc = No registered executors.",id:"rpc-error-code--unavailable-desc--no-registered-executors",children:[],level:2}],s={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"remote-connectionprotocol-failed-with-execution-failed"},"Remote connection/protocol failed with: execution failed"),(0,i.kt)("p",null,"This error is often a sign that a cache write is timing out. By default, bazel's ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_timeout")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"flag")," limits all remote execution calls to 60 seconds."),(0,i.kt)("p",null,"We recommend using the following flag to increase this remote timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--remote_timeout=600\n")),(0,i.kt)("p",null,"These expensive writes should only happen once when artifacts are initially written to the cache, and shouldn't happen on subsequent builds."),(0,i.kt)("h2",{id:"remote-connectionprotocol-failed-with-execution-failed-deadline_exceeded-deadline-exceeded-after-59999899500ns"},"Remote connection/protocol failed with: execution failed DEADLINE_EXCEEDED: deadline exceeded after 59999899500ns"),(0,i.kt)("p",null,"This error is a sign that a cache write is timing out. By default, bazel's ",(0,i.kt)("inlineCode",{parentName:"p"},"remote_timeout")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#flag--remote_timeout"},"flag")," limits all remote execution calls to 60 seconds."),(0,i.kt)("p",null,"We recommend using the following flag to increase this remote timeout:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--remote_timeout=600\n")),(0,i.kt)("h2",{id:"exec-user-process-caused-exec-format-error"},'exec user process caused "exec format error"'),(0,i.kt)("p",null,"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."),(0,i.kt)("p",null,"If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.kt)("a",{parentName:"p",href:"/request-demo/"},"contact our sales team"),"."),(0,i.kt)("h2",{id:"rpc-error-code--unavailable-desc--no-registered-executors"},"rpc error: code = Unavailable desc = No registered executors."),(0,i.kt)("p",null,"This error occurs when your build is configured for darwin (Mac OSX) CPUs, but attempting to run on Linux executors. Mac executors are not included in BuildBuddy Cloud's free-tier offering."),(0,i.kt)("p",null,"If you'd like to add Mac executors to your BuildBuddy Cloud account, please ",(0,i.kt)("a",{parentName:"p",href:"/request-demo/"},"contact our sales team"),"."))}p.isMDXComponent=!0}}]);