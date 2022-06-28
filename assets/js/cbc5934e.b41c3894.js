"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4408:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const a={title:"DAO",description:"DAO information"},i="Governance",s={unversionedId:"dao",id:"dao",title:"DAO",description:"DAO information",source:"@site/docs/dao.md",sourceDirName:".",slug:"/dao",permalink:"/dao",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/dao.md",tags:[],version:"current",frontMatter:{title:"DAO",description:"DAO information"},sidebar:"dao",next:{title:"The NODE Economy",permalink:"/dao/node-basics"}},c={},p=[{value:"Token Addresses",id:"token-addresses",level:3},{value:"Mission &amp; Membership",id:"mission--membership",level:3},{value:"Architecture",id:"architecture",level:3},{value:"DAO Projects",id:"dao-projects",level:3}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"governance"},"Governance"),(0,o.kt)("h3",{id:"token-addresses"},"Token Addresses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NODE Mainnet - ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xDa007777D86AC6d989cC9f79A73261b3fC5e0DA0"},"0xDa007777D86AC6d989cC9f79A73261b3fC5e0DA0")),(0,o.kt)("li",{parentName:"ul"},"NODE xDai - ",(0,o.kt)("a",{parentName:"li",href:"https://blockscout.com/xdai/mainnet/address/0xc60e38C6352875c051B481Cbe79Dd0383AdB7817/transactions"},"0xc60e38C6352875c051B481Cbe79Dd0383AdB7817"))),(0,o.kt)("h3",{id:"mission--membership"},"Mission & Membership"),(0,o.kt)("p",null,"The DAppNode DAO will be an inclusive hub in which DAppNode\u2019s community will carry on its mission to keep the web decentralized, uncensored and resilient. Active DAO members will have the opportunity to vote on DAppNode\u2019s future projects and on how to expand its array of hardware and software solutions."),(0,o.kt)("p",null,"To get involved in Governance, DAO aspirants will need to make contributions to the ecosystem and help kick-start the NODE economy. Those who provide liquidity in the sanctioned pools (Uniswap and Sushiswap) or commit NODE to Governance Staking on Ethereum Mainnet or xDai will be granted voting powers proportional to their contributions. This way we can ensure that those with a voice are also those with a stake, and are not merely speculating with the token."),(0,o.kt)("h3",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"DAppnode has tapped ",(0,o.kt)("a",{parentName:"p",href:"https://snapshot.org/#/"},"Snapshot")," technology to build its Governance structure. Snapshot is a novel piece of technology that allows off-chain voting for on-chain actions. It removes the prohibitive gas costs of participating in on-chain governance by taking snapshots of members\u2019 NODE currently being staked. Voting and creating proposals with Snapshot is done with a simple crypto wallet signature, no gas needed."),(0,o.kt)("h3",{id:"dao-projects"},"DAO Projects"),(0,o.kt)("p",null,"The first DAppNode project post-launch will be the hotly awaited ValidatorDAO. You can read this ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/dappnode/guardians-of-ethereum-a-validator-dao-proposal-d82e76231b45"},"Medium article")," to learn more about how ValidatorDAO is poised to revolutionize the relationship between Validators and Nominators!"))}d.isMDXComponent=!0}}]);