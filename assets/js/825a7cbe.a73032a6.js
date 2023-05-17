"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[941],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(r),y=s,f=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:s,i[1]=a;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},95125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(83117),s=r(80102),o=(r(67294),r(3905)),i=["components"],a={id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},c=void 0,l={unversionedId:"secrets",id:"secrets",title:"Secrets",description:"Secrets are encrypted environment variables associated with your",source:"@site/../docs/secrets.md",sourceDirName:".",slug:"/secrets",permalink:"/docs/secrets",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/secrets.md",tags:[],version:"current",lastUpdatedBy:"Vadim Berezniker",lastUpdatedAt:1684339555,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},sidebar:"someSidebar",previous:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"},next:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"}},d={},u=[{value:"Why use secrets?",id:"why-use-secrets",level:2},{value:"Defining secrets",id:"defining-secrets",level:2},{value:"Getting secret values",id:"getting-secret-values",level:2},{value:"Bazel actions",id:"bazel-actions",level:3},{value:"Workflows",id:"workflows",level:3},{value:"Security notes",id:"security-notes",level:2}],p={toc:u},y="wrapper";function f(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)(y,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Secrets are encrypted environment variables associated with your\nBuildBuddy organization. Secrets can be used in actions executed with\n",(0,o.kt)("a",{parentName:"p",href:"remote-build-execution"},"remote execution")," as well as ",(0,o.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy\nWorkflows"),"."),(0,o.kt)("p",null,"BuildBuddy encrypts secrets with a\n",(0,o.kt)("a",{parentName:"p",href:"https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"},"libsodium sealed box"),".\nSecrets are encrypted before they are sent to BuildBuddy's\nservers, and stay encrypted until they are used."),(0,o.kt)("h2",{id:"why-use-secrets"},"Why use secrets?"),(0,o.kt)("p",null,"Builds that are executed remotely on BuildBuddy's servers may occasionally\nneed access to an API key or other credentials. For example, you may want\nto ",(0,o.kt)("a",{parentName:"p",href:"rbe-platforms#passing-credentials-for-docker-images"},"pass credentials for a Docker image"),"."),(0,o.kt)("p",null,"Storing these sensitive parameters as plain environment variables is\nundesirable because those keys would be stored unencrypted in BuildBuddy's\nAction Cache. While BuildBuddy's cache requires authorization and is secured\nusing TLS, storing so many copies of the secret in cache increases attack\nsurface and increases the chance of accidentally exposing your own\ncredentials."),(0,o.kt)("p",null,"Secrets solve this problem by allowing sensitive keys to be stored in\nencrypted format separately from the actions themselves."),(0,o.kt)("h2",{id:"defining-secrets"},"Defining secrets"),(0,o.kt)("p",null,"Secrets can be added to your organization using the Secrets page in\n",(0,o.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/settings/org/secrets"},"settings"),"."),(0,o.kt)("p",null,"Secrets can be edited or deleted using the Secrets page. Once a secret\nis saved, its currently stored value cannot be viewed using the Secrets\npage."),(0,o.kt)("h2",{id:"getting-secret-values"},"Getting secret values"),(0,o.kt)("h3",{id:"bazel-actions"},"Bazel actions"),(0,o.kt)("p",null,"To opt a specific action into secrets, you can define the remote exec\nproperty ",(0,o.kt)("inlineCode",{parentName:"p"},"include-secrets=true"),". We recommend doing this per-action to\navoid exposing secrets to actions that do not need them."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'foo_library(\n    # ...\n    exec_properties = {\n        "include-secrets": "true",\n    }\n)\n')),(0,o.kt)("h3",{id:"workflows"},"Workflows"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy workflows")," do not need additional\nconfiguration to use secrets; they receive secrets by default as long as\nthe workflow is being triggered on behalf of a trusted collaborator in the\nrepository."),(0,o.kt)("p",null,"Workflow secrets are accessed via environment variables, in the same way\nas normal Bazel actions shown above."),(0,o.kt)("h2",{id:"security-notes"},"Security notes"),(0,o.kt)("p",null,"Secrets are encrypted on the client-side using\n",(0,o.kt)("a",{parentName:"p",href:"https://doc.libsodium.org/"},"libsodium"),", which is based on\n",(0,o.kt)("a",{parentName:"p",href:"http://nacl.cr.yp.to/"},"NaCl"),"."),(0,o.kt)("p",null,"The public key used to encrypt secrets is unique to each organization. The\nprivate key used to decrypt secrets is stored encrypted and only decrypted\nwhen used to unseal secrets."),(0,o.kt)("p",null,"Secrets are only stored in their encrypted form and are decrypted\non-demand for actions that opt in to receiving secrets."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Avoid printing secret values to your build logs or action outputs.")))}f.isMDXComponent=!0}}]);