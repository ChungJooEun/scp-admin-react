!function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(a,n,function(r){return e[r]}.bind(null,n));return a},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=521)}({0:function(e,r,t){(function(r){var t=function(e){return e&&e.Math==Math&&e};e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,t(58))},1:function(e,r){e.exports=function(e){try{return!!e()}catch(e){return!0}}},10:function(e,r,t){var a=t(39),n=t(15);e.exports=function(e){return a(n(e))}},12:function(e,r,t){var a=t(20),n=Math.min;e.exports=function(e){return e>0?n(a(e),9007199254740991):0}},15:function(e,r){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},16:function(e,r,t){var a=t(0),n=t(9),o=t(2),l=t(23),c=t(40),i=t(35),u=i.get,s=i.enforce,d=String(String).split("String");(e.exports=function(e,r,t,c){var i,u=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof t&&("string"!=typeof r||o(t,"name")||n(t,"name",r),(i=s(t)).source||(i.source=d.join("string"==typeof r?r:""))),e!==a?(u?!f&&e[r]&&(p=!0):delete e[r],p?e[r]=t:n(e,r,t)):p?e[r]=t:l(r,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},17:function(e,r){e.exports={}},184:function(e,r,t){"use strict";t.r(r);t(64);r.default={"mainNavbar.navbar":function(){return["default","boxed"].includes(this.settings["layout.layout"])?"dark-blue":["transparent","light"].includes(this.settings["mainNavbar.navbar"])?void 0:"transparent"},"mainDrawer.theme":function(){return"boxed"!==this.settings["layout.layout"]?"dark-blue":"light-yellow"},".layout-boxed .sidebar-brand":{addClass:["sidebar-brand-dark","bg-dark-blue"],removeClass:["bg-primary-pickled-bluewood","bg-dark-purple","bg-dark","bg-black"]},".js-update-chart-line":{setAttribute:[{name:"data-chart-line-border-color",value:"primary"},{name:"data-chart-line-border-opacity",value:"1"}]},".js-update-chart-area":{setAttribute:[{name:"data-chart-line-background-color",value:"gradient:primary"},{name:"data-chart-line-background-opacity",value:"0.1"}]},".js-update-chart-bar":{setAttribute:[{name:"data-chart-line-background-color",value:"gradient:primary"},{name:"data-chart-line-background-opacity",value:"1"}]},"#locationDoughnutChart":{setAttribute:[{name:"data-chart-line-background-color",value:"yellow;primary;gray"},{name:"data-chart-line-background-opacity",value:"1;1;0.24"}]},"#attendanceDoughnutChart":{setAttribute:[{name:"data-chart-line-background-color",value:"primary;yellow;gray.700;gray"},{name:"data-chart-line-background-opacity",value:"1"}]},"#visitsByDeviceChart":{setAttribute:[{name:"data-chart-line-background-color",value:"yellow;gray.300"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-progress":{setAttribute:[{name:"data-chart-line-background-color",value:"primary;gray"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-progress-accent":{setAttribute:[{name:"data-chart-line-background-color",value:"yellow;gray"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-line-accent":{setAttribute:[{name:"data-chart-line-border-color",value:"yellow"},{name:"data-chart-line-border-opacity",value:"1"}]},".js-update-chart-line-2nd-accent":{setAttribute:[{name:"data-chart-line-border-color",value:"primary,yellow"},{name:"data-chart-line-border-opacity",value:"1"}]},".bg-primary-dodger-blue":{addClass:["bg-primary"],removeClass:["bg-primary-dodger-blue"]},".bg-primary-pickled-bluewood":{addClass:["bg-dark-blue"],removeClass:["bg-primary-pickled-bluewood"]},".bg-accent-pickled-bluewood":{addClass:["bg-accent-yellow"],removeClass:["bg-accent-pickled-bluewood"]},".bg-accent-dodger-blue":{addClass:["bg-accent-yellow"],removeClass:["bg-accent-dodger-blue"]},".bg-dark":{addClass:["bg-dark-blue"],removeClass:["bg-dark"]},".bg-dark-purple":{addClass:["bg-dark-blue"],removeClass:["bg-dark-purple"]},".bg-primary-purple":{addClass:["bg-primary"],removeClass:["bg-primary-purple"]},".bg-primary-yellow":{addClass:["bg-primary"],removeClass:["bg-primary-yellow"]},".bg-primary-red":{addClass:["bg-primary"],removeClass:["bg-primary-red"]},".bg-accent-red":{addClass:["bg-accent-yellow"],removeClass:["bg-accent-red"]},".bg-accent":{addClass:["bg-accent-yellow"],removeClass:["bg-accent"]},".border-left-primary-dodger-blue":{addClass:["border-left-primary"],removeClass:["border-left-primary-dodger-blue"]},".border-left-accent-pickled-bluewood":{addClass:["border-left-accent-yellow"],removeClass:["border-left-accent-pickled-bluewood"]},".border-left-primary-purple":{addClass:["border-left-primary"],removeClass:["border-left-primary-purple"]},".border-left-primary-red":{addClass:["border-left-primary"],removeClass:["border-left-primary-red"]},".border-left-accent":{addClass:["border-left-accent-yellow"],removeClass:["border-left-accent"]},".border-left-accent-red":{addClass:["border-left-accent-yellow"],removeClass:["border-left-accent-red"]},".alert-accent-dodger-blue":{addClass:["alert-accent-yellow"],removeClass:["alert-accent-dodger-blue"]},".alert-primary-dodger-blue":{addClass:["alert-primary"],removeClass:["alert-primary-dodger-blue"]},".alert-soft-primary-dodger-blue":{addClass:["alert-soft-primary"],removeClass:["alert-soft-primary-dodger-blue"]},".alert-primary-purple":{addClass:["alert-primary"],removeClass:["alert-primary-purple"]},".alert-primary-yellow":{addClass:["alert-primary"],removeClass:["alert-primary-yellow"]},".alert-primary-red":{addClass:["alert-primary"],removeClass:["alert-primary-red"]},".alert-accent-red":{addClass:["alert-accent-yellow"],removeClass:["alert-accent-red"]},".alert-accent":{addClass:["alert-accent-yellow"],removeClass:["alert-accent"]},".alert-soft-primary-purple":{addClass:["alert-soft-primary"],removeClass:["alert-soft-primary-purple"]},".alert-soft-primary-yellow":{addClass:["alert-soft-primary"],removeClass:["alert-soft-primary-yellow"]},".alert-soft-primary-red":{addClass:["alert-soft-primary"],removeClass:["alert-soft-primary-red"]},".alert-soft-accent-red":{addClass:["alert-soft-accent-yellow"],removeClass:["alert-soft-accent-red"]},".alert-soft-accent":{addClass:["alert-soft-accent-yellow"],removeClass:["alert-soft-accent"]},".text-primary-dodger-blue":{addClass:["text-primary"],removeClass:["text-primary-dodger-blue"]},".text-accent-pickled-bluewood":{addClass:["text-accent-yellow"],removeClass:["text-accent-pickled-bluewood"]},".text-primary-purple":{addClass:["text-primary"],removeClass:["text-primary-purple"]},".text-primary-yellow":{addClass:["text-primary"],removeClass:["text-primary-yellow"]},".text-primary-red":{addClass:["text-primary"],removeClass:["text-primary-red"]},".text-accent-red":{addClass:["text-accent-yellow"],removeClass:["text-accent-red"]},".text-accent":{addClass:["text-accent-yellow"],removeClass:["text-accent"]},".btn-accent-dodger-blue":{addClass:["btn-accent-yellow"],removeClass:["btn-accent-dodger-blue"]},".btn-primary-dodger-blue":{addClass:["btn-primary"],removeClass:["btn-primary-dodger-blue"]},".btn-primary-yellow":{addClass:["btn-primary"],removeClass:["btn-primary-yellow"]},".btn-primary-purple":{addClass:["btn-primary"],removeClass:["btn-primary-purple"]},".btn-primary-red":{addClass:["btn-primary"],removeClass:["btn-primary-red"]},".btn-accent-red":{addClass:["btn-accent-yellow"],removeClass:["btn-accent-red"]},".btn-accent":{addClass:["btn-accent-yellow"],removeClass:["btn-accent"]},".badge-accent-dodger-blue":{addClass:["badge-accent-yellow"],removeClass:["badge-accent-dodger-blue"]},".badge-accent":{addClass:["badge-accent-yellow"],removeClass:["badge-accent"]},".badge-accent-red":{addClass:["badge-accent-yellow"],removeClass:["badge-accent-red"]}}},19:function(e,r){e.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}},2:function(e,r){var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},20:function(e,r){var t=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:t)(e)}},21:function(e,r){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},22:function(e,r,t){var a=t(4);e.exports=function(e,r){if(!a(e))return e;var t,n;if(r&&"function"==typeof(t=e.toString)&&!a(n=t.call(e)))return n;if("function"==typeof(t=e.valueOf)&&!a(n=t.call(e)))return n;if(!r&&"function"==typeof(t=e.toString)&&!a(n=t.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},23:function(e,r,t){var a=t(0),n=t(9);e.exports=function(e,r){try{n(a,e,r)}catch(t){a[e]=r}return r}},24:function(e,r,t){var a=t(0),n=t(23),o=a["__core-js_shared__"]||n("__core-js_shared__",{});e.exports=o},26:function(e,r,t){var a=t(60),n=t(0),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,r){return arguments.length<2?o(a[e])||o(n[e]):a[e]&&a[e][r]||n[e]&&n[e][r]}},27:function(e,r,t){var a=t(3),n=t(55),o=t(19),l=t(10),c=t(22),i=t(2),u=t(42),s=Object.getOwnPropertyDescriptor;r.f=a?s:function(e,r){if(e=l(e),r=c(r,!0),u)try{return s(e,r)}catch(e){}if(i(e,r))return o(!n.f.call(e,r),e[r])}},28:function(e,r,t){var a=t(3),n=t(1),o=t(2),l=Object.defineProperty,c={},i=function(e){throw e};e.exports=function(e,r){if(o(c,e))return c[e];r||(r={});var t=[][e],u=!!o(r,"ACCESSORS")&&r.ACCESSORS,s=o(r,0)?r[0]:i,d=o(r,1)?r[1]:void 0;return c[e]=!!t&&!n((function(){if(u&&!a)return!0;var e={length:-1};u?l(e,1,{enumerable:!0,get:i}):e[1]=1,t.call(e,s,d)}))}},29:function(e,r){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3:function(e,r,t){var a=t(1);e.exports=!a((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},33:function(e,r,t){var a=t(36),n=t(34),o=a("keys");e.exports=function(e){return o[e]||(o[e]=n(e))}},34:function(e,r){var t=0,a=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+a).toString(36)}},35:function(e,r,t){var a,n,o,l=t(67),c=t(0),i=t(4),u=t(9),s=t(2),d=t(24),p=t(33),f=t(17),y=c.WeakMap;if(l){var b=d.state||(d.state=new y),m=b.get,v=b.has,g=b.set;a=function(e,r){return r.facade=e,g.call(b,e,r),r},n=function(e){return m.call(b,e)||{}},o=function(e){return v.call(b,e)}}else{var C=p("state");f[C]=!0,a=function(e,r){return r.facade=e,u(e,C,r),r},n=function(e){return s(e,C)?e[C]:{}},o=function(e){return s(e,C)}}e.exports={set:a,get:n,has:o,enforce:function(e){return o(e)?n(e):a(e,{})},getterFor:function(e){return function(r){var t;if(!i(r)||(t=n(r)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}}},36:function(e,r,t){var a=t(41),n=t(24);(e.exports=function(e,r){return n[e]||(n[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.1",mode:a?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},37:function(e,r,t){var a=t(1);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},39:function(e,r,t){var a=t(1),n=t(21),o="".split;e.exports=a((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==n(e)?o.call(e,""):Object(e)}:Object},4:function(e,r){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},40:function(e,r,t){var a=t(24),n=Function.toString;"function"!=typeof a.inspectSource&&(a.inspectSource=function(e){return n.call(e)}),e.exports=a.inspectSource},41:function(e,r){e.exports=!1},42:function(e,r,t){var a=t(3),n=t(1),o=t(46);e.exports=!a&&!n((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},44:function(e,r,t){var a=t(48),n=t(29).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return a(e,n)}},46:function(e,r,t){var a=t(0),n=t(4),o=a.document,l=n(o)&&n(o.createElement);e.exports=function(e){return l?o.createElement(e):{}}},48:function(e,r,t){var a=t(2),n=t(10),o=t(51).indexOf,l=t(17);e.exports=function(e,r){var t,c=n(e),i=0,u=[];for(t in c)!a(l,t)&&a(c,t)&&u.push(t);for(;r.length>i;)a(c,t=r[i++])&&(~o(u,t)||u.push(t));return u}},49:function(e,r){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},5:function(e,r,t){var a=t(0),n=t(36),o=t(2),l=t(34),c=t(37),i=t(61),u=n("wks"),s=a.Symbol,d=i?s:s&&s.withoutSetter||l;e.exports=function(e){return o(u,e)||(c&&o(s,e)?u[e]=s[e]:u[e]=d("Symbol."+e)),u[e]}},50:function(e,r,t){var a=t(20),n=Math.max,o=Math.min;e.exports=function(e,r){var t=a(e);return t<0?n(t+r,0):o(t,r)}},51:function(e,r,t){var a=t(10),n=t(12),o=t(50),l=function(e){return function(r,t,l){var c,i=a(r),u=n(i.length),s=o(l,u);if(e&&t!=t){for(;u>s;)if((c=i[s++])!=c)return!0}else for(;u>s;s++)if((e||s in i)&&i[s]===t)return e||s||0;return!e&&-1}};e.exports={includes:l(!0),indexOf:l(!1)}},521:function(e,r,t){e.exports=t(184)},53:function(e,r,t){var a=t(1),n=/#|\.prototype\./,o=function(e,r){var t=c[l(e)];return t==u||t!=i&&("function"==typeof r?a(r):!!r)},l=o.normalize=function(e){return String(e).replace(n,".").toLowerCase()},c=o.data={},i=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},54:function(e,r,t){var a,n=t(7),o=t(83),l=t(29),c=t(17),i=t(81),u=t(46),s=t(33),d=s("IE_PROTO"),p=function(){},f=function(e){return"<script>"+e+"<\/script>"},y=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,r;y=a?function(e){e.write(f("")),e.close();var r=e.parentWindow.Object;return e=null,r}(a):((r=u("iframe")).style.display="none",i.appendChild(r),r.src=String("javascript:"),(e=r.contentWindow.document).open(),e.write(f("document.F=Object")),e.close(),e.F);for(var t=l.length;t--;)delete y.prototype[l[t]];return y()};c[d]=!0,e.exports=Object.create||function(e,r){var t;return null!==e?(p.prototype=n(e),t=new p,p.prototype=null,t[d]=e):t=y(),void 0===r?t:o(t,r)}},55:function(e,r,t){"use strict";var a={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!a.call({1:2},1);r.f=o?function(e){var r=n(this,e);return!!r&&r.enumerable}:a},56:function(e,r){r.f=Object.getOwnPropertySymbols},58:function(e,r,t){var a,n=t(49);a=function(){return this}();try{a=a||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(a=window)}e.exports=a},59:function(e,r,t){var a=t(2),n=t(65),o=t(27),l=t(8);e.exports=function(e,r){for(var t=n(r),c=l.f,i=o.f,u=0;u<t.length;u++){var s=t[u];a(e,s)||c(e,s,i(r,s))}}},6:function(e,r,t){var a=t(0),n=t(27).f,o=t(9),l=t(16),c=t(23),i=t(59),u=t(53);e.exports=function(e,r){var t,s,d,p,f,y=e.target,b=e.global,m=e.stat;if(t=b?a:m?a[y]||c(y,{}):(a[y]||{}).prototype)for(s in r){if(p=r[s],d=e.noTargetGet?(f=n(t,s))&&f.value:t[s],!u(b?s:y+(m?".":"#")+s,e.forced)&&void 0!==d){if(typeof p==typeof d)continue;i(p,d)}(e.sham||d&&d.sham)&&o(p,"sham",!0),l(t,s,p,e)}}},60:function(e,r,t){var a=t(0);e.exports=a},61:function(e,r,t){var a=t(37);e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},62:function(e,r,t){var a=t(48),n=t(29);e.exports=Object.keys||function(e){return a(e,n)}},64:function(e,r,t){"use strict";var a=t(6),n=t(51).includes,o=t(71);a({target:"Array",proto:!0,forced:!t(28)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},65:function(e,r,t){var a=t(26),n=t(44),o=t(56),l=t(7);e.exports=a("Reflect","ownKeys")||function(e){var r=n.f(l(e)),t=o.f;return t?r.concat(t(e)):r}},67:function(e,r,t){var a=t(0),n=t(40),o=a.WeakMap;e.exports="function"==typeof o&&/native code/.test(n(o))},7:function(e,r,t){var a=t(4);e.exports=function(e){if(!a(e))throw TypeError(String(e)+" is not an object");return e}},71:function(e,r,t){var a=t(5),n=t(54),o=t(8),l=a("unscopables"),c=Array.prototype;null==c[l]&&o.f(c,l,{configurable:!0,value:n(null)}),e.exports=function(e){c[l][e]=!0}},8:function(e,r,t){var a=t(3),n=t(42),o=t(7),l=t(22),c=Object.defineProperty;r.f=a?c:function(e,r,t){if(o(e),r=l(r,!0),o(t),n)try{return c(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[r]=t.value),e}},81:function(e,r,t){var a=t(26);e.exports=a("document","documentElement")},83:function(e,r,t){var a=t(3),n=t(8),o=t(7),l=t(62);e.exports=a?Object.defineProperties:function(e,r){o(e);for(var t,a=l(r),c=a.length,i=0;c>i;)n.f(e,t=a[i++],r[t]);return e}},9:function(e,r,t){var a=t(3),n=t(8),o=t(19);e.exports=a?function(e,r,t){return n.f(e,r,o(1,t))}:function(e,r,t){return e[r]=t,e}}});