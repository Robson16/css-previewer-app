(this["webpackJsonpcss-previewer-app"]=this["webpackJsonpcss-previewer-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),u=a(16),o=a(1),i=a(7),m=(a(23),function(e){return r.a.createElement("header",{className:"page-header"},r.a.createElement("h1",null,e.title))}),b=a(9),s=(a(24),function(e){var t=e.label,a=e.name,n=Object(b.a)(e,["label","name"]);return r.a.createElement("div",{className:"input-block"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",Object.assign({id:a},n)))}),d=(a(25),function(e){var t=e.name,a=e.label,n=Object(b.a)(e,["name","label"]);return r.a.createElement("div",{className:"textarea-block"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("textarea",Object.assign({id:t},n)))});a(26);var p=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),u=Object(i.a)(l,2),o=u[0],b=u[1],p=Object(n.useState)(0),E=Object(i.a)(p,2),f=E[0],v=E[1],g=Object(n.useState)(0),h=Object(i.a)(g,2),O=h[0],j=h[1],R=Object(n.useState)(""),N=Object(i.a)(R,2),x=N[0],S=N[1];return Object(n.useEffect)((function(){var e="";e=a||o||f||O?(e="border-radius: ".concat(a,"% ").concat(o,"% ").concat(a!==O?"".concat(O,"%"):""," ").concat(f!==o?"".concat(f,"%"):"")).trim()+";":"border-radius: 0%;",S(e)}),[a,o,f,O]),r.a.createElement("div",{id:"page-border-radius",className:"container"},r.a.createElement(m,{title:"Border Radius"}),r.a.createElement("main",null,r.a.createElement("div",{id:"border-previewer-grid"},r.a.createElement(s,{type:"number",min:"0",max:"100",name:"input-tl",label:"Top Left",value:a,onChange:function(e){c(Number(e.target.value))}}),r.a.createElement(s,{type:"number",min:"0",max:"100",name:"input-tr",label:"Top Right",value:o,onChange:function(e){b(Number(e.target.value))}}),r.a.createElement(s,{type:"number",min:"0",max:"100",name:"input-bl",label:"Bottom Left",value:f,onChange:function(e){v(Number(e.target.value))}}),r.a.createElement(s,{type:"number",min:"0",max:"100",name:"input-br",label:"Bottom Right",value:O,onChange:function(e){j(Number(e.target.value))}}),r.a.createElement("div",{className:"shape",style:{borderTopLeftRadius:a+"%",borderTopRightRadius:o+"%",borderBottomLeftRadius:f+"%",borderBottomRightRadius:O+"%"}}),r.a.createElement(d,{name:"output-css",label:"Resulting CSS",value:x,readOnly:!0}))),r.a.createElement("footer",null))};var E=function(){return r.a.createElement(u.a,null,r.a.createElement(o.a,{path:"/",exact:!0,component:p}))};a(32);var f=function(){return r.a.createElement(E,null)};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.20df5755.chunk.js.map