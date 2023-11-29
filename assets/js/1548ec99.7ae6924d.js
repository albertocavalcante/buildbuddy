"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[4255],{2694:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(85893),a=i(11151);const o={slug:"image-streaming",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',author:"Iain Macdonald",author_title:"Software Engineer @ BuildBuddy",date:"2023-11-15:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/container-image-streaming.webp",tags:["product","engineering","performance"]},r=void 0,s={permalink:"/blog/image-streaming",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/container-image-streaming.md",source:"@site/blog/container-image-streaming.md",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',date:"2023-11-15T12:00:00.000Z",formattedDate:"November 15, 2023",tags:[{label:"product",permalink:"/blog/tags/product"},{label:"engineering",permalink:"/blog/tags/engineering"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:8.415,hasTruncateMarker:!0,authors:[{name:"Iain Macdonald",title:"Software Engineer @ BuildBuddy",url:"https://www.linkedin.com/in/macdonaldi/",imageURL:"https://avatars.githubusercontent.com/u/455246?v=4"}],frontMatter:{slug:"image-streaming",title:"Lazily Pulling Container Images with Podman and SOCI Snapshotter",description:'We\u2019re excited to share how we\'re making "podman pull" ten times faster by lazily fetching container images using the SOCI Snapshotter.',author:"Iain Macdonald",author_title:"Software Engineer @ BuildBuddy",date:"2023-11-15:12:00:00",author_url:"https://www.linkedin.com/in/macdonaldi/",author_image_url:"https://avatars.githubusercontent.com/u/455246?v=4",image:"/img/blog/container-image-streaming.webp",tags:["product","engineering","performance"]},unlisted:!1,nextItem:{title:"Bazelcon 2023 Recap",permalink:"/blog/bazelcon-2023"}},d={authorsImageUrls:[void 0]},c=[{value:"Containerization",id:"containerization",level:2},{value:"SOCI Snapshotter",id:"soci-snapshotter",level:2},{value:"BuildBuddy + SOCI Snapshotter",id:"buildbuddy--soci-snapshotter",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Cache Eviction",id:"cache-eviction",level:2},{value:"Bugs!",id:"bugs",level:2},{value:"Performance",id:"performance",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"We\u2019re excited to announce a podman performance improvement that makes pulling container images about ten times faster on BuildBuddy\u2019s hosted execution service, lowering customer build and test times and improving our ability to autoscale the BuildBuddy executor pool. Read on for the nitty-gritty details."}),"\n",(0,n.jsx)(t.h2,{id:"containerization",children:"Containerization"}),"\n",(0,n.jsx)(t.p,{children:"At BuildBuddy, we use containers to isolate actions and support arbitrary code execution on our hosted remote execution service. In production we use Podman as our default container runtime, but we support Docker and Firecracker as well. One significant challenge we encounter with our container setup is that pulling a container image after cold start can be quite slow. Our executor images are about one gigabyte and it typically takes about 30 seconds to pull and extract them in our GCP production environment. Some client-provided images tip the scales at over 10GB and can take minutes to pull and extract."}),"\n",(0,n.jsx)(t.p,{children:"Not only does significant image pull latency directly slow down customer builds and tests, it also limits our ability to autoscale the executor pool and respond to heavy load. When new BuildBuddy executors start up, they pull container images as needed. This means the first action using an image that runs on an executor incurs the latency of pulling that image and blocks other queued actions using the same image. So the faster we can pull container images the faster we can spin up new executors and start running customer-submitted actions. We could address this problem by always running more executors, or preemptively scaling the executor pool during peak hours, but at best these tricks only partially solve this problem and have other drawbacks."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/nttlabs/startup-containers-in-lightning-speed-with-lazy-image-distribution-on-containerd-243d94522361",children:"Lazy image distribution"})," provides a more promising solution. The premise is that most parts of a container image are unnecessary for most container runs, so instead of eagerly fetching the entire image upfront, pieces of the image\u2019s layers can be retrieved by the container runtime as needed. The ",(0,n.jsx)(t.a,{href:"https://github.com/containerd/stargz-snapshotter",children:"stargz-snapshotter"})," implements a lazy image fetcher based on the eStargz custom image format, and the ",(0,n.jsx)(t.a,{href:"https://github.com/awslabs/soci-snapshotter",children:"soci-snapshotter"})," provides one based on the OCI specification for those who can\u2019t or don\u2019t want to convert images to a new format to support lazy distribution."]}),"\n",(0,n.jsx)(t.h2,{id:"soci-snapshotter",children:"SOCI Snapshotter"}),"\n",(0,n.jsxs)(t.p,{children:['The SOCI Snapshotter acts as a local container layer store that containerd can use to retrieve image layers in place of the remote registry. Lazily fetched images must be indexed, which involves creating a zip table of contents (ZToC) indexing the contents of each container image layer, and bundling these ZToCs in a json file called the "SOCI Index" that associates ZToCs with the layers they index. Given an image, the ',(0,n.jsx)(t.code,{children:"soci create"})," tool takes care of creating all of these artifacts. Once these ZToCs and the SOCI Index are created, most snapshotter users will push these artifacts to the remote container registry where they\u2019re associated with the container image using either the referrers API or a fallback mechanism involving tags. Then, other SOCI Snapshotter instances can retrieve the SOCI Index and ZToCs and use those to determine where container fileystem locations exist in each layer's targz file and fetch only parts of the layer files as needed."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(65056).Z+"",width:"2391",height:"866"}),"\n",(0,n.jsx)(t.em,{children:"A typical soci-snapshotter setup. SOCI artifacts are stored in and retrieved from the container registry and used to lazily pull parts of the image as needed."})]}),"\n",(0,n.jsx)(t.h2,{id:"buildbuddy--soci-snapshotter",children:"BuildBuddy + SOCI Snapshotter"}),"\n",(0,n.jsx)(t.p,{children:"We have a couple of caveats that prevent us from using the SOCI Snapshotter with BuildBuddy executors out-of-the-box. First, we'd like to continue to use Podman as our default container runtime, and second, we want to support lazy image distribution for container images in read-only registries -- requiring our customers to either give us write access to their container registries or add an additional image indexing step to their image deployments is a nonstarter for us."}),"\n",(0,n.jsxs)(t.p,{children:["We solved the first problem by porting the Podman support in the stargz-snapshotter to the soci-snapshotter. This involved creating a new binary in the SOCI Snapshotter, the ",(0,n.jsx)(t.code,{children:"soci-store"}),", and hooking that up to run the ",(0,n.jsx)(t.a,{href:"https://github.com/containerd/stargz-snapshotter/blob/main/store/fs.go",children:"store/fs.go"})," filesystem implementation."]}),"\n",(0,n.jsxs)(t.p,{children:["The second problem posed a little bit more of a challenge. We needed a different mechanism for storing the SOCI Index, ZToCs, and the association between a container image and its SOCI Index. Fortunately for us, the SOCI artifacts (Index and ZToCs) are content-addressable and we know how to store ",(0,n.jsx)(t.a,{href:"https://bazel.build/remote/caching",children:"content-addressable blobs"}),"! The final piece, the association between the image and its SOCI Index, isn\u2019t content-addressable, it\u2019s just a string-to-string mapping. But the BuildBuddy cache also supports storing non-content-addressable contents keyed by a hash. So we store the image-to-index mapping by salting and hashing the image identifier, to support versioning, and adding a cache entry under that key with a value containing the digest of the SOCI Index, which is retrievable from the content-addressable store."]}),"\n",(0,n.jsx)(t.p,{children:"To support all of these modifications, we added a bit of logic to the snapshotter that attempts to retrieve artifacts from the local filesystem before the remote registry and supports reading the image-to-index mapping from the local filesystem under a special directory, again keyed by the image identifier. Finally, we set up the app and executor to look for all of these artifacts in the cache, generate them if they\u2019re not present, and store them on the local filesystem so the snapshotter can do its thing."}),"\n",(0,n.jsxs)(t.p,{children:["The modified soci-snapshotter is available at ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/soci-snapshotter",children:"github.com/buildbuddy-io/soci-snapshotter"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(10535).Z+"",width:"2087",height:"772"}),"\n",(0,n.jsx)(t.em,{children:"The BuildBuddy + soci-snapshotter setup. SOCI artifacts are generated on-demand in the App, stored in the cache, and retrieved by the Executor as needed."})]}),"\n",(0,n.jsx)(t.h2,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsxs)(t.p,{children:["Many of our customer\u2019s container images are password protected in the container registry. We share user-provided registry credentials between the executors and the soci-snapshotter so the snapshotter can fetch registry artifacts as needed, but these credentials expire after a short time period. The setup described here doesn\u2019t permit any unauthorized access to container images or their derived artifacts. The SOCI artifacts are only generated and retrieved for authorized image pull operations, just like standard ",(0,n.jsx)(t.code,{children:"podman pull"})," requests."]}),"\n",(0,n.jsx)(t.h2,{id:"cache-eviction",children:"Cache Eviction"}),"\n",(0,n.jsx)(t.p,{children:"We continuously evict the oldest unused artifacts from the BuildBuddy caches to make room for fresh data, and SOCI artifacts are no exception to this. Fortunately, the average last-access-time (including reads) of evicted items for most customers is old enough that only artifacts for rarely pulled container images are affected. Container images used regularly in remote execution or CI only require re-indexing except after being updated in the container registry."}),"\n",(0,n.jsx)(t.h2,{id:"bugs",children:"Bugs!"}),"\n",(0,n.jsxs)(t.p,{children:["After initially rolling out lazy image distribution to our executors, we saw intermittent build and test failures due to ",(0,n.jsx)(t.code,{children:"Input/output errors"})," running binaries inside of containers. We tracked this down to ",(0,n.jsx)(t.a,{href:"https://github.com/containerd/containerd/issues/6377",children:"a bug"})," in the containerd docker authorization library that caused it to re-use expired authentication tokens a bit too eagerly. Fortunately, there was a pretty straightforward ",(0,n.jsx)(t.a,{href:"https://github.com/buildbuddy-io/soci-snapshotter/pull/2",children:"workaround"})," while we wait for an ",(0,n.jsx)(t.a,{href:"https://github.com/containerd/containerd/pull/8735/files",children:"upstream fix"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["We also observed occasional panics in the soci-store running in our development and production setups. To gather more data, we ran a version compiled with the go race detector in our development environment for a few weeks and tracked down two sources of these panics. First, we observed unprotected multithreaded access to data cached in in-memory inodes which was easily fixed by protecting those accesses with a mutex, a change that we ",(0,n.jsx)(t.a,{href:"https://github.com/awslabs/soci-snapshotter/pull/833",children:"pushed upstream"}),". We noticed this issue before the upstream maintainers because we concurrently pull two container images on executor startup, sometimes within less than a millisecond, a behavior that exacerbates latent multithreading bugs like this. And second, both the soci-store and the SOCI Snapshotter were affected by a bug in the go-fuse library that caused them to return incorrect values for some ",(0,n.jsx)(t.code,{children:"Lseek"})," calls. This lead to out-of-bounds reads of soci-store in-memory files, and panics. This was easily fixed by upgrading the soci-store's go-fuse dependency past ",(0,n.jsx)(t.a,{href:"https://github.com/hanwen/go-fuse/pull/488",children:"github.com/hanwen/go-fuse/pull/488"})," which fixed the bug. Interestingly, this bug ",(0,n.jsx)(t.a,{href:"https://github.com/awslabs/soci-snapshotter/issues/829",children:"manifested slightly differently"})," in the SOCI Snapshotter, but thankfully the same solution addressed both symptoms. Both of these bugs occurred pretty infrequently and were difficult to reproduce, so we were thankful for the additional information from the go race detector."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, we encountered issues caused by private container registry credentials expiring mid-run. We were able to fix these problems by hooking up the background layer fetcher in the SOCI Snapshotter with the newly introduced soci-store binary, reducing the likelihood that a container layer part will be requested after the supplied credentials have expired."}),"\n",(0,n.jsx)(t.h2,{id:"performance",children:"Performance"}),"\n",(0,n.jsx)(t.p,{children:"We've been using the lazy image distribution mechanism described here in our development environment for a few months and have observed an almost tenfold decrease in image pull latency after cold start, from about 30 seconds to about 4 seconds for our executor images in the common case where the SOCI artifacts are available in the cache. In the rare case where the SOCI artifacts are unavailable, container image setup is about 10% slower due to the need to pull the image, index it, and fetch the SOCI artifacts from the executor. After testing this setup in dev, we rolled it out to all BuildBuddy cloud customers in two phases. Earlier this summer we enabled lazy image distribution for all publicly pullable container images and this month we enabled it for images stored in private container image registries. We've observed the same almost tenfold decrease in image pull latency for customer images with no action required by our customers."}),"\n",(0,n.jsx)(t.p,{children:"Because lazy image distribution defers layer fetching from pull-time to run-time, it's expected that some container run operations are slightly slower -- specifically, when part of a layer is needed but not available locally, it must be fetched from the remote registry at run-time. Fortunately, our container operation throughput is high enough that this performance penalty isn't noticeable in our environment."}),"\n",(0,n.jsx)(t.p,{children:"We\u2019re excited about the promise of lazily fetching remote resources in more circumstances and hope to build on what we've learned from this project to continue to improve the BuildBuddy remote-execution platform."}),"\n",(0,n.jsxs)(t.p,{children:["If you want to learn more about BuildBuddy\u2019s remote execution service or any of the other features we offer, or give them a try, check out our ",(0,n.jsx)(t.a,{href:"https://www.buildbuddy.io/docs/introduction/",children:"documentation"}),". And if this sort of engineering challenge sounds interesting, ",(0,n.jsx)(t.a,{href:"https://www.buildbuddy.io/careers/",children:"we\u2019re hiring"}),"!"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},10535:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/soci-snapshotter-buildbuddy-087b5c103c0a18dec7b4bb12f40278c7.webp"},65056:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/soci-snapshotter-dd9b960d8c21cadbf2f44559f0e683fe.webp"},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(67294);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);