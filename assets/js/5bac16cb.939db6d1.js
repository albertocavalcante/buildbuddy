"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[739],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,f=u["".concat(c,".").concat(b)]||u[b]||p[b]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},20346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"config-database",title:"Database Configuration",sidebar_label:"Database"},c=void 0,d={unversionedId:"config-database",id:"config-database",title:"Database Configuration",description:"Section",source:"@site/../docs/config-database.md",sourceDirName:".",slug:"/config-database",permalink:"/docs/config-database",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-database.md",tags:[],version:"current",lastUpdatedBy:"Son Luong Ngoc",lastUpdatedAt:1683127414,formattedLastUpdatedAt:"May 3, 2023",frontMatter:{id:"config-database",title:"Database Configuration",sidebar_label:"Database"},sidebar:"someSidebar",previous:{title:"App",permalink:"/docs/config-app"},next:{title:"Storage",permalink:"/docs/config-storage"}},l={},u=[{value:"Section",id:"section",level:2},{value:"Options",id:"options",level:2},{value:"Example sections",id:"example-sections",level:2},{value:"SQLite",id:"sqlite",level:3},{value:"MySQL",id:"mysql",level:3}],p={toc:u},b="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(b,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"section"},"Section"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"database:")," The database section configures the database that BuildBuddy stores metadata in. ",(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Required")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data_source")," This is a connection string used by the database driver to connect to the database. MySQL and SQLite databases are supported.")),(0,o.kt)("h2",{id:"example-sections"},"Example sections"),(0,o.kt)("h3",{id:"sqlite"},"SQLite"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'database:\n  data_source: "sqlite3:///tmp/buildbuddy.db"\n')),(0,o.kt)("h3",{id:"mysql"},"MySQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'database:\n  data_source: "mysql://buildbuddy_user:pAsSwOrD@tcp(12.34.56.78)/buildbuddy_db"\n')))}f.isMDXComponent=!0}}]);