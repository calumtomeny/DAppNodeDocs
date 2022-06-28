"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2049],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return g}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(m,r(r({ref:e},c),{},{components:n})):i.createElement(m,r({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5775:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var i=n(3117),o=(n(7294),n(3905));const a={sidebar_position:2},r="ISO Installation",l={unversionedId:"get-started/installation/custom-hardware/installation/iso",id:"get-started/installation/custom-hardware/installation/iso",title:"ISO Installation",description:"When you want to perform a clean installation by installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/iso.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/iso",permalink:"/es/get-started/installation/custom-hardware/installation/iso",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/es/docusaurus-plugin-content-docs/current/get-started/installation/custom-hardware/installation/iso.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/es/get-started/installation/custom-hardware/installation/overview"},next:{title:"Script Installation",permalink:"/es/get-started/installation/custom-hardware/installation/script"}},s={},p=[{value:"Get the ISO",id:"get-the-iso",level:2},{value:"Burn the ISO in a USB",id:"burn-the-iso-in-a-usb",level:2},{value:"Boot from ISO",id:"boot-from-iso",level:2},{value:"Post-Installation",id:"post-installation",level:2}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iso-installation"},"ISO Installation"),(0,o.kt)("p",null,"When you want to perform a clean installation by installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode."),(0,o.kt)("h2",{id:"get-the-iso"},"Get the ISO"),(0,o.kt)("p",null,"You can get the image downloading directly from ",(0,o.kt)("a",{parentName:"p",href:"https://iso.dappnode.io/"},"DAppNodeISO")," or if you prefer you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dappnode/DAppNode_Installer"},"build it from the source"),"."),(0,o.kt)("h2",{id:"burn-the-iso-in-a-usb"},"Burn the ISO in a USB"),(0,o.kt)("p",null,"Burn the ISO to an USB stick. To do so we recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher")," for the OS with which you will prepare the USB to boot from your server and install DAppNode"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server")),(0,o.kt)("p",null,"IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA, ALL EXISTING DATA WILL BE ERASED."),(0,o.kt)("p",null,"Also, DAppNode is intended to run 24/7 so if you install it on a laptop or desktop machine and you turn it off, it will not stay synced."),(0,o.kt)("h2",{id:"boot-from-iso"},"Boot from ISO"),(0,o.kt)("p",null,"Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/VirtualBox_install.png"})),(0,o.kt)("p",null,"Select a language."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_1.png"})),(0,o.kt)("p",null,"Select a location."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_2.png"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_3.png"})),(0,o.kt)("p",null,"Select a keyboard configuration."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_4.png"})),(0,o.kt)("p",null,"Type a hostname. This is the name your machine will have on the network. It's not important."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_5.png"})),(0,o.kt)("p",null,"Define a password for the user root."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_6.png"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down this password, you will need it in case you need to access as root to the command line interface (cli) of DAppNode.")),(0,o.kt)("p",null,"Select a username for your DAppNode and set a password."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_7.png"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down this DAppNode username and password.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_8.png"})),(0,o.kt)("p",null,"Set up your time zone."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_9.png"})),(0,o.kt)("p",null,"Partition disk configuration. On this guide we will use the second option ",(0,o.kt)("strong",{parentName:"p"},"Partitioning method: ","[Guided - use entire disk and set up LVM]"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../../img/iso_install_10.png"})),(0,o.kt)("p",null,"After choosing the disk, we need to define the partioning scheme. We will select ",(0,o.kt)("strong",{parentName:"p"},"All files in one partition (recommended for new users)"),"."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_11.png"})),(0,o.kt)("p",null,"Confirm we will write the disk."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_12.png"})),(0,o.kt)("p",null,"We want to use all the disk ont he partioning process. So we dont modificate the value."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_13.png"})),(0,o.kt)("p",null,"Confirm we want to write the changes to disks."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_14.png"})),(0,o.kt)("p",null,"The next decision depends on you. We recommend you choose 'Yes' because you don't have to confirm all the operations."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_15.png"})),(0,o.kt)("p",null,"Install the grub."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_16.png"})),(0,o.kt)("p",null,"Select the disk."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../../img/iso_install_17.png"})),(0,o.kt)("p",null,"If you have an IP you should define here. Otherwise, leave the field blank."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../../img/iso_install_18.png"})),(0,o.kt)("p",null,"You will see this message indicating you have finished this installation."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_19.png"})),(0,o.kt)("p",null,"The machine will restart and you will see this screen."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"../../../../../img/iso_install_20.png"})),(0,o.kt)("p",null,"Log in into the machine with the DAppNode username and password you chose earlier."),(0,o.kt)("h2",{id:"post-installation"},"Post-Installation"),(0,o.kt)("p",null,"Once the installation process has finished, DAppNode will try to automatically prepare the first access to your DAppNode on the next order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/local-proxy"},"Local Proxy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/wifi"},"Wifi")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#wireguard"},"Wireguard")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#openvpn"},"OpenVPN"))))}u.isMDXComponent=!0}}]);