(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=(a(84),a(22)),s=a(153),o=a(154),l=a(148),u=a(157),d=a(152),p=a(16),j=a(19),b=a.n(j),f=a(34),m="CREATE",h="UPDATE",x="DELETE",g="FETCH_ALL",O="LIKE",v=a(35),y=a.n(v),C="https://mern-memories-webapp.herokuapp.com/posts",w=function(e,t){return y.a.patch("".concat(C,"/").concat(e),t)},k=function(e){return y.a.delete("".concat(C,"/").concat(e))},I=function(e){return y.a.patch("".concat(C,"/").concat(e,"/likePost"))},N=a(151),E=a(142),S=Object(E.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),D=a(145),F=a(147),T=a(156),_=a(149),z=a(150),L=a(70),W=a.n(L),A=a(71),B=a.n(A),M=a(69),P=a.n(M),R=a(68),H=a.n(R),J=a(5),U=function(e){var t=e.post,a=e.setCurrentId,n=S(),r=Object(p.b)();return Object(J.jsxs)(D.a,{className:n.card,children:[Object(J.jsx)(F.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(J.jsxs)("div",{className:n.overlay,children:[Object(J.jsx)(l.a,{variant:"h6",children:t.creator}),Object(J.jsx)(l.a,{variant:"body2",children:H()(t.createdAt).fromNow()})]}),Object(J.jsx)("div",{className:n.overlay2,children:Object(J.jsx)(T.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(J.jsx)(P.a,{fontSize:"default"})})}),Object(J.jsx)("div",{className:n.details,children:Object(J.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(J.jsx)(l.a,{className:n.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(J.jsx)(_.a,{children:Object(J.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(J.jsxs)(z.a,{className:n.cardActions,children:[Object(J.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,r=n.data,a({type:O,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(J.jsx)(W.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(J.jsxs)(T.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(f.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:a({type:x,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(J.jsx)(B.a,{fontSize:"small"}),"Delete"]})]})]})},K=Object(E.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),V=function(e){var t=e.setCurrentId,a=Object(p.c)((function(e){return e.posts})),n=K();return a.length?Object(J.jsx)(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(J.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(J.jsx)(U,{post:e,setCurrentId:t})},e._id)}))}):Object(J.jsx)(N.a,{})},q=a(14),G=a(75),Q=a(155),X=Object(E.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Y=a(72),Z=a.n(Y),$=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(p.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),d=X(),j=Object(p.b)();Object(n.useEffect)((function(){u&&o(u)}),[u]);var x=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(J.jsx)(G.a,{className:d.paper,children:Object(J.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:function(e){e.preventDefault(),j(t?function(e,t){return function(){var a=Object(f.a)(b.a.mark((function a(n){var r,c;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,w(e,t);case 3:r=a.sent,c=r.data,n({type:h,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,y.a.post(C,c);case 3:n=t.sent,r=n.data,a({type:m,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),x()},children:[Object(J.jsxs)(l.a,{variant:"h6",children:[t?"Edit ":"Create "," a memory"]}),Object(J.jsx)(Q.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object(q.a)(Object(q.a)({},s),{},{creator:e.target.value}))}}),Object(J.jsx)(Q.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object(q.a)(Object(q.a)({},s),{},{title:e.target.value}))}}),Object(J.jsx)(Q.a,{name:"message",variant:"outlined",label:"Caption",fullWidth:!0,value:s.message,onChange:function(e){return o(Object(q.a)(Object(q.a)({},s),{},{message:e.target.value}))}}),Object(J.jsx)(Q.a,{name:"tags",variant:"outlined",label:"Tags (comma seperated)",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object(q.a)(Object(q.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(J.jsx)("div",{className:d.fileInput,children:Object(J.jsx)(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(q.a)(Object(q.a)({},s),{},{selectedFile:t}))}})}),Object(J.jsxs)(T.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:[t?"Update":"Create"," Memory"]}),Object(J.jsx)(T.a,{variant:"contained",color:"secondary",size:"small",onClick:x,fullWidth:!0,children:"Clear"})]})})},ee=a.p+"static/media/memory.a0fc4901.png",te=a(12),ae=Object(E.a)((function(e){return Object(te.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),ne=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1],c=ae(),j=Object(p.b)();return Object(n.useEffect)((function(){j(function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(C);case 3:a=e.sent,n=a.data,t({type:g,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,j]),Object(J.jsxs)(s.a,{maxWidth:"lg",children:[Object(J.jsxs)(o.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(J.jsx)(l.a,{className:c.heading,variant:"h2",align:"center",children:"\u2661Memories"}),Object(J.jsx)("img",{className:c.image,src:ee,alt:"Memories",height:"60"})]}),Object(J.jsx)(u.a,{in:!0,children:Object(J.jsx)(s.a,{children:Object(J.jsxs)(d.a,{container:!0,className:c.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(J.jsx)(d.a,{item:!0,xs:12,sm:7,children:Object(J.jsx)(V,{setCurrentId:r})}),Object(J.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(J.jsx)($,{currentId:a,setCurrentId:r})})]})})})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},ce=a(33),ie=a(73),se=a(21),oe=Object(ce.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return e.filter((function(e){return e._id!==t.payload}));case g:return t.payload;case m:return[].concat(Object(se.a)(e),[t.payload]);case O:case h:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}}}),le=Object(ce.d)(oe,Object(ce.c)(Object(ce.a)(ie.a)));c.a.render(Object(J.jsx)(p.a,{store:le,children:Object(J.jsx)(ne,{})}),document.getElementById("root")),re()},84:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.e8f3afc2.chunk.js.map