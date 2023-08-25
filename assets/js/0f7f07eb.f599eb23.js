"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7675],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(y,s(s({ref:t},l),{},{components:n})):a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={},s="Terminal Access to Dappnode",i={unversionedId:"user/access-your-dappnode/terminal",id:"user/access-your-dappnode/terminal",title:"Terminal Access to Dappnode",description:"Accessing the terminal of your Dappnode, often referred to as the command-line interface (CLI), provides deep control and management capabilities. However, this method is considered advanced and requires familiarity with command line interactions. Incorrect or misguided commands can lead to unintended changes or potential system damage.",source:"@site/docs/user/access-your-dappnode/terminal.md",sourceDirName:"user/access-your-dappnode",slug:"/user/access-your-dappnode/terminal",permalink:"/docs/user/access-your-dappnode/terminal",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/access-your-dappnode/terminal.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"OpenVPN Access to Dappnode",permalink:"/docs/user/access-your-dappnode/vpn/openvpn"},next:{title:"Local Proxy Access to Dappnode",permalink:"/docs/user/access-your-dappnode/local"}},p={},c=[{value:"SSH Access",id:"ssh-access",level:2},{value:"External SSH Access",id:"external-ssh-access",level:3},{value:"Physical Terminal Access",id:"physical-terminal-access",level:2}],l={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terminal-access-to-dappnode"},"Terminal Access to Dappnode"),(0,r.kt)("p",null,"Accessing the terminal of your Dappnode, often referred to as the command-line interface (CLI), provides deep control and management capabilities. However, this method is considered advanced and requires familiarity with command line interactions. Incorrect or misguided commands can lead to unintended changes or potential system damage."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Proceed with caution when using terminal access. Always understand the implications of commands and configurations before executing them.")),(0,r.kt)("h2",{id:"ssh-access"},"SSH Access"),(0,r.kt)("p",null,"SSH (Secure Shell) allows secure remote access to systems."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure your device is connected to the same network as the Dappnode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a terminal or command prompt on your device.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Type:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh dappnode@<DAPPNODE_LOCAL_IP_ADDRESS>\n")),(0,r.kt)("p",{parentName:"li"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<DAPPNODE_LOCAL_IP_ADDRESS>")," with your Dappnode's actual IP address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When prompted, use the following credentials:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username:")," dappnode"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password:")," dappnode.s0")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'During the onboarding process in Dappmanager, you are prompted to change the default host password for the "dappnode" user. If you have completed this step, the default password ',(0,r.kt)("inlineCode",{parentName:"p"},"dappnode.s0")," might no longer work. Always use the password you set during onboarding.")),(0,r.kt)("h3",{id:"external-ssh-access"},"External SSH Access"),(0,r.kt)("p",null,"For accessing Dappnode from outside your local network:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure port forwarding on your router. Direct external SSH requests (typically port 22) to your Dappnode's internal IP address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For added security, use a strong password or implement SSH keys.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To SSH, use:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh dappnode@<EXTERNAL_IP_ADDRESS>\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Exposing SSH to the internet can be risky. Ensure you adopt robust security practices and are aware of potential vulnerabilities.")),(0,r.kt)("h2",{id:"physical-terminal-access"},"Physical Terminal Access"),(0,r.kt)("p",null,"Directly interface with Dappnode using a monitor and keyboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect a monitor via the HDMI/VGA port."),(0,r.kt)("li",{parentName:"ol"},"Plug in a USB keyboard."),(0,r.kt)("li",{parentName:"ol"},"Power on or restart the Dappnode machine."),(0,r.kt)("li",{parentName:"ol"},"When prompted, enter the password: ",(0,r.kt)("inlineCode",{parentName:"li"},"dappnode.s0")," (or ",(0,r.kt)("a",{parentName:"li",href:"/docs/user/getting-started/setup"},"the one you've set if changed during onboarding"),").")))}m.isMDXComponent=!0}}]);