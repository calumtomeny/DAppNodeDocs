"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2587],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||l[g]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6739:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const o={},i="Packages View",c={unversionedId:"user-guide/ui/packages",id:"user-guide/ui/packages",title:"Packages View",description:"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/packages.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/packages",permalink:"/es/user-guide/ui/packages",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/user-guide/ui/packages.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAppStore View",permalink:"/es/user-guide/ui/dappstore"},next:{title:"DAppNode Explorer",permalink:"/es/user-guide/ui/explorer"}},s={},p=[{value:"My packages",id:"my-packages",level:2},{value:"System packages",id:"system-packages",level:2}],u={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packages-view"},"Packages View"),(0,a.kt)("p",null,"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STATUS"),": indicate the state of the package, they can be 3: Running, Crashed and Stopped. Running mean is turned on. Crashed means the package has suffered some error and it's stopped. Stopped means the container has been stopped by the user."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": it's the name of the package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Link to de package view"),": click on it to go to the package view in case you want to check some parameter or set up something related to the package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Restart package"),": restart all the package, it means all the containers of the package are restarted.")),(0,a.kt)("h2",{id:"my-packages"},"My packages"),(0,a.kt)("p",null,"My packages refers to the packages the user have installed and they are not essential for the performance of DAppNode."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/packages_view_1.png"})),(0,a.kt)("h2",{id:"system-packages"},"System packages"),(0,a.kt)("p",null,"They are the packages that are essential for DAppNode or including a feature that is so important for DAppNode."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/packages_view_2.png"})))}l.isMDXComponent=!0}}]);