/*!
 * WvPbManager: Core, es5
 * Built with http://stenciljs.com
 */
function n(n,t){for(var e,r,i=null,o=!1,u=!1,f=arguments.length;f-- >2;)y.push(arguments[f]);for(;y.length>0;){var c=y.pop();if(c&&void 0!==c.pop)for(f=c.length;f--;)y.push(c[f]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof n)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&o?i[i.length-1].vtext+=c:null===i?i=[u?{vtext:c}:c]:i.push(u?{vtext:c}:c),o=u}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(f in t.class)t.class[f]&&y.push(f);t.class=y.join(" "),y.length=0}null!=t.key&&(e=t.key),null!=t.name&&(r=t.name)}return"function"==typeof n?n(t,i||[],w):{vtag:n,vchildren:i,vtext:void 0,vattrs:t,vkey:e,vname:r,n:void 0,t:!1}}function t(n,t,e){void 0===e&&(e={});var r=Array.isArray(t)?t:[t],i=n.document,u=e.hydratedCssClass||"hydrated",f=e.exclude;f&&(r=r.filter(function(n){return-1===f.indexOf(n[0])}));var c=r.map(function(n){return n[0]});if(c.length>0){var s=i.createElement("style");s.innerHTML=c.join()+"{visibility:hidden}."+u+"{visibility:inherit}",s.setAttribute("data-styles",""),i.head.insertBefore(s,i.head.firstChild)}var l=e.namespace||"WvPbManager";return T||(T=!0,function v(n,t,e){(n["s-apps"]=n["s-apps"]||[]).push(t),e.componentOnReady||(e.componentOnReady=function t(){function e(t){if(r.nodeName.indexOf("-")>0){for(var e=n["s-apps"],i=0,o=0;o<e.length;o++)if(n[e[o]].componentOnReady){if(n[e[o]].componentOnReady(r,t))return;i++}if(i<e.length)return void(n["s-cr"]=n["s-cr"]||[]).push([r,t])}t(null)}var r=this;return n.Promise?new n.Promise(e):{then:e}})}(n,l,n.HTMLElement.prototype)),applyPolyfills(n).then(function(){function t(){r.forEach(function(t){var e;!function r(n){return/\{\s*\[native code\]\s*\}/.test(""+n)}(n.customElements.define)?(e=function(t){return n.HTMLElement.call(this,t)}).prototype=Object.create(n.HTMLElement.prototype,{constructor:{value:e,configurable:!0}}):e=new Function("w","return class extends w.HTMLElement{}")(n),x[l].e(function i(n){var t=m(n),e=t.r,r=a(n[0]);return t.r=function(n){var t=n.mode,i=n.scoped;return function o(n,t,e){return import(
/* webpackInclude: /\.entry\.js$/ */
/* webpackMode: "lazy" */
"./build/"+n+(t?".sc":"")+".entry.js").then(function(n){return n[e]})}("string"==typeof e?e:e[t],i,r)},t}(t),e)})}if(!x[l]){var f={},c=e.resourcesUrl||"./";o(l,f,n,i,c,u),x[l]=_(l,f,n,i,c,u,r)}if(window.customStyleShim)return x[l].i=window.customStyleShim,x[l].i.initShim().then(t);t()})}this&&this.o;var e=this&&this.u||function(n,t,e,r){return new(e||(e=Promise))(function(i,o){function u(n){try{c(r.f(n))}catch(n){o(n)}}function f(n){try{c(r.throw(n))}catch(n){o(n)}}function c(n){n.c?i(n.value):new e(function(t){t(n.value)}).then(u,f)}c((r=r.apply(n,t||[])).f())})},r=this&&this.a||function(n,t){function e(e){return function(u){return function c(e){if(r)throw new TypeError("Generator is already executing.");for(;f;)try{if(r=1,i&&(o=2&e[0]?i.return:e[0]?i.throw||((o=i.return)&&o.call(i),0):i.f)&&!(o=o.call(i,e[1])).c)return o;switch(i=0,o&&(e=[2&e[0],o.value]),e[0]){case 0:case 1:o=e;break;case 4:return f.s++,{value:e[1],c:!1};case 5:f.s++,i=e[1],e=[0];continue;case 7:e=f.l.pop(),f.v.pop();continue;default:if(!(o=(o=f.v).length>0&&o[o.length-1])&&(6===e[0]||2===e[0])){f=0;continue}if(3===e[0]&&(!o||e[1]>o[0]&&e[1]<o[3])){f.s=e[1];break}if(6===e[0]&&f.s<o[1]){f.s=o[1],o=e;break}if(o&&f.s<o[2]){f.s=o[2],f.l.push(e);break}o[2]&&f.l.pop(),f.v.pop();continue}e=t.call(n,f)}catch(n){e=[6,n],i=0}finally{r=o=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,c:!0}}([e,u])}}var r,i,o,u,f={s:0,p:function(){if(1&o[0])throw o[1];return o[1]},v:[],l:[]};return u={f:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},i=this;import o from"./wv-pb-manager.global.js";function applyPolyfills(n){n.d=function(){function t(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<m;n+=2)(0,O[n])(O[n+1]),O[n]=void 0,O[n+1]=void 0;m=0}function r(n,t){var e=this,r=new this.constructor(o);void 0===r[_]&&h(r);var i=e.y;if(i){var u=arguments[i-1];M(function(){return d(i,r,u,e.w)})}else v(e,r,n,t);return r}function i(n){if(n&&"object"==typeof n&&n.constructor===this)return n;var t=new this(o);return c(t,n),t}function o(){}function u(n){try{return n.then}catch(n){return P.error=n,P}}function f(n,t,e){t.constructor===n.constructor&&e===r&&t.constructor.resolve===i?function(n,t){t.y===T?s(n,t.w):t.y===W?l(n,t.w):v(t,void 0,function(t){return c(n,t)},function(t){return l(n,t)})}(n,t):e===P?(l(n,P.error),P.error=null):void 0===e?s(n,t):"function"==typeof e?function(n,t,e){M(function(n){var r=!1,i=function(n,t,e,r){try{n.call(t,e,r)}catch(n){return n}}(e,t,function(e){r||(r=!0,t!==e?c(n,e):s(n,e))},function(t){r||(r=!0,l(n,t))},n.m);!r&&i&&(r=!0,l(n,i))},n)}(n,t,e):s(n,t)}function c(n,t){if(n===t)l(n,new TypeError("cannot resolve promise w/ itself"));else{var e=typeof t;null===t||"object"!==e&&"function"!==e?s(n,t):f(n,t,u(t))}}function a(n){n.b&&n.b(n.w),p(n)}function s(n,t){n.y===x&&(n.w=t,n.y=T,0!==n.g.length&&M(p,n))}function l(n,t){n.y===x&&(n.y=W,n.w=t,M(a,n))}function v(n,t,e,r){var i=n.g,o=i.length;n.b=null,i[o]=t,i[o+T]=e,i[o+W]=r,0===o&&n.y&&M(p,n)}function p(n){var t=n.g,e=n.y;if(0!==t.length){for(var r,i,o=n.w,u=0;u<t.length;u+=3)r=t[u],i=t[u+e],r?d(e,r,i,o):i(o);n.g.length=0}}function d(n,t,e,r){var i="function"==typeof e,o=void 0,u=void 0,f=void 0,a=void 0;if(i){try{o=e(r)}catch(n){P.error=n,o=P}if(o===P?(a=!0,u=o.error,o.error=null):f=!0,t===o)return void l(t,new TypeError("Cannot return same promise"))}else o=r,f=!0;t.y===x&&(i&&f?c(t,o):a?l(t,u):n===T?s(t,o):n===W&&l(t,o))}function h(n){n[_]=N++,n.y=void 0,n.w=void 0,n.g=[]}var y,w=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},m=0,b=void 0,g=void 0,M=function(n,t){O[m]=n,O[m+1]=t,2===(m+=2)&&(g?g(e):S())},j=(y=void 0!==n?n:void 0)||{},k=j.M||j.j;j="undefined"==typeof self;var $,A,E,C="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,O=Array(1e3),S=void 0;S=k?($=0,A=new k(e),E=document.createTextNode(""),A.observe(E,{characterData:!0}),function(){E.data=$=++$%2}):C?function(){var n=new MessageChannel;return n.k.onmessage=e,function(){return n.A.postMessage(0)}}():void 0===y&&"function"==typeof require?function(){try{var n=Function("return this")().C("vertx");return void 0!==(b=n.O||n.S)?function(){b(e)}:t()}catch(n){return t()}}():t();var _=Math.random().toString(36).substring(2),x=void 0,T=1,W=2,P={error:null},N=0,R=function(){function n(n,t){this._=n,this.x=new n(o),this.x[_]||h(this.x),w(t)?(this.T=this.length=t.length,this.w=Array(this.length),0===this.length?s(this.x,this.w):(this.length=this.length||0,this.W(t),0===this.T&&s(this.x,this.w))):l(this.x,Error("Array Methods must be provided an Array"))}return n.prototype.W=function(n){for(var t=0;this.y===x&&t<n.length;t++)this.P(n[t],t)},n.prototype.P=function(n,t){var e=this._,c=e.resolve;c===i?(c=u(n))===r&&n.y!==x?this.N(n.y,t,n.w):"function"!=typeof c?(this.T--,this.w[t]=n):e===L?(f(e=new e(o),n,c),this.R(e,t)):this.R(new e(function(t){return t(n)}),t):this.R(c(n),t)},n.prototype.N=function(n,t,e){var r=this.x;r.y===x&&(this.T--,n===W?l(r,e):this.w[t]=e),0===this.T&&s(r,this.w)},n.prototype.R=function(n,t){var e=this;v(n,void 0,function(n){return e.N(T,t,n)},function(n){return e.N(W,t,n)})},n}(),L=function(){function n(t){if(this[_]=N++,this.w=this.y=void 0,this.g=[],o!==t){if("function"!=typeof t)throw new TypeError("Must pass a resolver fn as 1st arg");if(!(this instanceof n))throw new TypeError("Failed to construct 'Promise': Use the 'new' operator.");!function(n,t){try{t(function(t){c(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}return n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){throw e})})},n}();return L.prototype.then=r,L.all=function(n){return new R(this,n).x},L.race=function(n){var t=this;return w(n)?new t(function(e,r){for(var i=n.length,o=0;o<i;o++)t.resolve(n[o]).then(e,r)}):new t(function(n,t){return t(new TypeError("Must pass array to race"))})},L.resolve=i,L.reject=function(n){var t=new this(o);return l(t,n),t},L.L=function(n){g=n},L.D=function(n){M=n},L.F=M,L.H=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw Error("polyfill failed")}var t=n.Promise;if(t){var e=null;try{e=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===e&&!t.q)return}n.Promise=L},L.Promise=L,L.H(),L}();var t=[];return n.customElements&&(!n.Element||n.Element.prototype.closest&&n.Element.prototype.matches&&n.Element.prototype.remove)||t.push(import("./polyfills/dom.js")),"function"==typeof Object.assign&&Object.entries||t.push(import("./polyfills/object.js")),Array.prototype.find&&Array.prototype.includes||t.push(import("./polyfills/array.js")),String.prototype.startsWith&&String.prototype.endsWith||t.push(import("./polyfills/string.js")),n.fetch||t.push(import("./polyfills/fetch.js")),"undefined"!=typeof WeakMap&&n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")||t.push(import("./polyfills/css-shim.js")),function e(){try{var n=new URL("b","http://a");return n.pathname="c%20d","http://a/c%20d"===n.href&&n.U}catch(n){return!1}}||t.push(import("./polyfills/url.js")),Promise.all(t).then(function(t){t.forEach(function(t){try{t.applyPolyfill(n,n.document)}catch(n){console.error(n)}})})}var u={},f=function(n){return null!=n},c=function(n){return n.toLowerCase()},a=function(n){return c(n).split("-").map(function(n){return n.charAt(0).toUpperCase()+n.slice(1)}).join("")},s=function(n,t,e,r,i,o){if("class"!==e||o)if("style"===e){for(var u in r)i&&null!=i[u]||(/-/.test(u)?t.style.removeProperty(u):t.style[u]="");for(var u in i)r&&i[u]===r[u]||(/-/.test(u)?t.style.setProperty(u,i[u]):t.style[u]=i[u])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in t)if("list"!==e&&"type"!==e&&!o&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){var f=n.B(t);f&&f.I&&f.I[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||n.Q.G(t,e))}else null!=i&&"key"!==e?function(n,t,e,r,i){void 0===r&&(r="boolean"==typeof e),i=t!==(t=t.replace(/^xlink\:?/,"")),null==e||r&&(!e||"false"===e)?i?n.removeAttributeNS("http://www.w3.org/1999/xlink",c(t)):n.removeAttribute(t):"function"!=typeof e&&(e=r?"":e.toString(),i?n.setAttributeNS("http://www.w3.org/1999/xlink",c(t),e):n.setAttribute(t,e))}(t,e,i):(o||n.Q.Y(t,e)&&(null==i||!1===i))&&n.Q.G(t,e);else e=c(e)in t?c(e.substring(2)):c(e[2])+e.substring(3),i?i!==r&&n.Q.Z(t,e,i):n.Q.z(t,e);else if(r!==i){var a=l(r),s=l(i),p=a.filter(function(n){return!s.includes(n)}),d=l(t.className).filter(function(n){return!p.includes(n)}),h=s.filter(function(n){return!a.includes(n)&&!d.includes(n)});d.push.apply(d,h),t.className=d.join(" ")}},l=function(n){return null==n||""===n?[]:n.trim().split(/\s+/)},v=function(n,t,e){try{n[t]=e}catch(n){}},p=function(n,t,e,r,i){var o=11===e.n.nodeType&&e.n.host?e.n.host:e.n,f=t&&t.vattrs||u,c=e.vattrs||u;for(i in f)c&&null!=c[i]||null==f[i]||s(n,o,i,f[i],void 0,r,e.t);for(i in c)i in f&&c[i]===("value"===i||"checked"===i?o[i]:f[i])||s(n,o,i,f[i],c[i],r,e.t)},d=!1,h=function(n,t){n&&(n.vattrs&&n.vattrs.ref&&n.vattrs.ref(t?null:n.n),n.vchildren&&n.vchildren.forEach(function(n){h(n,t)}))},y=[],w={forEach:function(n,t){return n.forEach(t)},map:function(n,t){return n.map(t)}},m=function(n,t,e){var r=n[0],i=n[1],o=n[3],u=n[4],f=n[5],c={color:{J:"color"}};if(o)for(t=0;t<o.length;t++)c[(e=o[t])[0]]={K:e[1],V:!!e[2],J:"string"==typeof e[3]?e[3]:e[3]?e[0]:0,X:e[4]};return{nn:r,r:i,I:Object.assign({},c),tn:u,en:f?f.map(b):void 0}},b=function(n){return{rn:n[0],in:n[1],on:!!n[2],un:!!n[3],fn:!!n[4]}},g=function(n,t){return f(t)&&"object"!=typeof t&&"function"!=typeof t?n===Boolean||4===n?"false"!==t&&(""===t||!!t):n===Number||8===n?parseFloat(t):n===String||2===n?t.toString():t:t},M=function(n,t,e){n.cn.add(t),n.an.has(t)||(n.an.set(t,!0),n.sn?n.queue.write(function(){return j(n,t,e)}):n.queue.tick(function(){return j(n,t,e)}))},j=function(t,o,u,f,c,a){return e(i,void 0,void 0,function(){var e,i;return r(this,function(r){switch(r.s){case 0:if(t.an.delete(o),t.ln.has(o))return[3,12];if(c=t.vn.get(o))return[3,6];if((a=t.pn.get(o))&&!a["s-rn"])return(a["s-rc"]=a["s-rc"]||[]).push(function(){j(t,o,u)}),[2];if(!(c=C(t,o,t.dn.get(o),u)))return[3,5];r.s=1;case 1:return r.v.push([1,4,,5]),c.componentWillLoad?[4,c.componentWillLoad()]:[3,3];case 2:r.p(),r.s=3;case 3:return[3,5];case 4:return e=r.p(),t.hn(e,3,o),[3,5];case 5:case 6:return[3,11];case 7:return r.v.push([7,10,,11]),c.componentWillUpdate?[4,c.componentWillUpdate()]:[3,9];case 8:r.p(),r.s=9;case 9:return[3,11];case 10:return i=r.p(),t.hn(i,5,o),[3,11];case 11:(function(t,e,r,i){try{var o=e.yn.host,u=e.yn.encapsulation,f=r;if(i.render||i.hostData||o){t.wn=!0;var c=i.render&&i.render();t.wn=!1;var a=n(null,void 0,c),s=t.mn.get(r)||{};s.n=f,t.mn.set(r,t.render(r,s,a,!1,u))}t.i&&t.i.updateHost(r),r["s-rn"]=!0,r["s-rc"]&&(r["s-rc"].forEach(function(n){return n()}),r["s-rc"]=null)}catch(n){t.wn=!1,t.hn(n,8,r,!0)}})(t,t.B(o),o,c),o["s-init"](),r.s=12;case 12:return[2]}})})},k=function(n,t,e,r,i,o,u){(u=n.bn.get(t))||n.bn.set(t,u={});var f=u[e];if(r!==f&&(u[e]=r,o=n.vn.get(t))){var c=u[E+e];if(c)for(var a=0;a<c.length;a++)try{o[c[a]].call(o,r,f,e)}catch(n){console.error(n)}!n.wn&&t["s-rn"]&&M(n,t,i)}},$=function(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})},A=function(n,t,e,r){Object.defineProperty(n,t,{configurable:!0,get:e,set:r})},E="wc-",C=function(n,t,e,r,i,o,u,c){try{i=new(o=n.B(t).yn),function(n,t,e,r,i,o){n.gn.set(r,e),n.bn.has(e)||n.bn.set(e,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(function(t){var u=t[0],c=t[1];(function(n,t,e,r,i,o,u,c,a){if(t.type||t.state){var s=n.bn.get(e);t.state||(!t.attr||void 0!==s[i]&&""!==s[i]||(c=o&&o.Mn)&&f(a=c[t.attr])&&(s[i]=g(t.type,a)),e.hasOwnProperty(i)&&(void 0===s[i]&&(s[i]=g(t.type,e[i])),"mode"!==i&&delete e[i])),r.hasOwnProperty(i)&&void 0===s[i]&&(s[i]=r[i]),t.watchCallbacks&&(s[E+i]=t.watchCallbacks.slice()),A(r,i,function l(t){return(t=n.bn.get(n.gn.get(this)))&&t[i]},function v(e,r){(r=n.gn.get(this))&&(t.state||t.mutable)&&k(n,r,i,e,u)})}else if(t.elementRef)$(r,i,e);else if(t.context){var p=n.jn(t.context);void 0!==p&&$(r,i,p.kn&&p.kn(e)||p)}})(n,c,e,r,u,i,o)})}(n,o,t,i,e,r);try{if(u=n.$n.get(t)){for(c=0;c<u.length;c+=2)i[u[c]](u[c+1]);n.$n.delete(t)}}catch(e){n.hn(e,2,t)}}catch(e){i={},n.hn(e,7,t,!0)}return n.vn.set(t,i),i},O=function(n,t){for(var e=0;e<t.childNodes.length;e++){var r=t.childNodes[e];if(1===r.nodeType){if(n.B(r)&&!n.An.has(r))return!1;if(!O(n,r))return!1}}return!0},S=function(n,t,e,r,i,o){if(n.cn.delete(t),(i=n.pn.get(t))&&((r=i["s-ld"])&&((e=r.indexOf(t))>-1&&r.splice(e,1),r.length||i["s-init"]&&i["s-init"]()),n.pn.delete(t)),n.En.length&&!n.cn.size)for(;o=n.En.shift();)o()},_=function(t,e,r,i,o,u){var a=r.performance,s={html:{}},l=r[t]=r[t]||{},v=function(n,t,e){var r=new WeakMap,i={Cn:e,On:!!e.documentElement.attachShadow,Sn:!1,_n:function(n){return n.nodeType},xn:function(n){return e.createElement(n)},Tn:function(n,t){return e.createElementNS(n,t)},Wn:function(n){return e.createTextNode(n)},Pn:function(n){return e.createComment(n)},Nn:function(n,t,e){return n.insertBefore(t,e)},Rn:function(n){return n.remove()},Ln:function(n,t){return n.appendChild(t)},Dn:function(n,t){if(n.classList)n.classList.add(t);else if("svg"===n.nodeName.toLowerCase()){var e=n.getAttribute("class")||"";e.split(" ").includes(t)||(e+=" "+t),n.setAttribute("class",e.trim())}},Fn:function(n){return n.childNodes},Hn:function(n){return n.parentNode},qn:function(n){return n.nextSibling},Un:function(n){return n.previousSibling},Bn:function(n){return c(n.nodeName)},In:function(n){return n.textContent},Gn:function(n,t){return n.textContent=t},Qn:function(n,t){return n.getAttribute(t)},Yn:function(n,t,e){return n.setAttribute(t,e)},G:function(n,t){return n.removeAttribute(t)},Y:function(n,t){return n.hasAttribute(t)},Zn:function(t){return t.getAttribute("mode")||(n.Context||{}).mode},zn:function(n,r){return"child"===r?n.firstElementChild:"parent"===r?i.Jn(n):"body"===r?e.body:"document"===r?e:"window"===r?t:n},Z:function(t,e,o,u,f,c,a,s,l){var v=t,p=o,d=r.get(t);l=e,d&&d[l]&&d[l](),"object"==typeof c&&(v=c),v&&(a=i.Sn?{capture:!!u,passive:!!f}:!!u,n.ael(v,e,p,a),d||r.set(t,d={}),d[l]=function(){v&&n.rel(v,e,p,a),d[l]=null})},z:function(n,t,e){(e=r.get(n))&&(t?e[t]&&e[t]():Object.keys(e).forEach(function(n){e[n]&&e[n]()}))},Kn:function(n,e,r,i){return i=new t.CustomEvent(e,r),n&&n.dispatchEvent(i),i},Jn:function(n,t){return(t=i.Hn(n))&&11===i._n(t)?t.host:t},Vn:function(n,t,e,r){return n.setAttributeNS(t,e,r)}};"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(n,t,r){return t=t||{},(r=e.createEvent("CustomEvent")).initCustomEvent(n,t.bubbles,t.cancelable,t.detail),r},t.CustomEvent.prototype=t.Event.prototype),n.ael||(n.ael=function(n,t,e,r){return n.addEventListener(t,e,r)},n.rel=function(n,t,e,r){return n.removeEventListener(t,e,r)});try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){return i.Sn=!0}}))}catch(n){}return i}(l,r,i),y=v.Cn.documentElement,w=r["s-defined"]=r["s-defined"]||{},m={Q:v,e:function(n,t){r.customElements.get(n.nn)||(function(n,t,e,r,i){if(e.connectedCallback=function(){(function(n,t,e){n.Xn.has(e)||(n.Xn.set(e,!0),function r(n,t){var e=n.B(t);e.en&&e.en.forEach(function(e){e.on||n.Q.Z(t,e.rn,function r(n,t,e,i){return function(r){(i=n.vn.get(t))?i[e](r):((i=n.$n.get(t)||[]).push(e,r),n.$n.set(t,i))}}(n,t,e.in),e.fn,e.un)})}(n,e)),n.ln.delete(e),n.An.has(e)||(n.nt=!0,n.cn.add(e),n.An.set(e,!0),function(n,t,e){for(e=t;e=n.Q.Jn(e);)if(n.tt(e)){n.et.has(t)||(n.pn.set(t,e),(e["s-ld"]=e["s-ld"]||[]).push(t));break}}(n,e),n.queue.tick(function(){n.dn.set(e,function(n,t,e,r,i){return e.mode||(e.mode=n.Zn(e)),e["s-cr"]||n.Qn(e,"ssrv")||n.On&&1===t.tn||(e["s-cr"]=n.Wn(""),e["s-cr"]["s-cn"]=!0,n.Nn(e,e["s-cr"],n.Fn(e)[0])),n.On||1!==t.tn||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(e.shadowRoot=e),r={Mn:{}},t.I&&Object.keys(t.I).forEach(function(o){(i=t.I[o].J)&&(r.Mn[i]=n.Qn(e,i))}),r}(n.Q,t,e)),n.rt(t,e)}))})(n,t,this)},e.disconnectedCallback=function(){(function(n,t){!n.it&&function(n,t){for(;t;){if(!n.Hn(t))return 9!==n._n(t);t=n.Hn(t)}}(n.Q,t)&&(n.ln.set(t,!0),S(n,t),h(n.mn.get(t),!0),n.Q.z(t),n.Xn.delete(t),n.i&&n.i.removeHost(t),[n.pn,n.ot,n.dn].forEach(function(n){return n.delete(t)}))})(n,this)},e["s-init"]=function(){(function(n,t,e,r,i,o,u){if(O(n,t)&&(i=n.vn.get(t))&&!n.ln.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){n.et.set(t,!0),(u=n.ut.has(t))||(n.ut.set(t,!0),t["s-ld"]=void 0,n.Q.Dn(t,e));try{h(n.mn.get(t)),(o=n.ot.get(t))&&(o.forEach(function(n){return n(t)}),n.ot.delete(t)),!u&&i.componentDidLoad&&i.componentDidLoad()}catch(e){n.hn(e,4,t)}S(n,t)}})(n,this,r)},e.forceUpdate=function(){M(n,this,i)},t.I){var o=Object.entries(t.I),u={};o.forEach(function(n){var t=n[0],e=n[1].J;e&&(u[e]=t)}),u=Object.assign({},u),e.attributeChangedCallback=function(n,t,e){(function r(n,t,e,i){var o=n[c(e)];o&&(t[o]=i)})(u,this,n,e)},function(n,t,e,r){o.forEach(function(t){var i=t[0],o=t[1];3&o.K&&A(e,i,function t(){return(n.bn.get(this)||{})[i]},function t(e){k(n,this,i,g(o.X,e),r)})})}(n,0,e,i)}}(m,s[n.nn]=n,t.prototype,u,a),t.observedAttributes=Object.values(n.I).map(function(n){return n.J}).filter(function(n){return!!n}),r.customElements.define(n.nn,t))},B:function(n){return s[v.Bn(n)]},jn:function(n){return e[n]},isClient:!0,tt:function(n){return!(!w[v.Bn(n)]&&!m.B(n))},hn:function(n,t,e){return console.error(n,t,e&&e.tagName)},queue:e.queue=function(n,t){var e=0,r=!1,i=function(){return t.performance.now()},o=!1!==n.asyncQueue,u=Promise.resolve(),f=[],c=[],a=[],s=[],l=function(t){return function(e){t.push(e),r||(r=!0,n.raf(d))}},v=function(n){for(var t=0;t<n.length;t++)try{n[t](i())}catch(n){console.error(n)}n.length=0},p=function(n,t){for(var e,r=0;r<n.length&&(e=i())<t;)try{n[r++](e)}catch(n){console.error(n)}r===n.length?n.length=0:0!==r&&n.splice(0,r)},d=function(){e++,v(c);var t=o?i()+7*Math.ceil(e*(1/22)):Infinity;p(a,t),p(s,t),a.length>0&&(s.push.apply(s,a),a.length=0),(r=c.length+a.length+s.length>0)?n.raf(d):e=0};return n.raf||(n.raf=t.requestAnimationFrame.bind(t)),{tick:function(n){f.push(n),1===f.length&&u.then(function(){return v(f)})},read:l(c),write:l(a)}}(l,r),rt:function(n,t){var e={mode:t.mode,scoped:!1};n.r(e).then(function(e){try{n.yn=e}catch(t){console.error(t),n.yn=function r(){}}M(m,t,a)})},wn:!1,sn:!1,it:!1,ft:void 0,pn:new WeakMap,ct:new WeakMap,An:new WeakMap,Xn:new WeakMap,ut:new WeakMap,et:new WeakMap,gn:new WeakMap,dn:new WeakMap,vn:new WeakMap,ln:new WeakMap,an:new WeakMap,ot:new WeakMap,$n:new WeakMap,mn:new WeakMap,bn:new WeakMap,cn:new Set,En:[]};return e.isServer=e.isPrerender=!(e.isClient=!0),e.window=r,e.location=r.location,e.document=i,e.resourcesUrl=e.publicPath=o,e.enableListener=function(n,t,e,r,i){return function o(n,t,e,r,i,u){if(t){var f=n.gn.get(t),c=n.B(f);if(c&&c.en)if(r){var a=c.en.find(function(n){return n.rn===e});a&&n.Q.Z(f,e,function(n){return t[a.in](n)},a.fn,void 0===u?a.un:!!u,i)}else n.Q.z(f,e)}}(m,n,t,e,r,i)},l.h=n,l.Context=e,l.onReady=function(){return new Promise(function(n){return m.queue.write(function(){return m.cn.size?m.En.push(n):n()})})},m.render=function(n,t){var e,r,i,o,u,c,a,s=function(i,v,h,y,w,m,b,g,M){if(g=v.vchildren[h],e||(o=!0,"slot"===g.vtag&&(r&&t.Dn(y,r+"-s"),g.vchildren?g.at=!0:g.st=!0)),f(g.vtext))g.n=t.Wn(g.vtext);else if(g.st)g.n=t.Wn("");else{if(m=g.n=d||"svg"===g.vtag?t.Tn("http://www.w3.org/2000/svg",g.vtag):t.xn(g.at?"slot-fb":g.vtag),n.tt(m)&&n.et.delete(a),d="svg"===g.vtag||"foreignObject"!==g.vtag&&d,p(n,null,g,d),f(r)&&m["s-si"]!==r&&t.Dn(m,m["s-si"]=r),g.vchildren)for(w=0;w<g.vchildren.length;++w)(b=s(i,g,w,m))&&t.Ln(m,b);"svg"===g.vtag&&(d=!1)}return g.n["s-hn"]=c,(g.at||g.st)&&(g.n["s-sr"]=!0,g.n["s-cr"]=u,g.n["s-sn"]=g.vname||"",(M=i&&i.vchildren&&i.vchildren[h])&&M.vtag===g.vtag&&i.n&&l(i.n)),g.n},l=function(e,r,i,u){n.it=!0;var f=t.Fn(e);for(i=f.length-1;i>=0;i--)(u=f[i])["s-hn"]!==c&&u["s-ol"]&&(t.Rn(u),t.Nn(m(u),u,w(u)),t.Rn(u["s-ol"]),u["s-ol"]=null,o=!0),r&&l(u,r);n.it=!1},v=function(n,e,r,i,o,u,a,l){var v=n["s-cr"];for((a=v&&t.Hn(v)||n).shadowRoot&&t.Bn(a)===c&&(a=a.shadowRoot);o<=u;++o)i[o]&&(l=f(i[o].vtext)?t.Wn(i[o].vtext):s(null,r,o,n))&&(i[o].n=l,t.Nn(a,l,w(e)))},h=function(n,e,r,o){for(;e<=r;++e)f(n[e])&&(o=n[e].n,i=!0,o["s-ol"]?t.Rn(o["s-ol"]):l(o,!0),t.Rn(o))},y=function(n,t){return n.vtag===t.vtag&&n.vkey===t.vkey&&("slot"!==n.vtag||n.vname===t.vname)},w=function(n){return n&&n["s-ol"]?n["s-ol"]:n},m=function(n){return t.Hn(n["s-ol"]?n["s-ol"]:n)},b=function(e,r,i){var o=r.n=e.n,u=e.vchildren,c=r.vchildren;d=r.n&&f(t.Jn(r.n))&&void 0!==r.n.ownerSVGElement,d="svg"===r.vtag||"foreignObject"!==r.vtag&&d,f(r.vtext)?(i=o["s-cr"])?t.Gn(t.Hn(i),r.vtext):e.vtext!==r.vtext&&t.Gn(o,r.vtext):("slot"!==r.vtag&&p(n,e,r,d),f(u)&&f(c)?function(n,e,r,i,o,u,c,a){for(var p=0,d=0,g=e.length-1,M=e[0],j=e[g],k=i.length-1,$=i[0],A=i[k];p<=g&&d<=k;)if(null==M)M=e[++p];else if(null==j)j=e[--g];else if(null==$)$=i[++d];else if(null==A)A=i[--k];else if(y(M,$))b(M,$),M=e[++p],$=i[++d];else if(y(j,A))b(j,A),j=e[--g],A=i[--k];else if(y(M,A))"slot"!==M.vtag&&"slot"!==A.vtag||l(t.Hn(M.n)),b(M,A),t.Nn(n,M.n,t.qn(j.n)),M=e[++p],A=i[--k];else if(y(j,$))"slot"!==M.vtag&&"slot"!==A.vtag||l(t.Hn(j.n)),b(j,$),t.Nn(n,j.n,M.n),j=e[--g],$=i[++d];else{for(o=null,u=p;u<=g;++u)if(e[u]&&f(e[u].vkey)&&e[u].vkey===$.vkey){o=u;break}f(o)?((a=e[o]).vtag!==$.vtag?c=s(e&&e[d],r,o,n):(b(a,$),e[o]=void 0,c=a.n),$=i[++d]):(c=s(e&&e[d],r,d,n),$=i[++d]),c&&t.Nn(m(M.n),c,w(M.n))}p>g?v(n,null==i[k+1]?null:i[k+1].n,r,i,d,k):d>k&&h(e,p,g)}(o,u,r,c):f(c)?(f(e.vtext)&&t.Gn(o,""),v(o,null,r,c,0,c.length-1)):f(u)&&h(u,0,u.length-1)),d&&"svg"===r.vtag&&(d=!1)},g=function(n,e,r,i,o,u,f,c){for(i=0,o=(r=t.Fn(n)).length;i<o;i++)if(e=r[i],1===t._n(e)){if(e["s-sr"])for(f=e["s-sn"],e.hidden=!1,u=0;u<o;u++)if(r[u]["s-hn"]!==e["s-hn"])if(c=t._n(r[u]),""!==f){if(1===c&&f===t.Qn(r[u],"slot")){e.hidden=!0;break}}else if(1===c||3===c&&""!==t.In(r[u]).trim()){e.hidden=!0;break}g(e)}},M=[],j=function(n,e,r,o,u,f,c,a,s,l){for(u=0,f=(e=t.Fn(n)).length;u<f;u++){if((r=e[u])["s-sr"]&&(o=r["s-cr"]))for(a=t.Fn(t.Hn(o)),s=r["s-sn"],c=a.length-1;c>=0;c--)(o=a[c])["s-cn"]||o["s-nr"]||o["s-hn"]===r["s-hn"]||((3===(l=t._n(o))||8===l)&&""===s||1===l&&null===t.Qn(o,"slot")&&""===s||1===l&&t.Qn(o,"slot")===s)&&(M.some(function(n){return n.lt===o})||(i=!0,o["s-sn"]=s,M.push({vt:r,lt:o})));1===t._n(r)&&j(r)}};return function(f,s,l,v,p,d,h,y,w,m,k,$){if(a=f,c=t.Bn(a),u=a["s-cr"],e=v,r=a["s-sc"],o=i=!1,b(s,l),o){for(j(l.n),h=0;h<M.length;h++)(y=M[h]).lt["s-ol"]||((w=t.Wn(""))["s-nr"]=y.lt,t.Nn(t.Hn(y.lt),y.lt["s-ol"]=w,y.lt));for(n.it=!0,h=0;h<M.length;h++){for(y=M[h],k=t.Hn(y.vt),$=t.qn(y.vt),w=y.lt["s-ol"];w=t.Un(w);)if((m=w["s-nr"])&&m&&m["s-sn"]===y.lt["s-sn"]&&k===t.Hn(m)&&(m=t.qn(m))&&m&&!m["s-nr"]){$=m;break}(!$&&k!==t.Hn(y.lt)||t.qn(y.lt)!==$)&&y.lt!==$&&(t.Rn(y.lt),t.Nn(k,y.lt,$))}n.it=!1}return i&&g(l.n),M.length=0,l}}(m,v),y["s-ld"]=[],y["s-rn"]=!0,y["s-init"]=function(){m.et.set(y,l.loaded=m.sn=!0),v.Kn(r,"appload",{detail:{namespace:t}})},function(n,t,e,r,i,o){if(t.componentOnReady=function(t,e){if(!t.nodeName.includes("-"))return e(null),!1;var r=n.B(t);if(r)if(n.et.has(t))e(t);else{var i=n.ot.get(t)||[];i.push(e),n.ot.set(t,i)}return!!r},i){for(o=i.length-1;o>=0;o--)t.componentOnReady(i[o][0],i[o][1])&&i.splice(o,1);for(o=0;o<r.length;o++)if(!e[r[o]].componentOnReady)return;for(o=0;o<i.length;o++)i[o][1](null);i.length=0}}(m,l,r,r["s-apps"],r["s-cr"]),l.initialized=!0,m},x={},T=!1;export{t as defineCustomElement,n as h};