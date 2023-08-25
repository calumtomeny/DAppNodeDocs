"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[3633],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(7462),r=(n(7294),n(4137));const a={},i="Ethereum mainnet",s={unversionedId:"user/staking/ethereum/solo/mainnet",id:"user/staking/ethereum/solo/mainnet",title:"Ethereum mainnet",description:"Ethereum stands as a titan in the realm of smart contract platforms. Its monumental shift from Proof of Work (PoW) to Proof of Stake (PoS) has opened up opportunities for individuals to participate in Ethereum's block production by staking ETH.",source:"@site/docs/user/staking/ethereum/solo/mainnet.md",sourceDirName:"user/staking/ethereum/solo",slug:"/user/staking/ethereum/solo/mainnet",permalink:"/docs/user/staking/ethereum/solo/mainnet",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/ethereum/solo/mainnet.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Earn with Staking in Dappnode",permalink:"/docs/user/staking/overview"},next:{title:"Goerli Testnet",permalink:"/docs/user/staking/ethereum/solo/goerli-prater"}},l={},u=[{value:"Components of a Full Ethereum Node",id:"components-of-a-full-ethereum-node",level:2},{value:"Easy Client Selection",id:"easy-client-selection",level:2},{value:"Becoming a Solo Staker",id:"becoming-a-solo-staker",level:2},{value:"Additional Opportunities: MEV Boost",id:"additional-opportunities-mev-boost",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ethereum-mainnet"},"Ethereum mainnet"),(0,r.kt)("p",null,"Ethereum stands as a titan in the realm of smart contract platforms. Its monumental shift from Proof of Work (PoW) to Proof of Stake (PoS) has opened up opportunities for individuals to participate in Ethereum's block production by staking ETH."),(0,r.kt)("p",null,"Dappnode simplifies your journey to becoming a ",(0,r.kt)("strong",{parentName:"p"},"Solo Staker"),". However, a crucial prerequisite is having a fully synchronized Ethereum node."),(0,r.kt)("h2",{id:"components-of-a-full-ethereum-node"},"Components of a Full Ethereum Node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Execution Client")," (Choose one): Geth, Nethermind, Erigon, or Besu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Consensus Client")," (Choose one): Prysm, Lighthouse, Teku, Nimbus, or Lodestar.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Stakers",src:n(8690).Z,width:"2828",height:"1518"})),(0,r.kt)("h2",{id:"easy-client-selection"},"Easy Client Selection"),(0,r.kt)("p",null,"Head to the ",(0,r.kt)("strong",{parentName:"p"},"Stakers Menu")," for a straightforward selection process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Pick your Execution Client.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Choose your Consensus Client.")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Utilizing the ",(0,r.kt)("em",{parentName:"li"},"checksync")," option can drastically cut down on synchronization time. It begins at a synced checkpoint and then syncs backward."))),(0,r.kt)("li",{parentName:"ol"},"After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs.")),(0,r.kt)("h2",{id:"becoming-a-solo-staker"},"Becoming a Solo Staker"),(0,r.kt)("p",null,"To actively run a validator, you'll need ",(0,r.kt)("strong",{parentName:"p"},"Web3Signer"),". This tool assists in loading your keystore files directly into your node."),(0,r.kt)("h2",{id:"additional-opportunities-mev-boost"},"Additional Opportunities: MEV Boost"),(0,r.kt)("p",null,"Considering MEV Boost? It allows your validator node to propose different relays when it's its turn. However, before diving in, a thorough understanding of the relays and any local regulations is paramount."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remember"),": Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions."))}m.isMDXComponent=!0},8690:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/stakers-mainnet-7da0421f21919cf5b6bb56357909a694.png"}}]);