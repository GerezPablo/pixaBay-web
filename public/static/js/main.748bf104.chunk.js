(this["webpackJsonpfront-egeon"]=this["webpackJsonpfront-egeon"]||[]).push([[0],{27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(18),s=a.n(c),i=a(9),o=a(14),l=a(30),j=a(4),d="[auth] Login state finished",b="[auth] Login",u="[auth] Logout",m={checking:!0},h=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)(Object(j.a)({},e),t.payload),{},{checking:!1});case d:return Object(j.a)(Object(j.a)({},e),{},{checking:!1});case u:return{checking:!1};default:return e}}}),p="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,g=Object(o.e)(h,p(Object(o.a)(l.a))),x=a(12),O=a(3),f=a(20),v=function(e){var t=e.isAuthenticated,a=e.component,r=Object(f.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(O.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(n.jsx)(a,Object(j.a)({},e)):Object(n.jsx)(O.a,{to:"/login"})}}))},N=function(e){var t=e.isAuthenticated,a=e.component,r=Object(f.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(O.b,Object(j.a)(Object(j.a)({},r),{},{component:function(e){return t?Object(n.jsx)(O.a,{to:"/"}):Object(n.jsx)(a,Object(j.a)({},e))}}))},w=a(13),y=a.n(w),k=a(16),S="https://egeon.herokuapp.com/api",C=function(e,t,a){var n="".concat(S,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(S,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},E=function(){var e=Object(k.a)(y.a.mark((function e(t,a,n){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(S,"/img?topic=").concat(t,"&limit=").concat(a,"&offset=").concat(n),e.next=3,fetch(r);case 3:return c=e.sent,e.abrupt("return",c.json().then((function(e){return e.results})));case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),T=a(10),L=a.n(T),I=function(){return{type:d}},D=function(e){return{type:b,payload:e}},_=function(){return{type:u}},A=a(6),G=a(19),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(A.a)(t,2),n=a[0],c=a[1],s=function(e){var t=e.target;c(Object(j.a)(Object(j.a)({},n),{},Object(G.a)({},t.name,t.value)))};return[n,s]},F=(a(27),a.p+"static/media/imagotype.2f622949.png"),R=function(){var e=Object(i.b)(),t=B({loginEmail:"",loginPassword:""}),a=Object(A.a)(t,2),r=a[0],c=a[1],s=r.loginEmail,o=r.loginPassword;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("nav",{className:"mb-1 navbar navbar-expand-lg purple navbar-dark darken-4",children:[Object(n.jsx)("a",{className:"navbar-brand"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-333","aria-controls":"navbarSupportedContent-333","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent-333",children:Object(n.jsx)("ul",{className:"navbar-nav ml-auto nav-flex-icons",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(x.b,{className:"nav-link",to:"/register",children:"Sign up"})})})})]}),Object(n.jsxs)("div",{className:"container login-container",children:[Object(n.jsx)("img",{src:F,style:{width:"40vh",display:"block",marginLeft:"auto",marginRight:"auto"}}),Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("h3",{children:"Login "}),Object(n.jsxs)("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=s,n=o,function(){var e=Object(k.a)(y.a.mark((function e(t){var r,c,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,s=c.errors,400!==r.status){e.next=20;break}if(void 0===s){e.next=17;break}if(void 0===s.email){e.next=11;break}return e.abrupt("return",L.a.fire("Something gone wrong",s.email.msg,"error"));case 11:if(void 0===s.password){e.next=14;break}return e.abrupt("return",L.a.fire("Something gone wrong",s.password.msg,"error"));case 14:e.next=18;break;case 17:L.a.fire("Something gone wrong",c.msg,"error");case 18:e.next=24;break;case 20:L.a.fire({icon:"success",text:"Logged in",showConfirmButton:!1,timer:1e3}),localStorage.setItem("token",c.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(D({username:c.username,uid:c.uid}));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"loginEmail",value:s,onChange:c})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"loginPassword",value:o,onChange:c})}),Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})]})]})]})]})},U=a.p+"static/media/isotype.ac7f09fb.png",z=function(){var e=Object(i.b)(),t=B({registerUsername:"",registerEmail:"",registerPassword:"",registerPassword2:""}),a=Object(A.a)(t,2),r=a[0],c=a[1],s=r.registerUsername,o=r.registerEmail,l=r.registerPassword,j=r.registerPassword2;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("nav",{className:"mb-1 navbar navbar-expand-lg purple navbar-dark darken-4",children:[Object(n.jsx)("a",{className:"navbar-brand",children:Object(n.jsx)("img",{src:U,style:{width:"5vh"}})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-333","aria-controls":"navbarSupportedContent-333","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent-333",children:Object(n.jsx)("ul",{className:"navbar-nav ml-auto nav-flex-icons",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(x.b,{className:"nav-link",to:"/login",children:"Sign In"})})})})]}),Object(n.jsx)("div",{className:"container login-container",children:Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("h3",{children:"Register"}),Object(n.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),l!==j)return L.a.fire("Something gone wrong","The passwords must be the same","error");var a,n,r;e((a=s,n=o,r=l,function(){var e=Object(k.a)(y.a.mark((function e(t){var c,s,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("auth/register",{username:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:if(s=e.sent,i=s.errors,400!==c.status){e.next=20;break}if(void 0===i){e.next=17;break}if(void 0===i.username){e.next=11;break}return e.abrupt("return",L.a.fire("Something gone wrong",i.username.msg,"error"));case 11:if(void 0===i.email){e.next=13;break}return e.abrupt("return",L.a.fire("Something gone wrong",i.email.msg,"error"));case 13:if(void 0===i.password){e.next=15;break}return e.abrupt("return",L.a.fire("Something gone wrong",i.password.msg,"error"));case 15:e.next=18;break;case 17:L.a.fire("Something gone wrong",s.msg,"error");case 18:e.next=23;break;case 20:localStorage.setItem("token",s.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(D({username:s.username,uid:s.uid}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Username",name:"registerUsername",value:s,onChange:c,autoComplete:"off"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Email address",name:"registerEmail",value:o,onChange:c,autoComplete:"off"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"registerPassword",value:l,onChange:c})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat password",name:"registerPassword2",value:j,onChange:c})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Sign up"})})]})]})})]})},J=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).username;return Object(n.jsxs)("nav",{className:"mb-1 navbar navbar-expand-lg grey navbar-dark darken-4",children:[Object(n.jsxs)("a",{className:"navbar-brand",href:"!#",children:[" ",Object(n.jsx)("img",{src:U,style:{width:"5vh"},alt:"nav-bar brand"})," "]}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-333","aria-controls":"navbarSupportedContent-333","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent-333",children:[Object(n.jsx)("ul",{className:"navbar-nav mr-auto",children:Object(n.jsx)("li",{className:"nav-item",href:"!#",children:Object(n.jsx)(x.b,{className:"nav-link",to:"/home",children:"Home"})})}),Object(n.jsxs)("ul",{className:"navbar-nav ml-auto nav-flex-icons",children:[Object(n.jsx)("li",{className:"nav-item",href:"!#",children:Object(n.jsx)("a",{className:"nav-link waves-effect waves-light",href:"https://twitter.com/P4BL1SK1",children:Object(n.jsx)("i",{className:"fab fa-twitter"})})}),Object(n.jsx)("li",{className:"nav-item",href:"!#",children:Object(n.jsx)("a",{className:"nav-link waves-effect waves-light",href:"https://github.com/GerezPablo",children:Object(n.jsx)("i",{className:"fab fa-github"})})}),Object(n.jsxs)("li",{className:"nav-item dropdown",children:[Object(n.jsxs)("a",{className:"nav-link dropdown-toggle",id:"navbarDropdownMenuLink-333","data-toggle":"dropdown",href:"!#","aria-expanded":"false",children:[" ",t," "]}),Object(n.jsx)("div",{className:"dropdown-menu dropdown-menu-right dropdown-default","aria-labelledby":"navbarDropdownMenuLink-333",children:Object(n.jsx)("a",{className:"dropdown-item",onClick:function(){e((function(e){localStorage.clear(),e(_())}))},href:"!#",children:"Log out"})})]})]})]})]})},H=function(e){var t=e.setTopic,a=Object(r.useState)(""),c=Object(A.a)(a,2),s=c[0],i=c[1];return Object(n.jsx)("form",{onSubmit:function(e){if(e.preventDefault(),s.trim().length>0){var a=s.charAt(0).toUpperCase()+s.slice(1);t(a),i("")}},children:Object(n.jsx)("div",{className:"md-form active-purple mb-5",style:{width:"30vw",marginLeft:"1vw"},children:Object(n.jsx)("input",{className:"form-control",type:"text",value:s,onChange:function(e){i(e.target.value)},placeholder:"Search GIPHY","aria-label":"Search"})})})},M=function(e){var t=e.page,a=e.setPage;return Object(n.jsx)("nav",{"aria-label":"...",children:Object(n.jsxs)("ul",{className:"pagination",children:[Object(n.jsx)("li",{className:"page-item grey",children:Object(n.jsx)("a",{className:"page-link",onClick:function(){t>1&&(a(--t),console.log(t))},children:"Previous"})}),Object(n.jsx)("li",{className:"page-item grey",children:Object(n.jsx)("a",{className:"page-link",onClick:function(){a(++t),console.log(t)},children:"Next"})})]})})},X=(a(46),function(e){var t=e.title,a=e.url;return Object(n.jsx)("div",{className:"card animate__animated animate__fadeIn",style:{width:"18rem",marginBottom:"4%",align:"center"},children:Object(n.jsxs)("span",{class:"border border-dark rounded-top",children:[Object(n.jsx)("img",{src:a,className:"card-img-top ",alt:t}),Object(n.jsx)("p",{className:"card-text",children:t})]})})}),K=function(e){var t=e.topic,a=function(e,t){var a=Object(r.useState)({data:[],loading:!0}),n=Object(A.a)(a,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){E(e,30,t).then((function(e){s({data:e,loading:!1})}))}),[e,t]),c}(t,e.page),c=a.data,s=a.loading;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h3",{style:{marginLeft:"1vw",marginBottom:"5vh",color:"#022CD6"},children:["Results of: ",t]}),s&&Object(n.jsx)("div",{className:"purple-lighten-1",style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("div",{className:"spinner-border text-primary ",style:{width:"6rem",height:"6rem"},role:"status"})}),Object(n.jsx)("div",{className:"text-primary flexbox",children:c.map((function(e){return Object(n.jsx)(X,Object(j.a)({},e),e.id)}))})]})},V=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("hr",{}),Object(n.jsxs)("footer",{className:"page-footer indigo font-small pt-4",children:[Object(n.jsx)("div",{className:"container-fluid text-center text-md-left",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-4 mt-md-0 mt-3",children:[Object(n.jsx)("h5",{className:"text-uppercase",children:"egeon project"}),Object(n.jsx)("p",{children:"static web page for view and download gifs powered by the Giphy API."})]}),Object(n.jsx)("hr",{className:"clearfix w-100 d-md-none pb-3"}),Object(n.jsxs)("div",{className:"col-md-3 mb-md-0 mb-3",children:[Object(n.jsx)("h5",{className:"text-uppercase",children:"Platform"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/GerezPablo",children:"Creator"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Brand & Agencies"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Pricing"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Comunity"})})]})]}),Object(n.jsxs)("div",{className:"col-md-2 mb-md-0 mb-2",children:[Object(n.jsx)("h5",{className:"text-uppercase",children:"Company"}),Object(n.jsx)("ul",{className:"list-unstyled",children:Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Careers"})})})]}),Object(n.jsxs)("div",{className:"col-md-3 mb-md-0 mb-2",children:[Object(n.jsx)("h5",{className:"text-uppercase",children:"Resources"}),Object(n.jsxs)("ul",{className:"list-unstyled",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/GerezPablo/egeon-project",children:"Backend"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/GerezPablo/front-egeon",children:"Frontend"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Help "})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Terms of use"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",children:"Privacy"})})]})]})]})}),Object(n.jsx)("div",{className:"footer-copyright text-center py-3",children:"\xa9 2020 Copyright: Egeon industries "})]})]})},Y=function(){var e=Object(r.useState)("Broly"),t=Object(A.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(1),i=Object(A.a)(s,2),o=i[0],l=i[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(J,{}),Object(n.jsx)(H,{setTopic:c}),Object(n.jsx)(M,{page:o,setPage:l}),Object(n.jsx)(K,{topic:a,page:o},a),Object(n.jsx)(V,{})]})},q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).uid;return Object(r.useEffect)((function(){e(function(){var e=Object(k.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,400===a.status?(L.a.fire("Something gone wrong",n.msg,"error"),t(I())):(localStorage.setItem("token",n.token),localStorage.setItem("token-imit-date",(new Date).getTime()),t(D({username:n.username,uid:n.uid})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(n.jsx)(x.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(O.d,{children:[Object(n.jsx)(N,{exact:!0,path:"/login",component:R,isAuthenticated:!!t}),Object(n.jsx)(N,{exact:!0,path:"/register",component:z,isAuthenticated:!!t}),Object(n.jsx)(v,{exact:!0,path:"/home",component:Y,isAuthenticated:!!t}),Object(n.jsx)(O.a,{to:"/home"})]})})})},Q=function(){return Object(n.jsx)(i.a,{store:g,children:Object(n.jsx)(q,{})})};s.a.render(Object(n.jsx)(Q,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.748bf104.chunk.js.map