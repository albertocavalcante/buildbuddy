(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[6265],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),a=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=a(e.components);return n.createElement(f.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=a(t),d=o,y=l["".concat(f,".").concat(d)]||l[d]||p[d]||c;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var u={};for(var f in r)hasOwnProperty.call(r,f)&&(u[f]=r[f]);u.originalType=e,u[l]="string"==typeof e?e:o,i[1]=u;for(var a=2;a<c;a++)i[a]=t[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25671:function(e,r){var t,n,o;n=[],void 0===(o="function"==typeof(t=function(){var e=function(){},r={},t={},n={};function o(e,r){e=e.push?e:[e];var o,c,i,u=[],f=e.length,a=f;for(o=function(e,t){t.length&&u.push(e),--a||r(u)};f--;)c=e[f],(i=t[c])?o(c,i):(n[c]=n[c]||[]).push(o)}function c(e,r){if(e){var o=n[e];if(t[e]=r,o)for(;o.length;)o[0](e,r),o.splice(0,1)}}function i(r,t){r.call&&(r={success:r}),t.length?(r.error||e)(t):(r.success||e)(r)}function u(r,t,n,o){var c,i,f=document,a=n.async,s=(n.numRetries||0)+1,l=n.before||e,p=r.replace(/[\?|#].*$/,""),d=r.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(p)?((i=f.createElement("link")).rel="stylesheet",i.href=d,(c="hideFocus"in i)&&i.relList&&(c=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p)?(i=f.createElement("img")).src=d:((i=f.createElement("script")).src=r,i.async=void 0===a||a),i.onload=i.onerror=i.onbeforeload=function(e){var f=e.type[0];if(c)try{i.sheet.cssText.length||(f="e")}catch(a){18!=a.code&&(f="e")}if("e"==f){if((o+=1)<s)return u(r,t,n,o)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";t(r,f,e.defaultPrevented)},!1!==l(r,i)&&f.head.appendChild(i)}function f(e,r,t){var n,o,c=(e=e.push?e:[e]).length,i=c,f=[];for(n=function(e,t,n){if("e"==t&&f.push(e),"b"==t){if(!n)return;f.push(e)}--c||r(f)},o=0;o<i;o++)u(e[o],n,t)}function a(e,t,n){var o,u;if(t&&t.trim&&(o=t),u=(o?n:t)||{},o){if(o in r)throw"LoadJS";r[o]=!0}function a(r,t){f(e,(function(e){i(u,e),r&&i({success:r,error:t},e),c(o,e)}),u)}if(u.returnPromise)return new Promise(a);a()}return a.ready=function(e,r){return o(e,(function(e){i(r,e)})),a},a.done=function(e){c(e,[])},a.reset=function(){r={},t={},n={}},a.isDefined=function(e){return e in r},a})?t.apply(r,n):t)||(e.exports=o)},59945:function(e,r,t){"use strict";t.d(r,{tP:function(){return v}});var n=t(67294),o=t(25671),c=t.n(o),i="https://platform.twitter.com/widgets.js",u="twttr",f=u,a=!("undefined"==typeof window||!window.document||!window.document.createElement);function s(){return new Promise((function(e,r){var t=function(){return r(new Error("Could not load remote twitter widgets js"))};c().isDefined(f)||c()(i,f),c().ready(f,{success:function(){var r=window[u];r&&r.widgets||t(),e(r.widgets)},error:t})}))}function l(e,r){return e===r?0!==e||0!==r||1/e==1/r:e!=e&&r!=r}function p(e){var r=(0,n.useRef)();return function(e,r){if(l(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.prototype.hasOwnProperty.call(r,t[o])||!l(e[t[o]],r[t[o]]))return!1;return!0}(e,r.current)||(r.current=e),r.current}function d(e){return"object"==typeof e?Object.assign({},e):e}var y="twdiv";function m(e,r,t,o){var c=(0,n.useState)(null),i=c[0],u=c[1],f=(0,n.useRef)(null);if(!a)return{ref:f,error:i};var l=[e,p(r),p(t)];return(0,n.useEffect)((function(){u(null);var n,c,i=!1;if(f.current){if(n=f.current,c=y,n&&n.querySelectorAll("*").forEach((function(e){e.hasAttribute(c)&&e.remove()})),!f||!f.current)return;var a=document.createElement("div");a.setAttribute(y,"yes"),f.current.appendChild(a),s().then((function(n){return n[e](d(r),a,d(t))})).then((function(e){if(!e&&!i)throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");f&&f.current&&(i?a&&a.remove():o&&o())})).catch((function(e){console.error(e),u(e)}))}return function(){i=!0}}),l),{ref:f,error:i}}var v=function(e){var r=e.tweetId,t=e.options,o=e.onLoad,c=e.renderError,i=m("createTweet",r,t,o),u=i.ref,f=i.error;return n.createElement("div",{ref:u},f&&c&&c(f))}}}]);