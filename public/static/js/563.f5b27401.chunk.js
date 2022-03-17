"use strict";(self.webpackChunkecomm=self.webpackChunkecomm||[]).push([[563,905],{976:function(n,e,r){r.d(e,{Dg:function(){return c},gk:function(){return u},jy:function(){return l}});var t=r(982),o=r(861),i=r(757),a=r.n(i),c=function(){var n=(0,o.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("","/products"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:if(!(r=n.sent).errors.length){n.next=9;break}return console.error("getAllProducts ERROR",r.errors),n.abrupt("return");case 9:return n.abrupt("return",r.products);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,o.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("","/products/").concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return r=n.sent,n.next=5,r.json();case 5:if(!(t=n.sent).errors.length){n.next=9;break}return console.error("getProductById ERROR",t.errors),n.abrupt("return");case 9:return n.abrupt("return",t.product);case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)(a().mark((function n(e){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("","/products"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({ids:(0,t.Z)(e)})});case 2:return r=n.sent,n.next=5,r.json();case 5:return o=n.sent,n.abrupt("return",o.products);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6:function(n,e,r){r.d(e,{jb:function(){return u},sb:function(){return s},zx:function(){return l}});var t,o,i,a=r(168),c=r(751),u=(0,c.iv)(t||(t=(0,a.Z)(["\n  opacity: 0.4;\n  cursor: not-allowed;\n"]))),l=c.ZP.button(o||(o=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  letter-spacing: 0.02857em;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 14px;\n  background-color: var(--buttonColor);\n  color: var(--text_color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  outline: none;\n\n  :hover {\n    background-color: var(--bg_hover_color);\n  }\n\n  ","\n  ","\n"])),(function(n){var e=n.extraStyling;return e&&e}),(function(n){return n.disabled&&u})),s=c.ZP.div(i||(i=(0,a.Z)(["\n    height: 150px;\n    width:150px ;\n"])))},123:function(n,e,r){r.d(e,{Z:function(){return O}});var t,o=r(413),i=r(942),a=r(791),c=["title","titleId"];function u(){return u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},u.apply(this,arguments)}function l(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function s(n,e){var r=n.title,o=n.titleId,i=l(n,c);return a.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 13",ref:e,"aria-labelledby":o},i),r?a.createElement("title",{id:o},r):null,t||(t=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"#b2b2b2",d:"M12.336 7.121H7.105v5.207H5.91V7.121H.68V5.903h5.23V.672h1.195v5.23h5.231z"})))))}var d,p=a.forwardRef(s),f=(r.p,["title","titleId"]);function v(){return v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},v.apply(this,arguments)}function x(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function h(n,e){var r=n.title,t=n.titleId,o=x(n,f);return a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 2",ref:e,"aria-labelledby":t},o),r?a.createElement("title",{id:t},r):null,d||(d=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"#b2b2b2",d:"M.68.111h11.708v1.147H.68z"})))))}var b,m=a.forwardRef(h),g=(r.p,r(703)),y=r(168),j=r(751),w=r(6),Z=j.ZP.div(b||(b=(0,y.Z)(["\n  border: solid var(--borderColor) 1px;\n  align-self: flex-end;\n  border-radius: 4px;\n  padding: 10px;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  \n  @media (max-width: 600px) {\n    width: 100%;\n    border-radius: 5000px;\n    padding: 5px;\n    border: none;\n  }\n  .btn {\n    width: 25px;\n    height: 25px;\n    border: solid 1px var(--borderColor);\n    border-radius: 50000px;\n    padding: 5px;\n    @media (max-width: 600px) {\n      width: 50px;\n      height: 50px;\n\n      border-radius: 5000px;\n      padding: 5px;\n\n   \n    }\n    &.disabled{\n     ","\n      }\n    cursor: pointer;\n\n  }\n"])),w.jb),C=r(184),k=function(n){var e,r,t=n.id,a=n.extraStyling,c=void 0===a?{}:a,u=n.price,l=n.addIsDisabled,s=void 0!==l&&l,d=n.addToCart,f=n.removeFromCart,v=n.removeIsDisabled,x=void 0!==v&&v,h=function(n,e){n.preventDefault(),("addToCart"===e?d:f)(t,u)};console.log("cart btns render");var b=(0,g.k)((e={},(0,i.Z)(e,"btn",!0),(0,i.Z)(e,"disabled",s),e)),y=(0,g.k)((r={},(0,i.Z)(r,"btn",!0),(0,i.Z)(r,"disabled",x),r));return(0,C.jsxs)(Z,{style:(0,o.Z)({},c),title:"Plus (Add) button coresponded to the product amount limitation",children:[!s&&(0,C.jsx)(p,{className:b,onClick:function(n){return h(n,"addToCart")}}),(0,C.jsx)(m,{className:y,onClick:function(n){return h(n,"removeFromCart")}})]})},O=a.memo(k)},905:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,o=r(861),i=r(885),a=r(982),c=r(757),u=r.n(c),l=r(791),s=r(844),d=r(436),p=r(976),f=r(168),v=r(751).ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n"]))),x=r(354),h=r(184);s.kL.register(s.uw,s.f$,s.ZL,s.Dx,s.u,s.De);var b=function(n){n.width,n.heigth;var e=(0,x.X)().sc,r=(0,l.useState)([]),t=(0,i.Z)(r,2),c=t[0],s=t[1],f=(0,l.useState)([]),b=(0,i.Z)(f,2),m=b[0],g=b[1],y=(0,l.useState)([]),j=(0,i.Z)(y,2),w=j[0],Z=j[1];(0,l.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.jy)(e);case 2:r=n.sent,console.log("res",r),s(r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,l.useEffect)((function(){var n=function(n,e){var r=(0,a.Z)(new Set(n.map((function(n){return n.category}))));return e(r),r.reduce((function(e,r){var t=n.filter((function(n){return n.category===r}));return[].concat((0,a.Z)(e),[{category:r,products:t}])}),[])}(c,g);Z(n)}),[c]);var C={labels:m.map((function(n){return n})),datasets:[{label:"Products",data:w.map((function(n){return n.products.length})),borderColor:["rgba(255, 206, 86, 0.2)"],backgroundColor:w.map((function(n){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}))}]};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(v,{children:(0,h.jsx)(d.$Q,{data:C,options:{title:{display:!0,text:"Your Shopping Cart Products By Categories"}}})})})}},563:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,o,i,a,c=r(885),u=r(762),l=r(791),s=r(504),d=r(354),p=r(861),f=r(757),v=r.n(f),x=r(976),h=r(6),b=r(123),m=r(39),g=r(703),y=r(184),j=function(n){var e=n.amount,r=n.price,t=(0,m.ux)().currency;return(0,y.jsxs)("div",{className:"unselectable",children:[t.symbol,(0,g.Q1)(r*t.rate)," X ",e]})},w=r(168),Z=r(751),C=Z.ZP.div(t||(t=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border: 1px solid var(--borderColor);\n  border-radius: var(--borderRadius);\n  background-color: ",";\n  min-height: 500px;\n  .unselectable {\n    user-select: none;\n  }\n"])),(function(n){return n.empty?"#ffe9dd":"#fff"})),k=Z.ZP.div(o||(o=(0,w.Z)(["\n  align-items: center;\n  justify-items: center;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 70%;\n  border-bottom: 1px solid var(--borderColor);\n  gap: 5px;\n  @media (max-width: 600px) {\n    width: 95%;\n    grid-template-columns: 1fr 1fr;\n  }\n  .title {\n  }\n  .img {\n    width: 150px;\n    height: 150px;\n    background: ",";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n  }\n"])),(function(n){return"url(".concat(n.src,")")})),O=Z.ZP.div(i||(i=(0,w.Z)(["\n  user-select: none;\n  display: flex;\n  padding: 10px;\n  border: var(--borderColor) 1px solid;\n  align-self: center;\n  margin: 20px 0 10px 0;\n  border-radius: 4px;\n"]))),P=Z.ZP.div(a||(a=(0,w.Z)(["\n  user-select: none;\n  display: flex;\n  justify-content:space-around ;\n  border: var(--borderColor) 1px solid;\n  align-self: center;\n  margin: 10px 0 10px 0;\n  border-radius: 4px;\n  min-width:320px ;\n  width:50% ;\n  a {\n    user-select: none;\n    display: flex;\n    padding: 10px;\n    border: var(--borderColor) 1px solid;\n    align-self: center;\n    margin: 20px 0;\n    border-radius: 4px;\n  }\n"]))),E=function(n){var e=n.id,r=n.amount,t=n.addMemoized,o=n.removeMemoized,i=n.removeItemAllMemo,a=(0,l.useState)(),u=(0,c.Z)(a,2),s=u[0],d=u[1];return(0,l.useEffect)((function(){function n(){return(n=(0,p.Z)(v().mark((function n(){var r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,x.gk)(e);case 2:r=n.sent,d(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(k,{src:null===s||void 0===s?void 0:s.src,className:"unselectable",children:[(0,y.jsx)("div",{className:"title",children:null===s||void 0===s?void 0:s.title}),(0,y.jsx)("div",{className:"img"}),(0,y.jsx)(j,{amount:r,price:null===s||void 0===s?void 0:s.price}),(null===s||void 0===s?void 0:s.qtt)>0?(0,y.jsx)(b.Z,{addIsDisabled:r>=s.qtt,id:null===s||void 0===s?void 0:s.id,price:null===s||void 0===s?void 0:s.price,extraStyling:{padding:"6px",alignSelf:"center"},addToCart:t,removeFromCart:o}):(0,y.jsx)(h.zx,{onClick:function(n){return i(null===s||void 0===s?void 0:s.id,null===s||void 0===s?void 0:s.price)},children:"remove"})]})})},S=l.memo(E),I=function(){return(0,y.jsxs)(P,{children:[(0,y.jsx)(s.rU,{to:"/gallery",children:" Keep shopping"}),(0,y.jsx)(s.rU,{to:"/checkout",children:" Checkout"})]})},z=function(){var n=(0,d.X)().totalPrice,e=(0,m.ux)().currency;return(0,y.jsxs)(O,{children:["Total : ",e.symbol,(0,g.Q1)(n*e.rate)]})},M=r(905),T=function(){var n,e=(0,d.X)(),r=e.removeFromCart,t=e.addToCart,o=e.removeItemAll,i=e.sc,a=(0,l.useCallback)(t,[]),p=(0,l.useCallback)(r,[]),f=(0,l.useCallback)(o,[]);return(0,y.jsx)(C,{empty:0===i.length,children:0===i.length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h2",{children:"Your Cart Is Empty"}),(0,y.jsxs)(s.rU,{to:"/gallery",children:[" ",(0,y.jsx)("h1",{children:"Go To Gallery"})]})]}):(0,y.jsxs)(y.Fragment,{children:[null===(n=function(){if(i.length){var n=[],e=new Map;i.forEach((function(n){var r=e.get(n)||{code:n,count:0};r.count++,e.set(r.code,r)}));var r,t=(0,u.Z)(e.entries());try{for(t.s();!(r=t.n()).done;){var o=(0,c.Z)(r.value,2),a=(o[0],o[1]);n.push(a)}}catch(l){t.e(l)}finally{t.f()}return n}}())||void 0===n?void 0:n.map((function(n,e){return(0,y.jsx)(S,{addMemoized:a,removeMemoized:p,removeItemAllMemo:f,id:n.code,amount:n.count},"".concat(n.code))})),(0,y.jsx)(z,{}),(0,y.jsx)("p",{children:"Your Cart products Grouped by category"}),(0,y.jsx)(M.default,{}),(0,y.jsx)(I,{})]})})}}}]);
//# sourceMappingURL=563.f5b27401.chunk.js.map