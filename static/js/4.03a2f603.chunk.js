(this["webpackJsonpvpcvdc.github.io"]=this["webpackJsonpvpcvdc.github.io"]||[]).push([[4],{106:function(e,t,n){var c={"./ta.json":[107,8]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(c)},r.id=106,e.exports=r},111:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n(31),l=n(1),o=n(30),i=n(27),u=n(4),s=n(28);var d=n(103),f=n.n(d),b=n(105);var v=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,110))})),j=Object(r.lazy)((function(){return Promise.all([n.e(5),n.e(7)]).then(n.bind(null,112))})),h=Object(r.memo)((function(){return Object(c.jsxs)("div",{className:"animate-pulse space-x-4 p-4 inline-flex items-center justify-end",children:[Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"}),Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"}),Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-6 h-6 rounded-full"})]})})),m=Object(r.memo)((function(){return Object(c.jsx)("div",{className:"animate-pulse p-4 flex-grow flex items-center justify-center",children:Object(c.jsxs)("div",{className:"w-full mx-auto max-w-xl sm:flex border border-gray-400 dark:border-gray-600 rounded-xl p-8 sm:p-0 overflow-hidden",children:[Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-32 h-32 sm:w-96 sm:h-auto sm:rounded-none rounded-full mx-auto"}),Object(c.jsxs)("div",{className:"pt-6 sm:p-8 flex flex-col items-center sm:items-start space-y-6",children:[Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-80 max-w-full h-4"}),Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-60 max-w-full h-4"}),Object(c.jsx)("div",{className:"bg-gray-400 dark:bg-gray-600 w-40 max-w-full h-4"})]})]})})})),O=Object(r.memo)((function(){return Object(c.jsx)("main",{className:"min-h-screen flex flex-col",children:Object(c.jsxs)(r.unstable_SuspenseList,{revealOrder:"together",children:[Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(h,{}),children:Object(c.jsx)(v,{})}),Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(m,{}),children:Object(c.jsx)(j,{})})]})})}));t.default=Object(r.memo)((function(){var e=Object(l.f)().pathname,t=Object(l.h)().lang,d=void 0===t?"en":t,v=function(){var e="(prefers-color-scheme: dark)",t="(prefers-color-scheme: light)",n=Object(r.useState)((function(){var n,c,r,a,i,s,d,f=null===(n=(c=window).matchMedia)||void 0===n||null===(r=n.call(c,e))||void 0===r?void 0:r.matches,b=null===(a=(i=window).matchMedia)||void 0===a||null===(s=a.call(i,t))||void 0===s?void 0:s.matches;if(f)d="dark";else if(b)d="light";else{var v=(new Date).getHours();d=v>=18||v<6?"dark":"light"}return{theme:d,toggleTheme:function(){l((function(e){return Object(u.a)(Object(u.a)({},e),{},{theme:Object(o.b)(e.theme)?"light":"dark"})}))}}})),c=Object(s.a)(n,2),a=c[0],l=c[1];return Object(r.useEffect)((function(){var n,c,r,a,o,i,s,d,f,b,v=!0,j=function(e){return function(t){return(null===t||void 0===t?void 0:t.matches)&&v?l((function(t){return Object(u.a)(Object(u.a)({},t),{},{theme:e})})):null}},h=null===(n=(c=window).matchMedia)||void 0===n?void 0:n.call(c,e),m=null===(r=(a=window).matchMedia)||void 0===r?void 0:r.call(a,t);return null!==(o=null===h||void 0===h||null===(i=h.addEventListener)||void 0===i?void 0:i.call(h,"change",j("dark"),!1))&&void 0!==o||null===h||void 0===h||null===(s=h.addListener)||void 0===s||s.call(h,j("dark")),null!==(d=null===m||void 0===m||null===(f=m.addEventListener)||void 0===f?void 0:f.call(m,"change",j("light"),!1))&&void 0!==d||null===m||void 0===m||null===(b=m.addListener)||void 0===b||b.call(m,j("light")),function(){var e,t,n,c,r,a;v=!1,null!==(e=null===h||void 0===h||null===(t=h.removeEventListener)||void 0===t?void 0:t.call(h,"change",j("dark"),!1))&&void 0!==e||null===h||void 0===h||null===(n=h.removeListener)||void 0===n||n.call(h,j("dark")),null!==(c=null===m||void 0===m||null===(r=m.removeEventListener)||void 0===r?void 0:r.call(m,"change",j("light"),!1))&&void 0!==c||null===m||void 0===m||null===(a=m.removeListener)||void 0===a||a.call(m,j("light"))}}),[]),Object(r.useEffect)((function(){window.document.documentElement.classList.toggle("dark",Object(o.b)(a.theme))}),[a.theme]),a}(),j=function(){var e=Object(r.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){var c,r,a,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object.values(i.a).find((function(e){return e.bcp47.toLowerCase()===t})),"en"!==(a=null!==(c=null===r||void 0===r?void 0:r.localeName)&&void 0!==c?c:"en")){e.next=6;break}e.t0={en:{}},e.next=9;break;case 6:return e.next=8,n(106)("./".concat(a,".json"));case 8:e.t0=e.sent;case 9:l=e.t0,o((function(e){return Object(u.a)(Object(u.a)({},e),{},{context:Object(u.a)(Object(u.a)({},e.context),{},{locale:a}),translations:l})}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(r.useCallback)(function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o((function(e){return Object(u.a)(Object(u.a)({},e),{},{context:Object(u.a)(Object(u.a)({},e.context),{},{context:t})})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),c=Object(r.useState)((function(){return{context:{locale:"en"},translations:{en:{}},switchLocale:e,setContext:t}})),a=Object(s.a)(c,2),l=a[0],o=a[1];return Object(r.useEffect)((function(){!function(){var t=Object(b.a)(f.a.mark((function t(){var n,c,r,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=null!==(n=null===(c=window.navigator)||void 0===c||null===(r=c.language)||void 0===r?void 0:r.toLowerCase())&&void 0!==n?n:"en",t.next=3,e(a);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(r.useEffect)((function(){var e=document.documentElement,t=i.a[l.context.locale];e.lang=t.bcp47,e.dir=t.rtl?"rtl":"ltr"}),[l.context.locale]),l}(),h=j.switchLocale;return Object(a.init)({translations:j.translations,hooks:{getViewerContext:function(){return j.context}}}),Object(r.useEffect)((function(){h(d)}),[d,h]),Object(r.useEffect)((function(){document.head.querySelector('link[rel="canonical"]').href="".concat("https://vpcvdc.github.io").concat(e)}),[e]),Object(r.useEffect)((function(){var e=Object.keys(i.a).filter((function(e){return"en"!==e})).map((function(e){var t=document.createElement("link");return t.rel="alternate",t.href="".concat("https://vpcvdc.github.io","/").concat(e),t.hreflang=e,document.head.appendChild(t),t}));return function(){return e.forEach((function(e){return document.head.removeChild(e)}))}}),[]),Object(c.jsx)(o.a,{theme:v,children:Object(c.jsx)(i.b,{locale:j,children:Object(c.jsx)(O,{})})})}))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var c=n(2),r=n(0),a=Object(r.createContext)({context:{locale:"en"},translations:{en:{}},switchLocale:function(){},setContext:function(){}});function l(e){var t=e.children,n=e.locale;return Object(c.jsx)(a.Provider,{value:n,children:t})}var o=function(){return Object(r.useContext)(a)},i=Object.freeze({ta:Object.freeze({bcp47:"ta",displayName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",englishName:"Tamil",localeName:"ta",rtl:!1}),en:Object.freeze({bcp47:"en",displayName:"English",englishName:"English",localeName:"en",rtl:!1})})},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var c=n(2),r=n(0),a=Object(r.createContext)({theme:"dark",toggleTheme:function(){}});function l(e){var t=e.children,n=e.theme;return Object(c.jsx)(a.Provider,{value:n,children:t})}var o=function(){return Object(r.useContext)(a)},i=function(e){return"dark"===e}}}]);