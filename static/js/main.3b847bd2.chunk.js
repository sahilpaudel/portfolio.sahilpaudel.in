(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,a,t){"use strict";t.d(a,"a",function(){return o});var n=t(71),r=t(98),o=Object(r.a)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:180,flexShrink:0},drawerPaper:{width:180},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)},link:{textDecoration:"none",color:"white"},appBarMobile:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawerMobile:{width:180,flexShrink:0},drawerPaperMobile:{width:180},drawerHeader:Object(n.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}})},54:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var n=t(73),r=t.n(n),o=t(75),i=t.n(o),l=t(74),c=t.n(l),s=t(76),m=t.n(s),d=[{text:"Me",icon:r.a,path:"/"},{text:"Projects",icon:c.a,path:"/projects"},{text:"Work",icon:i.a,path:"/work"},{text:"Education",icon:m.a,path:"/education"}]},72:function(e,a,t){"use strict";(function(e){var n=t(55),r=t(0),o=t.n(r),i=t(3),l=t(106),c=t(102),s=t(77),m=t.n(s),d=t(99),u=t(100),p=t(101),h=t(81),g=t(107),f=t(103),b=t(104),E=t(32),w=t(38),v=t(54);a.a=function(){var a=Object(w.a)(),t=o.a.useState(!1),r=Object(n.a)(t,2),s=r[0],y=r[1],x=function(e){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&y(e)}},k=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent);return o.a.createElement("div",{className:a.root},o.a.createElement(d.a,null),o.a.createElement(u.a,{position:"fixed",color:"inherit",className:a.appBarMobile},o.a.createElement(p.a,null,o.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",onClick:function(){y(!0)},edge:"end",className:Object(i.a)(a.menuButton,s&&a.hide)},o.a.createElement(m.a,null)))),o.a.createElement(l.a,{disableBackdropTransition:!k,disableDiscovery:k,anchor:"left",open:s,onClose:x(!1),onOpen:x(!0),classes:{paper:a.drawerPaper}},o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,v.a.map(function(e,t){return o.a.createElement(E.b,{to:e.path,key:e.text,className:a.link,onClick:function(){return y(!1)}},o.a.createElement(g.a,{button:!0},o.a.createElement(f.a,null,o.a.createElement(e.icon,null)),o.a.createElement(b.a,{primary:e.text})))})))))}}).call(this,t(96))},84:function(e,a,t){e.exports=t(97)},89:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),i=t.n(o),l=(t(89),t(99)),c=t(29),s=t(98),m=t(138),d=t(140),u=t(141),p=t(31),h=Object(s.a)(function(e){return{root:Object(c.a)({display:"flex"},e.breakpoints.down("md"),{flexDirection:"column"}),details:{display:"flex",flexDirection:"column"},cover:Object(c.a)({margin:10,width:"20%"},e.breakpoints.down("md"),{width:"100%"}),ul:{marginTop:0}}}),g=function(){var e=h();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:e.root},r.a.createElement(d.a,{component:"img",className:e.cover,image:"sahilpaudel.jpg",title:"Sahil Paudel Rocks"}),r.a.createElement("div",{className:e.details},r.a.createElement(u.a,{className:e.content},r.a.createElement(p.a,{component:"h5",variant:"h5"},"Sahil Paudel"),r.a.createElement(p.a,{variant:"subtitle1",color:"textSecondary"},"@Software Developer"),r.a.createElement("ul",{className:e.ul},r.a.createElement(p.a,{variant:"caption",color:"textSecondary"},r.a.createElement("li",null,"Coding & Living in Bengaluru, India")),r.a.createElement(p.a,{variant:"caption",color:"textSecondary"},r.a.createElement("li",null,"3 years of experience as a Developer")),r.a.createElement(p.a,{variant:"caption",color:"textSecondary"},r.a.createElement("li",null,"Passionate about building scalable products and also open source technology enthusiast")),r.a.createElement(p.a,{variant:"caption",color:"textSecondary"},r.a.createElement("li",null,"Contact: email: sahilpaudel@yahoo.in / tel: 9876996015")))))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))},b=t(30),E=t(150),w=["Java","Spring Boot","JavaScript","React","Elixir","Phoenix","ExpressJS","Go"],v=t(66),y=t.n(v),x=t(67),k=t.n(x),N=t(68),S=t.n(N),C=t(69),B=t.n(C),j=[{name:"Github",url:"https://github.com/sahilpaudel",icon:y.a},{name:"Instagram",url:"https://www.instagram.com/thehighpaudel",icon:k.a},{name:"Facebook",url:"https://www.facebook.com/sahil.paudel",icon:S.a},{name:"Twitter",url:"https://twitter.com/sahil_paudel",icon:B.a}],M=Object(s.a)(function(e){return{root:{"& a":{textDecoration:"none",color:"#fff"}},aboutMeText:{margin:10},aboutMeContainer:{width:"75%",marginLeft:10},aboutMeContent:{margin:10,textAlign:"center",wordBreak:"break-word"},heart:{color:"red",fontSize:20},skillsText:{margin:10,fontWeight:"bold"},chip:{margin:5},profile:{textAlign:"center"},profileContainer:{margin:10}}}),P=function(){var e=M();return r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{variant:"h6",className:e.aboutMeText},r.a.createElement("b",null,"About Me")),r.a.createElement("div",{className:e.aboutMeContainer},r.a.createElement(p.a,{variant:"caption",className:e.aboutMeContent},"Backend Engineer building scalable web applications. With enthusiasm to learn everything possible in the field, currently exploring frontend development with React. My passion is to contribute in any way possible for the growth of engineering culture around me (mostly within me).")),r.a.createElement(p.a,{variant:"caption",className:e.aboutMeContent},"I ",r.a.createElement("span",{className:e.heart},"\u2764")," Java, Spring Boot, NodeJS, React & Elixir."),r.a.createElement(p.a,{variant:"h6",className:e.skillsText},"Skills:"),r.a.createElement("div",null,w.map(function(a){return r.a.createElement(E.a,{className:e.chip,label:a})})),r.a.createElement(p.a,{variant:"h6",className:e.skillsText},"Profiles:"),r.a.createElement("div",{className:e.profileContainer},j.map(function(a){return r.a.createElement("a",{href:a.url,key:a.name,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:e.profile},r.a.createElement(a.icon,null)," ",a.name," |"," "))})))},O=t(55),T=t(5),D=t(149),I=t(142),W=t(143),J=Object(T.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"1px",marginBottom:20,"&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{}},expanded:{}})(D.a),R=Object(T.a)({root:{borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(I.a),A=Object(T.a)(function(e){return{root:{padding:e.spacing(1)}}})(W.a),F=[{name:"Cull - A/B Testing UI Dashboard",stack:["Go","MongoDB","React","Material-UI"],description:"Cull is an A/B testing platform for identifying non deterministic features that are best suited for a given set of audience.",contribution:"Worked on the dashboard creation for Cull using ReactJS with few contribution towards backend using Go. I was completely responsible for building the UI dashboard from scratch. Used Material-UI for react as the css design framework and gained fair bit of knowledge on how to create a responsive UI using it.",year:2020},{name:"Cyborg - Data Spec Validation Tool",stack:["Spring Booot","MongoDB","ReactJS","Material-UI"],description:"Cyborg is a validation application backend built in Spring Boot with MongoDB for data persistance and ReactJS for the visual dashboard. It has the capability to validate whether the response from a financial institution is compliant with the Open Banking standard or not. As Open Banking standard has various version viz. v3.0, v3.1.2 or v3.1.2 and so on, and all financial institute must send there data response in the format specified by Open Banking Standard corresponding to these versions. So, we as a financial aggregator we built a layer that would validate the response before we persist the data. MongoDB is used to store the version mapping and format specs for each version. Dashboard is used for manual validation. Also Cyborg can provide analysis and compare the fields that we were getting from the webpage with that of the data we are getting in the response.",contribution:"To build the whole data spec validation tool (Cyborg) both frontend as well as the backend as an individual contributor.",year:2019},{name:"Page As Response (PAR)",stack:["Core Java","Vanilla JavaScript","Selenium"],description:"Page As Response is a technique where we don't fetch whole web content such as css, js and other media files while scrapping a webpage. We analyze the websites behavior and pick network call(s) that sends the required web data and make that request using JavaScriptExecutor in Selenium to mimick the request and fetch the response as a text instead of whole webpage, that we get while loading a web url using selenium and chrome driver.",contribution:"I alongwith my team lead sort of invented this technique when we observed huge number of failures while scrapping web data due to page load issues and page load timeouts. Earlier we were facing an long running issue for a bank site where the bank page was not loading even after numerous wait and timeouts, also increasing the latency of the script to 200-220 secs per request where complete data was fetched. But with this PAR technique we were able to reduce the latency to 40-45 secs at max and that was a huge infrastructural gain",year:2019}],H=Object(s.a)(function(e){return{root:{marginTop:15},year:{position:"absolute",right:15},chip:{margin:"10px 10px 10px 0"},details:{display:"flex",flexDirection:"column"},contributionText:{marginTop:10,fontWeight:"bold",textDecoration:"underline"},contribution:{marginTop:5,fontSize:13,wordSpacing:"-0.1em"},stackText:{marginTop:10,fontWeight:"bold",textDecoration:"underline"},stack:{marginTop:5},footer:{"& .MuiChip-root":{borderRadius:0}}}}),z=function(){var e=H(),a=r.a.useState([]),t=Object(O.a)(a,2),n=t[0],o=t[1];return r.a.createElement("div",{className:e.root},F.map(function(a,t){return r.a.createElement(J,{square:!0,key:a.name,expanded:n==="panel"+t,onChange:(i="panel"+t,function(e,a){o(!!a&&i)})},r.a.createElement(R,{"aria-controls":"panel".concat(t+1,"d-content"),id:"panel".concat(t+1,"d-header")},r.a.createElement(p.a,null,a.name),r.a.createElement(p.a,{className:e.year},a.year)),r.a.createElement(A,{className:e.details},r.a.createElement("div",null,r.a.createElement(p.a,{className:e.contributionText},"Contribution:"),r.a.createElement(p.a,{className:e.contribution},a.contribution)),r.a.createElement("div",null,r.a.createElement(p.a,{className:e.contributionText},"Description:"),r.a.createElement(p.a,{className:e.contribution},a.description)),r.a.createElement("div",{className:e.footer},r.a.createElement(p.a,{className:e.stackText},"Stack:"),a.stack.map(function(a,t){return r.a.createElement(E.a,{key:t,label:a,variant:"outlined",size:"small",className:e.chip})}))));var i}))},U=t(144),q=[{name:"PharmEasy",role:"Software Engineer",domain:"Online Medicine Retail Store",year:"Nov, 2019 - Present",location:"Bengaluru, Karnataka",image:"pharmeasy.png",website:"https://pharmeasy.in"},{name:"Envestnet Yodlee",role:"Software Engineer",domain:"Fintech - Personal Finance Management",year:"July, 2017 - Nov, 2019",location:"Bengaluru, Karnataka",image:"yodlee.png",website:"https://yodlee.com"}],G=t(145),L=t(151),V=t(53),$=t.n(V),_=Object(s.a)(function(e){return{root:Object(c.a)({maxWidth:345,marginTop:10},e.breakpoints.down("md"),{maxWidth:"100%"}),workHistory:{marginTop:10,marginBottom:5},link:{textDecoration:"none"},media:{height:200},avatar:{backgroundColor:"#f0f0f0",fontWeight:"bold"},workPosition:{fontWeight:"bold",margin:0},location:{fontStyle:"italic"},domain:{fontStyle:"italic"},locationContainer:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"}}}),K=function(){var e=_();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h6",className:e.workHistory},r.a.createElement("b",null,"Work History:")),r.a.createElement(U.a,{container:!0},q.map(function(a){return r.a.createElement(U.a,{item:!0,xs:12,sm:12,md:6,lg:4,key:a.name},r.a.createElement("a",{href:a.website,target:"_blank",rel:"noopener noreferrer",className:e.link},r.a.createElement(m.a,{className:e.root},r.a.createElement(G.a,{avatar:r.a.createElement(L.a,{"aria-label":"company-name",className:e.avatar},a.name.substring(0,1)),title:a.name,subheader:a.year}),r.a.createElement(d.a,{component:"img",className:e.media,image:a.image,title:a.name}),r.a.createElement(u.a,null,r.a.createElement(p.a,{variant:"body1",className:e.workPosition},a.role),r.a.createElement(p.a,{variant:"caption",className:e.domain},a.domain),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:e.locationContainer},r.a.createElement($.a,{style:{fontSize:18}}),r.a.createElement(p.a,{variant:"caption",className:e.location},a.location))))))})))},Y=t(146),Q=[{name:"Bachelor of Computer Science & Engineering",from:"Lovely Professional University",location:"Jalandhar, Punjab, India - 144411",year:"2017",grade:"8.45 CGPA"},{name:"Higher Secondary Education",from:"Jawahar Navodaya Vidyalaya",location:"Pfukhro, Mao Gate, Senapati, Manipur, India - 795150",year:"2013",grade:"87.5%"}],X=Object(s.a)(function(e){return{root:Object(c.a)({maxWidth:"40vw",marginTop:10},e.breakpoints.down("md"),{maxWidth:"100%"}),educationHistory:{marginTop:10,marginBottom:5},link:{textDecoration:"none"},media:{height:200},avatar:{backgroundColor:"#f0f0f0",fontWeight:"bold",objectFit:"scale-down"},educationPosition:{fontWeight:"bold",margin:0},location:{fontStyle:"italic"},locationContainer:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start"},grade:{margin:20,fontWeight:"bold"}}}),Z=function(){var e=X();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"h6",className:e.educationHistory},r.a.createElement("b",null,"Education:")),r.a.createElement(U.a,{container:!0},Q.map(function(a){return r.a.createElement(U.a,{item:!0,xs:12,sm:12,md:6,lg:6,key:a.name},r.a.createElement(m.a,{className:e.root},r.a.createElement(G.a,{avatar:r.a.createElement(L.a,{"aria-label":"institution-name",className:e.avatar},a.from.substring(0,1)),action:r.a.createElement(p.a,{className:e.grade},a.grade),title:a.from,subheader:a.year}),r.a.createElement(Y.a,null),r.a.createElement(u.a,null,r.a.createElement(p.a,{variant:"body1",className:e.educationPosition},a.name),r.a.createElement("br",null),r.a.createElement("div",{className:e.locationContainer},r.a.createElement($.a,{style:{fontSize:18}}),r.a.createElement(p.a,{variant:"caption",className:e.location},a.location)))))})))},ee=function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(b.a,{exact:!0,path:"/projects"},r.a.createElement(z,null)),r.a.createElement(b.a,{exact:!0,path:"/work"},r.a.createElement(K,null)),r.a.createElement(b.a,{exact:!0,path:"/education"},r.a.createElement(Z,null)))},ae=t(38),te=t(72),ne=t(19),re=t(102),oe=t(107),ie=t(103),le=t(104),ce=t(54),se=t(32),me=function(){var e=Object(ae.a)();return r.a.createElement(ne.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerContainer},r.a.createElement(re.a,null,ce.a.map(function(a,t){return r.a.createElement(se.b,{to:a.path,key:a.text,className:e.link},r.a.createElement(oe.a,{button:!0},r.a.createElement(ie.a,null,r.a.createElement(a.icon,null)),r.a.createElement(le.a,{primary:a.text})))}))))},de=t(148),ue=function(){var e=Object(ae.a)();return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,null),r.a.createElement(de.a,{smDown:!0},r.a.createElement(me,null),r.a.createElement("main",{className:e.content},r.a.createElement(f,null),r.a.createElement(ee,null))),r.a.createElement(de.a,{mdUp:!0},r.a.createElement(te.a,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement(f,null),r.a.createElement(ee,null))))};function pe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,null))}var he=t(78),ge=t(147),fe=document.getElementById("root"),be=Object(he.a)({palette:{type:"dark"},typography:{fontFamily:["dm","Menlo","Monaco","'Courier New'","monospace"].join()}});i.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{theme:be},r.a.createElement(se.a,null,r.a.createElement(pe,null)))),fe)}},[[84,1,2]]]);
//# sourceMappingURL=main.3b847bd2.chunk.js.map