"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7411],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var n=r(3117),o=(r(7294),r(3905));const a={},i="Overview",s={unversionedId:"user-guide/overview",id:"user-guide/overview",title:"Overview",description:"This user guide has the objective to explain how the interface works.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/overview.md",sourceDirName:"user-guide",slug:"/user-guide/overview",permalink:"/fr/user-guide/overview",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/fr/get-started/installation/arm-hardware/installation"},next:{title:"Local Proxy",permalink:"/fr/user-guide/ui/access/local-proxy"}},u={},c=[{value:"General structure",id:"general-structure",level:2}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This user guide has the objective to explain how the interface works."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Access your DAppNode"),": here you can learn how to access your dappnode and how to set up the different kind of access. It's not necessary to set up all the access. From DAppNode, we recommend setting up the basic access via local-proxy, wifi. And in the future try to set up VPN access in case you want.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Initial Configurations(Mandatory)"),": After installing DAppNode and get access to the interface, it's required to set up some aspects of your DAppNode. This section will help you to decide every option and set up the basics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Recommended Set Ups (Optional)"),": It would be great if you use some of these features. Furthermore, you can understand some technical aspects of DAppNode and how it works behind the scenes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Views"),": If you want to know what is some button or some interface part, you can go to the specific page you want to check and in the correspondent page, for example, System View, you will be able to read all the available options and a description of it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Support"),": If you need some help, in this section you can look for your question on the FAQ's, and find where you can contact the DAppNode team."))),(0,o.kt)("h2",{id:"general-structure"},"General structure"),(0,o.kt)("p",null,"The different subsections are ordered by difficulty and recommendations. For example; access your dappnode: the first method local proxy is the easiest for the user, wifi is the second one and if you are an advanced user or you want to access via VPN you have a guide explaining how to do it. The objective is not to do all the guides, otherwise, teach the user what he can do and how to do it."))}l.isMDXComponent=!0}}]);