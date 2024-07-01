"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5815],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(4137));const r={},i="Obol Distributed Validator package for Dappnode",s={unversionedId:"user/staking/ethereum/dvt-technologies/obol-network",id:"user/staking/ethereum/dvt-technologies/obol-network",title:"Obol Distributed Validator package for Dappnode",description:"---",source:"@site/docs/user/staking/ethereum/dvt-technologies/obol-network.md",sourceDirName:"user/staking/ethereum/dvt-technologies",slug:"/user/staking/ethereum/dvt-technologies/obol-network",permalink:"/docs/user/staking/ethereum/dvt-technologies/obol-network",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/ethereum/dvt-technologies/obol-network.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Stakehouse",permalink:"/docs/user/staking/ethereum/lsd-pools/stakehouse"},next:{title:"SSV Distributed Validator package for Dappnode",permalink:"/docs/user/staking/ethereum/dvt-technologies/ssv-network"}},l={},d=[{value:"<strong>Introduction</strong>",id:"introduction",level:3},{value:"<strong>Requirements</strong>",id:"requirements",level:3},{value:"<strong>First Steps</strong>",id:"first-steps",level:3},{value:"<strong>Cluster Configuration</strong>",id:"cluster-configuration",level:3},{value:"<strong>Distributed Key Generation (DKG) Event</strong>",id:"distributed-key-generation-dkg-event",level:3},{value:"Adding Validators to an Active Cluster",id:"adding-validators-to-an-active-cluster",level:3}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"obol-distributed-validator-package-for-dappnode"},"Obol Distributed Validator package for Dappnode"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"introduction"},(0,n.kt)("strong",{parentName:"h3"},"Introduction")),(0,n.kt)("p",null,"The Obol Network package for Dappnode aims to make it seamless for Dappnode users to integrate and benefit from Obol's Distributed Validator Technology (DVT)."),(0,n.kt)("p",null,"A Distributed Validator is one or more logical Ethereum validators being operated across a number of nodes that are all online simultaneously and that all control a subset of the validators' private keys. Each of these nodes need to run an Execution client, a Consensus client, a Distributed Validator client, and a Validator client/Key Manager.\nThe distributed validator clients in these nodes come to consensus on what should be signed before constructing a signature for the validator that will be accepted by the wider Ethereum network. Dividing a validator across a group of nodes allows for fault tolerant validators that can remain online and validating despite a subset of its nodes experiencing an outage, contributing to a stronger and more resilient network."),(0,n.kt)("p",null,"The Obol Dappnode package is available for ",(0,n.kt)("a",{parentName:"p",href:"http://my.dappnode/installer/dnp/obol.dnp.dappnode.eth"},"Ethereum Mainnet")," and the ",(0,n.kt)("a",{parentName:"p",href:"http://my.dappnode/installer/dnp/holesky-obol.dnp.dappnode.eth"},"Holesky Testnet"),"."),(0,n.kt)("h3",{id:"requirements"},(0,n.kt)("strong",{parentName:"h3"},"Requirements")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The first thing you'll need to do is set up a fully-synced node. This can be done through the Stakers Menu in Dappnode by selecting:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 Execution Client (Geth, Besu, Erigon or Nethermind)"),(0,n.kt)("li",{parentName:"ul"},"1 Consensus Client (Prysm, Lighhouse, Lodestar, Teku or Nimbus)"),(0,n.kt)("li",{parentName:"ul"},"MEV Boost (optional)"))),(0,n.kt)("li",{parentName:"ol"},"Install the Obol package from the DAppStore.")),(0,n.kt)("h3",{id:"first-steps"},(0,n.kt)("strong",{parentName:"h3"},"First Steps")),(0,n.kt)("admonition",{title:"It's important that you understand that the requirements of the DV node runner are not the same as a Solo Stakers'. This technology facilitates the creation of Distributed Validators between a group of independent people. This means you are placing significant trust in the participants you'll run this Distributed Validator Cluster with.",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You need to ensure every operator in the Cluster is competent and trustworthy before sharing this responsibility. Negligence on behalf of others in your group can put you at risk, however as far as 66% of these nodes are synced the validators will keep performing their duties.")),(0,n.kt)("p",null,"Once all participants have synced nodes, you'll need to install the Obol Dappnode package. After Dappnodes are ready, the next steps will take place at  Obol's Distributed Validator Launchpad. There's a launchpad for ",(0,n.kt)("a",{parentName:"p",href:"https://launchpad.obol.org/"},"Ethereum Mainnet")," and another one for the ",(0,n.kt)("a",{parentName:"p",href:"https://holesky.launchpad.obol.org/"},"Holesky Testnet"),". Start by connecting your wallet and selecting the option that best fits your DV's distribution and setup."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad1",src:a(3921).Z,width:"1904",height:"1090"})),(0,n.kt)("h3",{id:"cluster-configuration"},(0,n.kt)("strong",{parentName:"h3"},"Cluster Configuration")),(0,n.kt)("p",null,"For creating a new cluster with a group, all operators must have an operator's address, which will submit the necessary information to the launchpad. The first step in the configuration process will be to select the cluster size and to enter the operator's adresses."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad2",src:a(222).Z,width:"1904",height:"981"})),(0,n.kt)("p",null,"In this next step, you'll be required to enter your Charon client's ENR, which is a public key that will give your node a unique ID. This ENR can be obtained after installing the Obol Dappnode package ",(0,n.kt)("a",{parentName:"p",href:"http://my.dappnode/packages/my/holesky-obol.dnp.dappnode.eth/info"},"under the Info tab"),"."),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"The Obol Dappnode package supports up to 5 ENRs. This means that you can participate in 5 different clusters with 5 different ENRs using the same package, however it's important to properly backup the package's database if the generated ENRs are committed to functional clusters.")),(0,n.kt)("p",null,"Next, you'll need to specify the amount of validator keys that this cluster will be generating and how these validators will be splitting the rewards. You can read more about the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.obol.org/docs/sc/introducing-obol-splits"},"Obol Splits contract")," and the different options it offers in Obol's documentation."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad3",src:a(6912).Z,width:"1904",height:"1047"})),(0,n.kt)("p",null,"The last step will require that you perform a signature from your operator's address to generate a cluster invite link. You'll need to share this invite link with the rest of the operators so that they can register their ENRs and set everything up for the Distributed Key Generation (DKG) event."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad4",src:a(9468).Z,width:"1604",height:"1478"})),(0,n.kt)("h3",{id:"distributed-key-generation-dkg-event"},(0,n.kt)("strong",{parentName:"h3"},"Distributed Key Generation (DKG) Event")),(0,n.kt)("p",null,"After all operators have successfully submitted their ENRs, the Obol launchpad will generate a \"Definition File URL\" we'll need to load in our Obol Dappnode package's configuration to proceed with the DKG."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad5",src:a(7627).Z,width:"1904",height:"981"})),(0,n.kt)("p",null,"Copy the URL under the Dappnode tab in the Launchpad, go to your package's configuration section and enter it in the cluster number corresponding to the ENR you submitted in the launchpad. Make sure ",(0,n.kt)("inlineCode",{parentName:"p"},"URL"),' is selected under "Config Mode" and apply the configuration.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad6",src:a(5158).Z,width:"1904",height:"1089"})),(0,n.kt)("p",null,"After all operators have completed this step the DKG ceremony will start automatically and each of the operators' keystores will be stored in the Obol package's database."),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure to create a backup of your Obol package. If you lose your private keys you won't be able to start the DV cluster successfully and may risk your validator deposit becoming unrecoverable. Ensure every operator has their backup secured before activating any validators.")),(0,n.kt)("h3",{id:"adding-validators-to-an-active-cluster"},"Adding Validators to an Active Cluster"),(0,n.kt)("p",null,"After the DKG has succeeded and all of the operators have backed up their cluster's keys, it's time to move on to the validator's deposits. The launchpad will show you an option to submit a ",(0,n.kt)("inlineCode",{parentName:"p"},"deposit_data.json")," file."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ObolLaunchpad7",src:a(2882).Z,width:"1904",height:"1019"})),(0,n.kt)("p",null,"You can get this file if you decompress your Obol package's backup and look for it inside the charon folder corresponding to the cluster number you intend to run. The launchpad will confirm that you have enough balance in your connected wallet to perform the validator deposit and make you go over final checks prior to signing the deposit."),(0,n.kt)("p",null,"Remember that if you have any questions, you can always drop by the ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/dappnode"},"Dappnode Discord server")," to ask for community support."))}c.isMDXComponent=!0},3921:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad1-384f64d06e76a09d4ec520ee76cf7fdf.png"},222:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad2-ce96b4add6b5709c4d88acb38a73a1ee.png"},6912:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad3-c7f4df9b4d7b753d8d0e027b7a659bee.png"},9468:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad4-f9db7d75efeda34396609e991e2840b6.png"},7627:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad5-678df34a484ab38012fd657c9dcfaf7e.png"},5158:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad6-2048cc9b6c237bb96964596ee7bd32ec.png"},2882:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/obol-launchpad7-11fdbb602d3e193d4a456ba9e0e05e1b.png"}}]);