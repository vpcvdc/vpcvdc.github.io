(this["webpackJsonpvpcvdc.github.io"]=this["webpackJsonpvpcvdc.github.io"]||[]).push([[4],{106:function(e,t,n){var c={"./ta.json":[107,8]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(c)},r.id=106,e.exports=r},111:function(e,t,n){"use strict";n.r(t);var c=n(26),r=n(2),a=n(0),l=n(31),o=n(6),i=n(30),u=n(28),s=n(4);var d=n(103),f=n.n(d),b=n(105);var v=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,110))})),j=Object(a.lazy)((function(){return Promise.all([n.e(5),n.e(7)]).then(n.bind(null,112))})),m=Object(a.memo)((function(){return Object(r.jsxs)("div",{className:"animate-pulse space-x-4 p-4 inline-flex items-center justify-end",children:[Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"}),Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"}),Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"})]})})),h=Object(a.memo)((function(){return Object(r.jsx)("div",{className:"animate-pulse p-4 flex-grow flex items-center justify-center",children:Object(r.jsxs)("div",{className:"w-full mx-auto max-w-xl sm:flex border border-gray-400 dark:border-gray-600 rounded-xl p-8 sm:p-0 overflow-hidden",children:[Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-32 h-32 sm:w-96 sm:h-auto sm:rounded-none rounded-full mx-auto"}),Object(r.jsxs)("div",{className:"pt-6 sm:p-8 flex flex-col items-center sm:items-start space-y-6",children:[Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-80 max-w-full h-4"}),Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-60 max-w-full h-4"}),Object(r.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-40 max-w-full h-4"})]})]})})})),O=Object(a.memo)((function(){return Object(r.jsx)("main",{className:"min-h-screen flex flex-col",children:Object(r.jsxs)(a.unstable_SuspenseList,{revealOrder:"together",children:[Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(m,{}),children:Object(r.jsx)(v,{})}),Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(h,{}),children:Object(r.jsx)(j,{})})]})})}));t.default=Object(a.memo)((function(){var e=Object(o.b)({lang:"en"}),t=Object(c.a)(e,1)[0].get("lang"),d=function(){var e="(prefers-color-scheme: dark)",t="(prefers-color-scheme: light)",n=Object(a.useState)((function(){var n,c,r,a,l,u,d,f=null===(n=(c=window).matchMedia)||void 0===n||null===(r=n.call(c,e))||void 0===r?void 0:r.matches,b=null===(a=(l=window).matchMedia)||void 0===a||null===(u=a.call(l,t))||void 0===u?void 0:u.matches;if(f)d="dark";else if(b)d="light";else{var v=(new Date).getHours();d=v>=18||v<6?"dark":"light"}return{theme:d,toggleTheme:function(){o((function(e){return Object(s.a)(Object(s.a)({},e),{},{theme:Object(i.b)(e.theme)?"light":"dark"})}))}}})),r=Object(c.a)(n,2),l=r[0],o=r[1];return Object(a.useEffect)((function(){var n,c,r,a,l,i,u,d,f,b,v=!0,j=function(e){return function(t){return(null===t||void 0===t?void 0:t.matches)&&v?o((function(t){return Object(s.a)(Object(s.a)({},t),{},{theme:e})})):null}},m=null===(n=(c=window).matchMedia)||void 0===n?void 0:n.call(c,e),h=null===(r=(a=window).matchMedia)||void 0===r?void 0:r.call(a,t);return null!==(l=null===m||void 0===m||null===(i=m.addEventListener)||void 0===i?void 0:i.call(m,"change",j("dark"),!1))&&void 0!==l||null===m||void 0===m||null===(u=m.addListener)||void 0===u||u.call(m,j("dark")),null!==(d=null===h||void 0===h||null===(f=h.addEventListener)||void 0===f?void 0:f.call(h,"change",j("light"),!1))&&void 0!==d||null===h||void 0===h||null===(b=h.addListener)||void 0===b||b.call(h,j("light")),function(){var e,t,n,c,r,a;v=!1,null!==(e=null===m||void 0===m||null===(t=m.removeEventListener)||void 0===t?void 0:t.call(m,"change",j("dark"),!1))&&void 0!==e||null===m||void 0===m||null===(n=m.removeListener)||void 0===n||n.call(m,j("dark")),null!==(c=null===h||void 0===h||null===(r=h.removeEventListener)||void 0===r?void 0:r.call(h,"change",j("light"),!1))&&void 0!==c||null===h||void 0===h||null===(a=h.removeListener)||void 0===a||a.call(h,j("light"))}}),[]),Object(a.useEffect)((function(){window.document.documentElement.classList.toggle("dark",Object(i.b)(l.theme))}),[l.theme]),l}(),v=function(){var e=Object(a.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){var c,r,a,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object.values(u.a).find((function(e){return e.bcp47.toLowerCase()===t.toLowerCase()})),"en"!==(a=null!==(c=null===r||void 0===r?void 0:r.localeName)&&void 0!==c?c:"en")){e.next=6;break}e.t0={en:{}},e.next=9;break;case 6:return e.next=8,n(106)("./".concat(a,".json"));case 8:e.t0=e.sent;case 9:l=e.t0,i((function(e){return Object(s.a)(Object(s.a)({},e),{},{context:Object(s.a)(Object(s.a)({},e.context),{},{locale:a}),translations:l})}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(a.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i((function(e){return Object(s.a)(Object(s.a)({},e),{},{context:Object(s.a)(Object(s.a)({},e.context),{},{context:t})})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),r=Object(a.useState)((function(){return{context:{locale:"en"},translations:{en:{}},switchLocale:e,setContext:t}})),l=Object(c.a)(r,2),o=l[0],i=l[1];return Object(a.useEffect)((function(){!function(){var t=Object(b.a)(f.a.mark((function t(){var n,c,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null!==(n=null===(c=window.navigator)||void 0===c||null===(r=c.language)||void 0===r?void 0:r.toLowerCase())&&void 0!==n?n:"en",t.next=3,e(a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(a.useEffect)((function(){var e=document.documentElement,t=u.a[o.context.locale];e.lang=t.bcp47,e.dir=t.rtl?"rtl":"ltr"}),[o.context.locale]),o}(),j=v.switchLocale;return Object(l.init)({translations:v.translations,hooks:{getViewerContext:function(){return v.context}}}),Object(a.useEffect)((function(){j(t)}),[t,j]),Object(a.useEffect)((function(){var e=Object.keys(u.a).filter((function(e){return"en"!==e})).map((function(e){var t=u.a[e].bcp47,n=document.createElement("link");return n.rel="alternate",n.href="".concat("https://vpcvdc.github.io","/?lang=").concat(t),n.hreflang=t,document.head.appendChild(n),n}));return function(){return e.forEach((function(e){return document.head.removeChild(e)}))}}),[]),Object(r.jsx)(i.a,{theme:d,children:Object(r.jsx)(u.b,{locale:v,children:Object(r.jsx)(O,{})})})}))},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var c=n(2),r=n(0),a=Object(r.createContext)({context:{locale:"en"},translations:{en:{}},switchLocale:function(){},setContext:function(){}});function l(e){var t=e.children,n=e.locale;return Object(c.jsx)(a.Provider,{value:n,children:t})}var o=function(){return Object(r.useContext)(a)},i=Object.freeze({ta:Object.freeze({bcp47:"ta",displayName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",englishName:"Tamil",localeName:"ta",rtl:!1}),en:Object.freeze({bcp47:"en",displayName:"English",englishName:"English",localeName:"en",rtl:!1})})},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var c=n(2),r=n(0),a=Object(r.createContext)({theme:"dark",toggleTheme:function(){}});function l(e){var t=e.children,n=e.theme;return Object(c.jsx)(a.Provider,{value:n,children:t})}var o=function(){return Object(r.useContext)(a)},i=function(e){return"dark"===e}}}]);