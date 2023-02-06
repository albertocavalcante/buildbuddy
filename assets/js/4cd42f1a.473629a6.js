"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[3608],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9739:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(4137)),o=["components"],l={id:"config-cache",title:"Cache Configuration",sidebar_label:"Cache"},c=void 0,p={unversionedId:"config-cache",id:"config-cache",title:"Cache Configuration",description:"Section",source:"@site/../docs/config-cache.md",sourceDirName:".",slug:"/config-cache",permalink:"/docs/config-cache",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/docs/../docs/config-cache.md",tags:[],version:"current",lastUpdatedBy:"Brentley Jones",lastUpdatedAt:1675703053,formattedLastUpdatedAt:"2/6/2023",frontMatter:{id:"config-cache",title:"Cache Configuration",sidebar_label:"Cache"},sidebar:"someSidebar",previous:{title:"Storage",permalink:"/docs/config-storage"},next:{title:"GitHub",permalink:"/docs/config-github"}},s=[{value:"Section",id:"section",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Example section",id:"example-section",children:[{value:"Disk",id:"disk",children:[],level:3},{value:"GCS &amp; Redis (Enterprise only)",id:"gcs--redis-enterprise-only",children:[],level:3},{value:"S3 (Enterprise only)",id:"s3-enterprise-only",children:[],level:3},{value:"Minio (Enterprise only)",id:"minio-enterprise-only",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"section"},"Section"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cache:")," The cache section enables the BuildBuddy cache and configures how and where it will store data. ",(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Optional")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"max_size_bytes:")," How big to allow the cache to be (in bytes).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"in_memory:")," Whether or not to use the in_memory cache.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"zstd_transcoding_enabled"),": Whether or not to enable cache compression capabilities. You need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--experimental_remote_cache_compression")," to activate it on your build.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"disk:")," The Disk section configures a disk-based cache."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"root_directory")," The root directory to store cache data in, if using the disk cache. This directory must be readable and writable by the BuildBuddy process. The directory will be created if it does not exist.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enterprise only")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"redis_target"),": A redis target for improved RBE performance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gcs:")," The GCS section configures Google Cloud Storage based blob storage."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"bucket")," The name of the GCS bucket to store files in. Will be created if it does not already exist.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"credentials_file")," A path to a ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/getting-started"},"JSON credentials file")," that will be used to authenticate to GCS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"project_id")," The Google Cloud project ID of the project owning the above credentials and GCS bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ttl_days")," The period after which cache files should be TTLd. Disabled if 0.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"s3:")," The AWS section configures AWS S3 storage."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"region")," The AWS region")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"bucket")," The AWS S3 bucket (will be created automatically)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"credentials_profile")," If a profile other than default is chosen, use that one.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ttl_days")," The period after which cache files should be TTLd. Disabled if 0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"By default, the S3 blobstore will rely on environment variables, shared credentials, or IAM roles. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials"},"AWS Go SDK docs")," for more information."))))),(0,a.kt)("h2",{id:"example-section"},"Example section"),(0,a.kt)("h3",{id:"disk"},"Disk"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cache:\n  max_size_bytes: 10000000000  # 10 GB\n  disk:\n    root_directory: /tmp/buildbuddy-cache\n")),(0,a.kt)("h3",{id:"gcs--redis-enterprise-only"},"GCS & Redis (Enterprise only)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cache:\n  redis_target: "my-redis.local:6379"\n  gcs:\n    bucket: "buildbuddy_blobs"\n    project_id: "my-cool-project"\n    credentials_file: "enterprise/config/my-cool-project-7a9d15f66e69.json"\n    ttl_days: 30\n')),(0,a.kt)("h3",{id:"s3-enterprise-only"},"S3 (Enterprise only)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cache:\n  s3:\n    # required\n    region: "us-west-2"\n    bucket: "buildbuddy-bucket"\n    # optional\n    credentials_profile: "other-profile"\n    ttl_days: 30\n')),(0,a.kt)("h3",{id:"minio-enterprise-only"},"Minio (Enterprise only)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cache:\n  s3:\n    static_credentials_id: "YOUR_MINIO_ACCESS_KEY"\n    static_credentials_secret: "YOUR_MINIO_SECRET"\n    endpoint: "http://localhost:9000"\n    disable_ssl: true\n    s3_force_path_style: true\n    region: "us-east-1"\n    bucket: "buildbuddy-cache-bucket"\n')))}u.isMDXComponent=!0}}]);