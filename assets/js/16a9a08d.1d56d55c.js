"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[5035],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=l,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56429:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),i=["components"],o={id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},s=void 0,u={unversionedId:"enterprise-helm",id:"enterprise-helm",title:"Enterprise Helm Charts",description:"If you run or have access to a Kubernetes cluster and are comfortable with Helm, we maintain official BuildBuddy Helm charts that are easy to configure and deploy.",source:"@site/../docs/enterprise-helm.md",sourceDirName:".",slug:"/enterprise-helm",permalink:"/docs/enterprise-helm",draft:!1,editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/enterprise-helm.md",tags:[],version:"current",lastUpdatedBy:"Brandon Duffany",lastUpdatedAt:1685041070,formattedLastUpdatedAt:"May 25, 2023",frontMatter:{id:"enterprise-helm",title:"Enterprise Helm Charts",sidebar_label:"Enterprise Helm Charts"},sidebar:"someSidebar",previous:{title:"Enterprise Configuration",permalink:"/docs/enterprise-config"},next:{title:"Enterprise RBE Setup",permalink:"/docs/enterprise-rbe"}},d={},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the repo",id:"installing-the-repo",level:2},{value:"Installing the Chart",id:"installing-the-chart",level:2},{value:"Uninstalling the Chart",id:"uninstalling-the-chart",level:2},{value:"Updating your release",id:"updating-your-release",level:2},{value:"Writing deployment to a file",id:"writing-deployment-to-a-file",level:2},{value:"Example configurations",id:"example-configurations",level:3},{value:"Example MySQL configuration",id:"example-mysql-configuration",level:3},{value:"Example external database configuration",id:"example-external-database-configuration",level:3},{value:"Example ingress and certs configuration",id:"example-ingress-and-certs-configuration",level:3},{value:"Example with auth (required for enterprise features)",id:"example-with-auth-required-for-enterprise-features",level:2},{value:"Example with remote build execution",id:"example-with-remote-build-execution",level:2},{value:"More examples",id:"more-examples",level:2},{value:"Local development",id:"local-development",level:3},{value:"Learn more",id:"learn-more",level:2}],m={toc:p},c="wrapper";function h(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you run or have access to a Kubernetes cluster and are comfortable with ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),", we maintain official BuildBuddy Helm charts that are easy to configure and deploy."),(0,a.kt)("p",null,"They have options to deploy everything necessary to use all of BuildBuddy's bells and whistles - including MySQL, nginx, remote build execution and more."),(0,a.kt)("p",null,"The official BuildBuddy charts live in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/buildbuddy-helm"},"buildbuddy-helm repo"),"."),(0,a.kt)("h2",{id:"tldr"},"TL;DR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\nhelm install buildbuddy buildbuddy/buildbuddy-enterprise \\\n  --set mysql.mysqlUser=sampleUser \\\n  --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes 1.15+ with Beta APIs enabled"),(0,a.kt)("li",{parentName:"ul"},"Helm v2/v3"),(0,a.kt)("li",{parentName:"ul"},"Tiller (the Helm v2 server-side component) installed on the cluster")),(0,a.kt)("h2",{id:"installing-the-repo"},"Installing the repo"),(0,a.kt)("p",null,"To install the BuildBuddy Helm repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add buildbuddy https://helm.buildbuddy.io\n")),(0,a.kt)("h2",{id:"installing-the-chart"},"Installing the Chart"),(0,a.kt)("p",null,"To install the chart with the release name ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install my-release buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm v2 command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install --name my-release buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("p",null,"The command deploys BuildBuddy on the Kubernetes cluster in the default configuration. The ",(0,a.kt)("a",{parentName:"p",href:"#configuration"},"configuration"),"\nsection lists the parameters that can be configured during installation."),(0,a.kt)("h2",{id:"uninstalling-the-chart"},"Uninstalling the Chart"),(0,a.kt)("p",null,"To uninstall/delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release")," deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm delete my-release\n")),(0,a.kt)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the release."),(0,a.kt)("h2",{id:"updating-your-release"},"Updating your release"),(0,a.kt)("p",null,"If you change configuration, you can update your deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm upgrade my-release -f my-values.yaml buildbuddy/buildbuddy-enterprise\n")),(0,a.kt)("h2",{id:"writing-deployment-to-a-file"},"Writing deployment to a file"),(0,a.kt)("p",null,"You can write your Kubernetes deployment configuration to a file with release name ",(0,a.kt)("inlineCode",{parentName:"p"},"my-release"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm template my-release buildbuddy/buildbuddy-enterprise > buildbuddy-deploy.yaml\n")),(0,a.kt)("p",null,"You can then check this configuration in to your source repository, or manually apply it to your cluster with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl apply -f buildbuddy-deploy.yaml\n")),(0,a.kt)("h3",{id:"example-configurations"},"Example configurations"),(0,a.kt)("p",null,"Below are some examples of ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," files with values that could be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"helm"),"\ncommand with the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"--values")," flag to get started."),(0,a.kt)("h3",{id:"example-mysql-configuration"},"Example MySQL configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n')),(0,a.kt)("h3",{id:"example-external-database-configuration"},"Example external database configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mysql:\n  enabled: false\n\nconfig:\n  database:\n    ## mysql:     "mysql://<USERNAME>:<PASSWORD>@tcp(<HOST>:3306)/<DATABASE_NAME>"\n    ## sqlite:    "sqlite3:///tmp/buildbuddy-enterprise.db"\n    data_source: "" # Either set this or mysql.enabled, not both!\n')),(0,a.kt)("h3",{id:"example-ingress-and-certs-configuration"},"Example ingress and certs configuration"),(0,a.kt)("p",null,"Note: make sure to run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.16.1/cert-manager.crds.yaml")," to install CRDs before deploying this configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  ssl:\n    enable_ssl: true\n')),(0,a.kt)("h2",{id:"example-with-auth-required-for-enterprise-features"},"Example with auth (required for enterprise features)"),(0,a.kt)("p",null,"Auth can be configured with any provider that supports OpenID Connect (OIDC) including Google GSuite, Okta, Auth0 and others."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ingress:\n  enabled: true\n  sslEnabled: true\n  httpHost: buildbuddy.example.com\n  grpcHost: buildbuddy-grpc.example.com\n\nmysql:\n  enabled: true\n  mysqlUser: "sampleUser"\n  mysqlPassword: "samplePassword"\n\ncertmanager:\n  enabled: true\n  emailAddress: your-email@gmail.com\n\nconfig:\n  app:\n    build_buddy_url: "https://buildbuddy.example.com"\n    events_api_url: "grpcs://buildbuddy-grpc.example.com"\n    cache_api_url: "grpcs://buildbuddy-grpc.example.com"\n  auth:\n    ## To use Google auth, get client_id and client_secret here:\n    ## https://console.developers.google.com/apis/credentials\n    oauth_providers:\n      - issuer_url: "https://accounts.google.com" # OpenID Connect Discovery URL\n        client_id: "MY_CLIENT_ID"\n        client_secret: "MY_CLIENT_SECRET"\n  ssl:\n    enable_ssl: true\n')),(0,a.kt)("h2",{id:"example-with-remote-build-execution"},"Example with remote build execution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"executor:\n  enabled: true\n  replicas: 3\nredis:\n  enabled: true\nconfig:\n  remote_execution:\n    enable_remote_exec: true\n")),(0,a.kt)("h2",{id:"more-examples"},"More examples"),(0,a.kt)("p",null,"For more example ",(0,a.kt)("inlineCode",{parentName:"p"},"config:")," blocks, see our ",(0,a.kt)("a",{parentName:"p",href:"https://www.buildbuddy.io/docs/config#configuration-options"},"configuration docs"),"."),(0,a.kt)("h3",{id:"local-development"},"Local development"),(0,a.kt)("p",null,"For local testing use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube"},"minikube")),(0,a.kt)("p",null,"Create local cluster using with specified Kubernetes version (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"1.15.6"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ minikube start --kubernetes-version v1.15.6\n")),(0,a.kt)("p",null,"Initialize helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm init\n")),(0,a.kt)("p",null,"Above command is not required for Helm v3"),(0,a.kt)("p",null,"Get dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm dependency update\n")),(0,a.kt)("p",null,"Perform local installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install . \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Helm v3 command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ helm install . \\\n    --generate-name \\\n    --set image.tag=5.12.4 \\\n    --set mysql.mysqlUser=sampleUser \\\n    --set mysql.mysqlPassword=samplePassword\n")),(0,a.kt)("h2",{id:"learn-more"},"Learn more"),(0,a.kt)("p",null,"For more information on configuring your BuildBuddy Enterprise Helm deploy, check out the chart:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/buildbuddy-io/buildbuddy-helm/tree/master/charts/buildbuddy-enterprise"},"BuildBuddy Enterprise"))),(0,a.kt)("p",null,"For more information on configuring BuildBuddy, see our ",(0,a.kt)("a",{parentName:"p",href:"/docs/config"},"Configuration docs"),". If you have questions please don\u2019t hesitate to email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:setup@buildbuddy.io"},"setup@buildbuddy.io")," or ping us on our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.buildbuddy.io"},"Slack channel"),"."))}h.isMDXComponent=!0}}]);