"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[1323],{5381:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=s(5893),o=s(1151);const i={},t="Dappnode Monitoring Service (DMS)",r={id:"user/packages/dms",title:"Dappnode Monitoring Service (DMS)",description:'As a Dappnode user, there are times when having insights into the performance of your packages or your whole system can be incredibly beneficial. This means understanding the condition or "health" of your packages, the utilization of your computer resources such as CPU, RAM, and disk space, as well as monitoring network traffic flow. Yet, managing all of these aspects can become complex and tedious, even for those with experience. This is precisely where the Dappnode Monitoring Service (DMS) steps in to simplify matters.',source:"@site/docs/user/packages/dms.md",sourceDirName:"user/packages",slug:"/user/packages/dms",permalink:"/docs/user/packages/dms",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/packages/dms.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Packages' Signature",permalink:"/docs/user/packages/signature"},next:{title:"Bitcoin",permalink:"/docs/user/packages/bitcoin"}},d={},c=[{value:"How It All Works",id:"how-it-all-works",level:2},{value:"Installing and accessing DMS",id:"installing-and-accessing-dms",level:2},{value:"Monitoring through Dashboards",id:"monitoring-through-dashboards",level:2}];function h(e){const a={a:"a",admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"dappnode-monitoring-service-dms",children:"Dappnode Monitoring Service (DMS)"}),"\n",(0,n.jsx)(a.p,{children:'As a Dappnode user, there are times when having insights into the performance of your packages or your whole system can be incredibly beneficial. This means understanding the condition or "health" of your packages, the utilization of your computer resources such as CPU, RAM, and disk space, as well as monitoring network traffic flow. Yet, managing all of these aspects can become complex and tedious, even for those with experience. This is precisely where the Dappnode Monitoring Service (DMS) steps in to simplify matters.'}),"\n",(0,n.jsx)(a.h2,{id:"how-it-all-works",children:"How It All Works"}),"\n",(0,n.jsx)(a.p,{children:"DMS acts as a strong monitoring solution, simplifying the complex task of monitoring your packages and system by automatically collecting all available data and visualizing it for you. But how does it achieve this? DMS primarily comprises two key components: Prometheus and Grafana. Let's break it down"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Prometheus Integration:"})," DMS seamlessly incorporates ",(0,n.jsx)(a.a,{href:"https://prometheus.io/",children:"Prometheus"}),", a comprehensive monitoring toolkit. Prometheus is responsible of  gathering all data coming from other Dappnode packages. This information is the foundation for understanding your package's performance."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Grafana Dashboards:"})," To transform raw data coming from Prometheus into meaningful insights, DMS brings in ",(0,n.jsx)(a.a,{href:"https://grafana.com/",children:"Grafana"}),", renowned for its exceptional data visualization capabilities. Through customizable dashboards, you gain instant access to both real-time and historical perspectives on how your packages are functioning."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["\ud83d\udca1 While DMS can monitor data from your installed packages on its own, we highly recommend installing the ",(0,n.jsx)(a.strong,{children:"Dappnode Exporter"})," package as well. This package expands DMS's capabilities to monitor critical Dappnode system metrics, such as network traffic, CPU, RAM, and disk usage. Moreover, it unlocks new Grafana dashboards that visualize this data for your convenience. You can easily find the Dappnode Exporter in your DAppStore."]})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Your Privacy Matters:"})}),"\n",(0,n.jsx)(a.p,{children:"At Dappnode, we respect your privacy. Rest assured that all the metrics collected by DMS are stored locally, ensuring your information remains private and secure."}),"\n",(0,n.jsx)(a.h2,{id:"installing-and-accessing-dms",children:"Installing and accessing DMS"}),"\n",(0,n.jsxs)(a.p,{children:["Locate DMS in your DAppStore, listed among the Featured packages. The installation process is straightforward, much like any other Dappnode package. After installation, you can access DMS Grafana and explore all its dashboards by visiting ",(0,n.jsx)(a.a,{href:"http://dms.dappnode",children:"http://dms.dappnode"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"monitoring-through-dashboards",children:"Monitoring through Dashboards"}),"\n",(0,n.jsxs)(a.p,{children:["As explained in the ",(0,n.jsx)(a.a,{href:"https://grafana.com/docs/grafana/latest/dashboards/",children:"official Grafana documentation"}),", Grafana simplifies data visualization through organized views known as dashboards. In the context of Dappnode, many packages, especially our staker packages, come equipped with pre-built Grafana dashboards that seamlessly integrate into DMS upon installation. These dashboards are designed to provide specific insights into the performance of the corresponding packages. To explore the range of available Grafana dashboards within DMS, follow these simple steps:"]}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Accessing Dashboards:"}),' Find the "Dashboards" icon on the left-hand side of the DMS interface and hover your mouse over it. Click on "Browse" to proceed.']}),"\n"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Browse Dashboards",src:s(3248).Z+"",width:"500",height:"500"})})}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Dashboard Folders:"})," In the dashboard browsing view, you'll see different dashboard folders. Each folder contains one or more dashboards related to specific aspects of your Dappnode environment. For instance, let's click on the \"Docker\" dashboard provided by the ",(0,n.jsx)(a.strong,{children:"Dappnode Exporter"})," package."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Dashboard Folders",src:s(5519).Z+"",width:"1618",height:"725"})}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Exploring a Dashboard:"})," That's it! You are now within the chosen dashboard, such as the \"Docker\" dashboard. Here, you'll find valuable information about all your installed packages, including relevant metrics and performance indicators."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Docker Dashboard",src:s(8043).Z+"",width:"2549",height:"1303"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["As you navigate through these Grafana dashboards, it's worth mentioning that the ",(0,n.jsx)(a.a,{href:"https://grafana.com/docs/grafana/latest/",children:"official Grafana documentation"})," provides a wealth of information about dashboards, visualization techniques, and best practices. Exploring this documentation can greatly enhance your ability to interpret and utilize the data presented in DMS dashboards. Whether you're new to Grafana or seeking advanced tips, the official documentation is a valuable resource for maximizing your monitoring experience."]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["\ud83d\udca1 If you're looking for specific dashboards beyond what comes pre-installed, ",(0,n.jsx)(a.a,{href:"https://grafana.com/grafana/dashboards/",children:"Grafana's dashboard repository"})," makes it easy to search and import dashboards created by the community."]})}),"\n",(0,n.jsx)(a.p,{children:"Feel free to check out the different dashboard folders and adjust how things look based on what you like. Grafana offers a bunch of cool features, so have fun exploring and making the dashboards work just right for you!"})]})}function l(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3248:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/dms-browse-dashboards-37ab051b363a523366fc70f93df38cae.png"},5519:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/dms-dashboards-page-3e8a37465fa70b4a9da2a0fb31b0258b.png"},8043:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/dms-docker-dashboard-37854c47052a09ff034780a00a42588b.png"},1151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>t});var n=s(7294);const o={},i=n.createContext(o);function t(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);