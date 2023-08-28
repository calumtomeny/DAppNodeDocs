"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[839],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,y=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={},s="VPN Access to Dappnode",p={unversionedId:"user/access-your-dappnode/vpn/overview",id:"user/access-your-dappnode/vpn/overview",title:"VPN Access to Dappnode",description:"Virtual Private Network (VPN) is a robust method for accessing your Dappnode. It ensures a secure and encrypted connection between your device and the Dappnode, allowing you to manage your Dappnode from virtually anywhere. Depending on your needs and preferences, Dappnode offers support for two primary VPN technologies: WireGuard and OpenVPN.",source:"@site/docs/user/access-your-dappnode/vpn/overview.md",sourceDirName:"user/access-your-dappnode/vpn",slug:"/user/access-your-dappnode/vpn/overview",permalink:"/DAppNodeDocs/docs/user/access-your-dappnode/vpn/overview",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/access-your-dappnode/vpn/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Wi-Fi Access to Dappnode",permalink:"/DAppNodeDocs/docs/user/access-your-dappnode/wifi"},next:{title:"WireGuard Access to Dappnode",permalink:"/DAppNodeDocs/docs/user/access-your-dappnode/vpn/wireguard"}},i={},c=[{value:"VPN Clients",id:"vpn-clients",level:2},{value:"WireGuard (Recommended)",id:"wireguard-recommended",level:3},{value:"OpenVPN",id:"openvpn",level:3},{value:"Local vs. Remote Access",id:"local-vs-remote-access",level:2}],d={toc:c},u="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vpn-access-to-dappnode"},"VPN Access to Dappnode"),(0,o.kt)("p",null,"Virtual Private Network (VPN) is a robust method for accessing your Dappnode. It ensures a secure and encrypted connection between your device and the Dappnode, allowing you to manage your Dappnode from virtually anywhere. Depending on your needs and preferences, Dappnode offers support for two primary VPN technologies: ",(0,o.kt)("strong",{parentName:"p"},"WireGuard")," and ",(0,o.kt)("strong",{parentName:"p"},"OpenVPN"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is not possible to use both Dappnode WiFi hotspot and VPN at the same time. If you want to use VPN, you'll need to disconnect your device from the WiFi hotspot.")),(0,o.kt)("h2",{id:"vpn-clients"},"VPN Clients"),(0,o.kt)("h3",{id:"wireguard-recommended"},(0,o.kt)("a",{parentName:"h3",href:"/docs/user/access-your-dappnode/vpn/wireguard"},"WireGuard")," (Recommended)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WireGuard is a newer, streamlined VPN protocol known for its simplicity, speed, and security."),(0,o.kt)("li",{parentName:"ul"},"It requires less configuration and is considered more efficient in terms of CPU usage. ",(0,o.kt)("a",{parentName:"li",href:"https://www.wireguard.com/"},"Learn more"))),(0,o.kt)("h3",{id:"openvpn"},(0,o.kt)("a",{parentName:"h3",href:"/docs/user/access-your-dappnode/vpn/openvpn"},"OpenVPN")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OpenVPN is a well-established VPN protocol praised for its security and reliability."),(0,o.kt)("li",{parentName:"ul"},"It's more versatile and can bypass most network restrictions and firewalls. ",(0,o.kt)("a",{parentName:"li",href:"https://openvpn.net/"},"Learn more"))),(0,o.kt)("h2",{id:"local-vs-remote-access"},"Local vs. Remote Access"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Local Access"),": Connecting to your Dappnode when you're on the same local network. Generally, this means that your Dappnode machine and the device you're using to access it are connected to the same router."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Remote Access"),": Connecting to your Dappnode from a different network or location. This is one of the major advantages of using a VPN.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"VPN provides a balance of security, versatility, and remote access capability. You can choose the VPN technology that best suits your needs and preferences, both fufill the requirements of most users.")))}l.isMDXComponent=!0}}]);