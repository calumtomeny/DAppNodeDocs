"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[9091],{2755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var r=i(5893),t=i(1151);const l={},o="WireGuard Access to Dappnode",s={id:"user/access-your-dappnode/vpn/wireguard",title:"WireGuard Access to Dappnode",description:"WireGuard is a modern, high-performance VPN protocol that offers a simple and streamlined approach for securely accessing your Dappnode. This guide will walk you through setting up WireGuard with your Dappnode.",source:"@site/docs/user/access-your-dappnode/vpn/wireguard.md",sourceDirName:"user/access-your-dappnode/vpn",slug:"/user/access-your-dappnode/vpn/wireguard",permalink:"/docs/user/access-your-dappnode/vpn/wireguard",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/access-your-dappnode/vpn/wireguard.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"VPN Access to Dappnode",permalink:"/docs/user/access-your-dappnode/vpn/overview"},next:{title:"OpenVPN Access to Dappnode",permalink:"/docs/user/access-your-dappnode/vpn/openvpn"}},d={},a=[{value:"Setting Up WireGuard",id:"setting-up-wireguard",level:2},{value:"1. Get VPN Credentials",id:"1-get-vpn-credentials",level:3},{value:"Option 1: Via Dappmanager UI",id:"option-1-via-dappmanager-ui",level:4},{value:"Option 2: Via Dappnode Terminal",id:"option-2-via-dappnode-terminal",level:4},{value:"2. Installing WireGuard Client",id:"2-installing-wireguard-client",level:3},{value:"3. Setting Up WireGuard Client",id:"3-setting-up-wireguard-client",level:3},{value:"4. Connecting to Dappnode via WireGuard",id:"4-connecting-to-dappnode-via-wireguard",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"wireguard-access-to-dappnode",children:"WireGuard Access to Dappnode"}),"\n",(0,r.jsx)(n.p,{children:"WireGuard is a modern, high-performance VPN protocol that offers a simple and streamlined approach for securely accessing your Dappnode. This guide will walk you through setting up WireGuard with your Dappnode."}),"\n",(0,r.jsx)(n.p,{children:"You will need:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Your dappnode"}),"\n",(0,r.jsx)(n.li,{children:"A Wireguard client installed on your usual device (laptop, mobile, etc.)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-wireguard",children:"Setting Up WireGuard"}),"\n",(0,r.jsx)(n.h3,{id:"1-get-vpn-credentials",children:"1. Get VPN Credentials"}),"\n",(0,r.jsx)(n.p,{children:"There are two primary methods to obtain your VPN credentials:"}),"\n",(0,r.jsx)(n.h4,{id:"option-1-via-dappmanager-ui",children:"Option 1: Via Dappmanager UI"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VPN_credentials",src:i(3079).Z+"",width:"3016",height:"812"})}),"\n",(0,r.jsx)(n.p,{children:"If you have access to the Dappmanager:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Navigate to ",(0,r.jsx)(n.strong,{children:"VPN > WireGuard"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"If you don't see any device added to the list:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Provide a name for your device."}),"\n",(0,r.jsx)(n.li,{children:"Click on 'Add New Device'."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"To retrieve the credentials:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Click on the 'Get link' button on the credentials column."}),"\n",(0,r.jsxs)(n.li,{children:["You will be shown 3 different ways of retrieving the credentials:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Download config:"})," it will download a .txt file with the credentials in plaintext"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Copy config:"})," it will copy the credentials in your clipboard so you can paste them in your wireguard client"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"Show config QR code:"})," it will generate a QR that you can scan with a wireguard mobile client to add the config directly"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Please, see step 3. Setting up Wireguard client to see how to use this config once you have a client in your device (desktop/laptop/phone)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"For Local Access Credentials:"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Click on 'Show Local Credentials'."}),"\n",(0,r.jsx)(n.li,{children:"Copy the local credentials displayed."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"option-2-via-dappnode-terminal",children:"Option 2: Via Dappnode Terminal"}),"\n",(0,r.jsx)(n.p,{children:"If you can't access the Dappmanager, you'll need to get the credentials via the Dappnode terminal:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Access the Dappnode terminal, as explained ",(0,r.jsx)(n.a,{href:"/docs/user/access-your-dappnode/terminal",children:"here"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Execute the command: ",(0,r.jsx)(n.code,{children:"dappnode_wireguard"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The credentials will be displayed directly on the terminal. Copy these credentials."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"For Local Access Credentials:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Execute the command: ",(0,r.jsx)(n.code,{children:"dappnode_wireguard --local"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Copy the local credentials displayed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Local Credentials Explained",type:"info",children:[(0,r.jsx)(n.p,{children:"Local credentials allow you to establish a connection to your Dappnode when you are on the same local network. They are especially useful when remote credentials might not work due to certain network restrictions or configurations."}),(0,r.jsx)(n.p,{children:"While remote credentials enable access from outside your local network, local credentials ensure a reliable connection within your home or office network. It's recommended to use local credentials when you are in proximity to your Dappnode to guarantee a stable and swift connection."}),(0,r.jsxs)(n.p,{children:["Always remember: Local credentials ",(0,r.jsx)(n.strong,{children:"only work inside your own network"}),". If you're trying to access your Dappnode from a different location or network, you'll need to use the remote credentials."]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Ensure you store these credentials securely. They provide direct access to your Dappnode. Treat them with the same level of caution as you would a password."})}),"\n",(0,r.jsx)(n.h3,{id:"2-installing-wireguard-client",children:"2. Installing WireGuard Client"}),"\n",(0,r.jsxs)(n.p,{children:["After obtaining your VPN credentials, the next step is to install the WireGuard client. You can download the one that's compatible with the device you are going to use to connect to the Dappnode machine from the ",(0,r.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard website"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"3-setting-up-wireguard-client",children:"3. Setting Up WireGuard Client"}),"\n",(0,r.jsx)(n.p,{children:"After installing the client:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Launch the WireGuard application."}),"\n",(0,r.jsx)(n.li,{children:"Click on 'Add Tunnel' or 'Import Tunnel from File' based on your platform."}),"\n",(0,r.jsx)(n.li,{children:"Import the credentials you obtained in the earlier steps."}),"\n",(0,r.jsx)(n.li,{children:"Once imported, connect to your Dappnode by activating the tunnel."}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Connection Status",type:"tip",children:(0,r.jsx)(n.p,{children:"You can verify your connection status within the WireGuard application. It will display if the tunnel is active, as well as data transfer rates."})}),"\n",(0,r.jsx)(n.h3,{id:"4-connecting-to-dappnode-via-wireguard",children:"4. Connecting to Dappnode via WireGuard"}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Android"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Launch the OpenVPN for Android app."}),"\n",(0,r.jsx)(n.li,{children:'Tap on "+" icon.'}),"\n",(0,r.jsx)(n.li,{children:"Select the option that fits you best to import the credentials: Scan QR code, Import file or Paste from clipboard to an empty profile."}),"\n"]}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_android.jpg",alt:"Import file in Android",style:{width:"20em"}})})]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"iPhone/iPad"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Launch the OpenVPN for Android app."}),"\n",(0,r.jsx)(n.li,{children:'Tap on "Add a tunnel".'}),"\n",(0,r.jsx)(n.li,{children:"Select the option that fits you best to import the credentials: Scan QR code, Import file or Paste from clipboard to an empty profile."}),"\n"]}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_ios_tunnel.jpeg",alt:"Import file in iPhone",style:{width:"20em"}})})]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsxs)("summary",{children:[" ",(0,r.jsx)("b",{children:"Linux"})]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a file for your credentials: ",(0,r.jsx)(n.code,{children:"sudo nano /etc/wireguard/wg0.conf"})]}),"\n",(0,r.jsx)(n.li,{children:"Paste your credentials there and save the file (Ctrl+Shift+V, Ctrl+O, Ctrl+X)."}),"\n",(0,r.jsxs)(n.li,{children:["Activate the tunnel: ",(0,r.jsx)(n.code,{children:"sudo wg-quick up wg0"})]}),"\n"]}),(0,r.jsx)(n.admonition,{title:"Tunnel Deactivation",type:"note",children:(0,r.jsxs)(n.p,{children:["To deactivate the tunnel, execute the command: ",(0,r.jsx)(n.code,{children:"sudo wg-quick down wg0"}),"."]})})]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"macOS"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In the list of Applications, search for WireGuard and launch it."}),"\n",(0,r.jsx)(n.li,{children:'Click on "Manage Tunnels".'}),"\n",(0,r.jsx)(n.li,{children:'Click on the "+" button.'}),"\n",(0,r.jsx)(n.li,{children:'Select "Add empty tunnel".'}),"\n",(0,r.jsx)(n.li,{children:"Paste the credentials you obtained earlier."}),"\n",(0,r.jsx)(n.li,{children:'Give a name to this profile and click on "Save".'}),"\n",(0,r.jsx)(n.li,{children:'Click on "Activate" to connect to your Dappnode.'}),"\n"]}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_macos_tunnel.png",alt:"Manage tunnels in macOS",style:{width:"40em"}})}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_macos_credentials.png",alt:"Credentials in macOS",style:{width:"40em"}})})]}),"\n",(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)("b",{children:"Windows"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Launch the OpenVPN for Windows app."}),"\n",(0,r.jsx)(n.li,{children:'Click on "Add Tunnel".'}),"\n",(0,r.jsx)(n.li,{children:"Paste the credentials you obtained earlier and save."}),"\n",(0,r.jsx)(n.li,{children:"Activate the tunnel."}),"\n"]}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_windows.png",alt:"Import file in Windows",style:{width:"40em"}})}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_windows_tunnel.png",alt:"Import file in Windows",style:{width:"40em"}})}),(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/img/wireguard_windows_activate.png",alt:"Import file in Windows",style:{width:"40em"}})})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.admonition,{title:"Testing Your Connection",type:"tip",children:(0,r.jsxs)(n.p,{children:["Once connected, you can directly type ",(0,r.jsx)(n.a,{href:"http://my.dappnode",children:"http://my.dappnode"})," in your browser to access the Dappmanager."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3079:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/vpn-1-6287a68b939ea706930361adde9259e2.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var r=i(7294);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);