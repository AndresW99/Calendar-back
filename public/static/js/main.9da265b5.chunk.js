(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n(8),o=n.n(c),s=n(9),i=n(22),u=n(64),l=n(5),j="[ui] Open Modal",d="[ui] Close Modal",b="[event] Set Active",m="[event] Logout event",p="[event] Add new",O="[event] Clear active event",f="[event] Event updated",v="[event] Event deleted",h="[event] Events loaded",x="[auth] Finish checking login state",g="[auth] Login",y="[auth] Logout",N={checking:!0},w=n(56),k={events:[],activeEvent:null},E={modalOpen:!1},S=Object(i.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(w.a)(e.events),[t.payload])});case b:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case v:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case h:return Object(l.a)(Object(l.a)({},e),{},{events:Object(w.a)(t.payload)});case m:return Object(l.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case y:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,D=Object(i.e)(S,C(Object(i.a)(u.a))),T=n(36),A=n(10),P=n(12),I=n.n(P),_=n(21),L=n(18),R=n.n(L),G="https://calendario-actividades.herokuapp.com/api",M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(G,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},H=n(16),V=n.n(H),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:V()(e.end).toDate(),start:V()(e.start).toDate()})}))},U=function(e){return{type:p,payload:e}},B=function(){return{type:O}},X=function(e){return{type:f,payload:e}},q=function(){return{type:v}},z=function(e){return{type:h,payload:e}},K=function(){return{type:x}},Q=function(e){return{type:g,payload:e}},W=function(){return function(e){localStorage.clear(),e({type:m}),e(Y())}},Y=function(){return{type:y}},Z=n(14),$=(n(77),n(25)),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(Z.a)(t,2),a=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},a),{},Object($.a)({},t.name,t.value)))};return[a,s,o]},te=function(){var e=Object(s.b)(),t=ee({lEmail:"",lPassword:""}),n=Object(Z.a)(t,2),r=n[0],c=n[1],o=ee({rName:"Andrew",rEmail:"wellmannp@gmail.com",rPassword1:"1234567",rPassword2:"1234567"}),i=Object(Z.a)(o,2),u=i[0],l=i[1],j=r.lEmail,d=r.lPassword,b=u.rName,m=u.rEmail,p=u.rPassword1,O=u.rPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=j,a=d,function(){var e=Object(_.a)(I.a.mark((function e(t){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):R.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:j,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),p!==O)return R.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=m,a=p,r=b,function(){var e=Object(_.a)(I.a.mark((function e(t){var c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:o.uid,name:o.name}))):R.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:b,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:m,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:p,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:O,onChange:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(55),ae=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(W())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:" Salir"})]})]})},re=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{children:[" ",n," "]}),Object(a.jsxs)("strong",{children:["- ",r.name," "]})]})},ce=n(50),oe=n.n(ce),se=n(51),ie=n.n(se),ue=function(){return{type:j}},le={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};oe.a.setAppElement("#root");var je=V()().minutes(0).seconds(0).add(1,"hours"),de=je.clone().add(1,"hours"),be={title:"",notes:"",start:je.toDate(),end:de.toDate()},me=function(){var e=Object(s.c)((function(e){return e.ui})).modalOpen,t=Object(s.c)((function(e){return e.calendar})).activeEvent,n=Object(s.b)(),c=Object(r.useState)(je.toDate()),o=Object(Z.a)(c,2),i=o[0],u=o[1],j=Object(r.useState)(de.toDate()),b=Object(Z.a)(j,2),m=b[0],p=b[1],O=Object(r.useState)(!0),f=Object(Z.a)(O,2),v=f[0],h=f[1],x=Object(r.useState)(be),g=Object(Z.a)(x,2),y=g[0],N=g[1],w=y.notes,k=y.title,E=y.start,S=y.end;Object(r.useEffect)((function(){N(t||be)}),[t,N]);var C=function(e){var t=e.target;N(Object(l.a)(Object(l.a)({},y),{},Object($.a)({},t.name,t.value)))},D=function(){n({type:d}),n(B()),N(be)};return Object(a.jsxs)(oe.a,{isOpen:e,onRequestClose:D,style:le,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",ariaHideApp:!1,children:[Object(a.jsxs)("h1",{children:[" ",t?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=V()(E),c=V()(S);return r.isSameOrAfter(c)?R.a.fire("Error","La fecha final debe de ser mayor a la fecha de inicio","error"):k.trim().length<2?h(!1):(n(t?(a=y,function(){var e=Object(_.a)(I.a.mark((function e(t){var n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(X(a)):R.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(_.a)(I.a.mark((function t(n,a){var r,c,o,s,i;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,F("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(U(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(y)),h(!0),void D())},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora inicio"}),Object(a.jsx)(ie.a,{onChange:function(e){u(e),N(Object(l.a)(Object(l.a)({},y),{},{start:e}))},value:i,className:"form-control"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Fecha y hora fin"}),Object(a.jsx)(ie.a,{onChange:function(e){p(e),N(Object(l.a)(Object(l.a)({},y),{},{end:e}))},value:m,minDate:i,className:"form-control"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:k,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},pe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},Oe=(n(112),n(113),function(){var e=Object(s.b)();return Object(a.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})}),fe=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(_.a)(I.a.mark((function e(t,n){var a,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,F("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(q()):R.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento "})]})};V.a.locale("es");var ve=Object(ne.b)(V.a),he=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(r.useState)(localStorage.getItem("lastView")||"month"),u=Object(Z.a)(i,2),l=u[0],j=u[1];Object(r.useEffect)((function(){e(function(){var e=Object(_.a)(I.a.mark((function e(t){var n,a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=J(a.eventos),t(z(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(ae,{}),Object(a.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:pe,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ue())},onSelectEvent:function(t){e({type:b,payload:t})},onView:function(e){j(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(B())},selectable:!0,view:l,components:{event:re}}),Object(a.jsx)(Oe,{}),c&&Object(a.jsx)(fe,{}),Object(a.jsx)(me,{})]})},xe=n(40),ge=function(e){var t=e.isAuthenticated,n=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(A.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(l.a)({},e)):Object(a.jsx)(A.a,{to:"/login"})}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,r=Object(xe.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(A.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(a.jsx)(A.a,{to:"/"}):Object(a.jsx)(n,Object(l.a)({},e))}}))},Ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(_.a)(I.a.mark((function e(t){var n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:a.uid,name:a.name}))):t(K());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h5",{children:"Espere..."}):Object(a.jsx)(T.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(A.d,{children:[Object(a.jsx)(ye,{exact:!0,path:"/login",component:te,isAuthenticated:!!c}),Object(a.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!c}),Object(a.jsx)(A.a,{to:"/"})]})})})},we=function(){return Object(a.jsx)(s.a,{store:D,children:Object(a.jsx)(Ne,{})})};n(115);o.a.render(Object(a.jsx)(we,{}),document.getElementById("root"))},77:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.9da265b5.chunk.js.map