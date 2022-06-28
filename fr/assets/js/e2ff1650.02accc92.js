"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,f=c["".concat(l,".").concat(g)]||c[g]||s[g]||a;return n?r.createElement(f,u(u({ref:t},d),{},{components:n})):r.createElement(f,u({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9815:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={},u="VPN view",o={unversionedId:"user-guide/ui/vpn",id:"user-guide/ui/vpn",title:"VPN view",description:"This page can be a bit different depending on how you have installed DAppNode or what packages are installed.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/vpn.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/vpn",permalink:"/fr/user-guide/ui/vpn",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/vpn.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Wifi view",permalink:"/fr/user-guide/ui/wi-fi"},next:{title:"DAppStore View",permalink:"/fr/user-guide/ui/dappstore"}},l={},p=[{value:"OpenVpn",id:"openvpn",level:2},{value:"Wireguard",id:"wireguard",level:2},{value:"Wireguard is not installed",id:"wireguard-is-not-installed",level:3},{value:"Wireguard is installed",id:"wireguard-is-installed",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vpn-view"},"VPN view"),(0,i.kt)("p",null,"This page can be a bit different depending on how you have installed DAppNode or what packages are installed."),(0,i.kt)("p",null,"There are 2 tabs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenVpn"),(0,i.kt)("li",{parentName:"ul"},"Wireguard")),(0,i.kt)("h2",{id:"openvpn"},"OpenVpn"),(0,i.kt)("p",null,"OpenVPN is installed by default. You will see the next image."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/openvpn_view_1.png"})),(0,i.kt)("p",null,"The options are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Credentials"),": Get linkutdated and it does not matter now."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset"),": Remove and create new credentials for OpenVPN."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remove"),": Remove the configurations of the device you select.")),(0,i.kt)("p",null,"You have a full guide about how to set up OpenVPN and the OpenVPN client ",(0,i.kt)("a",{parentName:"p",href:"./recommended-set-ups/add-vpn-devices"},"here"),"."),(0,i.kt)("h2",{id:"wireguard"},"Wireguard"),(0,i.kt)("h3",{id:"wireguard-is-not-installed"},"Wireguard is not installed"),(0,i.kt)("p",null,"In this case, wireguard is not installed in your DAppNode. You can do it by clicking on the link that appears."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/wireguard_view_1.png"})),(0,i.kt)("h3",{id:"wireguard-is-installed"},"Wireguard is installed"),(0,i.kt)("p",null,"If the Wireguard package is installed you will see something like the following screen."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"../../../img/wireguard_view_1.png"})),(0,i.kt)("p",null,"You have a full guide about how to set up Wireguard and the Wireguard client ",(0,i.kt)("a",{parentName:"p",href:"./recommended-set-ups/add-vpn-devices"},"here"),"."))}s.isMDXComponent=!0}}]);