"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7847],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return w}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,w=p["".concat(u,".").concat(f)]||p[f]||d[f]||l;return n?o.createElement(w,i(i({ref:t},c),{},{components:n})):o.createElement(w,i({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],a={id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},u=void 0,s={unversionedId:"workflows-setup",id:"workflows-setup",title:"Workflows setup",description:"Workflows automatically build and test your code with",source:"@site/../docs/workflows-setup.md",sourceDirName:".",slug:"/workflows-setup",permalink:"/docs/workflows-setup",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/workflows-setup.md",tags:[],version:"current",lastUpdatedBy:"Tyler Williams",lastUpdatedAt:1689293265,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{id:"workflows-setup",title:"Workflows setup",sidebar_label:"Workflows setup"},sidebar:"someSidebar",previous:{title:"Workflows introduction",permalink:"/docs/workflows-introduction"},next:{title:"Workflows configuration",permalink:"/docs/workflows-config"}},c={},p=[{value:"Enable workflows for a repo",id:"enable-workflows-for-a-repo",level:2},{value:"Running workflows",id:"running-workflows",level:2},{value:"Configuring your workflow",id:"configuring-your-workflow",level:2},{value:"Setting up branch protection rules",id:"setting-up-branch-protection-rules",level:2},{value:"Building in the workflow runner environment",id:"building-in-the-workflow-runner-environment",level:2}],d={toc:p},f="wrapper";function w(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(f,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Workflows automatically build and test your code with\nBuildBuddy whenever a commit is pushed to your GitHub repo."),(0,l.kt)("p",null,"When combined with GitHub's branch protection rules, workflows can help prevent\nunwanted code (that doesn't build or pass tests) from being merged into the main branch."),(0,l.kt)("p",null,"Best of all, workflows let you run any Bazel commands you would like,\nso you can leverage all the same BuildBuddy features that you get when\nrunning Bazel locally, like the results UI, remote caching, remote execution."),(0,l.kt)("h2",{id:"enable-workflows-for-a-repo"},"Enable workflows for a repo"),(0,l.kt)("p",null,"To enable workflows, take the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Log in to the BuildBuddy app, and use the organization picker in the\nsidebar to select your preferred organization."),(0,l.kt)("li",{parentName:"ol"},"Navigate to the ",(0,l.kt)("strong",{parentName:"li"},"Workflows")," page using the sidebar."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Link a repository"),", then follow the steps displayed in the app.")),(0,l.kt)("h2",{id:"running-workflows"},"Running workflows"),(0,l.kt)("p",null,"Once a repository is linked, BuildBuddy will automatically run ",(0,l.kt)("inlineCode",{parentName:"p"},"bazel test //...")," whenever a commit is pushed to your repo's default branch\nor whenever a pull request branch is updated. It will report commit\nstatuses to GitHub, which you can see on the repo's home page or in pull\nrequest branches. The \"Details\" links in these statuses point to the\nBuildBuddy UI, where you can see the result of the workflow run."),(0,l.kt)("h2",{id:"configuring-your-workflow"},"Configuring your workflow"),(0,l.kt)("p",null,"To learn how to change the default configuration, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/workflows-config"},"workflows configuration"),"."),(0,l.kt)("h2",{id:"setting-up-branch-protection-rules"},"Setting up branch protection rules"),(0,l.kt)("p",null,"After you have created a workflow and you've pushed at least one commit\nto the repo, you can configure your repo so that branches cannot be\nmerged unless the workflow succeeds."),(0,l.kt)("p",null,"To do this, go to ",(0,l.kt)("strong",{parentName:"p"},"Settings")," > ",(0,l.kt)("strong",{parentName:"p"},"Branches")," and find ",(0,l.kt)("strong",{parentName:"p"},"Branch protection rules"),".\nThen, you click ",(0,l.kt)("strong",{parentName:"p"},"Add rule")," (or edit an existing rule)."),(0,l.kt)("p",null,"Select the box ",(0,l.kt)("strong",{parentName:"p"},"Require status checks to pass before merging")," and enable\nthe check corresponding to the BuildBuddy workflow (by default, this should\nbe ",(0,l.kt)("strong",{parentName:"p"},"Test all targets"),")."),(0,l.kt)("p",null,"After you save your changes, pull requests will not be mergeable unless\nthe tests pass on BuildBuddy."),(0,l.kt)("h2",{id:"building-in-the-workflow-runner-environment"},"Building in the workflow runner environment"),(0,l.kt)("p",null,"BuildBuddy workflows execute using a Firecracker MicroVM on an Ubuntu\n18.04-based image, with some commonly used tools and libraries\npre-installed."),(0,l.kt)("p",null,"If you would like to test whether your build will succeed on\nBuildBuddy workflows without having to set up and trigger the workflow,\nyou can get a good approximation of the workflow VM environment by running\nthe image locally with Docker, cloning your Git repo, and invoking\n",(0,l.kt)("inlineCode",{parentName:"p"},"bazel")," to run your tests:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Start a new shell inside the workflows Ubuntu 18.04 environment (requires docker)\ndocker run --rm -it "gcr.io/flame-public/buildbuddy-ci-runner:latest"\n\n# Clone your repo and test it\ngit clone https://github.com/acme-inc/acme\ncd acme\nbazel test //...\n')),(0,l.kt)("p",null,"The Dockerfile we use to build the image (at ",(0,l.kt)("inlineCode",{parentName:"p"},"HEAD"),") is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy/blob/master/enterprise/dockerfiles/ci_runner_image/Dockerfile"},"here"),"."),(0,l.kt)("p",null,"If you plan to use the Ubuntu 20.04 image (requires ",(0,l.kt)("a",{parentName:"p",href:"workflows-config#linux-image-configuration"},"advanced configuration"),"), use\n",(0,l.kt)("inlineCode",{parentName:"p"},'"gcr.io/flame-public/rbe-ubuntu20-04-workflows:latest"')," in the command\nabove."))}w.isMDXComponent=!0}}]);