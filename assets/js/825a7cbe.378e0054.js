"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[941],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),y=s,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},826:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(7462),s=n(3366),a=(n(7294),n(4137)),i=["components"],o={id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},c=void 0,l={unversionedId:"secrets",id:"secrets",title:"Secrets",description:"Secrets are encrypted environment variables associated with your",source:"@site/../docs/secrets.md",sourceDirName:".",slug:"/secrets",permalink:"/docs/secrets",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/secrets.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1669152239,formattedLastUpdatedAt:"11/22/2022",frontMatter:{id:"secrets",title:"Secrets",sidebar_label:"RBE Secrets"},sidebar:"someSidebar",previous:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"},next:{title:"RBE with MicroVMs",permalink:"/docs/rbe-microvms"}},d=[{value:"Why use secrets?",id:"why-use-secrets",children:[],level:2},{value:"Defining secrets",id:"defining-secrets",children:[],level:2},{value:"Getting secret values",id:"getting-secret-values",children:[{value:"Bazel actions",id:"bazel-actions",children:[],level:3},{value:"Workflows",id:"workflows",children:[],level:3}],level:2},{value:"Security notes",id:"security-notes",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Secrets are encrypted environment variables associated with your\nBuildBuddy organization. Secrets can be used in actions executed with\n",(0,a.kt)("a",{parentName:"p",href:"remote-build-execution"},"remote execution")," as well as ",(0,a.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy\nWorkflows"),"."),(0,a.kt)("p",null,"BuildBuddy encrypts secrets with a\n",(0,a.kt)("a",{parentName:"p",href:"https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes"},"libsodium sealed box"),".\nSecrets are encrypted before they are sent to BuildBuddy's\nservers, and stay encrypted until they are used."),(0,a.kt)("h2",{id:"why-use-secrets"},"Why use secrets?"),(0,a.kt)("p",null,"Builds that are executed remotely on BuildBuddy's servers may occasionally\nneed access to an API key or other credentials. For example, you may want\nto ",(0,a.kt)("a",{parentName:"p",href:"rbe-platforms#passing-credentials-for-docker-images"},"pass credentials for a Docker image"),"."),(0,a.kt)("p",null,"Storing these sensitive parameters as plain environment variables is\nundesirable because those keys would be stored unencrypted in BuildBuddy's\nAction Cache. While BuildBuddy's cache requires authorization and is secured\nusing TLS, storing so many copies of the secret in cache increases attack\nsurface and increases the chance of accidentally exposing your own\ncredentials."),(0,a.kt)("p",null,"Secrets solve this problem by allowing sensitive keys to be stored in\nencrypted format separately from the actions themselves."),(0,a.kt)("h2",{id:"defining-secrets"},"Defining secrets"),(0,a.kt)("p",null,"Secrets can be added to your organization using the Secrets page in\n",(0,a.kt)("a",{parentName:"p",href:"https://app.buildbuddy.io/settings/org/secrets"},"settings"),"."),(0,a.kt)("p",null,"Secrets can be edited or deleted using the Secrets page. Once a secret\nis saved, its currently stored value cannot be viewed using the Secrets\npage."),(0,a.kt)("h2",{id:"getting-secret-values"},"Getting secret values"),(0,a.kt)("h3",{id:"bazel-actions"},"Bazel actions"),(0,a.kt)("p",null,"To opt a specific action into secrets, you can define the remote exec\nproperty ",(0,a.kt)("inlineCode",{parentName:"p"},"include-secrets=true"),". We recommend doing this per-action to\navoid exposing secrets to actions that do not need them."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'foo_library(\n    # ...\n    exec_properties = {\n        "include-secrets": "true",\n    }\n)\n')),(0,a.kt)("h3",{id:"workflows"},"Workflows"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"workflows-introduction"},"BuildBuddy workflows")," do not need additional\nconfiguration to use secrets; they receive secrets by default as long as\nthe workflow is being triggered on behalf of a trusted collaborator in the\nrepository."),(0,a.kt)("p",null,"Workflow secrets are accessed via environment variables, in the same way\nas normal Bazel actions shown above."),(0,a.kt)("h2",{id:"security-notes"},"Security notes"),(0,a.kt)("p",null,"Secrets are encrypted on the client-side using\n",(0,a.kt)("a",{parentName:"p",href:"https://doc.libsodium.org/"},"libsodium"),", which is based on\n",(0,a.kt)("a",{parentName:"p",href:"http://nacl.cr.yp.to/"},"NaCl"),"."),(0,a.kt)("p",null,"The public key used to encrypt secrets is unique to each organization. The\nprivate key used to decrypt secrets is stored encrypted and only decrypted\nwhen used to unseal secrets."),(0,a.kt)("p",null,"Secrets are only stored in their encrypted form and are decrypted\non-demand for actions that opt in to receiving secrets."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Avoid printing secret values to your build logs or action outputs."))))}p.isMDXComponent=!0}}]);