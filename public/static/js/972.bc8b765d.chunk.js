"use strict";(self.webpackChunkecomm=self.webpackChunkecomm||[]).push([[972],{976:function(n,e,r){r.d(e,{D:function(){return a},g:function(){return c}});var t=r(861),o=r(757),i=r.n(o),a=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("","/products"),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.products);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("","/products/").concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return r=n.sent,n.next=5,r.json();case 5:return t=n.sent,n.abrupt("return",t.product);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6:function(n,e,r){r.d(e,{jb:function(){return l},sb:function(){return d},zx:function(){return u}});var t,o,i,a=r(168),c=r(751),l=(0,c.iv)(t||(t=(0,a.Z)(["\n  opacity: 0.4;\n  cursor: not-allowed;\n"]))),u=c.ZP.button(o||(o=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  letter-spacing: 0.02857em;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 14px;\n  background-color: var(--buttonColor);\n  color: var(--text_color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  outline: none;\n\n  :hover {\n    background-color: var(--bg_hover_color);\n  }\n\n  ","\n  ","\n"])),(function(n){var e=n.extraStyling;return e&&e}),(function(n){return n.disabled&&l})),d=c.ZP.div(i||(i=(0,a.Z)(["\n    height: 150px;\n    width:150px ;\n"])))},123:function(n,e,r){r.d(e,{Z:function(){return k}});var t,o=r(413),i=r(942),a=r(791),c=["title","titleId"];function l(){return l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},l.apply(this,arguments)}function u(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function d(n,e){var r=n.title,o=n.titleId,i=u(n,c);return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 13",ref:e,"aria-labelledby":o},i),r?a.createElement("title",{id:o},r):null,t||(t=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"#b2b2b2",d:"M12.336 7.121H7.105v5.207H5.91V7.121H.68V5.903h5.23V.672h1.195v5.23h5.231z"})))))}var s,p=a.forwardRef(d),f=(r.p,["title","titleId"]);function v(){return v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},v.apply(this,arguments)}function b(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function m(n,e){var r=n.title,t=n.titleId,o=b(n,f);return a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 2",ref:e,"aria-labelledby":t},o),r?a.createElement("title",{id:t},r):null,s||(s=a.createElement("g",null,a.createElement("g",null,a.createElement("path",{fill:"#b2b2b2",d:"M.68.111h11.708v1.147H.68z"})))))}var h,x=a.forwardRef(m),g=(r.p,r(703)),y=r(168),w=r(751),j=r(6),C=w.ZP.div(h||(h=(0,y.Z)(["\n  border: solid var(--borderColor) 1px;\n  align-self: flex-end;\n  border-radius: 4px;\n  padding: 10px;\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n  \n  @media (max-width: 600px) {\n    width: 100%;\n    border-radius: 5000px;\n    padding: 5px;\n    border: none;\n  }\n  .btn {\n    width: 25px;\n    height: 25px;\n    border: solid 1px var(--borderColor);\n    border-radius: 50000px;\n    padding: 5px;\n    @media (max-width: 600px) {\n      width: 50px;\n      height: 50px;\n\n      border-radius: 5000px;\n      padding: 5px;\n\n   \n    }\n    &.disabled{\n     ","\n      }\n    cursor: pointer;\n\n  }\n"])),j.jb),Z=r(184),O=function(n){var e,r=n.id,t=n.extraStyling,a=void 0===t?{}:t,c=n.price,l=n.addToCart,u=n.removeFromCart,d=n.removeIsDisabled,s=void 0!==d&&d,f=function(n,e){n.preventDefault(),("addToCart"===e?l:u)(r,c)};console.log("cart btns render");var v=(0,g.k)((e={},(0,i.Z)(e,"btn",!0),(0,i.Z)(e,"disabled",s),e));return(0,Z.jsxs)(C,{style:(0,o.Z)({},a),children:[(0,Z.jsx)(p,{className:"btn",onClick:function(n){return f(n,"addToCart")}}),(0,Z.jsx)(x,{className:v,onClick:function(n){return f(n,"removeFromCart")}})]})},k=a.memo(O)},972:function(n,e,r){r.r(e),r.d(e,{default:function(){return P}});var t=r(885),o=r(181);var i,a,c,l=r(791),u=r(504),d=r(354),s=r(861),p=r(757),f=r.n(p),v=r(976),b=r(123),m=r(39),h=r(703),x=r(184),g=function(n){var e=n.amount,r=n.price,t=(0,m.ux)().currency;return(0,x.jsxs)("div",{className:"unselectable",children:[t.symbol,(0,h.Q1)(r*t.rate)," X ",e]})},y=r(168),w=r(751),j=w.ZP.div(i||(i=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border: 1px solid var(--borderColor);\n  border-radius: var(--borderRadius);\n  background-color: ",";\n  min-height: 500px;\n  .unselectable {\n    user-select: none;\n  }\n"])),(function(n){return n.empty?"#ffe9dd":"#fff"})),C=w.ZP.div(a||(a=(0,y.Z)(["\n\n  align-items: center;\n  justify-items: center;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  width: 70%;\n  border-bottom: 1px solid var(--borderColor);\n  gap: 5px;\n  @media (max-width: 600px) {\n    width: 95%;\n    grid-template-columns: 1fr 1fr;\n  }\n  .title {\n  }\n  .img {\n    width: 150px;\n    height: 150px;\n    background: ",";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n  }\n"])),(function(n){return"url(".concat(n.src,")")})),Z=w.ZP.div(c||(c=(0,y.Z)(["\n  user-select: none;\n  display: flex;\n  padding: 10px;\n  border: var(--borderColor) 1px solid;\n  align-self: center;\n  margin: 20px 0;\n  border-radius: 4px;\n"]))),O=function(n){var e=n.id,r=n.amount,o=n.addMemoized,i=n.removeMemoized,a=(0,l.useState)(),c=(0,t.Z)(a,2),u=c[0],d=c[1];return(0,l.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.g)(e);case 2:r=n.sent,d(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(C,{src:null===u||void 0===u?void 0:u.src,className:"unselectable",children:[(0,x.jsx)("div",{className:"title",children:null===u||void 0===u?void 0:u.title}),(0,x.jsx)("div",{className:"img"}),(0,x.jsx)(g,{amount:r,price:null===u||void 0===u?void 0:u.price}),(0,x.jsx)(b.Z,{id:null===u||void 0===u?void 0:u.id,price:null===u||void 0===u?void 0:u.price,extraStyling:{padding:"6px",alignSelf:"center"},addToCart:o,removeFromCart:i})]})})},k=l.memo(O),E=function(){var n=(0,d.X)().totalPrice,e=(0,m.ux)().currency;return(0,x.jsxs)(Z,{children:["Total : ",e.symbol,(0,h.Q1)(n*e.rate)]})},P=function(){var n,e=(0,d.X)(),r=e.removeFromCart,i=e.addToCart,a=e.sc,c=(0,l.useCallback)(i,[]),s=(0,l.useCallback)(r,[]);return(0,x.jsx)(j,{empty:0===a.length,children:0===a.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{children:"Your Cart Is Empty"}),(0,x.jsxs)(u.rU,{to:"/gallery",children:[" ",(0,x.jsx)("h1",{children:"Go To Gallery"})]})]}):(0,x.jsxs)(x.Fragment,{children:[null===(n=function(){if(a.length){var n=[],e=new Map;a.forEach((function(n){var r=e.get(n)||{code:n,count:0};r.count++,e.set(r.code,r)}));var r,i=function(n,e){var r="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=(0,o.Z)(n))||e&&n&&"number"===typeof n.length){r&&(n=r);var t=0,i=function(){};return{s:i,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){l=!0,a=n},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw a}}}}(e.entries());try{for(i.s();!(r=i.n()).done;){var c=(0,t.Z)(r.value,2),l=(c[0],c[1]);n.push(l)}}catch(u){i.e(u)}finally{i.f()}return n}}())||void 0===n?void 0:n.map((function(n,e){return(0,x.jsx)(k,{addMemoized:c,removeMemoized:s,id:n.code,amount:n.count},"".concat(n.code))})),(0,x.jsx)(E,{})]})})}}}]);
//# sourceMappingURL=972.bc8b765d.chunk.js.map