(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{227:function(e,a,t){e.exports={error:"formsControls_error__1QVHI",formControl:"formsControls_formControl__5dwLN",SistemErrorMessage:"formsControls_SistemErrorMessage__1oDNz"}},228:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return l}));var n=t(229),s=t(0),r=t.n(s),o=t(227),i=t.n(o),c=function(e){var a=e.input,t=e.meta,s=Object(n.a)(e,["input","meta"]),o=t.touched&&t.error;return r.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({},a,s))),o&&r.a.createElement("span",null,t.error))},l=function(e){var a=e.input,t=e.meta,s=Object(n.a)(e,["input","meta"]),o=t.touched&&t.error;return r.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},r.a.createElement("div",null,r.a.createElement("input",Object.assign({},a,s))),o&&r.a.createElement("span",null,t.error))}},230:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var n=function(e){if(!e)return"Field is requyred"},s=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symvols")}}},231:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(31),s=t(32),r=t(34),o=t(33),i=t(35),c=t(0),l=t.n(c),m=t(24),u=t(22),g=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(u.a,{to:"/login"})}}]),t}(l.a.Component);return Object(m.b)(g,{})(a)}},233:function(e,a,t){e.exports={allDialogs:"Dialogs_allDialogs__3IF0o",dialogs:"Dialogs_dialogs__3TyCL",dialog:"Dialogs_dialog__38roe",messages:"Dialogs_messages__3BWWr",message:"Dialogs_message__3CFhu",messageName:"Dialogs_messageName__3D3np",messageContent:"Dialogs_messageContent__2OsDx",textMessage:"Dialogs_textMessage__PDXH_",buttonSent:"Dialogs_buttonSent__379yt"}},300:function(e,a,t){"use strict";t.r(a);var n=t(72),s=t(0),r=t.n(s),o=t(233),i=t.n(o),c=t(15);var l=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement(c.b,{to:a},e.name))},m=function(e){return r.a.createElement("div",{className:i.a.message},r.a.createElement("span",{className:i.a.messageName},"\u0410\u043d\u0434\u0440\u0435\u0439"),r.a.createElement("div",{className:i.a.messageContent},e.message))},u=t(109),g=t(110),d=t(228),f=t(230),_=Object(f.a)(10);var b=Object(g.a)({form:"addMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(u.a,{className:i.a.textMessage,name:"message",component:d.b,validate:[f.b,_]}),r.a.createElement("button",{className:i.a.buttonSent},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))})),p=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return r.a.createElement(l,{name:e.name,id:e.id,key:e.id})})),n=a.messages.map((function(e){return r.a.createElement(m,{message:e.messages,key:e.id})}));return r.a.createElement("div",{className:i.a.allDialogs},r.a.createElement("div",{className:i.a.dialogs},t),r.a.createElement("div",{className:i.a.messages},n,r.a.createElement(b,{onSubmit:function(a){console.log(a),e.addMessages(a.message)}})))},E=t(24),v=t(231),h=t(17);a.default=Object(h.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage,messageText:e.dialogsPage.messageText}}),(function(e){return{addMessages:function(a){e(Object(n.a)(a))}}})),v.a)(p)}}]);
//# sourceMappingURL=5.d3a2e78e.chunk.js.map