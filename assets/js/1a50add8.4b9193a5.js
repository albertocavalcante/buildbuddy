/*! For license information please see 1a50add8.4b9193a5.js.LICENSE.txt */
"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[129],{2525:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,c,s=o(e),l=1;l<arguments.length;l++){for(var u in a=Object(arguments[l]))n.call(a,u)&&(s[u]=a[u]);if(t){c=t(a);for(var p=0;p<c.length;p++)r.call(a,c[p])&&(s[c[p]]=a[c[p]])}}return s}},1535:function(e,t,n){var r=n(2525),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,s=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function w(){}function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(k(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var x=O.prototype=new w;x.constructor=O,r(x,v.prototype),x.isPureReactComponent=!0;var N={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:i,type:e,key:a,ref:c,props:o,_owner:N.current}}function M(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g,E=[];function P(e,t,n,r){if(E.length){var o=E.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function C(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function _(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case i:case a:c=!0}}if(c)return n(r,e,""===t?"."+V(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=t+V(o=e[s],s);c+=_(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=y&&e[y]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),s=0;!(o=e.next()).done;)c+=_(o=o.value,l=t+V(o,s++),n,r);else if("object"===o)throw n=""+e,Error(k(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function T(e,t,n){return null==e?0:_(e,"",t,n)}function V(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,r,n,(function(e){return e})):null!=e&&(M(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+n)),r.push(e))}function q(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(D,"$&/")+"/"),T(e,R,t=P(t,i,r,o)),C(t)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(k(321));return e}},7378:function(e,t,n){n(1535)},4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7378),n(4137)),a=["components"],c={id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",sidebar_label:"RBE with MicroVMs"},s=void 0,l={unversionedId:"rbe-microvms",id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",description:"BuildBuddy Cloud has experimental support for running remote build actions",source:"@site/../docs/rbe-microvms.md",sourceDirName:".",slug:"/rbe-microvms",permalink:"/docs/rbe-microvms",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/rbe-microvms.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1667490626,formattedLastUpdatedAt:"11/3/2022",frontMatter:{id:"rbe-microvms",title:"RBE with Firecracker MicroVMs",sidebar_label:"RBE with MicroVMs"},sidebar:"someSidebar",previous:{title:"RBE Platforms",permalink:"/docs/rbe-platforms"},next:{title:"RBE with GitHub Actions",permalink:"/docs/rbe-github-actions"}},u=[{value:"BUILD configuration",id:"build-configuration",children:[],level:2},{value:"Preserving microVM state across actions",id:"preserving-microvm-state-across-actions",children:[],level:2},{value:"Using custom images",id:"using-custom-images",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BuildBuddy Cloud has experimental support for running remote build actions\nwithin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/firecracker-microvm/firecracker"},"Firecracker microVMs"),",\nwhich are lightweight VMs that are optimized for fast startup time."),(0,i.kt)("p",null,"MicroVMs remove some of the restrictions imposed by the default Docker\ncontainer-based Linux execution environment. In particular, microVMs can\nbe used to run Docker, which means that actions run on BuildBuddy can\nspawn Docker containers in order to easily run apps that require lots of\nsystem dependencies, such as MySQL server."),(0,i.kt)("h2",{id:"build-configuration"},"BUILD configuration"),(0,i.kt)("p",null,"Let's say we have a BUILD file like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n)\n')),(0,i.kt)("p",null,"And an executable shell script ",(0,i.kt)("inlineCode",{parentName:"p"},"docker_test.sh")," that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm ubuntu:20.04 echo 'PASS' || exit 1\n")),(0,i.kt)("p",null,"This test would normally fail when run using BuildBuddy's shared Linux\nexecutors, since running Docker inside RBE actions is only supported when\nusing self-hosted executors."),(0,i.kt)("p",null,"But we can instead run this action using ",(0,i.kt)("strong",{parentName:"p"},"Docker-in-Firecracker")," by\nadding a few ",(0,i.kt)("inlineCode",{parentName:"p"},"exec_properties")," to our action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        # Tell BuildBuddy to run this test using a Firecracker microVM.\n        "workload-isolation-type": "firecracker",\n        # Tell BuildBuddy to ensure that the Docker daemon is started\n        # inside the microVM before this action runs, so that we don\'t\n        # have to worry about starting it ourselves.\n        "init-dockerd": "true",\n    },\n)\n')),(0,i.kt)("p",null,"And that's it! This test now works on BuildBuddy's shared Linux executors."),(0,i.kt)("p",null,"However, it's a bit slow. On each action, a fresh microVM is created. This\nis normally fine, because microVMs start up quickly. But the Docker daemon\nalso has to be re-initialized, which takes a few seconds. Worse yet, it\nwill be started from an empty Docker image cache, meaning that any images\nused in the action will need to be downloaded and unpacked from scratch\neach time this action is executed."),(0,i.kt)("p",null,"Fortunately, we can mitigate both of these issues using runner recyling."),(0,i.kt)("h2",{id:"preserving-microvm-state-across-actions"},"Preserving microVM state across actions"),(0,i.kt)("p",null,"MicroVM state can be preserved across action runs by enabling the\n",(0,i.kt)("inlineCode",{parentName:"p"},"recycle-runner")," exec property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'sh_test(\n    name = "docker_test",\n    srcs = ["docker_test.sh"],\n    exec_properties = {\n        "workload-isolation-type": "firecracker",\n        "init-dockerd": "true",\n        # Tell BuildBuddy to preserve the microVM state across runs.\n        "recycle-runner": "true",\n    },\n)\n')),(0,i.kt)("p",null,"Then, subsequent runs of this test should be able to take advantage of a\nwarm microVM, with Docker already up and running, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"ubuntu:20.04"),"\nimage already cached from when we ran the previous action."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'When using runner recycling, the entire microVM state is preserved\u2014not\njust the disk contents. You can think of it as being put into "sleep mode"\nbetween actions.'),(0,i.kt)("p",{parentName:"div"},"This means that you can leave Docker containers and other processes\nrunning to be reused by subsequent actions, which is helpful for\neliminating startup costs associated with heavyweight processes."),(0,i.kt)("p",{parentName:"div"},"For example, instead of starting MySQL server with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run mysql")," on\neach test action (which is quite slow), you can leave MySQL server running\nat the end of each test, and instead re-connect to that server during test\nsetup of the next test. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"docker container inspect")," to see if\nit the server is already running, and SQL queries like ",(0,i.kt)("inlineCode",{parentName:"p"},"DROP DATABASE IF EXISTS"),"\nfollowed by ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE DATABASE")," to get a clean DB instance."),(0,i.kt)("p",{parentName:"div"},"See\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/server/testutil/testmysql/testmysql.go"},"BuildBuddy's test MySQL implementation"),"\nfor an example in Golang."))),(0,i.kt)("h2",{id:"using-custom-images"},"Using custom images"),(0,i.kt)("p",null,"If you are using a custom RBE image, you do not need to do anything\nspecial to make it work with Firecracker. BuildBuddy will automatically\nconvert your Docker image to a disk image compatible with Firecracker. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"container-image")," execution property is specified using the same ",(0,i.kt)("inlineCode",{parentName:"p"},"docker://"),"\nprefix, like: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker://some-registry.io/foo/bar"),"."),(0,i.kt)("p",null,"To run Docker containers in your microVM (Docker-in-Firecracker), you will\nneed to make sure your container image has Docker installed. BuildBuddy's\ndefault RBE image already has Docker installed, but when using a custom\nimage, you may need to install Docker yourself."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine")," for\nthe commands that you'll need to add to your Dockerfile in order to\ninstall Docker."),(0,i.kt)("p",null,"Once you've built your custom image, test that Docker is properly\ninstalled by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it --privileged --name=docker-test your-image.io/foo dockerd --storage-driver=vfs\n")),(0,i.kt)("p",null,'Then, once Docker is finished booting up, run the following command\nfrom another terminal. You should see "Hello world!" printed if Docker\nis properly installed:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -it docker-test docker run busybox echo "Hello world!"\n')))}d.isMDXComponent=!0}}]);