"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[1790],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),b=a,h=p["".concat(u,".").concat(b)]||p[b]||c[b]||r;return n?i.createElement(h,l(l({ref:t},s),{},{components:n})):i.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},13972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),l=["components"],o={id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},u=void 0,d={unversionedId:"cli",id:"cli",title:"BuildBuddy CLI",description:"The BuildBuddy CLI brings the power of BuildBuddy to the command line. It's a Bazel wrapper that's built on top of Bazelisk and brings support for plugins, authentication, flaky network conditions, and more.",source:"@site/../docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/cli.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1687817984,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{id:"cli",title:"BuildBuddy CLI",sidebar_label:"CLI Overview"},sidebar:"someSidebar",previous:{title:"Workflows configuration",permalink:"/docs/workflows-config"},next:{title:"CLI Plugins",permalink:"/docs/cli-plugins"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Updating",id:"updating",level:2},{value:"Installing for a project",id:"installing-for-a-project",level:2},{value:"Features",id:"features",level:2},{value:"Networking",id:"networking",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Contributing",id:"contributing",level:2},{value:"Reporting an issue",id:"reporting-an-issue",level:2}],c={toc:p},b="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)(b,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/cli"},"BuildBuddy CLI")," brings the power of BuildBuddy to the command line. It's a ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build/"},"Bazel")," wrapper that's built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk")," and brings support for ",(0,r.kt)("a",{parentName:"p",href:"#plugins"},"plugins"),", ",(0,r.kt)("a",{parentName:"p",href:"#authentication"},"authentication"),", ",(0,r.kt)("a",{parentName:"p",href:"#networking"},"flaky network conditions"),", and more."),(0,r.kt)("p",null,"Because it's built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/bazelisk"},"Bazelisk"),", it's command line compatible with Bazel - which means you can simply ",(0,r.kt)("inlineCode",{parentName:"p"},"alias bazel=bb")," and keep using Bazel the way you normally would."),(0,r.kt)("p",null,"It's written in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/"},"go"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli"},"fully open source"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT licensed"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The easiest way to install the BuildBuddy CLI is by running this simple bash script, which works on both MacOS and Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL install.buildbuddy.io | bash\n")),(0,r.kt)("p",null,"If you're not comfortable executing random bash scripts from the internet (we totally get it!), you can take a look at what this script is doing under the hood, by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://install.buildbuddy.io"},"install.buildbuddy.io")," in your browser."),(0,r.kt)("p",null,"It's downloading the latest BuildBuddy CLI binary for your OS and architecture from our Github repo ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/bazel/releases"},"here")," and moving it to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/bb"),"."),(0,r.kt)("p",null,"You can perform those steps manually yourself if you'd like!"),(0,r.kt)("h2",{id:"updating"},"Updating"),(0,r.kt)("p",null,"You can update the cli by re-running the installation script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL install.buildbuddy.io | bash\n")),(0,r.kt)("p",null,"If you installed BuildBuddy manually instead, you can repeat those installation steps to update your CLI."),(0,r.kt)("p",null,"You can check your BuildBuddy CLI version at any time by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bb version\n")),(0,r.kt)("h2",{id:"installing-for-a-project"},"Installing for a project"),(0,r.kt)("p",null,"If you're already using Bazelisk, you can easily install the BuildBuddy CLI for your entire project by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$(echo "buildbuddy-io/5.0.12"; cat .bazelversion)" > .bazelversion\n')),(0,r.kt)("p",null,"This will simply prepend ",(0,r.kt)("inlineCode",{parentName:"p"},"buildbuddy-io/5.0.12")," on a new line above your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelversion")," file like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:'language-title=".bazelversion"'},"buildbuddy-io/5.0.12\n5.3.2\n")),(0,r.kt)("p",null,"The version ",(0,r.kt)("span",{class:"cli-version"},"5.0.12")," of the BuildBuddy CLI will now automatically be used when you type ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bazelisk")," and continue to use the Bazel version specified on the second line of your ",(0,r.kt)("inlineCode",{parentName:"p"},".bazelrc")," file."),(0,r.kt)("p",null,"To find the latest version of the BuildBuddy CLI, you can view our releases page ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/bazel/releases"},"here"),"."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("p",null,"The BuildBuddy CLI was built to handle flaky network conditions without affecting your build. It does this by forwarding all remote cache & build event stream requests through a local proxy. This means that you'll never have to sit around waiting for outputs or build events to upload, and your build won't fail if you're not connected to the internet."),(0,r.kt)("h3",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"The BuildBuddy CLI comes with a robust plugin system. Plugins are super simple to write, share, and install."),(0,r.kt)("p",null,"You can find a list of plugins that you can install in our ",(0,r.kt)("a",{parentName:"p",href:"/plugins"},"plugin library"),"."),(0,r.kt)("p",null,"For more information on how to write your own plugins, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli-plugins"},"plugin documentation"),"."),(0,r.kt)("h3",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"The BuildBuddy CLI makes authentication to BuildBuddy a breeze. You can simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"bb login")," and follow the instructions. Once you're logged in, all of your requests to BuildBuddy will be authenticated to your organization."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"We welcome pull requests! You can find the code for the BuildBuddy CLI on Github ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/tree/master/cli"},"here"),". See our ",(0,r.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/contributing"},"contributing docs")," for more info."),(0,r.kt)("h2",{id:"reporting-an-issue"},"Reporting an issue"),(0,r.kt)("p",null,"If you run into an issue with the BuildBuddy CLI, please let us know by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/issues/new"},"filing an issue")," and including ",(0,r.kt)("strong",{parentName:"p"},"[CLI]")," in the title."))}h.isMDXComponent=!0}}]);