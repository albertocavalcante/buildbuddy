"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[8719],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||u;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=r.length,o=new Array(u);o[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45558:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return d}});var n=r(83117),i=r(80102),u=(r(67294),r(3905)),o=["components"],a={id:"enterprise",title:"Enterprise Overview",sidebar_label:"BuildBuddy Enterprise"},l=void 0,s={unversionedId:"enterprise",id:"enterprise",title:"Enterprise Overview",description:"We offer an enterprise version of BuildBuddy targeted at companies who need advanced features and enterprise level support.",source:"@site/../docs/enterprise.md",sourceDirName:".",slug:"/enterprise",permalink:"/docs/enterprise",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise.md",tags:[],version:"current",lastUpdatedBy:"Lulu Zhang",lastUpdatedAt:1686237411,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{id:"enterprise",title:"Enterprise Overview",sidebar_label:"BuildBuddy Enterprise"},sidebar:"someSidebar",previous:{title:"Slow Uploads",permalink:"/docs/troubleshooting-slow-upload"},next:{title:"Enterprise On-prem Setup",permalink:"/docs/enterprise-setup"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Cloud setup",id:"cloud-setup",level:2},{value:"On-prem setup",id:"on-prem-setup",level:2}],c={toc:d},f="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,u.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"We offer an enterprise version of BuildBuddy targeted at companies who need advanced features and enterprise level support."),(0,u.kt)("p",null,"Enterprise BuildBuddy is available both as a fully-managed cloud hosted solution, or as an on-prem deployment."),(0,u.kt)("h2",{id:"features"},"Features"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"OpenID Connect auth support that integrates with Okta, GSuite, Auth0, and more"),(0,u.kt)("li",{parentName:"ul"},"BuildBuddy API for programatic access to your build results"),(0,u.kt)("li",{parentName:"ul"},"Remote Build Execution with support for custom Docker images"),(0,u.kt)("li",{parentName:"ul"},"Configurable TTL for build results and cache with support for persistent build artifact storage"),(0,u.kt)("li",{parentName:"ul"},"High availability (HA) configurations"),(0,u.kt)("li",{parentName:"ul"},"Horizontal scaling with Kubernetes HPA"),(0,u.kt)("li",{parentName:"ul"},"Enterprise grade support and uptime")),(0,u.kt)("p",null,"For a full feature breakdown, check out our ",(0,u.kt)("a",{parentName:"p",href:"https://buildbuddy.io/pricing"},"pricing page"),"."),(0,u.kt)("h2",{id:"getting-started"},"Getting started"),(0,u.kt)("p",null,"To get started with BuildBuddy Enterprise, ",(0,u.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/request-quote"},"request a quote"),"."),(0,u.kt)("h2",{id:"cloud-setup"},"Cloud setup"),(0,u.kt)("p",null,"Getting started with BuildBuddy Enterprise Cloud is as easy as logging into your ",(0,u.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"BuildBuddy account"),", and following the Quickstart instructions once BuildBuddy Enterprise has been enabled for your account."),(0,u.kt)("h2",{id:"on-prem-setup"},"On-prem setup"),(0,u.kt)("p",null,"Once you've received your BuildBuddy Enterprise license, you can configure your BuildBuddy Enterprise on-prem installation by following our ",(0,u.kt)("a",{parentName:"p",href:"/docs/enterprise-setup"},"Enterprise Getting Started docs "),"."))}m.isMDXComponent=!0}}]);