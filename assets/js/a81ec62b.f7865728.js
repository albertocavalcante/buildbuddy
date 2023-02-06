"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[2853],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return d},toc:function(){return p},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],l={slug:"introducing-rules_xcodeproj-1-0",title:"Introducing rules_xcodeproj 1.0",description:"How we got here and what\u2019s next.",author:"Brentley Jones",author_title:"Developer Evangelist @ BuildBuddy",date:"2023-02-06:9:00:00",author_url:"https://brentleyjones.com",author_image_url:"https://avatars.githubusercontent.com/u/158658?v=4",image:"/img/rules_xcodeproj_1_0.png",tags:["rules_xcodeproj"]},u=void 0,s={permalink:"/blog/introducing-rules_xcodeproj-1-0",editUrl:"https://github.com/buildbuddy-io/buildbuddy/edit/master/website/blog/introducing-rules_xcodeproj-1-0.md",source:"@site/blog/introducing-rules_xcodeproj-1-0.md",title:"Introducing rules_xcodeproj 1.0",description:"How we got here and what\u2019s next.",date:"2023-02-06T09:00:00.000Z",formattedDate:"February 6, 2023",tags:[{label:"rules_xcodeproj",permalink:"/blog/tags/rules-xcodeproj"}],readingTime:3.745,truncated:!0,authors:[{name:"Brentley Jones",title:"Developer Evangelist @ BuildBuddy",url:"https://brentleyjones.com",imageURL:"https://avatars.githubusercontent.com/u/158658?v=4"}],nextItem:{title:"Welcoming Son Luong Ngoc",permalink:"/blog/welcoming-son-luong-ngoc"}},d={authorsImageUrls:[void 0]},p=[{value:"The road to 1.0",id:"the-road-to-10",children:[],level:2},{value:"What\u2019s next?",id:"whats-next",children:[],level:2},{value:"Thank you",id:"thank-you",children:[],level:2}],c={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Almost exactly one year ago I wrote the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/rules_xcodeproj/commit/0bb516569aee5dd49b004c89a761b5d186f25b15"},"first commit")," for\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/rules_xcodeproj"},"rules_xcodeproj"),". Like a lot of software engineers, I\u2019m pretty\nbad at estimating, and thought that I would be able to finish 1.0 in 2 to 4\nmonths \ud83d\ude05. The longer development cycle was a result of an increased scope and\nlevel of quality that I came to expect for a proper 1.0 release. Over the course\nof the year, I believe the project has risen to meet my expectations, and today\nI\u2019m happy to announce the release of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/rules_xcodeproj/releases/tag/1.0.1"},"version 1.0")," of\nrules_xcodeproj!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{alt:"Screenshot of a rules_xcodeproj generated project open in Xcode",src:"/img/blog/rules_xcodeproj_screenshot.png",width:"1245"})),(0,a.kt)("h2",{id:"the-road-to-10"},"The road to 1.0"),(0,a.kt)("p",null,"The road to 1.0 has been an incredible journey. Early in the development cycle\nSpotify, Robinhood, and Slack engineers became adopters and contributors;\nwithout their help I wouldn\u2019t be writing this blog post today \ud83d\ude4f.\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jpsim"},"JP")," became a vocal champion of rules_xcodeproj after\nintegrating it with the SwiftLint and Envoy Mobile projects. During BazelCon\n2022 the project got a couple shout-outs, including during\n",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/wy3Q38VJ5uQ?t=1209"},"Erik\u2019s wonderful talk"),". And I\u2019m also\nincredibly grateful that I was able to\n",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/B__SHnz3K3c"},"present rules_xcodeproj itself")," at the same\nconference."),(0,a.kt)("p",null,"Deciding what was ",(0,a.kt)("em",{parentName:"p"},"actually")," important for the 1.0 release shifted throughout\nthe year. Some things that I initially thought were \u201cnice to haves\u201d, such as\nframework targets and comprehensive ruleset support, became \u201cblockers\u201d for the\nrelease. Other things that I was sure we would need before releasing, such as\nmultiple Xcode configurations (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Profile"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Release"),"),\ndiagnostic replaying, and BwX feature parity, ended up not being as important\n(though don\u2019t worry if you are wanting some of those things, we aren\u2019t done\nyet!)."),(0,a.kt)("p",null,"The supported feature list also expanded throughout the year. It went from just\nneeding to support the Core C/C++/Objective-C, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/rules_swift"},"rules_swift"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/rules_apple"},"rules_apple")," rules, to supporting nearly any ruleset. Also,\noutside contributors made their mark: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cgrindel"},"Chuck")," added\nsupport for custom Xcode schemes; ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chiragramani"},"Chirag"),"\nadded support for Runtime Sanitizers; ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/maxwellE"},"Maxwell"),"\nadded support for Launch, Profile, and Test action environment variables and\ncommand-line arguments; ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thii"},"Thi")," contributed BwB mode\nspeed-ups and assisted with landing many more efficiency changes; and many\nothers helped me test changes on their varied and complex projects. Overall\nthese contributions, both in actual code and in invaluable time, allowed\nrules_xcodepoj to be what it is today. Without this community effort the scope\nand quality of the 1.0 release wouldn\u2019t be at the same level."),(0,a.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,a.kt)("p",null,"While the 1.0 release marks a certain level \u201cdoneness\u201d, there is still a lot we\nwant to add and improve. When I\n",(0,a.kt)("a",{parentName:"p",href:"/blog/meet-rules_xcodeproj"},"announced rules_xcodeproj"),", I listed a set of\nrequirements that other projects didn\u2019t fulfill, and I stated that I wanted\nrules_xcodeproj to cover all of them. I feel that with the 1.0 release we still\nhave a little ways to go to fully cover those requirements; though some\nwill have to be in spirit instead of to the letter, as Bazel and Xcode proved\nto be more stubborn than I expected."),(0,a.kt)("p",null,"Here\u2019s a list of changes that I hope we can implement in the near future:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An additional build mode, currently called \u201cBuild with Bazel via Proxy\u201d\n(BwBvP)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Uses ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/MobileNativeFoundation/XCBBuildServiceProxyKit"},"XCBBuildServiceProxyKit")," to create an\nXCBBuildService proxy"),(0,a.kt)("li",{parentName:"ul"},"Adds replaying of diagnostics, which removes duplicate errors/warnings,\npersists warnings, and enables Fix-Its"),(0,a.kt)("li",{parentName:"ul"},"Produces a custom Build Report, removing noise from the logs, and fixing the\nprogress bar"))),(0,a.kt)("li",{parentName:"ul"},"BwB or BwBvP support for Xcode features that break with relative paths",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Source code viewer in Instruments"),(0,a.kt)("li",{parentName:"ul"},"Undefined Behavior Sanitizer navigation"),(0,a.kt)("li",{parentName:"ul"},"Thread Performance Checker navigation"),(0,a.kt)("li",{parentName:"ul"},"Memory Graph Analyzer with Malloc stack logging navigation"),(0,a.kt)("li",{parentName:"ul"},"Inline code coverage"))),(0,a.kt)("li",{parentName:"ul"},"Support for multiple Xcode configurations")),(0,a.kt)("h2",{id:"thank-you"},"Thank you"),(0,a.kt)("p",null,"Once again, I would like to thank all of the contributors and users we\u2019ve gained\nthroughout the last year. Hopefully you are as proud of the 1.0 release as I am.\nAnd for anyone reading that hasn\u2019t tried rules_xcodeproj yet, or it didn\u2019t meet\nyour requirements in an earlier release, I invite you to give it a shot now."),(0,a.kt)("p",null,"If you run into any problems with rules_xcodeproj, please check if\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/rules_xcodeproj/issues"},"another issue already exists")," and comment on it, and if not,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/buildbuddy-io/rules_xcodeproj/issues/new/choose"},"file an issue"),"! You can also join us in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#rules_xcodeproj"),"\nchannel in the ",(0,a.kt)("a",{parentName:"p",href:"https://slack.bazel.build/"},"Bazel Slack workspace"),", and you can email us at\n",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@buildbuddy.io"},"hello@buildbuddy.io")," with any questions, comments, or thoughts."))}h.isMDXComponent=!0}}]);