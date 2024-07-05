"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[4840],{4550:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>h});var i=o(5893),s=o(1151);const r={},a="Manual Subscription",n={id:"smooth/subscribe-to-smooth/manual",title:"Manual Subscription",description:"Would you rather not wait until your next proposed block to subscribe and begin earning rewards? You can take a proactive step and opt for manual subscription right away. During this process, you'll change your validator's fee recipient to Smooth's address, just like in the automatic subscription. However, instead of waiting for your next proposed block, you'll immediately start accumulating rewards from Smooth.",source:"@site/docs/smooth/subscribe-to-smooth/manual.md",sourceDirName:"smooth/subscribe-to-smooth",slug:"/smooth/subscribe-to-smooth/manual",permalink:"/docs/smooth/subscribe-to-smooth/manual",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/smooth/subscribe-to-smooth/manual.md",tags:[],version:"current",frontMatter:{},sidebar:"smoothSidebar",previous:{title:"Automatic Subscription",permalink:"/docs/smooth/subscribe-to-smooth/automatic"},next:{title:"Unsubscribing from Smooth.",permalink:"/docs/smooth/unsubscribe-from-smooth"}},d={},h=[{value:"Step 1: Change your fee recipient to Smooth&#39;s address.",id:"step-1-change-your-fee-recipient-to-smooths-address",level:3},{value:"Step 2: Log in to Smooth&#39;s website.",id:"step-2-log-in-to-smooths-website",level:3},{value:"Step 3: Select your validator.",id:"step-3-select-your-validator",level:3},{value:"Scenario 1: Validator is not registered to any MEV relay.",id:"scenario-1-validator-is-not-registered-to-any-mev-relay",level:4},{value:"Scenario 2: Validator registered to MEV relays but without Smooth&#39;s address as fee recipient in any relay.",id:"scenario-2-validator-registered-to-mev-relays-but-without-smooths-address-as-fee-recipient-in-any-relay",level:4},{value:"Scenario 3: Validator does not have the Smooth&#39;s address as fee recipient in some relays.",id:"scenario-3-validator-does-not-have-the-smooths-address-as-fee-recipient-in-some-relays",level:4},{value:"Scenario 4: Validator is registered to at least one MEV relay and has the correct fee recipient set.",id:"scenario-4-validator-is-registered-to-at-least-one-mev-relay-and-has-the-correct-fee-recipient-set",level:4},{value:"Step 4: Confirm Relays check.",id:"step-4-confirm-relays-check",level:3},{value:"Step 5: Make the deposit and subscribe!",id:"step-5-make-the-deposit-and-subscribe",level:3},{value:"Troubleshooting.",id:"troubleshooting",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"manual-subscription",children:"Manual Subscription"}),"\n",(0,i.jsxs)(t.p,{children:["Would you rather not wait until your next proposed block to subscribe and begin earning rewards? You can take a proactive step and opt for manual subscription right away. During this process, you'll change your validator's fee recipient to Smooth's address, just like in the automatic subscription. However, instead of waiting for your next proposed block, you'll immediately start accumulating rewards from ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The manual subscription is done through ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth's website"})}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"step-1-change-your-fee-recipient-to-smooths-address",children:"Step 1: Change your fee recipient to Smooth's address."}),"\n",(0,i.jsxs)(t.p,{children:["Change the fee recipient of your validator to Smooth's address, just as if you were subscribing automatically. In Dappnode, this process is as simple as changing the fee recipient in your ",(0,i.jsx)(t.a,{href:"http://brain.web3signer.dappnode/",children:"staking brain"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fee_recipient",src:o(4257).Z+"",width:"2728",height:"552"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"This step is extremely important"}),". Make sure you're changing the fee recipient of the validators you are going to manually subscribe and that the fee recipient is correctly set to Smooth's address (",(0,i.jsx)(t.code,{children:"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"}),"). If a subscribed validator proposes a block with an incorrect fee recipient, it will be banned from ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," and will not be able to participate in it again."]}),"\n",(0,i.jsx)(t.admonition,{title:"Keep the fee recipient set to Smooth's address!",type:"danger",children:(0,i.jsxs)(t.p,{children:["It is crucial that you keep the fee recipient of your validator set to Smooth's address (",(0,i.jsx)(t.code,{children:"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"}),") as long as it is subscribed to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". If, at any point, you change the fee recipient of your validator and propose a block without unsubscribing first, you will be banned from ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," and will not be able to participate in it again."]})}),"\n",(0,i.jsx)(t.h3,{id:"step-2-log-in-to-smooths-website",children:"Step 2: Log in to Smooth's website."}),"\n",(0,i.jsxs)(t.p,{children:["Go to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth's website"})," and log in with your wallet. A list of all the validators with the same withdrawal address as your logged in wallet will appear."]}),"\n",(0,i.jsx)(t.h3,{id:"step-3-select-your-validator",children:"Step 3: Select your validator."}),"\n",(0,i.jsxs)(t.p,{children:["Select the validator you want to subscribe to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),' by clicking on the "Subscribe" button.\n',(0,i.jsx)(t.img,{alt:"my_validators",src:o(2824).Z+"",width:"1033",height:"393"})]}),"\n",(0,i.jsxs)(t.p,{children:['When clicking on the "Subscribe" button, ',(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," will check if your validator is registered to any MEV relay. If it is, it will also check if the fee recipient of your validator is set to Smooth's address in each relay. ",(0,i.jsx)(t.strong,{children:"Four different dialogs can appear"}),", depending on the state of your validator and the MEV relays it is registered to."]}),"\n",(0,i.jsx)(t.h4,{id:"scenario-1-validator-is-not-registered-to-any-mev-relay",children:"Scenario 1: Validator is not registered to any MEV relay."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_no_relays.png",alt:"no_relays",width:"400"})}),"\n",(0,i.jsxs)(t.p,{children:['When doing a manual subscription, it is obligatory to be registered in at least one MEV relay. In Dappnode, registering and using a relay is as simple as selecting the desired relay in the "MEV Boost" Card at the ',(0,i.jsx)(t.a,{href:"http://my.dappnode/stakers/ethereum/",children:"Stakers UI"}),". Once you have selected at least one relay, you can go back to the ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),' website and click on the "Subscribe" button again.']}),"\n",(0,i.jsx)(t.h4,{id:"scenario-2-validator-registered-to-mev-relays-but-without-smooths-address-as-fee-recipient-in-any-relay",children:"Scenario 2: Validator registered to MEV relays but without Smooth's address as fee recipient in any relay."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_subscription_norelays.png",alt:"incorrect_fee_recipient",width:"400"})}),"\n",(0,i.jsx)(t.p,{children:"Please make sure that you have correctly done the first step of this guide! This dialog means that not a single relay has reflected your fee recipient change to Smooth's address. If running a dappnode, make sure your MEV boost package is running!"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:'It can take up to a few minutes for relays to reflect your fee recipient change. If you have already changed your fee recipient but this alert still appears, please check the "Troubleshooting" section down below for more information.'})}),"\n",(0,i.jsx)(t.h4,{id:"scenario-3-validator-does-not-have-the-smooths-address-as-fee-recipient-in-some-relays",children:"Scenario 3: Validator does not have the Smooth's address as fee recipient in some relays."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_incorrect_fee_recipient.png",alt:"incorrect_fee_recipient",width:"400"})}),"\n",(0,i.jsxs)(t.p,{children:["If this dialog appears, it means that your validator's fee recipient is set to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," in some relays while also being set to an incorrect address in others. This situation likely arises because your validator was registered in a relay it no longer uses, and the fee recipient in that specific relay wasn't updated accordingly."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:'Relays that you no longer use won\'t reflect the fee recipient changes you did for each validator in your staking brain. If you have already changed your fee recipient but the warning still appears, please check the "Troubleshooting" section down below for more information.'})}),"\n",(0,i.jsx)(t.h4,{id:"scenario-4-validator-is-registered-to-at-least-one-mev-relay-and-has-the-correct-fee-recipient-set",children:"Scenario 4: Validator is registered to at least one MEV relay and has the correct fee recipient set."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_correct_fee_recipient.png",alt:"correct_fee_recipient",width:"400"})}),"\n",(0,i.jsxs)(t.p,{children:["This is the dialog you want to see! If you see this dialog, it means that your validator is registered to at least one MEV relay, and that the fee recipient of your validator is set to Smooth's address in all relays it has been registered to. In other words, this means that your validator is ready to subscribe to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),"!"]}),"\n",(0,i.jsx)(t.h3,{id:"step-4-confirm-relays-check",children:"Step 4: Confirm Relays check."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_mev_blocks.png",alt:"mev_blocks",width:"400"})}),"\n",(0,i.jsx)(t.p,{children:'This step is just a confirmation of the relays your validator has the correct fee recipient set in. Click on "Next" to continue the subscription process, we\'re almost there!'}),"\n",(0,i.jsx)(t.h3,{id:"step-5-make-the-deposit-and-subscribe",children:"Step 5: Make the deposit and subscribe!"}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_make_deposit.png",alt:"deposit",width:"400"})}),"\n",(0,i.jsxs)(t.p,{children:["This is the last step! Here, you will make the deposit to subscribe your validator to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". The deposit is a one-time upfront payment that will be returned to you as Claimable rewards when proposing your first block to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". The deposit is 0.01 ETH, and it is used to prevent spam and malicious validators from subscribing to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Once the deposit transaction is processed by the chain, your validator will be subscribed to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"})," and you will start receiving rewards from other members of the pool!"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/img/smooth_subscribe_success.png",alt:"subscription_success",width:"400"})}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:['Since the Oracle operates with only finalized data, it will take up to 35 minutes to process your subscription. Your "My Validator" table will be updated instantly, but it may take a while to see how "Total Subscribers" counter increases. To know more, visit the ',(0,i.jsx)(t.a,{href:"/docs/smooth/deep-dive-into-smooth/overview",children:"Deep Dive into Smooth"})," section."]})}),"\n",(0,i.jsx)(t.h2,{id:"troubleshooting",children:"Troubleshooting."}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)("summary",{children:(0,i.jsxs)("strong",{children:["I have changed my fee recipient but the ",(0,i.jsx)("i",{children:'"Fee recipient warning"'})," warning still appears!"]})}),(0,i.jsxs)(t.p,{children:["If you have changed your fee recipient to Smooth's address (",(0,i.jsx)("code",{children:"0xAdFb8D27671F14f297eE94135e266aAFf8752e35"}),") but this warning still appears, it could be because of two reasons:"]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"The relays you are registered to are not reflecting the change in the fee recipient yet. It can take up to a few minutes for the relays to reflect your  fee recipient update. This is something that is out of Smooth's control. We recommend you to wait a few minutes and try again."}),(0,i.jsxs)("li",{children:["The fee recipient is only updated in your current ",(0,i.jsx)("strong",{children:"active"})," relays. This means that if you used to be registered to a relay, but you are not using it anymore, the fee recipient of your validator will not be updated in that relay. This is something expected and that it wont affect your validator's subscription to ",(0,i.jsx)(t.a,{href:"https://smooth.dappnode.io/",children:"Smooth"}),". If you want to update the fee recipient in the relays you are no longer registered to, you can quickly register and unregister again to the outdated relays to force an update the fee recipient there."]})]}),(0,i.jsxs)(t.p,{children:["To clarify: As long as the fee recipient of your validator is set to Smooth's address in your ",(0,i.jsx)("a",{href:"http://brain.web3signer.dappnode/",children:"staking brain"}),", you can continue the subscription process normally."]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4257:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/smooth_fee_recipient-9a97308ed0c601ccc84b0295efe34cd4.png"},2824:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/smooth_my_validators-72848a79b68c9a1ab67d754537f6e2c9.png"},1151:(e,t,o)=>{o.d(t,{Z:()=>n,a:()=>a});var i=o(7294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);