"use strict";(self.webpackChunkecomm=self.webpackChunkecomm||[]).push([[298],{976:function(n,e,r){r.d(e,{D:function(){return c},g:function(){return a}});var t=r(861),o=r(757),i=r.n(o),c=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/products",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.products);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/products/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return r=n.sent,n.next=5,r.json();case 5:return t=n.sent,n.abrupt("return",t.product);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6:function(n,e,r){r.d(e,{jb:function(){return s},sb:function(){return l},zx:function(){return u}});var t,o,i,c=r(168),a=r(751),s=(0,a.iv)(t||(t=(0,c.Z)(["\n  opacity: 0.4;\n  cursor: not-allowed;\n"]))),u=a.ZP.button(o||(o=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  letter-spacing: 0.02857em;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 14px;\n  background-color: var(--buttonColor);\n  color: var(--text_color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  outline: none;\n\n  :hover {\n    background-color: var(--bg_hover_color);\n  }\n\n  ","\n  ","\n"])),(function(n){var e=n.extraStyling;return e&&e}),(function(n){return n.disabled&&s})),l=a.ZP.div(i||(i=(0,c.Z)(["\n    height: 150px;\n    width:150px ;\n"])))},658:function(n,e,r){r.d(e,{Z:function(){return x}});var t,o,i,c,a=r(885),s=r(791),u=r(168),l=r(751),d=(0,l.F4)(t||(t=(0,u.Z)(["\nfrom {\n         transform: rotate(0deg);\n     }\n     to {\n         transform: rotate(360deg);\n     }\n"]))),f=l.ZP.div(o||(o=(0,u.Z)(["\n         width: 100%;\n         height: 100%;\n         display: flex;\n         justify-content: center;\n         align-items: center;\n       "]))),p=l.ZP.div(i||(i=(0,u.Z)(["\n\n  box-sizing: border-box;\n  width: ",";\n  height: ",';\n  &.isIE11 {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  content: "";\n  border-radius: 50%;\n  ',"\n  border-top-color:",";\n  animation: "," 0.6s linear infinite;\n  -webkit-animation: "," 0.6s linear infinite;\n\n",""])),(function(n){return n.size&&n.size}),(function(n){return n.size&&n.size}),(function(n){var e=n.loaderSize;return e&&(0,l.iv)(c||(c=(0,u.Z)(["\n      border: ","px solid transparent;\n    "])),e)}),(function(n){return n.color?n.color:"#848484"}),d,d,(function(n){var e=n.extraStyling;return e&&e})),h=r(184),x=function(n){var e=n.loaderSize,r=void 0===e?2:e,t=n.color,o=void 0===t?"#848484":t,i=n.className,c=(0,s.useRef)(null),u=(0,s.useState)(""),l=(0,a.Z)(u,2),d=l[0],x=l[1];return(0,s.useEffect)((function(){var n,e,r=null===c||void 0===c||null===(n=c.current)||void 0===n?void 0:n.clientHeight,t=null===c||void 0===c||null===(e=c.current)||void 0===e?void 0:e.clientWidth,o=t>=r?r:t;o&&x("".concat(o,"px"))}),[c]),(0,h.jsx)(f,{className:i,ref:c,children:(0,h.jsx)(p,{className:"Loader",loaderSize:r,color:o,size:d})})}},298:function(n,e,r){r.r(e);var t=r(861),o=r(885),i=r(757),c=r.n(i),a=r(791),s=r(872),u=r(658),l=r(6),d=r(504),f=r(976),p=r(184),h=a.lazy((function(){return r.e(250).then(r.bind(r,250))}));e.default=function(){var n=(0,a.useState)([]),e=(0,o.Z)(n,2),r=e[0],i=e[1];return(0,a.useEffect)((function(){function n(){return(n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.D)();case 2:e=n.sent,console.log("res",e),i(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),console.log("gallery render"),(0,p.jsx)(s.W,{children:r.length<1?(0,p.jsx)(l.sb,{children:(0,p.jsx)(u.Z,{})}):null===r||void 0===r?void 0:r.map((function(n){return(0,p.jsx)(d.rU,{to:"/gallery/".concat(n.id),className:"product",children:(0,p.jsx)(h,{id:n.id,title:n.title,src:n.src,details:n.details,price:n.price})},"".concat(n.id))}))})}},872:function(n,e,r){r.d(e,{W:function(){return a},v:function(){return s}});var t,o,i=r(168),c=r(751),a=c.ZP.div(t||(t=(0,i.Z)(["\n  min-height: 704px;\n  .product {\n    text-decoration: none;\n  }\n  width: 100%;\n  border: solid var(--borderColor) 1px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  max-width: 980px;\n"]))),s=c.ZP.div(o||(o=(0,i.Z)(["\n  margin: .5rem;\n  padding: 1.5rem;\n  text-align: left;\n  color: var(--text_color);\n  text-decoration: none;\n  border: 1px solid var(--borderColor);\n  border-radius: 10px;\n  transition: color 0.15s ease, border-color 0.15s ease;\n  width: 300px;\n  height:400px ;\n  display: flex;\n  flex-direction: column;\n  justify-content:space-between ;\n  cursor: pointer;\n  :hover,\n  :focus,\n  :active {\n    border-color: var(--linkColor);\n    background: none;\n  }\n  h2 {\n    margin: 0 0 1rem 0;\n    font-size: 1.5rem;\n    text-align: center;\n  }\n  p {\n    margin: 0;\n    font-size: 1.25rem;\n    line-height: 1.5;\n  }\n  img {\n    width: 150px;\n    height: auto;\n    align-self: center;\n  }\n"])))}}]);
//# sourceMappingURL=298.8b78aa9a.chunk.js.map