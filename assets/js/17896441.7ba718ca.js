"use strict";(self.webpackChunkbuildbuddy_docs_website=self.webpackChunkbuildbuddy_docs_website||[]).push([[7918],{73251:function(e,t,a){a.r(t),a.d(t,{default:function(){return me}});var n=a(67294),l=a(168),r=a(44515),i=n.createContext(null);function o(e){var t=e.children,a=function(e){return(0,n.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return n.createElement(i.Provider,{value:a},t)}function c(){var e=(0,n.useContext)(i);if(null===e)throw new r.i6("DocProvider");return e}function s(){var e,t=c(),a=t.metadata,r=t.frontMatter,i=t.assets;return n.createElement(l.d,{title:a.title,description:a.description,keywords:r.keywords,image:null!=(e=i.image)?e:r.image})}var d=a(86010),m=a(92944),u=a(83117),v=a(76062),f=a(13373);function b(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(f.Z,(0,u.Z)({},t,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(f.Z,(0,u.Z)({},a,{subLabel:n.createElement(v.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function p(){var e=c().metadata;return n.createElement(b,{previous:e.previous,next:e.next})}var h=a(21199),g=a(39415),E=a(37102),L=a(56702),N=a(10932),C=a(99560);var _={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(v.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function Z(e){var t=_[e.versionMetadata.banner];return n.createElement(t,e)}function k(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(v.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(g.Z,{to:a,onClick:l},n.createElement(v.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function x(e){var t,a=e.className,l=e.versionMetadata,r=(0,h.Z)().siteConfig.title,i=(0,E.gA)({failfast:!0}).pluginId,o=(0,N.J)(i).savePreferredVersionName,c=(0,E.Jo)(i),s=c.latestDocSuggestion,m=c.latestVersionSuggestion,u=null!=s?s:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,d.Z)(a,L.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(Z,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(k,{versionLabel:m.label,to:u.path,onClick:function(){return o(m.name)}})))}function T(e){var t=e.className,a=(0,C.E)();return a.banner?n.createElement(x,{className:t,versionMetadata:a}):null}function H(e){var t=e.className,a=(0,C.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,L.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(v.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function U(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){var t=e.lastUpdatedBy;return n.createElement(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:L.k.common.lastUpdated},n.createElement(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(U,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var A=a(22297),M=a(33233),I={lastUpdated:"lastUpdated_vwxv"};function B(e){return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M.Z,e)))}function O(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,d.Z)(L.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(A.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",I.lastUpdated)},(a||l)&&n.createElement(w,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){var e=c().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,r=e.lastUpdatedBy,i=e.tags,o=i.length>0,s=!!(t||a||r);return o||s?n.createElement("footer",{className:(0,d.Z)(L.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(B,{tags:i}),s&&n.createElement(O,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var P=a(48924),S=a(90743),R=a(80102),D={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"},F=["collapsed"];function z(e){var t=e.collapsed,a=(0,R.Z)(e,F);return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",D.tocCollapsibleButton,!t&&D.tocCollapsibleButtonExpanded,a.className)}),n.createElement(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}var j={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){var t=e.toc,a=e.className,l=e.minHeadingLevel,r=e.maxHeadingLevel,i=(0,P.u)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,d.Z)(j.tocCollapsible,!o&&j.tocCollapsibleExpanded,a)},n.createElement(z,{collapsed:o,onClick:c}),n.createElement(P.z,{lazy:!0,className:j.tocCollapsibleContent,collapsed:o},n.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}var G={tocMobile:"tocMobile_ITEo"};function W(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(q,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,d.Z)(L.k.docs.docTocMobile,G.tocMobile)})}var J=a(93384);function Q(){var e=c(),t=e.toc,a=e.frontMatter;return n.createElement(J.Z,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:L.k.docs.docTocDesktop})}var X=a(36775),Y=a(13132);function K(e){var t,a,l,r,i=e.children,o=(t=c(),a=t.metadata,l=t.frontMatter,r=t.contentTitle,l.hide_title||void 0!==r?null:a.title);return n.createElement("div",{className:(0,d.Z)(L.k.docs.docMarkdown,"markdown")},o&&n.createElement("header",null,n.createElement(X.Z,{as:"h1"},o)),n.createElement(Y.Z,null,i))}var $=a(29404),ee=a(86224),te=a(4132);function ae(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var ne={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function le(){var e=(0,te.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(g.Z,{"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ae,{className:ne.breadcrumbHomeIcon})))}var re={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ie(e){var t=e.children,a=e.href,l="breadcrumbs__link";return e.isLast?n.createElement("span",{className:l,itemProp:"name"},t):a?n.createElement(g.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l},t)}function oe(e){var t=e.children,a=e.active,l=e.index,r=e.addMicrodata;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function ce(){var e=(0,$.s1)(),t=(0,ee.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(L.k.docs.docBreadcrumbs,re.breadcrumbsContainer),"aria-label":(0,v.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(le,null),e.map((function(t,a){var l=a===e.length-1;return n.createElement(oe,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(ie,{href:t.href,isLast:l},t.label))})))):null}var se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function de(e){var t,a,l,r,i,o,s=e.children,u=(t=c(),a=t.frontMatter,l=t.toc,r=(0,m.i)(),i=a.hide_table_of_contents,o=!i&&l.length>0,{hidden:i,mobile:o?n.createElement(W,null):void 0,desktop:!o||"desktop"!==r&&"ssr"!==r?void 0:n.createElement(Q,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!u.hidden&&se.docItemCol)},n.createElement(T,null),n.createElement("div",{className:se.docItemContainer},n.createElement("article",null,n.createElement(ce,null),n.createElement(H,null),u.mobile,n.createElement(K,null,s),n.createElement(V,null)),n.createElement(p,null))),u.desktop&&n.createElement("div",{className:"col col--3"},u.desktop))}function me(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(s,null),n.createElement(de,null,n.createElement(a,null))))}},22297:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(76062),r=a(56702),i=a(83117),o=a(80102),c=a(86010),s={iconEdit:"iconEdit_Z9Sw"},d=["className"];function m(e){var t=e.className,a=(0,o.Z)(e,d);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,c.Z)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(m,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},13132:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(3905),r=a(78426);function i(e){var t=e.children;return n.createElement(l.Zo,{components:r.Z},t)}},13373:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(86010),r=a(39415);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,o=e.isNext;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},93384:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(83117),l=a(80102),r=a(67294),i=a(86010),o=a(90743),c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s=["className"],d="table-of-contents__link toc-highlight",m="table-of-contents__link--active";function u(e){var t=e.className,a=(0,l.Z)(e,s);return r.createElement("div",{className:(0,i.Z)(c.tableOfContents,"thin-scrollbar",t)},r.createElement(o.Z,(0,n.Z)({},a,{linkClassName:d,linkActiveClassName:m})))}},90743:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(83117),l=a(80102),r=a(67294),i=a(89989),o=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),a=Array(7).fill(-1);t.forEach((function(e,t){var n=a.slice(2,e.level);e.parentIndex=Math.max.apply(Math,n),a[e.level]=t}));var n=[];return t.forEach((function(e){var a=e.parentIndex,r=(0,l.Z)(e,o);a>=0?t[a].children.push(r):n.push(r)})),n}function s(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[Object.assign({},e,{children:t})]:t}))}function d(e){var t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function m(e,t){var a,n,l=t.anchorTopOffset,r=e.find((function(e){return d(e).top>=l}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(r))?r:null!=(n=e[e.indexOf(r)-1])?n:null:null!=(a=e[e.length-1])?a:null}function u(){var e=(0,r.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,r.useRef)(void 0),a=u();(0,r.useEffect)((function(){if(!e)return function(){};var n=e.linkClassName,l=e.linkActiveClassName,r=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),o=function(e){for(var t=e.minHeadingLevel,a=e.maxHeadingLevel,n=[],l=t;l<=a;l+=1)n.push("h"+l+".anchor");return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),c=m(o,{anchorTopOffset:a.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,a])}function f(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(f,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var b=r.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,a=e.className,o=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,f=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,E=(0,l.Z)(e,p),L=(0,i.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,C=null!=g?g:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,a=e.minHeadingLevel,n=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:c(t),minHeadingLevel:a,maxHeadingLevel:n})}),[t,a,n])}({toc:t,minHeadingLevel:N,maxHeadingLevel:C});return v((0,r.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:C}}),[m,f,N,C])),r.createElement(b,(0,n.Z)({toc:_,className:o,linkClassName:m},E))}},33233:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(67294),l=a(86010),r=a(76062),i=a(39415),o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){var t=e.permalink,a=e.label,r=e.count;return n.createElement(i.Z,{href:t,className:(0,l.Z)(o.tag,r?o.tagWithCount:o.tagRegular)},a,r&&n.createElement("span",null,r))}var s={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s.tag},n.createElement(c,{label:t,permalink:a}))}))))}},99560:function(e,t,a){a.d(t,{E:function(){return o},q:function(){return i}});var n=a(67294),l=a(44515),r=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);