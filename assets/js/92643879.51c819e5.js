"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,g=f["".concat(u,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},u=void 0,s={unversionedId:"config-flags",id:"config-flags",title:"BuildBuddy Flags",description:"There are several configuration options that are not in the BuildBuddy configuration file. These are:",source:"@site/../docs/config-flags.md",sourceDirName:".",slug:"/config-flags",permalink:"/docs/config-flags",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-flags.md",tags:[],version:"current",lastUpdatedBy:"Iain Macdonald",lastUpdatedAt:1683919206,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{id:"config-flags",title:"BuildBuddy Flags",sidebar_label:"Flags"},sidebar:"someSidebar",previous:{title:"Telemetry",permalink:"/docs/config-telemetry"},next:{title:"All Options",permalink:"/docs/config-all-options"}},c={},f=[{value:"Configuration options as flags",id:"configuration-options-as-flags",level:2}],d={toc:f},p="wrapper";function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several configuration options that are not in the BuildBuddy configuration file. These are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--config_file")," The path to a config.yaml file from which to read configuration options."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--listen")," The interface that BuildBuddy will listen on. Defaults to 0.0.0.0 (all interfaces)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--port")," The port to listen for HTTP traffic on. Defaults to 8080."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--grpc_port")," The port to listen for gRPC traffic on. Defaults to 1985."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--monitoring_port")," The port to listen for Prometheus metrics requests on. Defaults to 9090.")),(0,a.kt)("h2",{id:"configuration-options-as-flags"},"Configuration options as flags"),(0,a.kt)("p",null,"Additionally any ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"configuration option")," can also be specified as a flag instead using dot notation."),(0,a.kt)("p",null,"For example the following configuration option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'database:\n  data_source: "mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n')),(0,a.kt)("p",null,"Would be specified as a flag like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--database.data_source="mysql://user:password@tcp(12.34.56.78)/buildbuddy_db"\n')))}g.isMDXComponent=!0}}]);