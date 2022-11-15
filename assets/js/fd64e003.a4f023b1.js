/*! For license information please see fd64e003.a4f023b1.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4339],{2525:function(e){var t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,l){for(var a,u,i=n(e),c=1;c<arguments.length;c++){for(var p in a=Object(arguments[c]))o.call(a,p)&&(i[p]=a[p]);if(t){u=t(a);for(var s=0;s<u.length;s++)r.call(a,u[s])&&(i[u[s]]=a[u[s]])}}return i}},1535:function(e,t,o){var r=o(2525),n="function"==typeof Symbol&&Symbol.for,l=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,p=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function k(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||g}function w(){}function x(e,t,o){this.props=e,this.context=t,this.refs=v,this.updater=o||g}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=k.prototype;var O=x.prototype=new w;O.constructor=x,r(O,k.prototype),O.isPureReactComponent=!0;var j={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,n={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)P.call(t,r)&&!_.hasOwnProperty(r)&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=o;else if(1<i){for(var c=Array(i),p=0;p<i;p++)c[p]=arguments[p+2];n.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:l,type:e,key:a,ref:u,props:n,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var B=/\/+/g,N=[];function C(e,t,o,r){if(N.length){var n=N.pop();return n.result=e,n.keyPrefix=t,n.func=o,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:o,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function T(e,t,o,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var u=!1;if(null===e)u=!0;else switch(n){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case l:case a:u=!0}}if(u)return o(r,e,""===t?"."+U(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var c=t+U(n=e[i],i);u+=T(n,c,o,r)}else if(null===e||"object"!=typeof e?c=null:c="function"==typeof(c=h&&e[h]||e["@@iterator"])?c:null,"function"==typeof c)for(e=c.call(e),i=0;!(n=e.next()).done;)u+=T(n=n.value,c=t+U(n,i++),o,r);else if("object"===n)throw o=""+e,Error(b(31,"[object Object]"===o?"object with keys {"+Object.keys(e).join(", ")+"}":o,""));return u}function D(e,t,o){return null==e?0:T(e,"",t,o)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,o){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,o,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(B,"$&/")+"/")+o)),r.push(e))}function q(e,t,o,r,n){var l="";null!=o&&(l=(""+o).replace(B,"$&/")+"/"),D(e,I,t=C(t,l,r,n)),R(t)}var A={current:null};function M(){var e=A.current;if(null===e)throw Error(b(321));return e}},7378:function(e,t,o){o(1535)},4137:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,y=f["".concat(i,".").concat(d)]||f[d]||s[d]||l;return o?r.createElement(y,a(a({ref:t},p),{},{components:o})):r.createElement(y,a({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var c=2;c<l;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},9299:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=o(7462),n=o(3366),l=(o(7378),o(4137)),a=["components"],u={id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},i=void 0,c={unversionedId:"rbe-pools",id:"rbe-pools",title:"RBE Executor Pools",description:"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture).",source:"@site/../docs/rbe-pools.md",sourceDirName:".",slug:"/rbe-pools",permalink:"/docs/rbe-pools",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-pools.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1668547571,formattedLastUpdatedAt:"11/15/2022",frontMatter:{id:"rbe-pools",title:"RBE Executor Pools",sidebar_label:"RBE Executor Pools"},sidebar:"someSidebar",previous:{title:"RBE with GitHub Actions",permalink:"/docs/rbe-github-actions"},next:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"}},p=[{value:"Deploying executors in a pool",id:"deploying-executors-in-a-pool",children:[],level:2},{value:"Setting the app&#39;s default pool name",id:"setting-the-apps-default-pool-name",children:[],level:2},{value:"Selecting a pool to run your builds on",id:"selecting-a-pool-to-run-your-builds-on",children:[{value:"Platform level",id:"platform-level",children:[],level:3},{value:"Target level",id:"target-level",children:[],level:3}],level:2}],s={toc:p};function f(e){var t=e.components,o=(0,n.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"By default, all BuildBuddy executors are placed in a single pool - and any task can run on any executor (running the same operating system and cpu architecture)."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/rbe-platforms"},"Platforms")," can be used to specify custom Docker images in which to run your actions, but sometimes you want control over more properties of the executor machine - like available memory, access to GPUs, or physical location."),(0,l.kt)("p",null,"To support these use cases, BuildBuddy allows executors to be registered in different pools - and for Bazel to select from these pools at either the Platform level or the target level, depending on your needs."),(0,l.kt)("h2",{id:"deploying-executors-in-a-pool"},"Deploying executors in a pool"),(0,l.kt)("p",null,"When creating an executor deployment, you can specify the name of the pool its executors should be registered to with the ",(0,l.kt)("inlineCode",{parentName:"p"},"MY_POOL")," environment variable. This can be set to any string value."),(0,l.kt)("p",null,"If using the ",(0,l.kt)("inlineCode",{parentName:"p"},"buildbuddy/buildbuddy-executor")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-executor"},"Helm charts"),", you can set this using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm/blob/master/charts/buildbuddy-executor/values.yaml#L15"},"poolName value"),"."),(0,l.kt)("h2",{id:"setting-the-apps-default-pool-name"},"Setting the app's default pool name"),(0,l.kt)("p",null,"By default, both executors and the BuildBuddy app do not set a pool name and any RBE request that comes in without a ",(0,l.kt)("inlineCode",{parentName:"p"},"Pool")," property set will be sent to the default pool. If you'd like requests without a ",(0,l.kt)("inlineCode",{parentName:"p"},"Pool")," property to be sent to a different default pool, you can set the app's ",(0,l.kt)("inlineCode",{parentName:"p"},"default_pool_name")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_execution")," block of its ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"remote_execution:\n    enable_remote_exec: true\n    default_pool_name: my-default-pool\n")),(0,l.kt)("h2",{id:"selecting-a-pool-to-run-your-builds-on"},"Selecting a pool to run your builds on"),(0,l.kt)("p",null,"Now that you've deployed multiple executor pools, you can select which pool you'd like your builds to run on - either at the platform level or the target level."),(0,l.kt)("h3",{id:"platform-level"},"Platform level"),(0,l.kt)("p",null,"You can configure BuildBuddy RBE to use a custom executor pool at the platform level, by adding the following rule to a BUILD file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'platform(\n    name = "gpu_platform",\n    exec_properties = {\n        "OSFamily": "Linux",\n        "Pool": "my-gpu-pool",\n    },\n)\n')),(0,l.kt)("p",null,"Make sure to replace ",(0,l.kt)("inlineCode",{parentName:"p"},"my-gpu-pool")," with your docker image url."),(0,l.kt)("p",null,"You can then pass this configuration to BuildBuddy RBE with the following flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--host_platform=//:gpu_platform\n")),(0,l.kt)("p",null,"This assumes you've placed this rule in your root BUILD file. If you place it elsewhere, make sure to update the path accordingly."),(0,l.kt)("h3",{id:"target-level"},"Target level"),(0,l.kt)("p",null,"If you want different targets to run in different RBE environments, you can specify ",(0,l.kt)("inlineCode",{parentName:"p"},"exec_properties")," at the target level. For example if you want to run one set of tests in a high-memory pool, or another set of targets on executors with GPUs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'go_test(\n    name = "memory_hogging_test",\n    srcs = ["memory_hogging_test.go"],\n    embed = [":go_default_library"],\n    exec_properties = {\n        "Pool": "high-memory-pool",\n    },\n)\n')))}f.isMDXComponent=!0}}]);