"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5940],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={},l="Install - ARM",i={unversionedId:"user/install/arm",id:"user/install/arm",title:"Install - ARM",description:"Hardware Recommendations",source:"@site/docs/user/install/arm.md",sourceDirName:"user/install",slug:"/user/install/arm",permalink:"/docs/user/install/arm",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/install/arm.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Script installation",permalink:"/docs/user/install/script"},next:{title:"Dappnode commands",permalink:"/docs/user/install/dappnode-commands"}},p={},d=[{value:"Hardware Recommendations",id:"hardware-recommendations",level:2},{value:"Install Dappnode via Script",id:"install-dappnode-via-script",level:2},{value:"Add an external SSD",id:"add-an-external-ssd",level:2}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install---arm"},"Install - ARM"),(0,r.kt)("h2",{id:"hardware-recommendations"},"Hardware Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"8 Gb RAM memory"),(0,r.kt)("li",{parentName:"ul"},"Screen and keyboard (Only for the first installation)"),(0,r.kt)("li",{parentName:"ul"},"Wired connection to the Dappnode")),(0,r.kt)("h2",{id:"install-dappnode-via-script"},"Install Dappnode via Script"),(0,r.kt)("p",null,"Follow the instructions you can find in ",(0,r.kt)("a",{parentName:"p",href:"/docs/user/install/script"},"Script Installation")),(0,r.kt)("h2",{id:"add-an-external-ssd"},"Add an external SSD"),(0,r.kt)("p",null,"In case you have installed Dappnode in a Raspberry using a SD card and you want to add an external SSD you should mount docker data in it. To do this, follow the next steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Stop Docker service\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl stop docker"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a new mountpoint for docker data. As an example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir /data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add your partition on the new device to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab"),". You can identify its UUID using the ",(0,r.kt)("inlineCode",{parentName:"p"},"blkid")," tool. Make sure your device is properly partitioned first. Your line in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/fstab")," should look like this:\n",(0,r.kt)("inlineCode",{parentName:"p"},"UUID=b311b983-bda6-4e9f-835c-266d40d64f07 /data/ ext4 defaults 0 0"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mount your SSD drive\n",(0,r.kt)("inlineCode",{parentName:"p"},"mount /data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Move docker data to the mountpoint\n",(0,r.kt)("inlineCode",{parentName:"p"},"mv /var/lib/docker/* /data/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit Docker settings to use the alternative location. Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," as follows:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data-root": "/data"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart docker")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start docker")))}u.isMDXComponent=!0}}]);