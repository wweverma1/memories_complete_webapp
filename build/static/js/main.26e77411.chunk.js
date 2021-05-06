(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(9),c=n.n(r),i=(n(101),n(178)),o=n(40),s=n(14),l=n(19),u=n(168),d=n(136),p=n(170),j=n(183),b=n(171),m=n(18),f=n(75),g=n(164),h=n(167),x=Object(g.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(h.a[500]),backgroundColor:h.a[500]}}})),O=n.p+"static/media/memory.a0fc4901.png",v=n(2),y=function(){var e=x(),t=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(m.b)(),g=Object(s.f)(),h=Object(s.g)(),y=function(){i({type:"LOGOUT"}),g.push("/"),c(null)};return Object(a.useEffect)((function(){var e=null===r||void 0===r?void 0:r.token;e&&(1e3*Object(f.a)(e).exp<(new Date).getTime()&&y());c(JSON.parse(localStorage.getItem("profile")))}),[h]),Object(v.jsxs)(u.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(v.jsxs)("div",{className:e.brandContainer,children:[Object(v.jsx)(d.a,{component:o.b,to:"/",className:e.heading,variant:"h2",align:"center",children:"\u2661Memories"}),Object(v.jsx)("img",{className:e.image,src:O,alt:"Memories",height:"60"})]}),Object(v.jsx)(p.a,{className:e.toolbar,children:r?Object(v.jsxs)("div",{className:e.profile,children:[Object(v.jsx)(j.a,{className:e.purple,alt:r.result.name,src:r.result.imageURL,children:r.result.name.charAt[0]}),Object(v.jsx)(d.a,{className:e.userName,variant:"h6",children:r.result.name}),Object(v.jsx)(b.a,{variant:"contained",className:e.logout,color:"secondary",onClick:y,children:"Log Out"})]}):Object(v.jsx)(b.a,{component:o.b,to:"/auth",variant:"contained",color:"primary",children:"Sign In"})})]})},C=n(182),w=n(177),k=n(16),S=n.n(k),N=n(25),I="CREATE",T="UPDATE",F="DELETE",L="FETCH_ALL",D="LIKE",A="AUTH",E="LOGOUT",_=n(77),B=n.n(_).a.create({baseURL:"https://mern-memories-webapp.herokuapp.com"});B.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var P=function(e){return B.patch("/posts/".concat(e,"/likePost"))},z=function(e,t){return B.patch("/posts/".concat(e),t)},U=function(e){return B.delete("/posts/".concat(e))},W=function(e){return B.post("/user/signin",e)},J=function(e){return B.post("/user/signup",e)},M=n(176),R=Object(g.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),H=n(172),G=n(173),q=n(174),V=n(175),K=n(79),Y=n.n(K),Z=n(60),Q=n.n(Z),X=n(81),$=n.n(X),ee=n(80),te=n.n(ee),ne=n(78),ae=n.n(ne),re=function(e){var t,n,a,r,c=e.post,i=e.setCurrentId,o=R(),s=Object(m.b)(),l=JSON.parse(localStorage.getItem("profile")),u=function(){return c.likes.length>0?c.likes.find((function(e){var t,n;return e===((null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.googleId)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n._id))}))?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Y.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Q.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Q.a,{fontSize:"small"}),"\xa0Like"]})};return Object(v.jsxs)(H.a,{className:o.card,children:[Object(v.jsx)(G.a,{className:o.media,image:c.selectedFile,title:c.title}),Object(v.jsxs)("div",{className:o.overlay,children:[Object(v.jsx)(d.a,{variant:"h6",children:c.name}),Object(v.jsx)(d.a,{variant:"body2",children:ae()(c.createdAt).fromNow()})]}),((null===l||void 0===l||null===(t=l.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===l||void 0===l||null===(n=l.result)||void 0===n?void 0:n._id)===(null===c||void 0===c?void 0:c.creator))&&Object(v.jsx)("div",{className:o.overlay2,children:Object(v.jsx)(b.a,{style:{color:"white"},size:"small",onClick:function(){return i(c._id)},children:Object(v.jsx)(te.a,{fontSize:"default"})})}),Object(v.jsx)("div",{className:o.details,children:Object(v.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.tags.map((function(e){return"#".concat(e," ")}))})}),Object(v.jsx)(d.a,{className:o.title,gutterBottom:!0,variant:"h5",component:"h2",children:c.title}),Object(v.jsx)(q.a,{children:Object(v.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:c.message})}),Object(v.jsxs)(V.a,{className:o.cardActions,children:[Object(v.jsx)(b.a,{size:"small",color:"primary",disabled:!(null===l||void 0===l?void 0:l.result),onClick:function(){return s((e=c._id,function(){var t=Object(N.a)(S.a.mark((function t(n){var a,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:a=t.sent,r=a.data,n({type:D,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:Object(v.jsx)(u,{})}),((null===l||void 0===l||null===(a=l.result)||void 0===a?void 0:a.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===l||void 0===l||null===(r=l.result)||void 0===r?void 0:r._id)===(null===c||void 0===c?void 0:c.creator))&&Object(v.jsxs)(b.a,{size:"small",color:"secondary",onClick:function(){return s((e=c._id,function(){var t=Object(N.a)(S.a.mark((function t(n){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e);case 3:n({type:F,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(v.jsx)($.a,{fontSize:"small"})," Delete"]})]})]})},ce=n(12),ie=Object(g.a)((function(e){var t;return t={mainContainer:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},purple:{color:e.palette.getContrastText(h.a[500]),backgroundColor:h.a[500]}},Object(ce.a)(t,e.breakpoints.down("sm"),{appBar:{padding:"10px 20px"},heading:{display:"none"},userName:{display:"none"},image:{marginLeft:"5px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"160px"}}),Object(ce.a)(t,"actionDiv",{textAlign:"center"}),t})),oe=function(e){var t=e.setCurrentId,n=Object(m.c)((function(e){return e.posts})),a=ie();return n.length?Object(v.jsx)(w.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:n.map((function(e){return Object(v.jsx)(w.a,{item:!0,xs:12,sm:6,children:Object(v.jsx)(re,{post:e,setCurrentId:t})},e._id)}))}):Object(v.jsx)(M.a,{})},se=n(11),le=n(89),ue=n(181),de=Object(g.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),pe=n(82),je=n.n(pe),be=function(e){var t,n=e.currentId,r=e.setCurrentId,c=Object(a.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(l.a)(c,2),o=i[0],s=i[1],u=Object(m.c)((function(e){return n?e.posts.find((function(e){return e._id===n})):null})),p=de(),j=Object(m.b)(),f=JSON.parse(localStorage.getItem("profile"));Object(a.useEffect)((function(){u&&s(u)}),[u]);var g=function(){r(null),s({title:"",message:"",tags:"",selectedFile:""})};return(null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name)?Object(v.jsx)(le.a,{className:p.paper,children:Object(v.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:function(e){var t,a;(e.preventDefault(),n)?j(function(e,t){return function(){var n=Object(N.a)(S.a.mark((function n(a){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z(e,t);case 3:r=n.sent,c=r.data,a({type:T,payload:c}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(n,Object(se.a)(Object(se.a)({},o),{},{name:null===f||void 0===f||null===(t=f.result)||void 0===t?void 0:t.name}))):j(function(e){return function(){var t=Object(N.a)(S.a.mark((function t(n){var a,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,B.post("/posts",c);case 3:a=t.sent,r=a.data,n({type:I,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(Object(se.a)(Object(se.a)({},o),{},{name:null===f||void 0===f||null===(a=f.result)||void 0===a?void 0:a.name})));g()},children:[Object(v.jsxs)(d.a,{variant:"h6",children:[n?"Edit ":"Create "," a memory"]}),Object(v.jsx)(ue.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:o.title,onChange:function(e){return s(Object(se.a)(Object(se.a)({},o),{},{title:e.target.value}))}}),Object(v.jsx)(ue.a,{name:"message",variant:"outlined",label:"Caption",fullWidth:!0,value:o.message,onChange:function(e){return s(Object(se.a)(Object(se.a)({},o),{},{message:e.target.value}))}}),Object(v.jsx)(ue.a,{name:"tags",variant:"outlined",label:"Tags (comma seperated)",fullWidth:!0,value:o.tags,onChange:function(e){return s(Object(se.a)(Object(se.a)({},o),{},{tags:e.target.value.split(",")}))}}),Object(v.jsx)("div",{className:p.fileInput,children:Object(v.jsx)(je.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(se.a)(Object(se.a)({},o),{},{selectedFile:t}))}})}),Object(v.jsxs)(b.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:[n?"Update":"Create"," Memory"]}),Object(v.jsx)(b.a,{variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0,children:"Clear"})]})}):Object(v.jsx)(le.a,{className:p.paper,children:Object(v.jsx)(d.a,{variant:"h6",align:"center",children:"Please Sign in / Sign up to access member privileges."})})},me=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(m.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(N.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.get("/posts");case 3:n=e.sent,a=n.data,t({type:L,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[n,c]),Object(v.jsx)(C.a,{in:!0,children:Object(v.jsx)(i.a,{children:Object(v.jsxs)(w.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(v.jsx)(w.a,{item:!0,xs:12,sm:7,children:Object(v.jsx)(oe,{setCurrentId:r})}),Object(v.jsx)(w.a,{item:!0,xs:12,sm:4,children:Object(v.jsx)(be,{currentId:n,setCurrentId:r})})]})})})},fe=n(83),ge=n(86),he=n.n(ge),xe=Object(g.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),Oe=n(179),ve=n(180),ye=n(84),Ce=n.n(ye),we=n(85),ke=n.n(we),Se=function(e){var t=e.name,n=e.handleChange,a=e.label,r=e.half,c=e.autoFocus,i=e.type,o=e.handleShowPassword;return Object(v.jsx)(w.a,{item:!0,xs:12,sm:r?6:12,children:Object(v.jsx)(ue.a,{name:t,onChange:n,variant:"outlined",required:!0,fullWidth:!0,label:a,autoFocus:c,type:i,InputProps:"password"===t?{endAdornment:Object(v.jsx)(Oe.a,{position:"end",children:Object(v.jsx)(ve.a,{onClick:o,children:"password"===i?Object(v.jsx)(Ce.a,{}):Object(v.jsx)(ke.a,{})})})}:null})})},Ne=function(){return Object(v.jsx)("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24",children:Object(v.jsx)("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"})})},Ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Te=function(){var e=xe(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),p=u[0],f=u[1],g=Object(a.useState)(Ie),h=Object(l.a)(g,2),x=h[0],O=h[1],y=Object(m.b)(),C=Object(s.f)(),k=function(e){O(Object(se.a)(Object(se.a)({},x),{},Object(ce.a)({},e.target.name,e.target.value)))},I=function(){var e=Object(N.a)(S.a.mark((function e(t){var n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=null===t||void 0===t?void 0:t.profileObj,a=null===t||void 0===t?void 0:t.tokenId;try{y({type:"AUTH",data:{result:n,token:a}}),C.push("/")}catch(r){console.log(r)}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)(i.a,{component:"main",maxWidth:"xd",children:Object(v.jsxs)(le.a,{className:e.paper,elevation:3,children:[Object(v.jsx)(j.a,{className:e.avatar,children:Object(v.jsx)(he.a,{})}),Object(v.jsx)(d.a,{variant:"h5",children:p?"Sign Up":"Sign In"}),Object(v.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),y(p?function(e,t){return function(){var n=Object(N.a)(S.a.mark((function n(a){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,J(e);case 3:r=n.sent,c=r.data,a({type:A,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(x,C):function(e,t){return function(){var n=Object(N.a)(S.a.mark((function n(a){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,W(e);case 3:r=n.sent,c=r.data,a({type:A,data:c}),t.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}(x,C))},children:[Object(v.jsxs)(w.a,{container:!0,spacing:2,children:[p&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Se,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),Object(v.jsx)(Se,{name:"lastName",label:"Last Name",handleChange:k,half:!0})]}),Object(v.jsx)(Se,{name:"email",label:"Email Address",handleChange:k,type:"email"}),Object(v.jsx)(Se,{name:"password",label:"Password",handleChange:k,type:r?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),p&&Object(v.jsx)(Se,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"})]}),Object(v.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:p?"Sign Up":"Sign In"}),Object(v.jsx)(fe.GoogleLogin,{clientId:"195802144538-ld05s7lsne89120eqpfubsg6tagq35g1.apps.googleusercontent.com",render:function(t){return Object(v.jsx)(b.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:Object(v.jsx)(Ne,{}),variant:"contained",children:"Google Sign In"})},onSuccess:I,onFailure:function(){console.log("Google Sign In failed. Try Again !")},cookiePolicy:"single_host_origin"}),Object(v.jsx)(w.a,{container:!0,justify:"flex-end",children:Object(v.jsx)(w.a,{item:!0,children:Object(v.jsx)(b.a,{onClick:function(){f((function(e){return!e})),c(!1)},children:p?"Already have an account ? Sign In":"Don't have an account ? Sign Up"})})})]})]})})},Fe=function(){return Object(v.jsx)(o.a,{children:Object(v.jsxs)(i.a,{maxWidth:"lg",children:[Object(v.jsx)(y,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{path:"/",exact:!0,component:me}),Object(v.jsx)(s.a,{path:"/auth",exact:!0,component:Te})]})]})})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},De=n(46),Ae=n(87),Ee=n(27),_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return localStorage.setItem("profile",JSON.stringify(Object(se.a)({},null===t||void 0===t?void 0:t.data))),Object(se.a)(Object(se.a)({},e),{},{authData:t.data,loading:!1,errors:null});case E:return localStorage.clear(),Object(se.a)(Object(se.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},Be=Object(De.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return e.filter((function(e){return e._id!==t.payload}));case L:return t.payload;case I:return[].concat(Object(Ee.a)(e),[t.payload]);case D:case T:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},auth:_e}),Pe=Object(De.d)(Be,Object(De.c)(Object(De.a)(Ae.a)));c.a.render(Object(v.jsx)(m.a,{store:Pe,children:Object(v.jsx)(Fe,{})}),document.getElementById("root")),Le()}},[[134,1,2]]]);
//# sourceMappingURL=main.26e77411.chunk.js.map