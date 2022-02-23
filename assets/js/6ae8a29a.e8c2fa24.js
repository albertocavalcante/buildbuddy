"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2395],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,h=p["".concat(l,".").concat(y)]||p[y]||c[y]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1391:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],u={id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},l=void 0,d={unversionedId:"guide-auth",id:"guide-auth",title:"Authentication Guide",description:"BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first create a BuildBuddy account.",source:"@site/../docs/guide-auth.md",sourceDirName:".",slug:"/guide-auth",permalink:"/docs/guide-auth",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/guide-auth.md",tags:[],version:"current",lastUpdatedBy:"Siggi Simonarson",lastUpdatedAt:1645659546,formattedLastUpdatedAt:"2/23/2022",frontMatter:{id:"guide-auth",title:"Authentication Guide",sidebar_label:"Authentication Guide"},sidebar:"someSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Build Metadata Guide",permalink:"/docs/guide-metadata"}},s=[{value:"Setup",id:"setup",children:[],level:2},{value:"Separate auth file",id:"separate-auth-file",children:[],level:2},{value:"Command line",id:"command-line",children:[],level:2},{value:"Managing keys",id:"managing-keys",children:[],level:2},{value:"Read only keys",id:"read-only-keys",children:[],level:2},{value:"Executor keys",id:"executor-keys",children:[],level:2}],c={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"BuildBuddy uses API keys to authenticate Bazel invocations. In order to authenticate an invocation, you must first ",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"create a BuildBuddy account"),"."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"An API key should be passed along with all gRPCs requests that you'd like to be associated with your BuildBuddy organization. This key can be used by anyone in your organization, as it ties builds to your org - not your individual user."),(0,o.kt)("p",null,"You can find your API key on your ",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/docs/setup/"},"setup instructions")," once you've ",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/"},"created an account")," and logged in. You can also create multiple API keys for use in different contexts."),(0,o.kt)("p",null,"Your API key can be added directly to your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," as long as no one outside of your organization has access to your source code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n")),(0,o.kt)("p",null,"If people outside of your organization have access to your source code (open source projects, etc) - you'll want to pull your credentials into a separate file that is only accessible by members of your organization and/or your CI machines."),(0,o.kt)("p",null,"Alternatively, you can store your API key in an environment variable / secret and pass these flags in manually or with a wrapper script."),(0,o.kt)("h2",{id:"separate-auth-file"},"Separate auth file"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"try-import")," directive in your ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," - you can direct bazel to pull in additional bazel configuration flags from a different file if the file exists (if the file does not exist, this directive will be ignored)."),(0,o.kt)("p",null,"You can then place a second ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.bazelrc")," file in a location that's only accessible to members of your organization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"build --remote_header=x-buildbuddy-api-key=YOUR_API_KEY\n")),(0,o.kt)("p",null,"And add a ",(0,o.kt)("inlineCode",{parentName:"p"},"try-import")," to your main ",(0,o.kt)("inlineCode",{parentName:"p"},".bazelrc")," file at the root of your ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKSPACE"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"try-import /path/to/your/auth.bazelrc\n")),(0,o.kt)("h2",{id:"command-line"},"Command line"),(0,o.kt)("p",null,"The command line method allows you to store your API key in an environment variable or Github secret, and then pass authenticated flags in either manually or with a wrapper script."),(0,o.kt)("p",null,"If using Github secrets - you can create a secret called ",(0,o.kt)("inlineCode",{parentName:"p"},"BUILDBUDDY_API_KEY")," containing your API key, then use that in your actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bazel build --config=remote --remote_header=x-buildbuddy-api-key=${BUILDBUDDY_API_KEY}\n")),(0,o.kt)("h2",{id:"managing-keys"},"Managing keys"),(0,o.kt)("p",null,"You can create multiple API keys on your ",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.dev/settings/org/api-keys"},"organization settings page"),". These keys can be used in different contexts (i.e. one for CI, one for developers) and cycled independently. Here you can also edit and delete existing API keys."),(0,o.kt)("p",null,"When creating multiple keys, we recommending labeling your API keys with descriptive names to describe how they will be used."),(0,o.kt)("h2",{id:"read-only-keys"},"Read only keys"),(0,o.kt)("p",null,"When creating new API keys, you can check the box that says ",(0,o.kt)("strong",{parentName:"p"},"Read-only key (disable remote cache uploads)"),". This will allow users of these keys to download from the remote cache, but not upload artifacts into the cache."),(0,o.kt)("h2",{id:"executor-keys"},"Executor keys"),(0,o.kt)("p",null,"When creating API keys to link your self-hosted executors to your organization (if using ",(0,o.kt)("strong",{parentName:"p"},"Bring Your Own Runners"),"), you'll need to check the box that says ",(0,o.kt)("strong",{parentName:"p"},"Executor key (for self-hosted executors)"),"."))}p.isMDXComponent=!0}}]);