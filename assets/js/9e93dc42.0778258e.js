"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[938],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137));const r={},i="ISO Installation",l={unversionedId:"user/install/iso",id:"user/install/iso",title:"ISO Installation",description:"When you want to perform a clean installation by installing the base operating system and Dappnode. Installing from an ISO will wipe the machine data and install Dappnode over Debian.",source:"@site/docs/user/install/iso.md",sourceDirName:"user/install",slug:"/user/install/iso",permalink:"/docs/user/install/iso",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/install/iso.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Installation Overview",permalink:"/docs/user/install/overview"},next:{title:"Script installation",permalink:"/docs/user/install/script"}},s={},p=[{value:"Get the ISO",id:"get-the-iso",level:2},{value:"Burn the ISO in a USB",id:"burn-the-iso-in-a-usb",level:2},{value:"Boot from the USB",id:"boot-from-the-usb",level:2},{value:"Follow the Installation Prompts",id:"follow-the-installation-prompts",level:2},{value:"Final Steps",id:"final-steps",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iso-installation"},"ISO Installation"),(0,o.kt)("p",null,"When you want to perform a clean installation by installing the base operating system and Dappnode. Installing from an ISO will wipe the machine data and install Dappnode over Debian."),(0,o.kt)("h2",{id:"get-the-iso"},"Get the ISO"),(0,o.kt)("p",null,"You can get the image downloading directly from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dappnode/Dappnode/releases"},"Dappnode ISO")," or if you prefer you can build it from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dappnode/Dappnode#install-dappnode-with-iso"},"source"),"."),(0,o.kt)("admonition",{title:"Attended VS Unattended ISO",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Attended ISO"),": An attended ISO installation involves a manual setup process where the user must be present to make choices, answer prompts, and guide the installation through its various stages. It provides more control over the configuration, allowing for customization based on specific needs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Unattended ISO"),": The unattended ISO installation is an automated process where pre-defined settings are used to install Dappnode without user intervention. This is ideal for straightforward installations where default configurations are preferred. It speeds up the process and ensures consistency in the setup."))),(0,o.kt)("p",{parentName:"admonition"},"Consider your specific requirements and the level of customization you need when deciding between these two installation methods.")),(0,o.kt)("h2",{id:"burn-the-iso-in-a-usb"},"Burn the ISO in a USB"),(0,o.kt)("p",null,"Burn the ISO to an USB stick. To do so we recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Balena Etcher")," for the OS with which you will prepare the USB to boot from your server and install Dappnode."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"If you trigger the installation in a machine containing data, all existing data will be erased.")),(0,o.kt)("h2",{id:"boot-from-the-usb"},"Boot from the USB"),(0,o.kt)("p",null,"After burning the ISO to the USB stick:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Insert")," the USB stick into the machine where you want to install Dappnode."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reboot")," the machine."),(0,o.kt)("li",{parentName:"ol"},"During the boot process, access the ",(0,o.kt)("strong",{parentName:"li"},"boot menu")," (the key to press varies depending on the machine manufacturer; commonly used keys include F2, F10, F12, ESC, or DEL)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Select")," the USB stick as the boot device.")),(0,o.kt)("p",null,"The machine should now boot from the USB, and you'll see the Dappnode installation interface."),(0,o.kt)("h2",{id:"follow-the-installation-prompts"},"Follow the Installation Prompts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you've chosen the ",(0,o.kt)("strong",{parentName:"li"},"Attended ISO"),", you'll be presented with a series of prompts asking for configuration details and preferences. Follow the on-screen instructions and provide the necessary input to proceed."),(0,o.kt)("li",{parentName:"ul"},"If you've opted for the ",(0,o.kt)("strong",{parentName:"li"},"Unattended ISO"),", the installation will proceed automatically, using predefined settings.")),(0,o.kt)("admonition",{title:"Default Credentials",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're using the Unattended ISO, the default credentials are:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"user"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"dappnode")," "),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"pass"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"dappnode.s0"))),(0,o.kt)("h2",{id:"final-steps"},"Final Steps"),(0,o.kt)("p",null,"Once the installation is complete:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Remove")," the USB stick."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Reboot")," the machine (you might need to do this twice)"),(0,o.kt)("li",{parentName:"ol"},"On startup, Dappnode should be running. You can check it by executing ",(0,o.kt)("inlineCode",{parentName:"li"},"docker ps")," in the terminal and some of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/user/install/dappnode-commands"},"Dappnode Commands")),(0,o.kt)("li",{parentName:"ol"},"Finally, you can begin the post-installation setup and configuration.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Remember to keep your Dappnode running 24/7 for optimal performance, especially if you are hosting blockchain nodes or other continuous services.")),(0,o.kt)("p",null,"Congratulations! You've successfully installed Dappnode using the ISO method. For any further assistance or troubleshooting, always refer to the official Dappnode documentation or community support."))}c.isMDXComponent=!0}}]);