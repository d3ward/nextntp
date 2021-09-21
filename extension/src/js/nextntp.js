var newsServer = 'https://news.google.com/';
try {
  if (typeof window.chrome.embeddedSearch == "undefined") {
  console.log("Oh , looks like window.chrome.embeddedSearch is undefined");
  window.chrome = {
    "embeddedSearch": {
      "newTabPage": {
        "isIncognito": false,
      }
    }
  }
  newsServer = 'https://chromecontentsuggestions-pa.kiwibrowser.com/testnews/?';
}
} catch (error) {
  newsServer = 'https://chromecontentsuggestions-pa.kiwibrowser.com/testnews/?';
}





function reset_page() {
  if (confirm("This will reset NTP back to default, are you sure ?")) {
    localStorage.clear();
    location.reload();
  }
}
document.getElementById("btn-res").addEventListener("click",reset_page);
document.getElementById("fb-res").addEventListener("click",reset_page);
document.getElementById("fb-eg").addEventListener("click",()=>{
  var el = document.getElementById('flt_btn');
  el.classList.toggle('open');
});
//Load Theme Color
var metaTColor = document.querySelector("meta[name=theme-color]");
var mtc;
try {
  mtc = JSON.parse(localStorage.getItem("ntp_mtc"));
  console.log(mtc.light);
  if (mtc == undefined || mtc.light == undefined) {
    mtc = {
      light: "#4ca3ef",
      dark: "#4ca3ef"
    };
    localStorage.setItem("ntp_mtc", JSON.stringify(mtc));
  }
} catch {
  mtc = {
    light: "#4ca3ef",
    dark: "#4ca3ef"
  };
  localStorage.setItem("ntp_mtc", JSON.stringify(mtc));
}
var ntp_bdy = document.body;
    //Get cached ntp_bdystyle
    if (localStorage.ntp_bdy != undefined) ntp_bdy.setAttribute("style", (localStorage.ntp_bdy).replace('"', ''));

    function f_codef_c() {
      document.getElementById("code_f").value = "";
    }

    function f_codef_e() {
      try {
        eval(document.getElementById("code_f").value);
        document.getElementById("code_f").value = "";
      } catch (error) {
        showBox("Something gone wrong ! Info _:" + error.message);
      }
    }
    document.getElementById("b_codec").addEventListener("click",f_codef_c);
    document.getElementById("b_codee").addEventListener("click",f_codef_e);

/*! Sortable 1.14.0 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function A(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function f(t,e,n){t.removeEventListener(e,n,!y&&d)}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=M(t,!0),i=k(t)[e];o;){var r=k(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height)}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","")}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=A({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var H=[],L={initializeByDefault:!0},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](A({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](A({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=A(A({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,A({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=!0},cloneNowShown:function(){et=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n})}},o))}var G=["evt"];function U(t){W(A({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t))}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=!1,wt=!1,Et=[],Dt=!1,St=!1,_t=[],Ct=!1,Tt=[],xt="undefined"!=typeof document,Ot=n,Mt=w||y?"cssFloat":"float",At=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},kt=function(){!Nt&&Z&&P(Z,"display","none")},Rt=function(){!Nt&&Z&&P(Z,"display","")};xt&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=!1},!0);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o)}}var i,r,a}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target)}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,!1))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,!1))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt)}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;yt=!1,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,!1),I(q,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt()}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,!0,Ot,!0,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt)}I(Z=q.cloneNode(!0),n.ghostClass,!1),I(Z,n.fallbackClass,!0),I(Z,n.dragClass,!0),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).draggable=!1,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,!1),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}))}),e||I(q,i.dragClass,!0),e?(wt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=!0,u&&P(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=!1;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,!0),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(!1);if(wt=!1,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(!0);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(!1);if((l=g&&a===n.target?g:l)&&(w=k(l)),!1!==Ft($,a,q,o,l,w,n,!!l))return x(),a.appendChild(q),V=a,M(),O(!0)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,!0));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,!0);if(m===q)return O(!1);if(w=k(l=m),!1!==Ft($,a,q,o,l,w,n,!1))return x(),a.insertBefore(q,m),V=a,M(),O(!0)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=!1,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?!0:Dt)n=!0;else if(1===mt?s<t+vt:o-vt<s)return-mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(!1);mt=v;var C=(gt=l).nextElementSibling,E=!1,D=Ft($,a,q,o,l,w,n,E=1===v);if(!1!==D)return 1!==D&&-1!==D||(E=1===D),Ct=!0,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),M(),O(!0)}if(a.contains(q))return O(!1)}return!1}function T(t,e){z(t,f,A({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:M},e))}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,!1),I(q,e.ghostClass,!0)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function M(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,!1),I(q,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=!0}),Tt.length=ut=dt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return N(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n)},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=!0))},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=!1)):this._hideClone()}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault()}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return!!N(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=A(A({},Bt.utils),t.utils)),K.mount(t)})},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.14.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid)}),Zt=[]}function Jt(){clearInterval(Vt)}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,!0===Wt&&(Wt=M(e,!0)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));$t=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=!1,he=!1,fe=!1;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t)})}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=M(t,!0),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Qt()),ee(e,i.options,t,n)},10),Gt=r,Ut=a)):this.options.bubbleScroll&&M(t,!0)!==O()?ee(e,this.options,M(t,!1),!1):Qt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;te=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=!1!==o(n)?(I(n,i.swapClass,!0),n):null,t&&t!==te&&I(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,!1),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){te=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag)),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ae=t},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=!1,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,!1),ce[n]===ae&&I(ue[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(!1,n),ue.forEach(function(t){P(t,"display","")}),e(),se=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),se=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t)}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute")}),e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&C(t,e)}),de=he=!0)),t.animateAll(function(){de=he=!1,n.options.animation&&ce.forEach(function(t){T(t)}),n.options.sort&&ge()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),he=!1,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=!1,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t))}),he=!0),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,!0),le.top-=e.f,le.left-=e.e)},dragOverAnimationComplete:function(){he&&(he=!1,ge())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae,originalEvt:e});else{if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae,originalEvt:e}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,!0),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g],originalEvt:e}))}else ie=ae;re=s}fe&&this.isMultiDrag&&(he=!1,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++}),a===B(ae)&&(d=!1,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=!0)}),d&&r("update"))),ce.forEach(function(t){T(t)}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,ue.length=0},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,!1),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,!0),ce.push(t))},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,!1),ce.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e})}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt});
/* Croppie */
!function(e,t){"function"==typeof define&&define.amd?define(["exports"],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?t(exports):t(e.commonJsStrict={})}(this,(function(e){"function"!=typeof Promise&&function(e){function t(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(e,t(o,this),t(r,this))}function n(e){var t=this;return null===this._state?void this._deferreds.push(e):void h((function(){var i=t._state?e.onFulfilled:e.onRejected;if(null!==i){var n;try{n=i(t._value)}catch(t){return void e.reject(t)}e.resolve(n)}else(t._state?e.resolve:e.reject)(t._value)}))}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var i=e.then;if("function"==typeof i)return void s(t(i,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(e){r.call(this,e)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)n.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,i){var n=!1;try{e((function(e){n||(n=!0,t(e))}),(function(e){n||(n=!0,i(e))}))}catch(e){if(n)return;n=!0,i(e)}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(e){l(e,1)},u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var o=this;return new i((function(i,r){n.call(o,new function(e,t,i,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=i,this.reject=n}(e,t,i,r))}))},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&u(arguments[0])?arguments[0]:arguments);return new i((function(t,i){function n(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(e){n(r,e)}),i)}e[r]=a,0==--o&&t(e)}catch(e){i(e)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)n(r,e[r])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,i){i(e)}))},i.race=function(e){return new i((function(t,i){for(var n=0,o=e.length;o>n;n++)e[n].then(t,i)}))},i._setImmediateFn=function(e){h=e},"undefined"!=typeof module&&module.exports?module.exports=i:e.Promise||(e.Promise=i)}(this),"function"!=typeof window.CustomEvent&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}e.prototype=window.Event.prototype,window.CustomEvent=e}(),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,i){for(var n=atob(this.toDataURL(t,i).split(",")[1]),o=n.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=n.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var t,i,n,o=["Webkit","Moz","ms"],r=document.createElement("div").style,a=[1,8,3,6],s=[2,7,4,5];function l(e){if(e in r)return e;for(var t=e[0].toUpperCase()+e.slice(1),i=o.length;i--;)if((e=o[i]+t)in r)return e}function h(e,t){for(var i in e=e||{},t)t[i]&&t[i].constructor&&t[i].constructor===Object?(e[i]=e[i]||{},h(e[i],t[i])):e[i]=t[i];return e}function u(e){return h({},e)}function c(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function p(e,t,i){if("string"==typeof t){var n=t;(t={})[n]=i}for(var o in t)e.style[o]=t[o]}function d(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function m(e,t){for(var i in t)e.setAttribute(i,t[i])}function f(e){return parseInt(e,10)}function v(e,t){var i=e.naturalWidth,n=e.naturalHeight,o=t||b(e);if(o&&o>=5){var r=i;i=n,n=r}return{width:i,height:n}}i=l("transform"),t=l("transformOrigin"),n=l("userSelect");var g={translate3d:{suffix:", 0px"},translate:{suffix:""}},w=function(e,t,i){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(i)};w.parse=function(e){return e.style?w.parse(e.style[i]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?w.fromMatrix(e):w.fromString(e)},w.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new w(f(t[4]),f(t[5]),parseFloat(t[0]))},w.fromString=function(e){var t=e.split(") "),i=t[0].substring(q.globals.translate.length+1).split(","),n=t.length>1?t[1].substring(6):1,o=i.length>1?i[0]:0,r=i.length>1?i[1]:0;return new w(o,r,n)},w.prototype.toString=function(){var e=g[q.globals.translate].suffix||"";return q.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var y=function(e){if(!e||!e.style[t])return this.x=0,void(this.y=0);var i=e.style[t].split(" ");this.x=parseFloat(i[0]),this.y=parseFloat(i[1])};function b(e){return e.exifdata?e.exifdata.Orientation:1}function x(e,t,i){var n=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),i){case 2:r.translate(n,0),r.scale(-1,1);break;case 3:r.translate(n,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=n,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=n,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=n,r.rotate(-90*Math.PI/180),r.translate(-n,o),r.scale(1,-1);break;case 8:e.width=o,e.height=n,r.translate(0,n),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,n,o),r.restore()}function C(){var e,t,o,r,a,s=this.options.viewport.type?"cr-vp-"+this.options.viewport.type:null;this.options.useCanvas=this.options.enableOrientation||E.call(this),this.data={},this.elements={},e=this.elements.boundary=document.createElement("div"),t=this.elements.viewport=document.createElement("div"),this.elements.img=document.createElement("img"),o=this.elements.overlay=document.createElement("div"),this.options.useCanvas?(this.elements.canvas=document.createElement("canvas"),this.elements.preview=this.elements.canvas):this.elements.preview=this.elements.img,d(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),r=this.options.boundary.width,a=this.options.boundary.height,p(e,{width:r+(isNaN(r)?"":"px"),height:a+(isNaN(a)?"":"px")}),d(t,"cr-viewport"),s&&d(t,s),p(t,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),t.setAttribute("tabindex",0),d(this.elements.preview,"cr-image"),m(this.elements.preview,{alt:"preview","aria-grabbed":"false"}),d(o,"cr-overlay"),this.element.appendChild(e),e.appendChild(this.elements.preview),e.appendChild(t),e.appendChild(o),d(this.element,"croppie-container"),this.options.customClass&&d(this.element,this.options.customClass),function(){var e,t,o,r,a,s=this,l=!1;function h(e,t){var i=s.elements.preview.getBoundingClientRect(),n=a.y+t,o=a.x+e;s.options.enforceBoundary?(r.top>i.top+t&&r.bottom<i.bottom+t&&(a.y=n),r.left>i.left+e&&r.right<i.right+e&&(a.x=o)):(a.y=n,a.x=o)}function u(e){s.elements.preview.setAttribute("aria-grabbed",e),s.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function d(i){if((void 0===i.button||0===i.button)&&(i.preventDefault(),!l)){if(l=!0,e=i.pageX,t=i.pageY,i.touches){var o=i.touches[0];e=o.pageX,t=o.pageY}u(l),a=w.parse(s.elements.preview),window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[n]="none",r=s.elements.viewport.getBoundingClientRect()}}function m(n){var r=n.pageX,l=n.pageY;if(n.touches){var u=n.touches[0];r=u.pageX,l=u.pageY}var d=r-e,m=l-t,f={};if("touchmove"===n.type&&n.touches.length>1){var v=n.touches[0],g=n.touches[1],w=Math.sqrt((v.pageX-g.pageX)*(v.pageX-g.pageX)+(v.pageY-g.pageY)*(v.pageY-g.pageY));o||(o=w/s._currentZoom);var y=w/o;return L.call(s,y),void c(s.elements.zoomer)}h(d,m),f[i]=a.toString(),p(s.elements.preview,f),R.call(s),t=l,e=r}function f(){u(l=!1),window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[n]="",B.call(s),Y.call(s),o=0}s.elements.overlay.addEventListener("mousedown",d),s.elements.viewport.addEventListener("keydown",(function(e){var t=37,l=38,u=39,c=40;if(!e.shiftKey||e.keyCode!==l&&e.keyCode!==c){if(s.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var d=function(e){switch(e){case t:return[1,0];case l:return[0,1];case u:return[-1,0];case c:return[0,-1]}}(e.keyCode);a=w.parse(s.elements.preview),document.body.style[n]="none",r=s.elements.viewport.getBoundingClientRect(),function(e){var t,r,l={};h(e[0],e[1]),l[i]=a.toString(),p(s.elements.preview,l),R.call(s),document.body.style[n]="",B.call(s),Y.call(s),o=0}(d)}}else{var m=0;m=e.keyCode===l?parseFloat(s.elements.zoomer.value,10)+parseFloat(s.elements.zoomer.step,10):parseFloat(s.elements.zoomer.value,10)-parseFloat(s.elements.zoomer.step,10),s.setZoom(m)}})),s.elements.overlay.addEventListener("touchstart",d)}.call(this),this.options.enableZoom&&function(){var e=this,t=e.elements.zoomerWrap=document.createElement("div"),i=e.elements.zoomer=document.createElement("input");function n(){_.call(e,{value:parseFloat(i.value),origin:new y(e.elements.preview),viewportRect:e.elements.viewport.getBoundingClientRect(),transform:w.parse(e.elements.preview)})}function o(t){var i,o;if("ctrl"===e.options.mouseWheelZoom&&!0!==t.ctrlKey)return 0;i=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=e._currentZoom+i*e._currentZoom,t.preventDefault(),L.call(e,o),n.call(e)}d(t,"cr-slider-wrap"),d(i,"cr-slider"),i.type="range",i.step="0.0001",i.value=1,i.style.display=e.options.showZoomer?"":"none",i.setAttribute("aria-label","zoom"),e.element.appendChild(t),t.appendChild(i),e._currentZoom=1,e.elements.zoomer.addEventListener("input",n),e.elements.zoomer.addEventListener("change",n),e.options.mouseWheelZoom&&(e.elements.boundary.addEventListener("mousewheel",o),e.elements.boundary.addEventListener("DOMMouseScroll",o))}.call(this),this.options.enableResize&&function(){var e,t,i,o,r,a,s,l=this,h=document.createElement("div"),u=!1,c=50;function m(a){if((void 0===a.button||0===a.button)&&(a.preventDefault(),!u)){var s=l.elements.overlay.getBoundingClientRect();if(u=!0,t=a.pageX,i=a.pageY,e=-1!==a.currentTarget.className.indexOf("vertical")?"v":"h",o=s.width,r=s.height,a.touches){var h=a.touches[0];t=h.pageX,i=h.pageY}window.addEventListener("mousemove",f),window.addEventListener("touchmove",f),window.addEventListener("mouseup",v),window.addEventListener("touchend",v),document.body.style[n]="none"}}function f(n){var a=n.pageX,s=n.pageY;if(n.preventDefault(),n.touches){var u=n.touches[0];a=u.pageX,s=u.pageY}var d=a-t,m=s-i,f=l.options.viewport.height+m,v=l.options.viewport.width+d;"v"===e&&f>=c&&f<=r?(p(h,{height:f+"px"}),l.options.boundary.height+=m,p(l.elements.boundary,{height:l.options.boundary.height+"px"}),l.options.viewport.height+=m,p(l.elements.viewport,{height:l.options.viewport.height+"px"})):"h"===e&&v>=c&&v<=o&&(p(h,{width:v+"px"}),l.options.boundary.width+=d,p(l.elements.boundary,{width:l.options.boundary.width+"px"}),l.options.viewport.width+=d,p(l.elements.viewport,{width:l.options.viewport.width+"px"})),R.call(l),k.call(l),B.call(l),Y.call(l),i=s,t=a}function v(){u=!1,window.removeEventListener("mousemove",f),window.removeEventListener("touchmove",f),window.removeEventListener("mouseup",v),window.removeEventListener("touchend",v),document.body.style[n]=""}d(h,"cr-resizer"),p(h,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(d(a=document.createElement("div"),"cr-resizer-vertical"),h.appendChild(a)),this.options.resizeControls.width&&(d(s=document.createElement("div"),"cr-resizer-horisontal"),h.appendChild(s)),a&&(a.addEventListener("mousedown",m),a.addEventListener("touchstart",m)),s&&(s.addEventListener("mousedown",m),s.addEventListener("touchstart",m)),this.elements.boundary.appendChild(h)}.call(this)}function E(){return this.options.enableExif&&window.EXIF}function L(e){if(this.options.enableZoom){var t=this.elements.zoomer,i=j(e,4);t.value=Math.max(t.min,Math.min(t.max,i))}}function _(e){var n=this,o=e?e.transform:w.parse(n.elements.preview),r=e?e.viewportRect:n.elements.viewport.getBoundingClientRect(),a=e?e.origin:new y(n.elements.preview);function s(){var e={};e[i]=o.toString(),e[t]=a.toString(),p(n.elements.preview,e)}if(n._currentZoom=e?e.value:n._currentZoom,o.scale=n._currentZoom,n.elements.zoomer.setAttribute("aria-valuenow",n._currentZoom),s(),n.options.enforceBoundary){var l=function(e){var t=this._currentZoom,i=e.width,n=e.height,o=this.elements.boundary.clientWidth/2,r=this.elements.boundary.clientHeight/2,a=this.elements.preview.getBoundingClientRect(),s=a.width,l=a.height,h=i/2,u=n/2,c=-1*(h/t-o),p=-1*(u/t-r),d=1/t*h,m=1/t*u;return{translate:{maxX:c,minX:c-(s*(1/t)-i*(1/t)),maxY:p,minY:p-(l*(1/t)-n*(1/t))},origin:{maxX:s*(1/t)-d,minX:d,maxY:l*(1/t)-m,minY:m}}}.call(n,r),h=l.translate,u=l.origin;o.x>=h.maxX&&(a.x=u.minX,o.x=h.maxX),o.x<=h.minX&&(a.x=u.maxX,o.x=h.minX),o.y>=h.maxY&&(a.y=u.minY,o.y=h.maxY),o.y<=h.minY&&(a.y=u.maxY,o.y=h.minY)}s(),X.call(n),Y.call(n)}function B(){var e=this._currentZoom,n=this.elements.preview.getBoundingClientRect(),o=this.elements.viewport.getBoundingClientRect(),r=w.parse(this.elements.preview.style[i]),a=new y(this.elements.preview),s=o.top-n.top+o.height/2,l=o.left-n.left+o.width/2,h={},u={};h.y=s/e,h.x=l/e,u.y=(h.y-a.y)*(1-e),u.x=(h.x-a.x)*(1-e),r.x-=u.x,r.y-=u.y;var c={};c[t]=h.x+"px "+h.y+"px",c[i]=r.toString(),p(this.elements.preview,c)}function R(){if(this.elements){var e=this.elements.boundary.getBoundingClientRect(),t=this.elements.preview.getBoundingClientRect();p(this.elements.overlay,{width:t.width+"px",height:t.height+"px",top:t.top-e.top+"px",left:t.left-e.left+"px"})}}y.prototype.toString=function(){return this.x+"px "+this.y+"px"};var Z,z,M,I,X=(Z=R,z=500,function(){var e=this,t=arguments,i=M;clearTimeout(I),I=setTimeout((function(){I=null,Z.apply(e,t)}),z),i&&Z.apply(e,t)});function Y(){var e,t=this.get();F.call(this)&&(this.options.update.call(this,t),this.$&&"undefined"==typeof Prototype?this.$(this.element).trigger("update.croppie",t):(window.CustomEvent?e=new CustomEvent("update",{detail:t}):(e=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,t),this.element.dispatchEvent(e)))}function F(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function W(){var e,n={},o=this.elements.preview,r=new w(0,0,1),a=new y;F.call(this)&&!this.data.bound&&(this.data.bound=!0,n[i]=r.toString(),n[t]=a.toString(),n.opacity=1,p(o,n),e=this.elements.preview.getBoundingClientRect(),this._originalImageWidth=e.width,this._originalImageHeight=e.height,this.data.orientation=b(this.elements.img),this.options.enableZoom?k.call(this,!0):this._currentZoom=1,r.scale=this._currentZoom,n[i]=r.toString(),p(o,n),this.data.points.length?function(e){if(4!==e.length)throw"Croppie - Invalid number of points supplied: "+e;var n=e[2]-e[0],o=this.elements.viewport.getBoundingClientRect(),r=this.elements.boundary.getBoundingClientRect(),a_left=o.left-r.left,a_top=o.top-r.top,s=o.width/n,l=e[1],h=e[0],u=-1*e[1]+a_top,c=-1*e[0]+a_left,d={};d[t]=h+"px "+l+"px",d[i]=new w(c,u,s).toString(),p(this.elements.preview,d),L.call(this,s),this._currentZoom=s}.call(this,this.data.points):function(){var e=this.elements.preview.getBoundingClientRect(),t=this.elements.viewport.getBoundingClientRect(),n=this.elements.boundary.getBoundingClientRect(),o=t.left-n.left,r=t.top-n.top,a=o-(e.width-t.width)/2,s=r-(e.height-t.height)/2,l=new w(a,s,this._currentZoom);p(this.elements.preview,i,l.toString())}.call(this),B.call(this),R.call(this))}function k(e){var t,i,n,o,r=0,a=this.options.maxZoom||1.5,s=this.elements.zoomer,l=parseFloat(s.value),h=this.elements.boundary.getBoundingClientRect(),u=v(this.elements.img,this.data.orientation),p=this.elements.viewport.getBoundingClientRect();this.options.enforceBoundary&&(n=p.width/u.width,o=p.height/u.height,r=Math.max(n,o)),r>=a&&(a=r+1),s.min=j(r,4),s.max=j(a,4),!e&&(l<s.min||l>s.max)?L.call(this,l<s.min?s.min:s.max):e&&(i=Math.max(h.width/u.width,h.height/u.height),t=null!==this.data.boundZoom?this.data.boundZoom:i,L.call(this,t)),c(s)}function A(e){var t=e.points,i=f(t[0]),n=f(t[1]),o=f(t[2])-i,r=f(t[3])-n,a=e.circle,s=document.createElement("canvas"),l=s.getContext("2d"),h=e.outputWidth||o,u=e.outputHeight||r;return e.outputWidth&&e.outputHeight,s.width=h,s.height=u,e.backgroundColor&&(l.fillStyle=e.backgroundColor,l.fillRect(0,0,h,u)),!1!==this.options.enforceBoundary&&(o=Math.min(o,this._originalImageWidth),r=Math.min(r,this._originalImageHeight)),l.drawImage(this.elements.preview,i,n,o,r,0,0,h,u),a&&(l.fillStyle="#fff",l.globalCompositeOperation="destination-in",l.beginPath(),l.arc(s.width/2,s.height/2,s.width/2,0,2*Math.PI,!0),l.closePath(),l.fill()),s}function O(e,t){var i,n,o,r,a=this,s=[],l=null,h=E.call(a);if("string"==typeof e)i=e,e={};else if(Array.isArray(e))s=e.slice();else{if(void 0===e&&a.data.url)return W.call(a),Y.call(a),null;i=e.url,s=e.points||[],l=void 0===e.zoom?null:e.zoom}return a.data.bound=!1,a.data.url=i||a.data.url,a.data.boundZoom=l,(n=i,o=h,r=new Image,r.style.opacity=0,new Promise((function(e){function t(){r.style.opacity=1,setTimeout((function(){e(r)}),1)}r.removeAttribute("crossOrigin"),n.match(/^https?:\/\/|^\/\//)&&r.setAttribute("crossOrigin","anonymous"),r.onload=function(){o?EXIF.getData(r,(function(){t()})):t()},r.src=n}))).then((function(i){if(function(e){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,(function(t){e.classList.add(t)})),this.elements.img.parentNode.replaceChild(e,this.elements.img),this.elements.preview=e),this.elements.img=e}.call(a,i),s.length)a.options.relative&&(s=[s[0]*i.naturalWidth/100,s[1]*i.naturalHeight/100,s[2]*i.naturalWidth/100,s[3]*i.naturalHeight/100]);else{var n,o,r=v(i),l=a.elements.viewport.getBoundingClientRect(),h=l.width/l.height;r.width/r.height>h?n=(o=r.height)*h:(n=r.width,o=r.height/h);var u=(r.width-n)/2,c=(r.height-o)/2,p=u+n,d=c+o;a.data.points=[u,c,p,d]}a.data.points=s.map((function(e){return parseFloat(e)})),a.options.useCanvas&&function(e){var t=this.elements.canvas,i=this.elements.img,n=t.getContext("2d"),o=E.call(this);e=this.options.enableOrientation&&e,n.clearRect(0,0,t.width,t.height),t.width=i.width,t.height=i.height,o&&!e?x(t,i,f(b(i)||0)):e&&x(t,i,e)}.call(a,e.orientation||1),W.call(a),Y.call(a),t&&t()})).catch((function(e){console.error("Croppie:"+e)}))}function j(e,t){return parseFloat(e).toFixed(t||0)}function H(){var e=this.elements.preview.getBoundingClientRect(),t=this.elements.viewport.getBoundingClientRect(),i=t.left-e.left,n=t.top-e.top,o=(t.width-this.elements.viewport.offsetWidth)/2,r=(t.height-this.elements.viewport.offsetHeight)/2,a=i+this.elements.viewport.offsetWidth+o,s=n+this.elements.viewport.offsetHeight+r,l=this._currentZoom;(l===1/0||isNaN(l))&&(l=1);var h=this.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(h,i/l),n=Math.max(h,n/l),a=Math.max(h,a/l),s=Math.max(h,s/l),{points:[j(i),j(n),j(a),j(s)],zoom:l,orientation:this.data.orientation}}var N={type:"canvas",format:"png",quality:1},S=["jpeg","webp","png"];function P(e){var t=this,i=H.call(t),n=h(u(N),u(e)),o="string"==typeof e?e:n.type||"base64",r=n.size||"viewport",a=n.format,s=n.quality,l=n.backgroundColor,c="boolean"==typeof n.circle?n.circle:"circle"===t.options.viewport.type,m=t.elements.viewport.getBoundingClientRect(),f=m.width/m.height;return"viewport"===r?(i.outputWidth=m.width,i.outputHeight=m.height):"object"==typeof r&&(r.width&&r.height?(i.outputWidth=r.width,i.outputHeight=r.height):r.width?(i.outputWidth=r.width,i.outputHeight=r.width/f):r.height&&(i.outputWidth=r.height*f,i.outputHeight=r.height)),S.indexOf(a)>-1&&(i.format="image/"+a,i.quality=s),i.circle=c,i.url=t.data.url,i.backgroundColor=l,new Promise((function(e,n){switch(o.toLowerCase()){case"rawcanvas":e(A.call(t,i));break;case"canvas":case"base64":e(function(e){return A.call(this,e).toDataURL(e.format,e.quality)}.call(t,i));break;case"blob":(function(e){var t=this;return new Promise((function(i,n){A.call(t,e).toBlob((function(e){i(e)}),e.format,e.quality)}))}).call(t,i).then(e);break;default:e(function(e){var t=e.points,i=document.createElement("div"),n=document.createElement("img"),o=t[2]-t[0],r=t[3]-t[1];return d(i,"croppie-result"),i.appendChild(n),p(n,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),n.src=e.url,p(i,{width:o+"px",height:r+"px"}),i}.call(t,i))}}))}function D(e){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var t,i,n,o,r,l=this.elements.canvas;this.data.orientation=(t=this.data.orientation,i=e,o=(n=a.indexOf(t)>-1?a:s).indexOf(t),r=i/90%n.length,n[(n.length+o+r%n.length)%n.length]),x(l,this.elements.img,this.data.orientation),k.call(this),_.call(this),copy=null}if(window.jQuery){var T=window.jQuery;T.fn.croppie=function(e){if("string"==typeof e){var t=Array.prototype.slice.call(arguments,1),i=T(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,t):"bind"===e?i.bind.apply(i,t):this.each((function(){var i=T(this).data("croppie");if(i){var n=i[e];if(!T.isFunction(n))throw"Croppie "+e+" method not found";n.apply(i,t),"destroy"===e&&T(this).removeData("croppie")}}))}return this.each((function(){var t=new q(this,e);t.$=T,T(this).data("croppie",t)}))}}function q(e,t){if(e.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=e,this.options=h(u(q.defaults),t),"img"===this.element.tagName.toLowerCase()){var i=this.element;d(i,"cr-original-image"),m(i,{"aria-hidden":"true",alt:""});var n=document.createElement("div");this.element.parentNode.appendChild(n),n.appendChild(i),this.element=n,this.options.url=this.options.url||i.src}if(C.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,O.call(this,o)}}q.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},q.globals={translate:"translate3d"},h(q.prototype,{bind:function(e,t){return O.call(this,e,t)},get:function(){var e=H.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return P.call(this,e)},refresh:function(){return function(){W.call(this)}.call(this)},setZoom:function(e){L.call(this,e),c(this.elements.zoomer)},rotate:function(e){D.call(this,e)},destroy:function(){return function(){var e,t;this.element.removeChild(this.elements.boundary),t="croppie-container",(e=this.element).classList?e.classList.remove(t):e.className=e.className.replace(t,""),this.options.enableZoom&&this.element.removeChild(this.elements.zoomerWrap),delete this.elements}.call(this)}}),e.Croppie=window.Croppie=q}));

/*!
 * vanilla-picker v2.10.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2019 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Picker=t()}(this,function(){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var e=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(e){n=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};String.prototype.startsWith=String.prototype.startsWith||function(e){return 0===this.indexOf(e)},String.prototype.padStart=String.prototype.padStart||function(e,t){for(var r=this;r.length<e;)r=t+r;return r};var n={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function a(e,t){var r=1<arguments.length&&void 0!==t?t:1;return(0<r?e.toFixed(r).replace(/0+$/,"").replace(/\.$/,""):e.toString())||"0"}var s=(e(g,[{key:"printRGB",value:function(e){var t=(e?this.rgba:this.rgba.slice(0,3)).map(function(e,t){return a(e,3===t?3:0)});return e?"rgba("+t+")":"rgb("+t+")"}},{key:"printHSL",value:function(e){var r=[360,100,100,1],i=["","%","%",""],t=(e?this.hsla:this.hsla.slice(0,3)).map(function(e,t){return a(e*r[t],3===t?3:1)+i[t]});return e?"hsla("+t+")":"hsl("+t+")"}},{key:"printHex",value:function(e){var t=this.hex;return e?t:t.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=g.hslToRgb(this._hsla)},set:function(e){3===e.length&&(e[3]=1),this._rgba=e,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=g.rgbToHsl(this._rgba)},set:function(e){3===e.length&&(e[3]=1),this._hsla=e,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){return"#"+this.rgba.map(function(e,t){return t<3?e.toString(16):Math.round(255*e).toString(16)}).map(function(e){return e.padStart(2,"0")}).join("")},set:function(e){this.rgba=g.hexToRgb(e)}}],[{key:"hexToRgb",value:function(e){var t=(e.startsWith("#")?e.slice(1):e).replace(/^(\w{3})$/,"$1F").replace(/^(\w)(\w)(\w)(\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/,"$1FF");if(!t.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+e);var r=t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(e){return parseInt(e,16)});return r[3]=r[3]/255,r}},{key:"nameToRgb",value:function(e){var t=e.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),r=n[t];return void 0===r?r:g.hexToRgb(r.replace(/\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(e){var t=h(e,4),r=t[0],i=t[1],n=t[2],o=t[3];r/=255,i/=255,n/=255;var a=Math.max(r,i,n),s=Math.min(r,i,n),p=void 0,l=void 0,c=(a+s)/2;if(a===s)p=l=0;else{var u=a-s;switch(l=.5<c?u/(2-a-s):u/(a+s),a){case r:p=(i-n)/u+(i<n?6:0);break;case i:p=(n-r)/u+2;break;case n:p=(r-i)/u+4}p/=6}return[p,l,c,o]}},{key:"hslToRgb",value:function(e){var t=h(e,4),r=t[0],i=t[1],n=t[2],o=t[3],a=void 0,s=void 0,p=void 0;if(0===i)a=s=p=n;else{var l=function(e,t,r){return r<0&&(r+=1),1<r&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e},c=n<.5?n*(1+i):n+i-n*i,u=2*n-c;a=l(u,c,r+1/3),s=l(u,c,r),p=l(u,c,r-1/3)}var d=[255*a,255*s,255*p].map(Math.round);return d[3]=o,d}}]),g);function g(e,t,r,i){o(this,g);var f=this;if(void 0===e);else if(Array.isArray(e))this.rgba=e;else if(void 0===r){var n=e&&""+e;n&&function(e){if(e.startsWith("hsl")){var t=e.match(/([\-\d\.e]+)/g).map(Number),r=h(t,4),i=r[0],n=r[1],o=r[2],a=r[3];void 0===a&&(a=1),i/=360,n/=100,o/=100,f.hsla=[i,n,o,a]}else if(e.startsWith("rgb")){var s=e.match(/([\-\d\.e]+)/g).map(Number),p=h(s,4),l=p[0],c=p[1],u=p[2],d=p[3];void 0===d&&(d=1),f.rgba=[l,c,u,d]}else e.startsWith("#")?f.rgba=g.hexToRgb(e):f.rgba=g.nameToRgb(e)||g.hexToRgb(e)}(n.toLowerCase())}else this.rgba=[e,t,r,void 0===i?1:i]}var t=(e(p,[{key:"add",value:function(e,t,r){e.addEventListener(t,r,!1),this._events.push({target:e,type:t,handler:r})}},{key:"remove",value:function(r,i,n){this._events=this._events.filter(function(e){var t=!0;return r&&r!==e.target&&(t=!1),i&&i!==e.type&&(t=!1),n&&n!==e.handler&&(t=!1),t&&p._doRemove(e.target,e.type,e.handler),!t})}},{key:"destroy",value:function(){this._events.forEach(function(e){return p._doRemove(e.target,e.type,e.handler)}),this._events=[]}}],[{key:"_doRemove",value:function(e,t,r){e.removeEventListener(t,r,!1)}}]),p);function p(){o(this,p),this._events=[]}function l(e,c,u){var d=!1;function f(e,t,r){return Math.max(t,Math.min(e,r))}function r(e,t,r){if(r&&(d=!0),d){e.preventDefault();var i=c.getBoundingClientRect(),n=i.width,o=i.height,a=t.clientX,s=t.clientY,p=f(a-i.left,0,n),l=f(s-i.top,0,o);u(p/n,l/o)}}function t(e,t){1===(void 0===e.buttons?e.which:e.buttons)?r(e,e,t):d=!1}function i(e,t){1===e.touches.length?r(e,e.touches[0],t):d=!1}e.add(c,"mousedown",function(e){t(e,!0)}),e.add(c,"touchstart",function(e){i(e,!0)}),e.add(window,"mousemove",t),e.add(c,"touchmove",i),e.add(window,"mouseup",function(e){d=!1}),e.add(c,"touchend",function(e){d=!1}),e.add(c,"touchcancel",function(e){d=!1})}var c="keydown",u="mousedown",d="focusin";function v(e,t){return(t||document).querySelector(e)}function f(e){e.preventDefault(),e.stopPropagation()}function b(e,t,r,i,n){e.add(t,c,function(e){0<=r.indexOf(e.key)&&(n&&f(e),i(e))})}var r=document.createElement("style");function m(e){o(this,m),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new t,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(e)}return r.textContent=".picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.layout_default.picker_wrapper{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row wrap;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:stretch;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:1em;border-radius:5px;}.layout_default.picker_wrapper::before{content:'';display:block;width:100%;height:0;-webkit-box-ordinal-group:2;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%;}.layout_default .picker_sl{-webkit-box-flex:1;flex:1 1 auto}.layout_default .picker_sl::before{content:'';display:block;padding-bottom:100%}.layout_default .picker_editor{-webkit-box-ordinal-group:2;order:1;width:100%}.layout_default .picker_editor input{width:100%;height: 35px;text-align: center;border-radius: 5px;}.layout_default .picker_sample{-webkit-box-ordinal-group:2;order:1;-webkit-box-flex:1;flex:1 1 auto;    width: 100%;height: 35px;}.layout_default .picker_done,.layout_default .picker_cancel{-webkit-box-ordinal-group:2;order:1}.picker_wrapper{box-sizing:border-box;margin:auto;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;outline:none}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color: #000;width: 80px;height: 35px;padding: 9px;border-radius: 8px;color: #efefef;}.picker_wrapper button:active{background-image:-webkit-gradient(linear, left bottom, left top, from(transparent), to(gainsboro));background-image:-webkit-linear-gradient(bottom, transparent, gainsboro);background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:white}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid white;border-radius:100%;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:-webkit-gradient(linear, left top, right top, from(red), color-stop(yellow), color-stop(lime), color-stop(cyan), color-stop(blue), color-stop(magenta), to(red));background-image:-webkit-linear-gradient(left, red, yellow, lime, cyan, blue, magenta, red);background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);}.picker_sl{position:relative;background-image:-webkit-gradient(linear, left top, left bottom, from(white), color-stop(50%, rgba(255,255,255,0))),-webkit-gradient(linear, left bottom, left top, from(black), color-stop(50%, rgba(0,0,0,0))),-webkit-gradient(linear, left top, right top, from(gray), to(rgba(128,128,128,0)));background-image:-webkit-linear-gradient(top, white, rgba(255,255,255,0) 50%),-webkit-linear-gradient(bottom, black, rgba(0,0,0,0) 50%),-webkit-linear-gradient(left, gray, rgba(128,128,128,0));background-image:linear-gradient(180deg, white, rgba(255,255,255,0) 50%),linear-gradient(0deg, black, rgba(0,0,0,0) 50%),linear-gradient(90deg, gray, rgba(128,128,128,0))}.picker_alpha,.picker_sample{position:relative;background:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\") left top/contain white;}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_sample::before{content:'';position:absolute;display:block;width:100%;height:100%;background:currentColor;border-radius:5px;}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,0.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:\"\";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}",document.documentElement.firstElementChild.appendChild(r),e(m,[{key:"setOptions",value:function(e){var t=this;if(e){var r=this.settings;if(e instanceof HTMLElement)r.parent=e;else{r.parent&&e.parent&&r.parent!==e.parent&&(this._events.remove(r.parent),this._popupInited=!1),function(e,t,r){for(var i in e)r&&0<=r.indexOf(i)||(t[i]=e[i])}(e,r),e.onChange&&(this.onChange=e.onChange),e.onDone&&(this.onDone=e.onDone),e.onOpen&&(this.onOpen=e.onOpen),e.onClose&&(this.onClose=e.onClose);var i=e.color||e.colour;i&&this._setColor(i)}var n=r.parent;if(n&&r.popup&&!this._popupInited){var o=function(e){return t.openHandler(e)};this._events.add(n,"click",o),b(this._events,n,[" ","Spacebar","Enter"],o),this._popupInited=!0}else e.parent&&!r.popup&&this.show()}}},{key:"openHandler",value:function(e){if(this.show()){e&&e.preventDefault(),this.settings.parent.style.pointerEvents="none";var t=e&&e.type===c?this._domEdit:this.domElement;setTimeout(function(){return t.focus()},100),this.onOpen&&this.onOpen(this.colour)}}},{key:"closeHandler",value:function(e){var t=e&&e.type,r=!1;if(e)if(t===u||t===d){var i=(this.__containedEvent||0)+100;e.timeStamp>i&&(r=!0)}else f(e),r=!0;else r=!0;r&&this.hide()&&(this.settings.parent.style.pointerEvents="",t!==u&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(e,t){this.closeHandler(),this.setOptions(e),t&&this.openHandler()}},{key:"setColor",value:function(e,t){this._setColor(e,{silent:t})}},{key:"_setColor",value:function(e,t){if("string"==typeof e&&(e=e.trim()),e){t=t||{};var r=void 0;try{r=new s(e)}catch(e){if(t.failSilently)return;throw e}if(!this.settings.alpha){var i=r.hsla;i[3]=1,r.hsla=i}this.colour=this.color=r,this._setHSLA(null,null,null,null,t)}}},{key:"setColour",value:function(e,t){this.setColor(e,t)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var e=this._toggleDOM(!0);return this._setPosition(),e}var t=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_sample"></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_cancel"><button onclick="f_close_cl()">Cancel</button></div><div class="picker_done"><button>Ok</button></div></div>');return this.domElement=t,this._domH=v(".picker_hue",t),this._domSL=v(".picker_sl",t),this._domA=v(".picker_alpha",t),this._domEdit=v(".picker_editor input",t),this._domSample=v(".picker_sample",t),this._domOkay=v(".picker_done button",t),this._domCancel=v(".picker_cancel button",t),t.classList.add("layout_"+this.settings.layout),this.settings.alpha||t.classList.add("no_alpha"),this.settings.editor||t.classList.add("no_editor"),this.settings.cancelButton||t.classList.add("no_cancel"),this._ifPopup(function(){return t.classList.add("popup")}),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var r=this,i=this,n=this.domElement,o=this._events;function a(e,t,r){o.add(e,t,r)}a(n,"click",function(e){return e.preventDefault()}),l(o,this._domH,function(e,t){return i._setHSLA(e)}),l(o,this._domSL,function(e,t){return i._setHSLA(null,e,1-t)}),this.settings.alpha&&l(o,this._domA,function(e,t){return i._setHSLA(null,null,null,1-t)});var e=this._domEdit;function t(e){r._ifPopup(function(){return r.closeHandler(e)}),r.onDone&&r.onDone(r.colour)}a(e,"input",function(e){i._setColor(this.value,{fromEditor:!0,failSilently:!0})}),a(e,"focus",function(e){this.selectionStart===this.selectionEnd&&this.select()}),this._ifPopup(function(){function e(e){return r.closeHandler(e)}function t(e){r.__containedEvent=e.timeStamp}a(window,u,e),a(window,d,e),b(o,n,["Esc","Escape"],e),a(n,u,t),a(n,d,t),a(r._domCancel,"click",e)}),a(this._domOkay,"click",t),b(o,n,["Enter"],t)}},{key:"_setPosition",value:function(){var r=this.settings.parent,i=this.domElement;r!==i.parentNode&&r.appendChild(i),this._ifPopup(function(e){"static"===getComputedStyle(r).position&&(r.style.position="relative");var t=!0===e?"popup_right":"popup_"+e;["popup_top","popup_bottom","popup_left","popup_right"].forEach(function(e){e===t?i.classList.add(e):i.classList.remove(e)}),i.classList.add(t)})}},{key:"_setHSLA",value:function(e,t,r,i,n){n=n||{};var o=this.colour,a=o.hsla;[e,t,r,i].forEach(function(e,t){!e&&0!==e||(a[t]=e)}),o.hsla=a,this._updateUI(n),this.onChange&&!n.silent&&this.onChange(o)}},{key:"_updateUI",value:function(e){if(this.domElement){e=e||{};var t=this.colour,r=t.hsla,i="hsl("+360*r[0]+", 100%, 50%)",n=t.hslString,o=t.hslaString,a=this._domH,s=this._domSL,p=this._domA,l=v(".picker_selector",a),c=v(".picker_selector",s),u=v(".picker_selector",p);k(0,l,r[0]),this._domSL.style.backgroundColor=this._domH.style.color=i,k(0,c,r[1]),_(0,c,1-r[2]),s.style.color=n,_(0,u,1-r[3]);var d=n,f=d.replace("hsl","hsla").replace(")",", 0)"),h="linear-gradient("+[d,f]+")";if(this._domA.style.backgroundImage=h+", url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Cpath d='M1,0H0V1H2V2H1' fill='lightgrey'/%3E%3C/svg%3E\")",!e.fromEditor){var g=this.settings.editorFormat,b=this.settings.alpha,m=void 0;switch(g){case"rgb":m=t.printRGB(b);break;case"hsl":m=t.printHSL(b);break;default:m=t.printHex(b)}this._domEdit.value=m}this._domSample.style.color=o}function k(e,t,r){t.style.left=100*r+"%"}function _(e,t,r){t.style.top=100*r+"%"}}},{key:"_ifPopup",value:function(e,t){this.settings.parent&&this.settings.popup?e&&e(this.settings.popup):t&&t()}},{key:"_toggleDOM",value:function(e){var t=this.domElement;if(!t)return!1;var r=e?"":"none",i=t.style.display!==r;return i&&(t.style.display=r),i}}],[{key:"StyleElement",get:function(){return r}}]),m});

/* News Data Fix */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.timeago=e()}(this,function(){"use strict";var t="second_minute_hour_day_week_month_year".split("_"),e="秒_分钟_小时_天_周_月_年".split("_"),n=[60,60,24,7,365/7/12,12],r={en:function(e,n){if(0===n)return["just now","right now"];var r=t[parseInt(n/2)];return e>1&&(r+="s"),[e+" "+r+" ago","in "+e+" "+r]},zh_CN:function(t,n){if(0===n)return["刚刚","片刻后"];var r=e[parseInt(n/2)];return[t+" "+r+"前",t+" "+r+"后"]}},a=function(t){return parseInt(t)},i=function(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(a(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t))},o=function(t,e,i){e=r[e]?e:r[i]?i:"en";for(var o=0,u=t<0?1:0,c=t=Math.abs(t);t>=n[o]&&o<n.length;o++)t/=n[o];return(t=a(t))>(0===(o*=2)?9:1)&&(o+=1),r[e](t,o,c)[u].replace("%s",t)},u=function(t,e){return((e=e?i(e):new Date)-i(t))/1e3},c=function(t,e){return t.getAttribute?t.getAttribute(e):t.attr?t.attr(e):void 0},f=function(t){return c(t,"data-timeago")||c(t,"datetime")},d=[],l=function(t){t&&(clearTimeout(t),delete d[t])},s=function(t){if(t)l(c(t,"data-tid"));else for(var e in d)l(e)},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value" in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}
return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.nowDate=e,this.defaultLocale=n||"en"}
return h(t,[{key:"setLocale",value:function(t){this.defaultLocale=t}},{key:"doRender",value:function(t,e,r){var a=this,i=u(e,this.nowDate);t.innerHTML=o(i,r,this.defaultLocale);var c=function(t,e){var n=setTimeout(function(){l(n),t()},e);return d[n]=0,n}(function(){a.doRender(t,e,r)},Math.min(1e3*function(t){for(var e=1,r=0,a=Math.abs(t);t>=n[r]&&r<n.length;r++)t/=n[r],e*=n[r];return a=(a%=e)?e-a:e,Math.ceil(a)}(i),2147483647));!function(t,e){t.setAttribute?t.setAttribute("data-tid",e):t.attr&&t.attr("data-tid",e)}(t,c)}},{key:"render",value:function(t,e){void 0===t.length&&(t=[t]);for(var n=void 0,r=0,a=t.length;r<a;r++)n=t[r],s(n),this.doRender(n,f(n),e)}},{key:"format",value:function(t,e){return o(u(t,this.nowDate),e,this.defaultLocale)}}]),t}(),v=function(t,e){return new p(t,e)};return v.register=function(t,e){r[t]=e},v.cancel=s,v})
//Functions for localstorage store and get
function localStore(key, obj) {return window.localStorage.setItem(key, JSON.stringify(obj));}
function localGet(key) {return JSON.parse(window.localStorage.getItem(key));}
//Function to wait
function wait(ms) {let start = new Date().getTime();let end = start;while (end < start + ms) {end = new Date().getTime();}}
//Function for innerHTML (faster)
function customInner(oldDiv, html) {var newDiv = oldDiv.cloneNode(false);newDiv.innerHTML = html;oldDiv.parentNode.replaceChild(newDiv, oldDiv);}
//Alert component
function alert(options) {
  var t = this;
  t.count = 0;
  t.timeout = (options.timeout) ? options.timeout : 3000;
  t.autoClose = (options.hasOwnProperty('autoClose')) ? options.autoClose : true;
  const close = '<svg class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
  t.container = document.querySelector("#nt1");
  t.close = function ($el) {
    $el.classList.add("animate-out");
    setTimeout(() => {
      $el.remove();
      t.count--;
    }, 300);
  }
  t.setCloseOnClick = function ($el) {
    $el.addEventListener("click", function () {
      t.close($el);
    });
  }
  t.setAutocloseTimeout = function ($el, timeout) {
    setTimeout(function () {
      t.close($el);
    }, timeout);
  }
  t.createItem = function (message, color) {
    var item = document.createElement("div");
    item.classList.add("notify-item");
    item.classList.add(color);
    var span = document.createElement("span");
    span.textContent = message;
    item.appendChild(span);
    t.count++;
    return item;
  }
  t.error = function (txt) {
    t.show(t.createItem(txt, "error"));
  }
  t.warn = function (txt) {
    t.show(t.createItem(txt, "warn"));
  }
  t.info = function (txt) {
    var l = t.createItem(txt, "info");
    t.show(l);
  }
  t.success = function (txt) {
    var l = t.createItem(txt, "success");
    t.show(l);
  }
  t.show = function (l) {
    console.log(t.autoClose);
    if (t.autoClose)
      t.setAutocloseTimeout(l, t.timeout);
    t.setCloseOnClick(l);
    t.container.append(l);
  }
}
//Function that invert text color based on background-color
function adaptColor(selector, color) {
  color = color.substring(0, 7);
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  r = parseInt(result[1], 16);
  g = parseInt(result[2], 16);
  b = parseInt(result[3], 16);
  var hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  if (hsp > 127.5) {
    document.getElementById(selector).classList.add('dark_c');
    document.getElementById(selector).classList.remove('light_c');
  } else {
    document.getElementById(selector).classList.add('light_c');
    document.getElementById(selector).classList.remove('dark_c');
  }
}
function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
}
function pagesRoute() {
  const link = Array.from(document.querySelectorAll('[topage]'));
  if (link) {
    const navigate = (id) => {
      var activePage = document.querySelector("section.page-active");
      var activeLink = document.querySelector("[topage].active");
      if (activePage)
        activePage.classList.remove("page-active");
      if (activeLink)
        activeLink.classList.remove("active");
      var nextPage = document.querySelector(id);
      var nextLink = document.querySelector("[topage='" + id + "']");
      if (nextPage)
        nextPage.classList.add("page-active");
      if (nextLink)
        nextLink.classList.add("active");
    }
    link.forEach(function (page) {
      var id = page.getAttribute("topage");
      page.addEventListener('click', function () {
        navigate(id)
      });
    })
  }
}
//Function to preconnect to an url
function preconnectTo(url) {
  var hint = document.createElement("link");
  hint.rel = "preconnect";
  hint.href = url;
  document.head.appendChild(hint);
}
 //Function to get rootDomain
 function get_root_domain(url) {
  return url.replace('http://', '').replace('https://', '').replace('www.', '').replace(':', '').split(/[/?#]/)[0];
}
function modal(id){
  var t = this;
  t.m = document.querySelector( (id)?id:'.modal');
  if(t.m){
    t.bdy = document.body.classList;
    t.targets = document.querySelectorAll('[data-toggle="'+t.m.id+'"]');
    t.closebtns = t.m.querySelectorAll('.close-modal');
  }
  t.toggle = ()=>{
    t.m.toggle("_show-modal");
    t.bdy.toggle('_overflowhidden');
  }
  t.show = function(){
    t.bdy.add('_overflowhidden');
    t.m.classList.add('_show-modal');
  }
  t.hide = function(){
    t.m.classList.remove('_show-modal');
    t.bdy.remove('_overflowhidden');
  }
  t.listeners= function(){
    t.targets.forEach(el=> {
      el.addEventListener('click', function (e) {
          t.show();
      });
    });
    t.closebtns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        t.hide();
      });
    });
  }
  if(t.m)
    t.listeners();
}
  const safeData = [ "ntp_sett","ntp_sb","newsLe","ntp_wdg","theme","ntp_bdy","ntp_mtc"];
  const safeDataT = [ "theme","ntp_bdy","ntp_mtc"];
  //Function to export NTP settings and widgets
  document.getElementById('export-data').onclick = function () {
    //Create a copy of localstorage
    var dataStr={};
    Object.keys(localStorage).forEach(key => {
      if(safeData.includes(key)){
        console.log(key);
        dataStr[key]=localStorage.getItem(key);
      }
    });
    var dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataStr));
    var date = new Date();
    var exportFileDefaultName = 'ntpB_' + date.getUTCFullYear() + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate() + '_' +
      date.getHours() + '_' + date.getMinutes() + '.json';
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  //Function to export NTP settings and widgets
  document.getElementById('export-theme').onclick = function () {
    //Create a copy of localstorage
    var dataStr={};
    Object.keys(localStorage).forEach(key => {
      if(safeDataT.includes(key)){
        console.log(key);
        dataStr[key]=localStorage.getItem(key);
      }
    });
    var dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataStr));
    var date = new Date();
    var exportFileDefaultName = 'nextntp_theme' + date.getUTCFullYear() + '' + (date.getUTCMonth() + 1) + '' + date.getUTCDate() + '_' +
      date.getHours() + '_' + date.getMinutes() + '.json';
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }
  //Function to import NTP settings and widgets
  document.getElementById('import-data').onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
      var str = this.result;
      console.log(localStorage);
      localStorage.clear();
      var data = JSON.parse(str);
      Object.keys(data).forEach(key => {
        if(safeData.includes(key))
          console.log(key);
        else
          delete data[key];
      });

      Object.assign(localStorage,data)
      console.log(localStorage);
      localStorage.ntp_ver = ntp_ver;
      location.reload();
    };
    reader.readAsText(file);
  };
    //Function to import NTP Theme
    document.getElementById('import-theme').onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        var str = this.result;
        var data = JSON.parse(str);
        Object.keys(data).forEach(key => {
          if(safeDataT.includes(key))
            console.log(key);
          else
            delete data[key];
        });
        console.log(data);
        Object.assign(localStorage,data);
        console.log(localStorage);
        localStorage.ntp_ver = ntp_ver;
        location.reload();
      };
      reader.readAsText(file);
      
    };

  //Check if user is on touch enabled device
  function is_td() {
    try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
  }
//Theme for settings
function theme() {
  var toggles = document.getElementsByClassName("theme-toggle");
  if (window.CSS && CSS.supports("color", "var(--bg)") && toggles) {
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ?
      "dark" : "light");
    document.getElementById("sett_mtc").style.background = mtc.light;  
    document.getElementById("sett_mtc1").style.background = mtc.dark;
    if (storedTheme)
      document.body.setAttribute('data-theme', storedTheme)
    if(storedTheme === "light")
      metaTColor.setAttribute("content", mtc.light);
    else
      metaTColor.setAttribute("content", mtc.dark);
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].onclick = function () {
        var currentTheme = document.body.getAttribute("data-theme");
        var targetTheme = "light";
        if (currentTheme === "light"){
          targetTheme = "dark";
          metaTColor.setAttribute("content", mtc.dark);
        }else{
          metaTColor.setAttribute("content", mtc.light);
        }
          
        document.body.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
      };
    }
  }
}
  const isTD= is_td();
  var mLstnr = ['touchmove','touchend','touchstart'];
  if(!isTD){
      mLstnr=['mousemove','mouseup','mousedown'];
  }
var wcentp;
try{
  wcentp = window.chrome.embeddedSearch.newTabPage.isIncognito;
}catch(error){wcentp = false;}

if (wcentp) {
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#000';
  document.getElementById('incognito').style.display = 'inline';
  document.getElementById('ntp_cnt').style.display = 'none';
  var inc = false;
} else {
  var ntp_ver = "3.7.0";
  var orderListChanged = 0;
  document.getElementById("sett_mtc").style.background = localStorage.ntp_mtc;
  function save_ntpbdy() {
    try {
      localStorage.ntp_bdy = ntp_bdy.getAttribute("style");
    } catch (err) {
      ntoast.error("Something gone wrong ! Info _:" + err.message);
    }
  }
  //Check ntp_ver and show changelog
  if (localStorage.ntp_ver != ntp_ver || !localStorage.ntp_ver) {
    localStorage.clear();
    localStorage.ntp_ver = ntp_ver;
  }

  /* ---------------- Toast Alert --------------- */
    var ntoast = new alert({
      timeout: 2000
    });
  //Function to get default widgets
  function f_dwdg(i) {
    var chd;
    switch (i) {
      case 0:
        chd = '<div id="sb_r"><img id="sb_logo" alt=""><div class="sb_wrap"><span id="sb_icon_default"></span><ul id="sb_icon_menu"> </ul>' +
          '<input name="sb_input" type="text" id="sb_input" size="50" spellcheck="false" ></div></div>'
        break;
      case 1:
        chd = '<div id="tlg"> <div class="tlg_item folder"> <div class="tlg_img tlg_fld"></div><span id="tlg_span" class="tlg_title">Folder</span></div><div class="tlg_item"> <a id="tile_target" class="tile_target" href="https://kiwibrowser.com" rel="noreferrer"> <img class="tlg_img" src="https://logos.kiwibrowser.com/kiwibrowser.com" alt=""> <span id="tlg_span" class="tlg_title">Kiwi Browser</span> </a> </div></div>';
        break;
      case 2:
        chd = '<div id="newsS"><div id="news"></div><div id="newsMore"></div></div>';
        break;
    }
    return chd;
  }
  //Get cached widgets
  var ntp_wdg = localGet("ntp_wdg");
  if (ntp_wdg == undefined) {
    console.log("Create default cached widgets... ");
    ntp_wdg = [{
        name: "Search Bar",
        cached: f_dwdg(0)
      },
      {
        name: "Tiles Grid",
        cached: f_dwdg(1)
      },
      {
        name: "News Section",
        cached: f_dwdg(2)
      },
    ];
    localStore("ntp_wdg", ntp_wdg);
  }
  //Get cached settings
  var ntp_sett = localGet("ntp_sett");
  if (ntp_sett == undefined) {
    console.log("ntp_sett is undefined , let's create default one");
    ntp_sett = { //Widgets
      order: [0, 1, 2],
      status: [1, 1, 1]
    };
    localStore("ntp_sett", ntp_sett);
  }
  //Load widgets from cache
  function load_widgets() {
    let list = document.getElementById("stt_lwo").querySelectorAll("li");
    for (let z = 0; z < 3; z++) {
      let y = ntp_sett.order[z];
      let status = ntp_sett.status[z];
      let wdgn = document.getElementById("wdg_" + y);
      let c = "";
      if (status) {
        wdgn.style.display = "block";
        c = "checked";
        if(ntp_wdg[z].name == "Search Bar")
          wdgn.style.zIndex="1";
        customInner(wdgn, ntp_wdg[z].cached);
      } else {
        wdgn.style.display = "none";
        customInner(wdgn, "...");
      }
      if (orderListChanged == 0) {
        list[y].setAttribute("data-order", z);
        customInner(list[y], '<svg class="_icon stt_lwoh" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' + ntp_wdg[z].name + '</label><input ' +
          'class="toggle" type="checkbox" id="tgw_' + y + '" ' + c + '/>');
        document.getElementById("tgw_"+y).onchange=()=>{toggle_widget(y)};
      }
    }
    let paras = document.getElementsByClassName('editMode');
    while (paras[0]) paras[0].parentNode.removeChild(paras[0]);
    
  }
  theme();
  //Config Settings page 
  const dlg_st = new modal("#dlg_st");
  const cl_vn = new modal("#cl_vn");
  const lrt = new modal("#lrt");
  const lrt_fl = new modal("#lrt_fl");
  new pagesRoute();
  //Load cached widget 
  load_widgets();
  ntp_bdy.classList.toggle("op");
  //Load settings option status and value
  for (var i = 0; i < 6; i++) {
    var a = document.getElementById("stt_opt" + i);
    var b = getComputedStyle(ntp_bdy).getPropertyValue("--o" + i);
    if (i == 2) {
      var ar = document.getElementsByClassName("tile_target");
      for (var z = 0; z < ar.length; z++) ar[z].target = b;
    }
    if ((f_trim(a.value.toString())==f_trim(b.toString()))) a.checked = true;
    else a.checked = false;
  }
  //Function to set options with toggle
  function set_option_t(t, f, i) {
    console.log("status :" + t.checked + " value : " + t.value + " if false : " + f + ", index " + i);
    var value = (t.checked) ? t.value : f;
    ntp_bdy.style.setProperty("--o" + i, value);
    if (i == 2) {
      if(targetBlank=="_self")
        setTileTarget("_blank");
      else
        setTileTarget("_self");
    }
    save_ntpbdy();
  }

  document.getElementById("stt_opt0").addEventListener("click",function(){
    set_option_t(this,'none',0);
  });
  document.getElementById("stt_opt1").addEventListener("click",function(){
    set_option_t(this,' ',1);
  });
  document.getElementById("stt_opt4").addEventListener("click",function(){
    set_option_t(this,'auto',4);
  });
  document.getElementById("stt_opt5").addEventListener("click",function(){
    set_option_t(this,'inline-block',5);
  });
  document.getElementById("stt_opt3").addEventListener("click",function(){
    set_option_t(this,'inline-block',3);
  });
  document.getElementById("stt_opt2").addEventListener("click",function(){
    set_option_t(this,'_self',2);
  });
//Font Changer
  document.getElementById('font-selector').value = getComputedStyle(ntp_bdy).getPropertyValue("--custom-font");
  function f_update_font(){
    var font = document.getElementById("font-selector").value;
    ntp_bdy.style.setProperty("--custom-font", font);
    save_ntpbdy();
    console.log(font);
  }  
  document.getElementById("font-selector").onchange=()=>{f_update_font()};
  //Search Bar Settings Config


  //Search Engine Icons and color
  var se_data_icons={
    "Google": ["#4285F4",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>'],
    "Bing" : ["#258FFA",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Microsoft Bing</title><path d="M20.176 15.406a6.48 6.48 0 01-1.736 4.414c1.338-1.47.803-3.869-1.003-4.635-.862-.305-2.488-.85-3.367-1.158a1.834 1.834 0 01-.932-.818c-.381-.975-1.163-2.968-1.548-3.948-.095-.285-.31-.625-.265-.938.046-.598.724-1.003 1.276-.754l3.682 1.888c.621.292 1.305.692 1.796 1.172a6.486 6.486 0 012.097 4.777zm-1.44 1.888c-.264-1.194-1.135-1.744-2.216-2.028-1.527.902-4.853 2.878-6.952 4.13-1.103.68-2.13 1.35-2.919 1.242a2.866 2.866 0 01-2.77-2.325c-.012-.048-.008-.03-.001.01a6.4 6.4 0 00.947 2.653 6.498 6.498 0 005.486 3.022c1.908.062 3.536-1.153 5.099-2.096.292-.188.804-.496 1.332-.831l1.423-1.51c.553-.577.764-1.426.571-2.267zm-12.04 2.97c.422 0 .822-.1 1.173-.29.355-.215.964-.579 1.7-1.018L9.57 4.502c0-.99-.497-1.864-1.257-2.382-.08-.059-2.91-1.901-2.99-1.956-.605-.432-1.523.045-1.5.797v14.887l.417 2.36a2.488 2.488 0 002.455 2.056z"/></svg>'],
    "Youtube" : ["#FF0000",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'],
    "DuckDuckGo" : ["#DE5833",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>DuckDuckGo</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 23C5.925 23 1 18.074 1 12S5.926 1 12 1s11 4.925 11 11-4.925 11-11 11zm10.219-11c0 4.805-3.317 8.833-7.786 9.925-.27-.521-.53-1.017-.749-1.438.645.249 1.93.718 2.208.615.376-.144.282-3.149-.14-3.245-.338-.075-1.632.837-2.141 1.209l.034.156c.078.397.144.993.03 1.247-.001.004-.002.01-.004.013a.218.218 0 0 1-.068.088c-.284.188-1.081.284-1.503.188a.516.516 0 0 1-.064-.02c-.694.396-2.01 1.109-2.25.971-.329-.188-.377-2.676-.329-3.288.035-.46 1.653.286 2.442.679.174-.163.602-.272.98-.31-.57-1.389-.99-2.977-.733-4.105 0 .002.002.002.002.002.356.248 2.73 1.05 3.91 1.027 1.18-.024 3.114-.743 2.903-1.323-.212-.58-2.135.51-4.142.324-1.486-.138-1.748-.804-1.42-1.29.414-.611 1.168.116 2.411-.256 1.245-.371 2.987-1.035 3.632-1.397 1.494-.833-.625-1.177-1.125-.947-.474.22-2.123.637-2.889.82.428-1.516-.603-4.149-1.757-5.3-.376-.376-.951-.612-1.603-.736-.25-.344-.654-.671-1.225-.977a5.772 5.772 0 0 0-3.595-.584l-.024.004-.034.004.004.002c-.148.028-.237.08-.357.098.148.016.705.276 1.057.418-.174.068-.412.108-.596.184a.828.828 0 0 0-.204.056c-.173.08-.303.375-.3.515.84-.086 2.082-.026 2.991.246-.644.09-1.235.258-1.661.482-.016.008-.03.018-.048.028-.054.02-.106.042-.152.066-1.367.72-1.971 2.405-1.611 4.424.323 1.824 1.665 8.088 2.29 11.064-3.973-1.4-6.822-5.186-6.822-9.639C1.781 6.356 6.356 1.781 12 1.781S22.219 6.356 22.219 12zM9.095 9.581a.758.758 0 1 0 0 1.516.758.758 0 0 0 0-1.516zm.338.702a.196.196 0 1 1 0-.392.196.196 0 0 1 0 .392zm4.724-1.043a.65.65 0 1 0 0 1.299.65.65 0 0 0 0-1.3zm.29.601a.168.168 0 1 1 0-.336.168.168 0 0 1 0 .336zM9.313 8.146s-.571-.26-1.125.09c-.554.348-.534.704-.534.704s-.294-.656.49-.978c.786-.32 1.17.184 1.17.184zm5.236-.052s-.41-.234-.73-.23c-.654.008-.831.296-.831.296s.11-.688.945-.55a.84.84 0 0 1 .616.484z"/></svg>'],
    "Ecosia": ["#ffffff",'<svg role="img" version="1.1" viewBox="0 0 224.23 221" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <metadata>  <rdf:RDF>   <cc:Work rdf:about="">    <dc:format>image/svg+xml</dc:format>    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>    <dc:title/>   </cc:Work>  </rdf:RDF> </metadata> <g transform="translate(-134.25 105.13)">  <path transform="translate(93.5 59)" d="m170.23-131.41c-11.858-2.286-24.482-2.7007-36.229 0.0995-11.259 2.6837-22.147 8.1604-31.031 15.578-9.3825 7.8335-16.919 16.729-21.735 27.323-5.9231 13.03-9.5481 24.469-7.7434 42.235 1.1587 11.407 3.9112 19.647 8.4453 28.434 27.514 53.317 91.394 54.16 122.81 23.719 11.381-11.027 19.352-18.908 25.124-39.671 2.7671-9.954 3.1604-20.605 2.3542-30.905-0.26367-3.3683-1.1081-6.715-2.3332-9.8637-4.5871-11.79-9.6435-24.114-18.521-33.127-11.12-11.289-28.357-21.262-41.14-23.822z" fill="#d9e559"/>  <path d="m231.97 83.843c-18.104-3.3541-34.398-12.867-46.637-27.228-5.2018-6.1035-5.3684-8.4646-0.76533-10.845 3.241-1.676 4.9025-4.2683 4.9025-7.6487 0-1.2818 0.9-4.0098 2-6.0621 1.1-2.0524 2-4.8424 2-6.2 0-2.722-1.3352-3.6679-8.6308-6.1145-5.3287-1.787-8.3692-3.9937-8.3692-6.0742 0-0.73694-2.0654-2.3108-4.5898-3.4974s-4.8548-2.848-5.1787-3.692c-1.0474-2.7296 1.6642-19.749 4.351-27.309 2.7174-7.6455 6.9544-15.833 8.831-17.066 0.59762-0.39244 1.0866-1.1911 1.0866-1.7748s2.2132-3.7397 4.9183-7.0133c4.1382-5.008 5.2969-5.857 7.3054-5.3529 1.6381 0.41113 3.0756-0.04567 4.5817-1.4558 2.2658-2.1216 9.1805-5.3789 13.863-6.5306 1.4679-0.36101 4.9002-3.1599 7.6274-6.2198 4.835-5.4248 5.1547-5.5983 12.831-6.9664 13.798-2.4592 28.188-1.3146 41.356 3.2895 5.1651 1.8059 5.3538 1.9867 3.25 3.1127-2.295 1.2283-3.0941 4.125-1.1379 4.125 0.6026 0 2.3378-0.8845 3.856-1.9655 2.4466-1.7421 2.9756-1.8011 4.6544-0.519 2.6426 2.0183 0.66871 3.1448-7.0408 4.0183-3.3358 0.37795-7.5443 1.2965-9.3522 2.0412-1.8079 0.7447-3.0503 0.97099-2.761 0.50286 1.073-1.7361-2.6194-3.3215-8.9124-3.8267-7.0319-0.56446-8.6655 0.08514-15.225 6.0543-3.6636 3.3338-4.1352 5.1358-1.7007 6.4983 1.2372 0.69236 1.3745 1.3456 0.58853 2.7997-1.2813 2.3706-7.4399 6.1798-6.6459 4.1106 0.71237-1.8564-2.91-6.2314-4.398-5.3118-1.2073 0.74615-0.61037 5.1665 0.97093 7.1898 0.46939 0.6006 0.51984 1.4288 0.11211 1.8404-0.40772 0.41159-0.74132 1.7136-0.74132 2.8933 0 1.6-0.76215 2.2782-3 2.6695-2.743 0.47962-3 0.86553-3 4.5049 0 3.6134 0.27658 4.0395 3 4.6219 2.928 0.6261 2.9362 0.64435 0.3438 0.75982-1.9664 0.08759-3.6544 1.4566-6.5 5.2714-2.1141 2.8342-4.4094 5.9063-5.1008 6.8268-0.69132 0.92052-1.4942 4.6215-1.7842 8.2244-0.50362 6.2577-0.37746 6.7463 2.8206 10.923l3.2276 3.884s5.7044 0.3297 8.5565 0.49455c7.345 0.42453 12.936 1.2745 12.936 5.3175 0 1.5144 0.90927 4.536 2.0206 6.7148 1.6168 3.1697 1.8963 5.0613 1.3988 9.4642-0.88611 7.8418 4.0817 23.387 7.8567 24.585 3.0718 0.97496 8.2509-0.44644 10.395-2.853 2.6648-2.9908 6.3287-9.5078 6.3287-11.257 0-0.77443 1.4068-3.0103 3.1262-4.9686 2.9771-3.3907 3.0943-3.8429 2.4569-9.4766l-0.66932-5.916 5.0927-5.6235c7.7098-8.5135 8.8033-13.04 3.3025-13.671-2.6929-0.3088-2.6164-0.41702 1.8495-2.6171 8.1198-4 11.689-8.9579 8.6414-12.005-0.93333-0.93333-0.47785-1.2 2.0497-1.2 6.4571 0 11.73 4.4049 14.647 12.236 0.97027 2.6047 2.3747 5.2425 3.1209 5.8619 2.0392 1.6924 4.3823 0.2995 4.3823-2.605 0-2.7634 7.2981-11.528 8.5536-10.272 1.3944 1.3944 1.6804 14.753 0.49013 22.893-6.5692 44.927-49.175 75.63-93.544 67.409zm50.972-42.757c1.5067-4.371 1.6958-5.998 0.80135-6.8925-2.1985-2.1985-6.0577 1.5044-6.8123 6.5365-1.318 8.7894 3.0156 9.046 6.011 0.35597zm-55.972-85.78c0-2.1435-2.9057-1.8339-3.3271 0.35451-0.25736 1.3364 0.14991 1.7437 1.4863 1.4863 1.0124-0.19498 1.8408-1.0233 1.8408-1.8408zm-7-10.986c1.141-1.8462-0.48952-3.076-2.5887-1.9525-1.082 0.57908-1.7032 1.4803-1.3803 2.0027 0.77111 1.2477 3.1857 1.2172 3.969-0.05017zm29.25-11.63c3.6166-0.96922 2.7682-3.3697-1.191-3.3697-3.5178 0-5.162 1.2153-4.059 3 0.70433 1.1396 2.029 1.2329 5.25 0.36971zm24.497 65.38c-1.432-1.7945-4.6629-8.446-3.5217-7.25 1.3948 1.4617 5.517 8.5 4.9783 8.5-0.25251 0-0.90797-0.5625-1.4566-1.25zm12.003-10.781c-1.2375-0.49742-2.25-1.1018-2.25-1.343 0-0.74433 3.9982 0.56217 4.5746 1.4949 0.636 1.0291 0.60905 1.0273-2.3246-0.15187zm-42.02-10.341c-2.9532-2.5923-3.8092-2.8275-8.7874-2.4147l-5.5155 0.45739 3.2255-3.3279c4.3703-4.509 6.0588-4.8407 10.928-2.1468 3.1277 1.7305 4.2824 1.9826 4.6391 1.0128 0.32493-0.88349 1.2736-0.42948 3.004 1.4377 2.4378 2.6305 2.5791 2.6606 3.9141 0.83478 1.3463-1.8412 1.4283-1.8324 2.9305 0.31232 0.85001 1.2136 2.5325 2.2134 3.7388 2.2218 3.1032 0.02166 5.0864 1.518 4.3961 3.3168-0.47804 1.2458-2.3373 1.4996-9.8948 1.3509-8.6963-0.17107-9.5206-0.3713-12.578-3.0552zm37.964-4.8945c-0.5681-0.68452-1.3248-2.5921-1.6814-4.239-0.62721-2.896-0.59459-2.9287 0.99289-0.99441 2.6492 3.228 3.5758 5.3319 2.6109 5.9283-0.48917 0.30232-1.3542-0.01038-1.9223-0.69491zm-20.944-4.9834c0.23671-0.71014 2.0722-1.25 4.25-1.25s4.0133 0.53986 4.25 1.25c0.29365 0.88095-0.96111 1.25-4.25 1.25s-4.5436-0.36905-4.25-1.25zm-13.361-15.5c0.49811-0.9625 1.3308-2.8658 1.8505-4.2295l0.94484-2.4795 1.2377 2.3127c1.0394 1.9421 0.95976 2.6198-0.49699 4.2295-2.2536 2.4902-4.8006 2.6104-3.536 0.16681z" fill="#59b0d4" stroke-width="3.7795"/> </g> <path d="m112.12 0a112.12 110.5 0 0 0-112.12 110.5 112.12 110.5 0 0 0 112.12 110.5 112.12 110.5 0 0 0 112.12-110.5 112.12 110.5 0 0 0-112.12-110.5zm-0.6875 13.061a97.659 98.428 0 0 1 97.66 98.43 97.659 98.428 0 0 1-97.66 98.428 97.659 98.428 0 0 1-97.658-98.428 97.659 98.428 0 0 1 97.658-98.43z" fill="#e4774f"/></svg>'],
    "Wikipedia": ["#000000",'<svg role="img" fill="#fff" viewBox="0 -1 24 24" xmlns="http://www.w3.org/2000/svg"><title>Wikipedia</title><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/></svg>'],
    "Yahoo" : ["#6001D2",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Yahoo!</title><path d="M18.86 1.56L14.27 11.87H19.4L24 1.56H18.86M0 6.71L5.15 18.27L3.3 22.44H7.83L14.69 6.71H10.19L7.39 13.44L4.62 6.71H0M15.62 12.87C13.95 12.87 12.71 14.12 12.71 15.58C12.71 17 13.91 18.19 15.5 18.19C17.18 18.19 18.43 16.96 18.43 15.5C18.43 14.03 17.23 12.87 15.62 12.87Z"/></svg>'],
    "Yandex": ["#ffffff",'<svg fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" width="13.06" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.27 23.48c-.02-.02-.03-1.78-.03-3.92 0-3.5 0-3.9-.07-4.05a109.37 109.37 0 01-1.03-2.76l-.3-.79a220.26 220.26 0 00-1.42-3.85c-.3-.85-.6-1.69-1.48-4.07C.45 2.7.45 2.7.57 2.62c.03-.02.51-.03 1.08-.03.93 0 1.04 0 1.1.07a195.2 195.2 0 001.57 4.5 161.28 161.28 0 00.98 2.93l.9 2.57c.1.28.2.52.22.52.03.01.08-.13.13-.31l.31-1.2c.3-1.2.65-2.37 1.24-4.2a213.04 213.04 0 001.03-3.28l.5-1.58c.55-1.8.63-2.03.74-2.07A8.8 8.8 0 0111.45.5c.76 0 .99.01 1.05.06.09.07.11-.02-.29 1.11a592.15 592.15 0 00-1.47 4.18 1226.28 1226.28 0 00-3.3 9.36l-.16.4-.02 3.94-.02 3.94h-.97c-.54.01-.98 0-1-.01z" fill="#d33c2f" stroke="none"/></svg>'],
    "Startpage": ["#6001D2",'<svg viewBox="0 -2 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12.92 21.78l-.27-.01v-.36l.32-.04c.67-.09 1.06-.3 1.23-.66.18-.4.17-.07.17-6.83 0-5.89 0-6.28-.06-6.49-.07-.26-.14-.36-.32-.46a2 2 0 00-1.16-.1c-.07.03-.07.02-.07-.17v-.2l1-.33 1.76-.6c.45-.16.79-.25.82-.24.06.02.06.1.06.9v.87l.32-.3a4.86 4.86 0 012.76-1.5c1.35-.2 2.63.38 3.53 1.59.35.48.68 1.24.83 1.94.22.97.21 2.29-.01 3.29-.42 1.87-1.69 3.62-3.08 4.25-.57.26-1.06.37-1.74.37a3.37 3.37 0 01-2.4-.9l-.16-.16v2.2c.01 1.37.03 2.26.05 2.4.08.48.21.7.5.84.22.1.67.2 1.16.25l.39.05v.4H12.92zm6.4-5.95c1.1-.23 2.02-1.32 2.4-2.83.12-.5.17-.98.2-1.7.04-1.83-.32-2.96-1.21-3.8-.5-.47-.98-.7-1.58-.79a2.64 2.64 0 00-2.6 1.21l-.07.17v6.2l.08.2c.34.72.92 1.18 1.67 1.33.3.07.83.07 1.12 0zm-14.18.93c-.54-.07-1.11-.2-2-.5-1.03-.33-1.23-.36-1.47-.25-.12.06-.17.11-.26.27l-.13.33-.03.14H.98l-.27.02-.06-.46A816.73 816.73 0 000 11.58l.28-.02.27-.02.02.1c.06.21.5 1.16.74 1.55 1.08 1.82 2.47 2.69 4.29 2.69.52 0 .96-.1 1.38-.3a2.52 2.52 0 001.48-2.18 2.94 2.94 0 00-.26-1.54c-.37-.8-1-1.31-3.34-2.77-2.19-1.36-2.44-1.53-3.03-2.12A3.67 3.67 0 01.65 4.26c0-1.23.41-2.24 1.22-3.04A4.32 4.32 0 015.06 0c.74 0 1.11.08 2.41.51.69.23.88.28 1.05.28.42 0 .67-.22.81-.71C9.35 0 9.37 0 9.6 0h.25l.02.14a341.35 341.35 0 01.51 4.93l.02.1h-.6L9.76 5A6.75 6.75 0 008.7 2.69a4.82 4.82 0 00-2.84-1.67 4.6 4.6 0 00-1.33.05c-.65.18-1.24.62-1.5 1.12-.16.34-.24.7-.21 1.12.04.78.26 1.23.9 1.84.48.45.83.7 2.44 1.7 2.15 1.33 2.72 1.73 3.42 2.4a3.8 3.8 0 011.34 3.08c0 1.38-.54 2.46-1.66 3.37a5.2 5.2 0 01-1.97.93c-.6.13-1.61.2-2.15.13z"/></svg>'],
    "Yahoo": ["#6001D2",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Yahoo!</title><path d="M18.86 1.56L14.27 11.87H19.4L24 1.56H18.86M0 6.71L5.15 18.27L3.3 22.44H7.83L14.69 6.71H10.19L7.39 13.44L4.62 6.71H0M15.62 12.87C13.95 12.87 12.71 14.12 12.71 15.58C12.71 17 13.91 18.19 15.5 18.19C17.18 18.19 18.43 16.96 18.43 15.5C18.43 14.03 17.23 12.87 15.62 12.87Z"/></svg>'],
    "Brave": ["#FB542B",'<svg role="img" fill="#fff"viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Brave</title><path d="M15.68 0l2.096 2.38s1.84-.512 2.709.358c.868.87 1.584 1.638 1.584 1.638l-.562 1.381.715 2.047s-2.104 7.98-2.35 8.955c-.486 1.919-.818 2.66-2.198 3.633-1.38.972-3.884 2.66-4.293 2.916-.409.256-.92.692-1.38.692-.46 0-.97-.436-1.38-.692a185.796 185.796 0 01-4.293-2.916c-1.38-.973-1.712-1.714-2.197-3.633-.247-.975-2.351-8.955-2.351-8.955l.715-2.047-.562-1.381s.716-.768 1.585-1.638c.868-.87 2.708-.358 2.708-.358L8.321 0h7.36zm-3.679 14.936c-.14 0-1.038.317-1.758.69-.72.373-1.242.637-1.409.742-.167.104-.065.301.087.409.152.107 2.194 1.69 2.393 1.866.198.175.489.464.687.464.198 0 .49-.29.688-.464.198-.175 2.24-1.759 2.392-1.866.152-.108.254-.305.087-.41-.167-.104-.689-.368-1.41-.741-.72-.373-1.617-.69-1.757-.69zm0-11.278s-.409.001-1.022.206-1.278.46-1.584.46c-.307 0-2.581-.434-2.581-.434S4.119 7.152 4.119 7.849c0 .697.339.881.68 1.243l2.02 2.149c.192.203.59.511.356 1.066-.235.555-.58 1.26-.196 1.977.384.716 1.042 1.194 1.464 1.115.421-.08 1.412-.598 1.776-.834.364-.237 1.518-1.19 1.518-1.554 0-.365-1.193-1.02-1.413-1.168-.22-.15-1.226-.725-1.247-.95-.02-.227-.012-.293.284-.851.297-.559.831-1.304.742-1.8-.089-.495-.95-.753-1.565-.986-.615-.232-1.799-.671-1.947-.74-.148-.068-.11-.133.339-.175.448-.043 1.719-.212 2.292-.052.573.16 1.552.403 1.632.532.079.13.149.134.067.579-.081.445-.5 2.581-.541 2.96-.04.38-.12.63.288.724.409.094 1.097.256 1.333.256s.924-.162 1.333-.256c.408-.093.329-.344.288-.723-.04-.38-.46-2.516-.541-2.961-.082-.445-.012-.45.067-.579.08-.129 1.059-.372 1.632-.532.573-.16 1.845.009 2.292.052.449.042.487.107.339.175-.148.069-1.332.508-1.947.74-.615.233-1.476.49-1.565.986-.09.496.445 1.241.742 1.8.297.558.304.624.284.85-.02.226-1.026.802-1.247.95-.22.15-1.413.804-1.413 1.169 0 .364 1.154 1.317 1.518 1.554.364.236 1.355.755 1.776.834.422.079 1.08-.4 1.464-1.115.384-.716.039-1.422-.195-1.977-.235-.555.163-.863.355-1.066l2.02-2.149c.341-.362.68-.546.68-1.243 0-.697-2.695-3.96-2.695-3.96s-2.274.436-2.58.436c-.307 0-.972-.256-1.585-.461-.613-.205-1.022-.206-1.022-.206z"/></svg>'],
    "Reddit" : ["#FF4500",'<svg role="img" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>'],
    "Qwant" : ["#ffffff",'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 64" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink:href="#a" x=".5" y=".5"/><symbol id="a" overflow="visible"><g stroke="none" fill-rule="nonzero"><path d="M50.7 60.7c.3.6.6 1.5 1.3 1.9a2.9 2.9 0 001.4.2h9.1a1.5 1.5 0 001.3-2.2l-1.7-3.2-3.5-6.6-.4-1s-.2-.2 0-.8l2.4-5c.9-2.6 11.3-27.8-18.3-30.4a6.7 6.7 0 01.6.4 21 21 0 016.4 6.3c3.6 5.8 4.2 13 1.6 19.3a20.1 20.1 0 01-1.6 3 20.5 20.5 0 01-3.7 4.3c-.4.3-.6.6-.8 1v1z" fill="#4ba2ea"/><path d="M.2 27.8c4.8-3.2 9.6-3.4 11 1a1 1 0 000 .3A20.7 20.7 0 0029.2 52a20.4 20.4 0 005.6 0l1.4-.3a2.7 2.7 0 011 0c.5 6.3-19.6 8-32-7.3C2 40.6.5 33 0 27.8" fill="#ff3b4a"/><path d="M62.2 40.8c-.5 1.6-1.1 3.2-1.9 4.7l-.5.9-.7 1.2-.9 1.5.5-1.3c4.4-14-2.7-29-16.4-34.1l-.3-.2c.8.4-3.8-11 5.7-9.6l1.2.7a30.1 30.1 0 017.2 6 30.4 30.4 0 015.4 8.8 32 32 0 012.1 11c.1 3.6-.3 7-1.4 10.4z" fill="#65cee7"/><path d="M50.2 8.6a5.7 5.7 0 01-.4 2 5.6 5.6 0 01-5.1 3.6c-1 0-1.9-.3-2.7-.7a21 21 0 00-8.4-2.6A20.3 20.3 0 0023 12.8a20.1 20.1 0 00-4.5 2.9A20.5 20.5 0 0011.4 28C1.2 15.6 22.1-4.5 45.6 3l1.2.3 1 .5a5.6 5.6 0 012.5 4.7z" fill="#87c966"/><path d="M46.7 3.4c-.4-.2-.7-.3-1.1-.3a27.4 27.4 0 00-5.4-1h-1.7a27.3 27.3 0 00-27.1 26.3l-.1.4a5.6 5.6 0 01-5.5 4.6h-.2a5.6 5.6 0 01-5.4-5.6v-.7A31 31 0 013 17.6a29.8 29.8 0 016.4-8.8c2.6-2.5 5.6-4.5 9-6A31.8 31.8 0 0128.8 0a37.2 37.2 0 0110.7.8 32 32 0 017 2.5z" fill="#000"/><path d="M41.7 60.7c-.3.8-1.2 1-2 1.2a30.9 30.9 0 01-7.8 1c-1.8 0-3.6-.1-5.4-.4a35.6 35.6 0 01-5.5-1.3 30 30 0 01-11.6-6.8A29.7 29.7 0 015 48.9 30.7 30.7 0 01.8 39a35.8 35.8 0 01-.6-11v-.2A27 27 0 0037 51.6a.5.5 0 01.1 0 1.4 1.4 0 011 .9l2 4.1v.1l1 2.1c.4.6.7 1.2.5 1.9z" fill="#af27cc"/></g></symbol></svg>']
  }
  //Search Engine Query
  var se_data_query={
    "Google":"https://google.com/search?q=",
    "Bing":"https://bing.com/search?q=",
    "DuckDuckGo":"https://duckduckgo.com/?q=",
    "Ecosia":"https://www.ecosia.org/search?q=",
    "Wikipedia":"https://wikipedia.org/w/index.php?search=",
    "Youtube":"https://www.youtube.com/results?q=",
    "Yandex":"https://yandex.com/search/?text=",
    "Yahoo":"https://search.yahoo.com/search?p=",
    "Startpage":"https://www.startpage.com/do/dsearch?query=",
    "Reddit":"https://www.reddit.com/search?q=",
    "Brave":"https://search.brave.com/search?q=",
    "Qwant":"https://www.qwant.com/?q="
  }
  //Get SearchBar saved preferences
  var ntp_sb = localGet("ntp_sb");
  if (ntp_sb == undefined ||  ntp_sb.se == undefined || ntp_sb.placeholder== undefined) {
    ntp_sb = { 
      se : {
        "Google":true,
        "Bing":true,
        "Brave":true,
        "DuckDuckGo":true,
        "Ecosia":true,
        "Qwant":true,
        "Reddit":false,
        "Startpage":true,
        "Wikipedia":true,
        "Yandex":true,
        "Yahoo":true,       
        "Youtube":false             
      },
      placeholder:["Search with"],
      custom_se: {
        "MySearch":["#000"]
      }
    };
    localStore("ntp_sb", ntp_sb);
  }
  
  const sb_dropdown_menu= document.getElementById("sb_icon_menu");
  const sb_icon_default = document.getElementById("sb_icon_default");
  const sb_custom_form = document.getElementById("sb_custom_form");
  if(sb_icon_default == undefined)
  {
    const y = ntp_sett.order[0];
    customInner(document.getElementById('wdg_' + y),f_dwdg(0));
    ntp_wdg[0].cached = document.getElementById('wdg_' + y).innerHTML;
    localStore("ntp_wdg", ntp_wdg);
  }
  sb_custom_form.addEventListener('submit', (e) => {
    var name = f_trim(document.getElementById("custom_sb_name").value);
    var query = f_trim(document.getElementById("custom_sb_query").value);
    var color = f_trim(document.getElementById("custom_sb_color").value);
    var svg = document.getElementById("custom_sb_svg").value;
    if(name.length <1 && query.length < 1 && color.length < 1 && svg.length < 1){
      ntoast.error("You need to complete all the rquired fields ");
    }
    else{
      ntp_sb.se[name]=true;
      ntp_sb.custom_se[name]=[color,svg,query];
      localStore("ntp_sb", ntp_sb);
      f_setup_sb();
      render_se_list();
      ntoast.success("Custom Search Engine added !");
      sb_custom_form.reset();
    }
    e.preventDefault();
    return false;
  });
  function hide_dropdown(){
    sb_dropdown_menu.classList.remove('active');
        document.removeEventListener("click",hide_dropdown);
  }
  sb_icon_default.addEventListener('click', (e) => {
    if (sb_dropdown_menu.classList.contains('active')) {
      sb_dropdown_menu.classList.remove('active');
    } else {
      sb_dropdown_menu.classList.add('active');
      e.stopPropagation();
      document.addEventListener("click",hide_dropdown);
    }
  })
  
  function render_se_list(){
     var se_keys =Object.keys(ntp_sb.se);
     var se_custom_keys =Object.keys(ntp_sb.custom_se);
     //Clean
     se_custom_keys.forEach((el,index)=>{
       if(! se_keys.includes(el))
          delete ntp_sb.custom_se[el];
     })
     //Fix missing keys
      Object.keys(se_data_icons).forEach((el,index)=>{
        if(! se_keys.includes(el)){
          ntp_sb.se[el]=false;
        }
          
      })
      if(se_keys.length != Object.keys(ntp_sb.se)){
        se_keys=Object.keys(ntp_sb.se);
        localStore("ntp_sb", ntp_sb);
      }
        
      const list = document.getElementById("stt_selist");
      while(list.firstChild){
        list.removeChild(list.firstChild);
      }
      se_keys.forEach((el,index)=>{
      const se_status = ntp_sb.se[el];
      var se_icon = se_data_icons[el];
      if(se_icon != undefined){
        var setChecked =(se_status==true)?"checked":"";
        var li = document.createElement("li");
        var noshadow="";
        if(se_icon[0]=="#ffffff")
          noshadow= "box-shadow:none;";
        li.innerHTML='<svg class="_icon stt_selisth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' +
        '<div class="sb_item"><span class="sb_icon" style="background: '+se_icon[0]+';'+noshadow+'"> '+se_icon[1]+'</span>'+el + '</div><input '+
        'class="toggle" type="checkbox" id="tg_se' + el + '" '+setChecked+' />';
        list.appendChild(li); 
        document.getElementById("tg_se"+el).onchange=()=>{toggle_se_status(el)}
      }else{
        se_custom = ntp_sb.custom_se[el];
        if(se_custom != undefined){
          var setChecked =(se_status==true)?"checked":"";
          var li = document.createElement("li");
          li.innerHTML='<svg class="_icon stt_selisth" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' +
          '<div class="sb_item"><span class="sb_icon" style="background: '+se_custom[0]+' "> '+se_custom[1]+'</span>'+el + '</div><svg onclick="sb_delete_se(\''+el+'\')" class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg><input '+
          'class="toggle" type="checkbox" id="tg_se' + el + '" '+setChecked+' />';
          list.appendChild(li); 
          document.getElementById("tg_se"+el).onchange=()=>{toggle_se_status(el)}
        }else{
           console.log(se_custom,el);
        }
      }
    })
  }
  render_se_list();
  function sb_delete_se(a){
    console.log(ntp_sb.custom_se);
    delete ntp_sb.custom_se[a];
    delete ntp_sb.se[a];
    localStore("ntp_sb", ntp_sb);
    render_se_list();
    f_setup_sb();
  }
  //Config widgets ordering and toggle
  Sortable.create(document.getElementById("stt_selist"), {
    handle: '.stt_selisth',
    animation: 150,
    onEnd: function (evt) {
      var se_list = {};
      var list = document.getElementById("stt_selist").getElementsByTagName("li");
      for (var z = 0; z < list.length; z++) {
        var a= list[z].innerText;
        var s = list[z].querySelector("input").checked;
        se_list[a]=s;
      }
      ntp_sb.se=se_list;
      console.log(ntp_sb);
      localStore("ntp_sb", ntp_sb);
      f_setup_sb();
    }
  });

  function toggle_se_status(key_name) {
    console.log(key_name);
    const se_status = ntp_sb.se[key_name];
    ntp_sb.se[key_name] = !se_status;
    f_setup_sb();
    localStore("ntp_sb", ntp_sb);
  }
  
  //Function to remove multiple, leading or trailing spaces 
  function f_trim(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s;
  }
 

  //Top Margin Spacing sliders for widgets 
  const tms_r0 = document.getElementById('tms_r0');
  const tms_r0v = document.getElementById('tms_r0v');
  const tms_r1 = document.getElementById('tms_r1');
  const tms_r1v = document.getElementById('tms_r1v');
  const tms_r2 = document.getElementById('tms_r2');
  const tms_r2v = document.getElementById('tms_r2v');
  var tms_0 = parseInt(ntp_bdy.style.getPropertyValue("--tms0").replace("px", ""));
  var tms_1 = parseInt(ntp_bdy.style.getPropertyValue("--tms1").replace("px", ""));
  var tms_2 = parseInt(ntp_bdy.style.getPropertyValue("--tms2").replace("px", ""));
  if (isNaN(tms_0)) {
    tms_0 =10;
    ntp_bdy.style.setProperty("--tms0", " 10px");
    save_ntpbdy();
  }
  if (isNaN(tms_1)) {
    tms_1 =10;
    ntp_bdy.style.setProperty("--tms1", " 10px");
    save_ntpbdy();
  }
  if (isNaN(tms_2)) {
    tms_2 =10;
    ntp_bdy.style.setProperty("--tms2", " 10px");
    save_ntpbdy();
  }
  tms_r0.value = tms_0;
  tms_r1.value = tms_1;
  tms_r2.value = tms_2;
  tms_r0v.innerText = tms_0;
  tms_r1v.innerText = tms_1;
  tms_r2v.innerText = tms_2;
  tms_r0.addEventListener("input", function () {
    tms_0 = parseInt(tms_r0.value);
    tms_r0v.innerText = tms_0;
    ntp_bdy.style.setProperty("--tms0", tms_0 + "px");
    save_ntpbdy();
  });
  tms_r1.addEventListener("input", function () {
    tms_1 = parseInt(tms_r1.value);
    tms_r1v.innerText = tms_1;
    ntp_bdy.style.setProperty("--tms1", tms_1 + "px");
    save_ntpbdy();
  });
  tms_r2.addEventListener("input", function () {
    tms_2 = parseInt(tms_r2.value);
    tms_r2v.innerText = tms_2;
    ntp_bdy.style.setProperty("--tms2", tms_2 + "px");
    save_ntpbdy();
  });

  const tg_r5 = document.getElementById('tg_r5');
  const tg_r5vs = document.getElementById("tg_r5v");
  var tg_r5v = parseInt(ntp_bdy.style.getPropertyValue("--v0").replace("px", ""));
  tg_r5vs.innerText=tg_r5v;
  if (isNaN(tg_r5v)) {
    tg_r5v = 8;
    tg_r5vs.innerText=tg_r5v;
    ntp_bdy.style.setProperty("--v0", tg_r5v + "px");
    save_ntpbdy();
  }
  tg_r5.value = tg_r5v;
  tg_r5.addEventListener("input", function () {
    tg_r5v = parseInt(tg_r5.value);
    tg_r5vs.innerText=tg_r5v;
    ntp_bdy.style.setProperty("--v0", tg_r5v + "px");
    save_ntpbdy();
  });
  //Border radius slider for Search Bar Logo
  const tg_r7 = document.getElementById('tg_r7');
  const tg_r7vs = document.getElementById('tg_r7v');
  var tg_r7v = parseInt(ntp_bdy.style.getPropertyValue("--v2").replace("px", ""));
  tg_r7vs.innerText=tg_r7v;
  if (isNaN(tg_r7v)) {
    tg_r7v = 8;
    tg_r7vs.innerText=tg_r7v;
    ntp_bdy.style.setProperty("--v2", tg_r7v + "px");
    save_ntpbdy();
  }
  tg_r7.value = tg_r7v;
  tg_r7.addEventListener("input", function () {
    tg_r7v = parseInt(tg_r7.value);
    tg_r7vs.innerText=tg_r7v;
    ntp_bdy.style.setProperty("--v2", tg_r7v + "px");
    save_ntpbdy();
  });
  //Search bar top margin
  const tg_r8 = document.getElementById('tg_r8');
  const tg_r8vs = document.getElementById('tg_r8v');
  var tg_r8v = parseInt(ntp_bdy.style.getPropertyValue("--v3").replace("px", ""));
  tg_r8vs.innerText=tg_r8v;
  if (isNaN(tg_r8v)) {
    tg_r8v = 10;
    tg_r8vs.innerText=tg_r8v;
    ntp_bdy.style.setProperty("--v3", tg_r8v + "px");
    save_ntpbdy();
  }
  tg_r8.value = tg_r8v;
  tg_r8.addEventListener("input", function () {
    tg_r8v = parseInt(tg_r8.value);
    tg_r8vs.innerText=tg_r8v;
    ntp_bdy.style.setProperty("--v3", tg_r8v + "px");
    save_ntpbdy();
  });
  //Width slider for Search Bar Logo
  const tg_r6 = document.getElementById('tg_r6');
  const tg_r6vs = document.getElementById('tg_r6v');
  var tg_r6v = parseInt(ntp_bdy.style.getPropertyValue("--v1").replace("px", ""));
  tg_r6vs.innerText=tg_r6v;
  if (isNaN(tg_r6v)) {
    tg_r6v = 230;
    tg_r6vs.innerText=tg_r6v;
    ntp_bdy.style.setProperty("--v1", tg_r6v + "px");
    save_ntpbdy();
  }
  tg_r7.setAttribute("max", tg_r6v / 2);
  tg_r6.value = tg_r6v;
  tg_r6.addEventListener("input", function () {
    tg_r6v = parseInt(tg_r6.value);
    tg_r6vs.innerText=tg_r6v;
    ntp_bdy.style.setProperty("--v1", tg_r6v + "px");
    save_ntpbdy();
  });


  const sb_logo = document.getElementById("sb_logo");
  const sett_sblgp = document.getElementById("sb_lgp");
  const sett_sb_lgf = document.getElementById("sb_lgf");

  function f_sb_lg1() {
    var file = sett_sb_lgf.files[0]; // get a reference to the selected file
    if (file && file.type.match('image.*')) {
      var reader = new FileReader();
      reader.onload = function (e) {
        ntp_bdy.style.setProperty("--sb-img-l", "url(" + e.target.result + ")");
        ntp_bdy.style.setProperty("--sb-img-d", "var(--sb-img-l)");
        save_ntpbdy();
      }
      reader.readAsDataURL(file);
    }
  }
  function f_sb_lg2() {
    var url = prompt("Enter url of the wallpaper . \nExample : ", "url");
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = function (e) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      ntp_bdy.style.setProperty("--sb-img-l", "url(" + dataURL + ")");
      ntp_bdy.style.setProperty("--sb-img-d", "var(--sb-img-l)");
      save_ntpbdy();
    }
    img.src = (url);
  } 
  document.getElementById("b_sbfl").addEventListener("click",f_sb_lg2);
  document.getElementById("sb_lgf").addEventListener("change",f_sb_lg1);
  document.getElementById("sb_custom_form").addEventListener("submit",function (){ return false;});
  //End of Search Bar Settings Config

  //Search Bar Widget Config 
  if (ntp_sett.status[0]) {
    function f_cache_sb() {
      const y = ntp_sett.order[0];
      ntp_wdg[0].cached = document.getElementById('wdg_' + y).innerHTML;
      console.log("Cache search bar");
      localStore("ntp_wdg", ntp_wdg);
    }
    String.prototype.replaceAll = function (search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    function f_setup_sb() {
      document.getElementById("sb_icon_menu").innerHTML ="";
      Object.keys(ntp_sb.se).forEach((el,index)=>{
        const se_status = ntp_sb.se[el];
        var se_icon = se_data_icons[el];
        if(se_icon == undefined)
          se_icon =ntp_sb.custom_se[el];
        if(se_icon != undefined && se_status){
            var si = document.createElement("li");
            si.setAttribute('data-se', el);
          si.addEventListener("click",(event)=>{
            var q= sb_dropdown_menu.querySelector("li.active_sb");
            if(q!=undefined)
              q.classList.remove("active_sb");
            event.target.classList.add("active_sb");
            
            var sei = se_data_icons[event.target.innerText];
            if(sei == undefined)
              sei = ntp_sb.custom_se[event.target.innerText];
            document.getElementById("sb_input").placeholder = ntp_sb.placeholder+" " + event.target.innerText;
            sb_icon_default.style.background = sei[0];
            sb_icon_default.innerHTML =sei[1];
            sb_dropdown_menu.classList.remove('active');
            
          })
          if(index == 0){
            document.getElementById("sb_input").placeholder = ntp_sb.placeholder+" "+el;
            sb_icon_default.style.background = se_icon[0];
            sb_icon_default.innerHTML =se_icon[1];
            si.className="active_sb";
          }
          var noshadow="";
          if(se_icon[0]=="#ffffff")
            noshadow= "box-shadow:none;";
          si.innerHTML ='<span class="sb_icon" style="background: '+se_icon[0]+';'+noshadow+' "> '+se_icon[1]+'</span> '+el;
          document.getElementById("sb_icon_menu").appendChild(si);
          
        }
        
      })
    }

    function handleKeyPress(e) {
      const key = e.keyCode || e.which;
      var text = document.getElementById("sb_input").value.replaceAll("+", "%2B");
      if (key == 13) search(text);
    }
    document.getElementById("sb_input").onkeydown=(e)=>{handleKeyPress(e)}
    function search(text) {
      var key= sb_dropdown_menu.querySelector("li.active_sb").getAttribute('data-se');
      console.log(key);
      var query = se_data_query[key];
      if(query==undefined){
        var sei = ntp_sb.custom_se[key];
        query=sei[2];
      }
      window.location = query + text;
    }
    f_setup_sb();
  } // End of Search Bar Widget Config 

  //Tiles Grid Widget Config
  if (ntp_sett.status[1]) {
    var targetBlank = getComputedStyle(ntp_bdy).getPropertyValue("--o2");
    var gridT, fldT;
    var timeoutVariable;
    var currentEditedTile;
    var tlg = document.getElementById("tlg");
    const p_tile = document.getElementById('p_tile');
    const i_url = document.getElementById('i_url');
    const fi_url = document.getElementById('fi_url');
    const t_ac = document.getElementById('t_ac');
    const t_url = document.getElementById('t_url');
    const t_lab = document.getElementById('t_lab');
    const ft_lab = document.getElementById('ft_lab');
    const dlg= new modal("#dlg");
    const dlg_fl = document.getElementById("dlg_fl");
    const dlg_tg = document.getElementById("dlg_tg");
    const b_save = document.getElementById('b_save');
    const b_add = document.getElementById('b_add');
    const b_save2 = document.getElementById('b_save2');
    const b_add2 = document.getElementById('b_add2');
    const fldb = document.getElementById("lrt_bfl");
    var fld_current;
    function setTileTarget(value){
      var ar = document.getElementsByClassName("tile_target");
      for (var i = 0; i < ar.length; i++) ar[i].target = value;
      targetBlank= value;
      f_cache_tl();
    }
    
    //Function to cache the tiles 
    function f_cache_tl() {
      if ((typeof localStorage.cachedGridUpdate == "undefined") || ((Date.now() / 1000) - localStorage.cachedGridUpdate) >= 0.1) {
        var y = ntp_sett.order[1];
        ntp_wdg[1].cached = document.getElementById('wdg_' + y).innerHTML;
        localStorage.cachedGridUpdate = (Date.now() / 1000);
        console.log("Cache grid tiles : " + localStorage.cachedGridUpdate);
      }
      localStore("ntp_wdg", ntp_wdg);
    }
    //Toggle lrt for new/edit tile/folder
    function f_dlg(view) {
      if (view == 0) { //New Tile
        dlg_tg.style.display = "inline";
        dlg_fl.style.display = "none";
        b_add.style.display = "inline";
        b_add2.style.display = "none";
        b_save.style.display = 'none';
      }
      if (view == 4) { //Edit Tile
        dlg_tg.style.display = "inline";
        dlg_fl.style.display = "none";
        b_add.style.display = "none";
        b_add2.style.display = "none";
        b_save.style.display = 'inline';
      }
      if (view == 2) { //New Folder
        dlg_tg.style.display = "none";
        dlg_fl.style.display = "inline";
        b_add.style.display = "none";
        b_add2.style.display = "inline";
        b_save.style.display = 'none';
      }
      if (view == 5) { //Edit Folder
        dlg_tg.style.display = "none";
        dlg_fl.style.display = "inline";
        b_add.style.display = "none";
        b_add2.style.display = "none";
        b_save.style.display = 'inline';
      }
      //Show/Hide Dialog
      dlg.show();
      document.getElementById("flt_btn").classList.remove("open");
    }
    function f_dlg_close(){
        p_tile.removeAttribute('src');
        i_url.value = "";
        t_url.value="https://";
        t_lab.value="";
        t_ac.checked = true;
        i_url.disabled = true;
        b_add.style.display = 'inline';
        b_add2.style.display = "none";
        b_save.style.display = 'none';
        dlg.hide();
    }
    document.getElementById("b_close").addEventListener("click",()=>{f_dlg_close()});
    document.getElementById("b_newf").addEventListener("click",()=>{f_dlg(2)});
    document.getElementById("b_newt").addEventListener("click", ()=>{f_dlg(0)});

    //Create a new folder from lrt
    function f_cnf() {
      var div = document.createElement("div");
      div.classList.add("tlg_item", "folder");
      div.innerHTML = '<div class="tlg_img tlg_fld"></div><span id="tlg_span" class="tlg_title">' + ft_lab.value + '</span>';
      tlg.appendChild(div);
      f_evl_gtiles();
      f_cache_tl();
      f_dlg_close();
    }
    function fixURL(value){
      if(value.indexOf('https://')<0 && value.indexOf('http://')<0) return "https://"+value;
      return value;
    }
    //Create a new tile from lrt
    function f_cnt() {
      var newt = {};
      newt["url"] = fixURL(t_url.value);
      var title = t_lab.value;
      if (title == "") title = get_root_domain(newt["url"]);
      newt["title"] = title;
      newt["imgSrc"] = p_tile.src;
      f_attg(newt); //Create new tile and add to grid
      f_dlg_close();
    }
    document.getElementById("b_add").onclick = ()=>{f_cnt()};
    document.getElementById("b_add2").onclick = ()=>{f_cnt()};
    //Edit a tile/folder from grid
    function f_etfg(item) {
      currentEditedTile = item;
      var title = item.textContent;
      if (currentEditedTile.classList.contains("folder")) {
        try {
          var img = item.querySelector('.tlg-img').backgroundImage;
        } catch {}
        ft_lab.value = title;
        f_dlg(5);
      } else {
        var url = item.querySelector('#tile_target').href;
        var img = item.querySelector('#tile_target > img').src;
        t_ac.checked = false;
        i_url.disabled = false;
        p_tile.src = img;
        i_url.value = img;
        t_url.value = url;
        t_lab.value = title;
        f_dlg(4);
      }
    }
    //Set p_tile image from t_url
    function f_sptt(t) {
      if (i_url.disabled) {
        window.clearTimeout(timeoutVariable);
        timeoutVariable = setTimeout(function () {
          var iUrl = "https://logos.kiwibrowser.com/" + get_root_domain(t.value);
          p_tile.src = iUrl;
          i_url.value = iUrl;
        }, 1000);
      }
    }
    //Set p_tile image from i_url
    function f_spti(t) {
      window.clearTimeout(timeoutVariable);
      timeoutVariable = setTimeout(function () {
        p_tile.src = t.value;
      }, 1000);
    }
    //Toggle auto/custom mode of icon tile
    function f_sac(e, s) {
      if (s == 1) {
        if (i_url.disabled) {
          e.checked = false;
          i_url.value = "";
          i_url.disabled = false;
          i_url.select();
          i_url.focus();
        } else {
          e.checked = true;
          var iUrl = "https://logos.kiwibrowser.com/" + get_root_domain(t_url.value);
          window.clearTimeout(timeoutVariable);
          timeoutVariable = setTimeout(function () {
            p_tile.src = iUrl;
          }, 1000);
          i_url.value = iUrl;
          i_url.disabled = true;
        }
      } else {
        if (fi_url.disabled) {
          e.checked = true;
          fi_url.value = "";
          fi_url.disabled = false;
          fi_url.select();
          fi_url.focus();
        } else {
          e.checked = false;
          fi_url.disabled = true;
        }
      }
    }
    document.getElementById("t_ac").onchange = function(){f_sac(this,1);};
    document.getElementById("i_url").onpaste = function(){f_spti(this);};
    document.getElementById("i_url").onblur = function(){f_sptt(this);};
    document.getElementById("t_url").onkeyup = function(){f_sptt(this);};
    //Apply change to edited tile/folder and save
    function f_sedt() {
      var item = currentEditedTile;
      for (i = 0, len = tlg.children.length; i < len; i++)
        if (tlg.children[i] == item) index = i;
      if (!currentEditedTile.classList.contains("folder")) {
        item.querySelector('#tile_target').href = t_url.value;
        const title = t_lab.value;
        if (title == "") title = get_root_domain(newt["url"]);
        item.children[0].children[1].innerHTML = title;
        item.children[0].children[0].src = p_tile.src;
      } else {
        item.children[1].innerHTML = ft_lab.value;
      }
      f_cache_tl();
      f_dlg_close();
    }
    document.getElementById("b_save").onclick = ()=>{f_sedt()};
    //Get fallback icon on preview tile src error
    function f_gfi() {
      var url = i_url.value;
      if (url[30]) p_tile.src = url + "?fallback=1";
    }
    document.getElementById("p_tile").onerror = function(){ f_gfi()};
    //Replace img error src
    function f_iimg(item) {
      var parser = document.createElement('a');
      parser.href = t_url.value;
      item.src = "https://logos.kiwibrowser.com/kiwibrowser.com";
    }
    //Add a tile into the grid 
    function f_attg(item) {
      
      var innerDiv = document.createElement('div');
      innerDiv.className = 'tlg_item';
      innerDiv.innerHTML =
        '<a id="tile_target" class="tile_target" href="' + item.url + '" ' + targetBlank + ' rel="noreferrer">' +
        '<img class="tlg_img" src="' + item.imgSrc +
        '" /><span id="tlg_span" class="tlg_title">' +
        item.title + '</span></a>';
      tlg.appendChild(innerDiv);
      console.log(" Function f_attg -> url : " + item.url + "   |  title : " + item.title + " | img : " + item.imgSrc);
      f_evl_gtiles();
      //Save
      window.setTimeout(function () {
        f_cache_tl();
      }, 200);

    }
    //Function to open folder lrt
    function f_ofld(el) {
      fld_current = el.querySelector('.tlg_fld');
      var tls = fld_current.innerHTML;
      fldb.innerHTML = tls;
      lrt_fl.show();
    }
    //Function to toggle edit mode of folder
    function f_tggl_f() {
      var state = fldT.option("disabled");
      fldT.option("disabled", !state);
      document.getElementById("fld_editA").style.display = (!state) ? 'none' : 'flex';
      if (!state) {
        fld_current.innerHTML = fldb.innerHTML;
        f_cache_tl();
      };
    }
    //Function to toggle edit mode of tiles
    function f_tggl_t() {
      var state = gridT.option("disabled");
      gridT.option("disabled", !state);
      document.getElementById("tlg_sldr").style.display = (!state) ? 'none' : 'flex';
      document.getElementById("tlg_editA").style.display = (!state) ? 'none' : 'flex';
      if (!state) {
        f_cache_tl();
        save_ntpbdy();
      }
    }
    //Function to add listener on tlg_items
    function f_evl_gtiles() {
      var currentFolder = null;
      var folders = document.querySelectorAll(".folder:not(.np)");
     
      Array.from(folders).forEach(e => {
        e.onclick = function () {
          f_ofld(e)
        };
      });
      //To toggle edit mode on grid tiles
      document.getElementById("tlg").oncontextmenu = function (e) {
        e.preventDefault();
        f_tggl_t();
      };
      //To toggle edit mode on folder view
      document.getElementById("lrt_bfl").oncontextmenu = function (e) {
        e.preventDefault();
        f_tggl_f();
      };
      //To exit toggle mode on folder view
      lrt_fl.m.addEventListener('click', function (e) {
        if (e.target == this) {
          e.preventDefault();
          f_tggl_f();
        }
      });
     
    }
    //Function to setup sliders on grid tiles
    function f_setup_sldr() {
      //Add slider options for grid tiles
      if (!document.getElementById("tlg_sldr")) {
        var div = document.createElement("div");
        div.id = "tlg_sldr";
        div.innerHTML = '<div id="sld_tg"><svg class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>   Grid Tiles Sliders</div><div id="sld_vw" class="flex-column"><div><label>Number of Tiles : <span id="tg_r1v"></span> </label><input type="range" min="0" max="8" value="50" class="slr_rng" id="tg_r1"></div>' +
          '<div><label>Tile Width : <span id="tg_r2v"></span> </label><input type="range" min="30" max="200" value="50" class="slr_rng" id="tg_r2"></div>' +
          '<div><label>Tile Space : <span id="tg_r3v"></span> </label><input type="range" min="0" max="100" value="50" class="slr_rng" id="tg_r3"></div>' +
          '<div><label>Tile Rounding : <span id="tg_r4v"></span> </label><input type="range" min="0" max="100" value="50" class="slr_rng" id="tg_r4"></div></div>';
        tlg.parentNode.prepend(div);
      }
      const wid = ((window.innerWidth) ? window.innerWidth : screen.width) - 28; //Get the width of device 
      const tg_r1 = document.getElementById('tg_r1');
      const tg_r2 = document.getElementById('tg_r2');
      const tg_r3 = document.getElementById('tg_r3');
      const tg_r4 = document.getElementById('tg_r4');
      const tg_r1v = document.getElementById('tg_r1v');
      const tg_r2v = document.getElementById('tg_r2v');
      const tg_r3v = document.getElementById('tg_r3v');
      const tg_r4v = document.getElementById('tg_r4v');
      var ntp_tlg = {
        w: parseInt(ntp_bdy.style.getPropertyValue("--tile-w").replace("px", "")),
        m: parseInt(ntp_bdy.style.getPropertyValue("--tile-m").replace("px", "")),
        n: parseInt(ntp_bdy.style.getPropertyValue("--tile-n")),
        r: parseInt(ntp_bdy.style.getPropertyValue("--tile-r").replace("px", "")),
      };
      if (isNaN(ntp_tlg.w)) {
        ntp_tlg = {
          w: 64,
          m: 10,
          n: f_gncols(),
          r: 32
        };
        setTLG();
      }
      tg_r1.value = ntp_tlg.n;
      tg_r1v.innerText=ntp_tlg.n;
      tg_r2.value = ntp_tlg.w;
      tg_r2v.innerText=ntp_tlg.w;
      tg_r3.value = ntp_tlg.m;
      tg_r3v.innerText=ntp_tlg.m;
      tg_r4.setAttribute("max", ntp_tlg.w / 2);
      tg_r4.value = ntp_tlg.r;
      tg_r4v.innerText=ntp_tlg.r;
      tg_r1.addEventListener("input", function () {
        tg_r1v.innerText=tg_r1.value;
        ntp_tlg.n = parseInt(tg_r1.value);
        set_tg_r1();
      });
      tg_r2.addEventListener("input", function () {
        tg_r2v.innerText=tg_r2.value;
        ntp_tlg.w = parseInt(tg_r2.value);
        set_tg_r2();
      });
      tg_r3.addEventListener("input", function () {
        tg_r3v.innerText=tg_r3.value;
        ntp_tlg.m = parseInt(tg_r3.value);
        set_tg_r3();
      });
      tg_r4.addEventListener("input", function () {
        tg_r4v.innerText=tg_r4.value;
        ntp_tlg.r = parseInt(tg_r4.value);
        setTLG();
      });
      //Set values in settings
      function setTLG() {
        tg_r1.value = ntp_tlg.n;
        tg_r2.value = ntp_tlg.w;
        tg_r3.value = ntp_tlg.m;
        tg_r4.setAttribute("max", ntp_tlg.w / 2);
        tg_r4.value = ntp_tlg.r;
        ntp_bdy.style.setProperty("--tile-n", ntp_tlg.n);
        ntp_bdy.style.setProperty("--tile-w", ntp_tlg.w + 'px');
        ntp_bdy.style.setProperty("--tile-m", ntp_tlg.m + 'px');
        ntp_bdy.style.setProperty("--tile-r", ntp_tlg.r + 'px');
        save_ntpbdy();
      }
      //Function to retrieve default number of cols
      function f_gncols() {
        if (wid > 253 && wid < 337) return 3;
        else if (wid > 336 && wid < 421) return 4;
        else if (wid > 420 && wid < 510) return 5;
        else if (wid > 509 && wid < 672) return 6;
        else if (wid > 671) return 8;
        return 2;
      }

      function set_tg_r3() {
        var tCol = parseInt(ntp_tlg.n);
        var tWidth = parseInt(ntp_tlg.w);
        var tMargin = parseInt(ntp_tlg.m);
        var calc = (tCol * (tWidth + tMargin)) + 1;
        while (calc > wid) {
          tWidth -= 1;
          calc = (tCol * (tWidth + tMargin)) + 1;
        }
        ntp_tlg.n = tCol;
        ntp_tlg.w = tWidth;
        ntp_tlg.m = tMargin;
        setTLG();
      }

      function set_tg_r2() {
        var tCol = parseInt(ntp_tlg.n);
        var tWidth = parseInt(ntp_tlg.w);
        var tMargin = 10;
        var calc = (tCol * (tWidth + tMargin)) + 1;
        while (calc > wid) {
          tCol -= 1;
          calc = (tCol * (tWidth + tMargin)) + 1;
          console.log(wid + " . - " + calc)
        }
        ntp_tlg.n = tCol;
        ntp_tlg.m = tMargin;
        setTLG();
      }

      function set_tg_r1() {
        var nCol = parseInt(ntp_tlg.n),
          tWidth = parseInt(ntp_tlg.w),
          tMargin = parseInt(ntp_tlg.m);
        var calc = (nCol * (tWidth + tMargin)) + 1;
        while (calc > wid) {
          calc = (nCol * (tWidth + tMargin)) + 1;
          if (tMargin > 10) tMargin -= 1;
          else tWidth -= 1;
        }
        ntp_tlg.n = nCol;
        ntp_tlg.m = tMargin;
        ntp_tlg.w = tWidth;
        setTLG();
      }
    }

    //Function to exit from editemode
    function process_body_click(e) {

      if (e.target == document.getElementById("sld_tg")) {
        document.getElementById("sld_vw").classList.toggle("open_sld");
        e.preventDefault();
        return;
      }
      if (e.target == document.getElementById("tlg_sldr")) {
        e.preventDefault();
        return;
      }
      if (!gridT.option("disabled")) {
        document.getElementById("sld_vw").classList.remove("open_sld");
        f_tggl_t();
        e.preventDefault();
      }
      if (!fldT.option("disabled")) {
        f_tggl_f();
        e.preventDefault();
      }
      if (e.target == lrt_fl.m) {
        lrt_fl.hide();
        e.preventDefault();
      }
    }

    //Function to setup grid tiles
    function f_setup_gtiles() {
      tlg = document.getElementById("tlg");
      //Check if edit_area is created 
      if (!document.getElementById("tlg_editA")) {
        var div = document.createElement("div");
        div.innerHTML = '<div id="tlg_editA" class="edit_mode"><div id="edit_bin"><svg class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg></div>' +
          '<div id="edit_pencil" ><svg class="_icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg></div></div>';
        tlg.parentNode.appendChild(div);
      }
      var fldtest = document.querySelectorAll(".tlg_fld");
      gridT = new Sortable(tlg, {
        group: {
          name: 'editM',
          pull: 'clone'
        },
        swapThreshold: 0.45,
        invertSwap: true,
        fallbackOnBody: true,
        animation: 150,
        ghostClass: 'hidden',
        disabled: 1,
        direction: "horizontal",
        draggable: ".tlg_item",
        onChange: function (evt) {
          document.getElementById("edit_bin").style.background = "transparent";
          document.getElementById("edit_pencil").style.background = "transparent";
          fldtest.forEach((el)=>{
            el.parentNode.classList.remove("fldHover");
          })
        }
      });
      
      for (var i = 0; i < fldtest.length; i++) {
        new Sortable(fldtest[i], {
          group: {
            name: 'editM',
            pull: 'clone'
          },
          invertSwap: true,
        fallbackOnBody: true,
          animation: 150,
          onAdd: function (evt) {
            var itemEl = evt.clone;
            itemEl.parentNode.removeChild(itemEl);
            fldtest.forEach((el)=>{
              el.parentNode.classList.remove("fldHover");
            })
            document.getElementById("edit_bin").style.background = "transparent";
            document.getElementById("edit_pencil").style.background = "transparent";
          },
          onChange: function (evt) {
            document.getElementById("edit_bin").style.background = "transparent";
            document.getElementById("edit_pencil").style.background = "transparent";
            (evt.to).parentNode.classList.add("fldHover");
          }
        });
      }
      new Sortable(document.getElementById("edit_bin"), {
        group: 'editM',
        animation: 150,
        handle: '.handle',
        onAdd: function (evt) {
          var itemEl = evt.item;
          itemEl.parentNode.removeChild(itemEl);
          itemEl = evt.clone;
          itemEl.parentNode.removeChild(itemEl);
          document.getElementById("edit_bin").style.background = "transparent";
        },
        onChange: function (evt) {
          fldtest.forEach((el)=>{
              el.parentNode.classList.remove("fldHover");
            })
          document.getElementById("edit_pencil").style.background = "transparent";
          document.getElementById("edit_bin").style.background = "red";
        },
      });
      new Sortable(document.getElementById("edit_pencil"), {
        group: 'editM',
        animation: 150,
        handle: '.handle',
        onAdd: function (evt) {
          var itemEl = evt.clone;
          f_etfg(itemEl);
          var itemEl = evt.item;
          itemEl.parentNode.removeChild(itemEl);
          document.getElementById("edit_pencil").style.background = "transparent";
          f_evl_gtiles();
        },
        onChange: function (evt) {
          fldtest.forEach((el)=>{
            el.parentNode.classList.remove("fldHover");
          })
          document.getElementById("edit_bin").style.background = "transparent";
          document.getElementById("edit_pencil").style.background = "green";
        },
      });
      const edit_b2 = document.getElementById("edit_bin2");
      const edit_p2 = document.getElementById("edit_pencil2");
      const edit_o2 = document.getElementById("edit_out2");
      fldT = new Sortable(fldb, {
        group: {
          name: 'editM2',
          pull: 'clone'
        },
        swapThreshold: 0.45,
        invertSwap: true,
        fallbackOnBody: true,
        animation: 150,
        ghostClass: 'hidden',
        disabled: 1,
        direction: "horizontal",
        draggable: ".tlg_item",
        onChange: function (evt) {
          edit_b2.style.background = "transparent";
          edit_p2.style.background = "transparent";
          edit_o2.style.background = "transparent";
        }
      });
      new Sortable(edit_b2, {
        group: 'editM2',
        animation: 150,
        handle: '.handle',
        onAdd: function (evt) {
          var itemEl = evt.item;
          itemEl.parentNode.removeChild(itemEl);
          itemEl = evt.clone;
          itemEl.parentNode.removeChild(itemEl);
          edit_b2.style.background = "transparent";
        },
        onChange: function (evt) {
          edit_p2.style.background = "transparent";
          edit_o2.style.background = "transparent";
          edit_b2.style.background = "red";
        },
      });
      new Sortable(edit_o2, {
        group: 'editM2',
        animation: 150,
        handle: '.handle',
        onAdd: function (evt) {
          var itemEl = evt.item;
          tlg.appendChild(itemEl);
          itemEl = evt.clone;
          itemEl.parentNode.removeChild(itemEl);
          edit_o2.style.background = "transparent";
          f_tggl_f();
          f_evl_gtiles();
        },
        onChange: function (evt) {
          edit_b2.style.background = "transparent";
          edit_o2.style.background = "blue";
          edit_p2.style.background = "transparent";
        },
      });
      new Sortable(edit_p2, {
        group: 'editM2',
        animation: 150,
        handle: '.handle',
        onAdd: function (evt) {
          var itemEl = evt.clone;
          f_etfg(itemEl);
          var itemEl = evt.item;
          itemEl.parentNode.removeChild(itemEl);
          edit_p2.style.background = "transparent";
          f_evl_gtiles();
        },
        onChange: function (evt) {
          edit_b2.style.background = "transparent";
          edit_o2.style.background = "transparent";
          edit_p2.style.background = "green";
        }
      });
      f_evl_gtiles();
      f_setup_sldr();
      window.setTimeout(function () {
        f_cache_tl();
      }, 900);
    }
    //Add body click used to disable edit_mode
    document.body.addEventListener("click", process_body_click);
    f_setup_gtiles();
  } // End of Tiles Grid Widget Config

  //News Section Widget Config
  if (ntp_sett.status[2]) {
    var forceReload = false;
    // Check if 30h passed and clean the news 
    function shouldIC() {
      const date1 = new Date();
      const date2 = new Date(localStorage.shouldIC);
      if (localStorage.shouldIC == undefined) {
        localStorage.shouldIC = date1;
        return false;
      }
      const diffTime = Math.abs(date2 - date1);
      const diffH = Math.ceil(diffTime / (1000 * 60 * 60));
      if (diffH < 30) return false;
      localStorage.shouldI = date1;
      return true;
    }
    //Function that add delete item news on swipe
    function f_astd() {
      var xDown = xDiff = null;
      const ntms = document.getElementsByClassName("news_item");
      for (var i = 0; i < ntms.length; i++) {
        ntms[i].addEventListener(mLstnr[2], f_ev_start, {
          passive: true
        });
        ntms[i].addEventListener(mLstnr[0], f_ev_move, {
          passive: true
        });
        ntms[i].addEventListener(mLstnr[1], f_ev_end, {
          passive: true
        });
      }

      function f_ev_start(evt) {
        xDown = (isTD) ? evt.touches[0].clientX : evt.pageX;
      }

      function f_ev_move(evt) {
        var el = (evt.target.closest("div.news_item"));
        el.style.transition = "margin 0ms";
        if (!xDown) return;
        var xUp = (isTD) ? evt.touches[0].clientX : evt.pageX;
        xDiff = xDown - xUp;
        if (xDiff < 20 && xDiff > -20) return;
        if (xDiff < -20) el.style.marginLeft = ((Math.abs(xDiff))) + 'px';
        else el.style.marginLeft = "-" + (xDiff) + 'px';
        if (xDiff < 130 && xDiff > -130) el.style.opacity = "1" - ((Math.abs(xDiff)) / 130);
      }

      function f_ev_end(evt) {
        var el = (evt.target.closest("div.news_item"));
        if (xDiff > 130 || xDiff < -130) {
          el.parentNode.removeChild(el);
          fc_ns();
        } else {
          el.style.transition = "margin 600ms";
          el.style.opacity = "1";
          el.style.marginLeft = '4px';
        }
        xDiff = xDown = null;
      }
    }
    //Function to cache the news section
    function fc_ns() {
      if ((typeof localStorage.cachedNewsUpdate == "undefined") || ((Date.now() / 1000) - localStorage.cachedNewsUpdate) >= 0.1) {
        const y = ntp_sett.order[2];
        ntp_wdg[2].cached = document.getElementById('wdg_' + y).innerHTML;
        localStorage.cachedNewsUpdate = (Date.now() / 1000);
        console.log("Cache news section : " + localStorage.cachedNewsUpdate);
      }
      localStore("ntp_wdg", ntp_wdg);
    }
    //Function to toggle news view mode ( compact / standard )
    function f_tnv() {
      
      if (getComputedStyle(ntp_bdy).getPropertyValue("--o4") == "150px") {
        ntp_bdy.style.setProperty("--o4", "auto");
        
      } else {
        ntp_bdy.style.setProperty("--o4", "150px");
      }
      save_ntpbdy();
      fc_ns();
    }
    //Function to reload news ( 1 for full clean )
    function f_nsrl(t) {
      if (t == 1 || t == 2) {
        localStorage.removeItem('itemsNews');
        localStorage.newsLe = document.getElementById('newsL').value;
        document.getElementById('news').innerHTML = '';
        if (t == 2) ntoast.success("Fetched news cleaned !");
      }
      localStorage.removeItem('cachedNewsUpdate');
      forceReload = true;
      loadGNews();
      window.setTimeout(function () {
        f_astd();
      }, 1000);
      window.setTimeout(function () {
        f_astd();
      }, 2000);
    }
    document.getElementById("b_cfn").onclick=()=>{f_nsrl(2)};
    document.getElementById("newsL").onchange=()=>{f_nsrl(1)};
    //Function to convert locale into readable text
    function locale_to_readabletext(string) {
      string = string.replace('%3A', ':');
      for (let locale in locales) {
        if (locales[locale].replace('%3A', ':') == string)
          return locale;
      }
      return null;
    }
    var loadingSVG;
    //Function for svg loading news animation
    function render_news_loading() {
      loadingSVG = document.createElement('div');
      loadingSVG.id = "loadingNW";
      loadingSVG.innerHTML = '<svg x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"><rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"/></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"/></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"/><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"/></rect></svg>';
      document.getElementById('news').prepend(loadingSVG);
    }
    //Function to create an id for news to track them
    function c_itemnews_ID(title) {
      var result = title.toUpperCase().replace(/\b(\S{1,2})\S*/g, '$1').replace(/ /g, '').replace(/[^a-z0-9]/gi, '');
      var tResult = result.substring(0, 8);
      return tResult;
    }
    //Function to add a news item 
    function add_gnews(title, news_time, source, source_logo, link, image) {
      const itemID = c_itemnews_ID(title);
      //If the news has been fetched, don't add it
      if ((localStorage.itemsNews && (localStorage.itemsNews).indexOf(itemID) > -1)) return;
      var itemsNews = [];
      if (localStorage.getItem('itemsNews')) itemsNews = JSON.parse(localStorage.getItem('itemsNews'));
      itemsNews.push(itemID);
      localStorage.setItem('itemsNews', JSON.stringify(itemsNews));
      var innerDiv = document.createElement('div');
      innerDiv.className = 'news_item';
      innerDiv.id = itemID;
      innerDiv.innerHTML = '<img src="' + image + '" class="news_img" alt="Article Source" />' +
        '<div class="news_cnt">' +
        '<span class="news_attr"><img src="' + source_logo + '"/ alt="Article Image">&nbsp;&nbsp;&nbsp;<a href="' + link + '">' + source +
        '</a></span>' +
        '<div class="news_title"><a href="' + link + '">' +
        title + '</a></div>' +
        '<span class="news_time" data-time="' + news_time.a + '">' + news_time.b + '</span></a></div>';
      document.getElementById('news').prepend(innerDiv);
    }
    //Function to render news ( get news from gnews )
    function render_gnews(answer) {
      var el = document.createElement('div');
      el.style.display = 'none';
      el.baseURI = newsServer;
      el.innerHTML = answer.replace(new RegExp('<img', 'gi'), '<source');
      var articles = el.getElementsByTagName('article');
      loadingSVG.remove();
      for (var i = articles.length - 1; i > 0; i--) {
        var article = articles[i];
        var title = null;
        var link = null;
        var image = null;
        var source = null;
        var source_logo = null;
        var news_time = null;
        link = article.querySelector("a.VDXfz").href;
        title = article.querySelector("h4 a.DY5T1d").innerHTML;
        try {
          image = article.querySelector(".QwxBBf").src;
        } catch {}
        source = article.querySelector("a.wEwyrc").innerHTML;
        source_logo = article.querySelector(".wsLqz source").src;
        news_time = {
          'a': article.querySelector(".WW6dff").getAttribute("datetime"),
          'b': article.querySelector(".WW6dff").innerHTML
        };
        if (link) link = link.replace(/.+?(?=articles)/, 'https://news.google.com/');
        if (link && image && title) {
          add_gnews(title, news_time, source, source_logo, link, image);
        }
      }
      fc_ns(); //Cache the news items
    }
    console.log('News locale is ' + localStorage.newsLe);
    //Function to load news 
    function loadGNews() {
      if (shouldIC()) {
        document.getElementById('news').innerHTML == ""
      }
      if ((document.getElementById('news').innerHTML == "") ||
        ((Date.now() / 1000) - localStorage.cachedNewsUpdate) > 3600 || forceReload) {
        forceReload = false;
        console.log("Fetching news..");
        render_news_loading();
        
        try {
          fetch(newsServer + localStorage.newsLe, {
              method: 'GET',
              mode: 'cors'
            })
            .then(function (response) {
              if (response.url.includes("&ceid=")) {
                localStorage.newsLe = response.url.substr(response.url.lastIndexOf('?'));
              }
              return response.text();
            })
            .then(function (answer) {
              render_gnews(answer);
              localStorage.cachedNewsUpdate = (Date.now() / 1000);
            }).catch(function() {
              console.log("error fetch");
          });
        } catch (err) {
          console.log('Fetch generic news failed for: ' + err.message);
        }
      }
    }
    const locales = {
      'English | Australia': '?hl=en-AU&gl=AU&ceid=AU:en',
      'English | Botswana': '?hl=en-BW&gl=BW&ceid=BW:en',
      'English | Canada': '?hl=en-CA&gl=CA&ceid=CA:en',
      'English | Ethiopia': '?hl=en-ET&gl=ET&ceid=ET:en',
      'English | Ghana': '?hl=en-GH&gl=GH&ceid=GH:en',
      'English | India': '?hl=en-IN&gl=IN&ceid=IN:en',
      'English | Indonesia': '?hl=en-ID&gl=ID&ceid=ID:en',
      'English | Ireland': '?hl=en-IE&gl=IE&ceid=IE:en',
      'English | Israel': '?hl=en-IL&gl=IL&ceid=IL:en',
      'English | Kenya': '?hl=en-KE&gl=KE&ceid=KE:en',
      'English | Latvia': '?hl=en-LV&gl=LV&ceid=LV:en',
      'English | Malaysia': '?hl=en-MY&gl=MY&ceid=MY:en',
      'English | Namibia': '?hl=en-NA&gl=NA&ceid=NA:en',
      'English | New Zealand': '?hl=en-NZ&gl=NZ&ceid=NZ:en',
      'English | Nigeria': '?hl=en-NG&gl=NG&ceid=NG:en',
      'English | Pakistan': '?hl=en-PK&gl=PK&ceid=PK:en',
      'English | Philippines': '?hl=en-PH&gl=PH&ceid=PH:en',
      'English | Singapore': '?hl=en-SG&gl=SG&ceid=SG:en',
      'English | South Africa': '?hl=en-ZA&gl=ZA&ceid=ZA:en',
      'English | Tanzania': '?hl=en-TZ&gl=TZ&ceid=TZ:en',
      'English | Uganda': '?hl=en-UG&gl=UG&ceid=UG:en',
      'English | United Kingdom': '?hl=en-GB&gl=GB&ceid=GB:en',
      'English | United States': '?hl=en-US&gl=US&ceid=US:en',
      'English | Zimbabwe': '?hl=en-ZW&gl=ZW&ceid=ZW:en',
      'Bahasa Indonesia | Indonesia': '?hl=id&gl=ID&ceid=ID%3Aid',
      'Čeština | Česko': '?hl=cs&gl=CZ&ceid=CZ%3Acs',
      'Deutsch | Deutschland': '?hl=de&gl=DE&ceid=DE%3Ade',
      'Deutsch | Österreich': '?hl=de&gl=AT&ceid=AT%3Ade',
      'Deutsch | Schweiz': '?hl=de&gl=CH&ceid=CH%3Ade',
      'Español | Argentina': '?hl=es-419&gl=AR&ceid=AR%3Aes-419',
      'Español | Chile': '?hl=es-419&gl=CL&ceid=CL%3Aes-419',
      'Español | Colombia': '?hl=es-419&gl=CO&ceid=CO%3Aes-419',
      'Español | Cuba': '?hl=es-419&gl=CU&ceid=CU%3Aes-419',
      'Español | Estados Unidos': '?hl=es-419&gl=US&ceid=US%3Aes-419',
      'Español | México': '?hl=es-419&gl=MX&ceid=MX%3Aes-419',
      'Español | Perú': '?hl=es-419&gl=PE&ceid=PE%3Aes-419',
      'Español | Venezuela': '?hl=es-419&gl=VE&ceid=VE%3Aes-419',
      'Français | Belgique': '?hl=fr&gl=BE&ceid=BE%3Afr',
      'Français | Canada': '?hl=fr-CA&gl=CA&ceid=CA:fr',
      'Français | France': '?hl=fr&gl=FR&ceid=FR%3Afr',
      'Français | Maroc': '?hl=fr&gl=MA&ceid=MA%3Afr',
      'Français | Sénégal': '?hl=fr&gl=SN&ceid=SN%3Afr',
      'Français | Suisse': '?hl=fr&gl=CH&ceid=CH%3Afr',
      'Italiano | Italia': '?hl=it&gl=IT&ceid=IT%3Ait',
      'Latviešu | Latvija': '?hl=lv&gl=LV&ceid=LV%3Alv',
      'Lietuvių | Lietuva': '?hl=lt&gl=LT&ceid=LT%3Alt',
      'Magyar | Magyarország': '?hl=hu&gl=HU&ceid=HU%3Ahu',
      'Nederlands | België': '?hl=nl&gl=BE&ceid=BE%3Anl',
      'Nederlands | Nederland': '?hl=nl&gl=NL&ceid=NL%3Anl',
      'Norsk | Norge': '?hl=no&gl=NO&ceid=NO%3Ano',
      'Polski | Polska': '?hl=pl&gl=PL&ceid=PL%3Apl',
      'Português | Brasil': '?hl=pt-BR&gl=BR&ceid=BR%3Apt-419',
      'Português | Portugal': '?hl=pt-PT&gl=PT&ceid=PT%3Apt-150',
      'Română | România': '?hl=ro&gl=RO&ceid=RO%3Aro',
      'Slovenčina | Slovensko': '?hl=sk&gl=SK&ceid=SK%3Ask',
      'Slovenščina | Slovenija': '?hl=sl&gl=SI&ceid=SI%3Asl',
      'Svenska | Sverige': '?hl=sv&gl=SE&ceid=SE%3Asv',
      'Tiếng Việt | Việt Nam': '?hl=vi&gl=VN&ceid=VN%3Avi',
      'Türkçe | Türkiye': '?hl=tr&gl=TR&ceid=TR%3Atr',
      'Ελληνικά | Ελλάδα': '?hl=el&gl=GR&ceid=GR%3Ael',
      'Български | България': '?hl=bg&gl=BG&ceid=BG%3Abg',
      'Русский | Россия': '?hl=ru&gl=RU&ceid=RU%3Aru',
      'Русский | Украина': '?hl=ru&gl=UA&ceid=UA%3Aru',
      'Српски | Србија': '?hl=sr&gl=RS&ceid=RS%3Asr',
      'Українська | Україна': '?hl=uk&gl=UA&ceid=UA%3Auk',
      'עברית | ישראל': '?hl=he&gl=IL&ceid=IL%3Ahe',
      'العربية | الإمارات العربية المتحدة': '?hl=ar&gl=AE&ceid=AE%3Aar',
      'العربية | المملكة العربية السعودية': '?hl=ar&gl=SA&ceid=SA%3Aar',
      'العربية | لبنان': '?hl=ar&gl=LB&ceid=LB%3Aar',
      'العربية | مصر': '?hl=ar&gl=EG&ceid=EG%3Aar',
      'मराठी | भारत': '?hl=mr&gl=IN&ceid=IN%3Amr',
      'हिन्दी | भारत': '?hl=hi&gl=IN&ceid=IN%3Ahi',
      'বাংলা | বাংলাদেশ': '?hl=bn&gl=BD&ceid=BD%3Abn',
      'தமிழ் | இந்தியா': '?hl=ta&gl=IN&ceid=IN%3Ata',
      'മലയാളം | ഇന്ത്യ': '?hl=ml&gl=IN&ceid=IN%3Aml',
      'తెలుగు | భారతదేశం': '?hl=te&gl=IN&ceid=IN%3Ate',
      'ไทย | ไทย': '?hl=th&gl=TH&ceid=TH%3Ath',
      '中文 | 中国': '?hl=zh-CN&gl=CN&ceid=CN:zh-Hans',
      '中文 | 台灣': '?hl=zh-TW&gl=TW&ceid=TW%3Azh-Hant',
      '中文 | 香港': '?hl=zh-HK&gl=HK&ceid=HK%3Azh-Hant',
      '한국어 | 대한민국': '?hl=ko&gl=KR&ceid=KR%3Ako',
    };
    if (!localStorage.newsLe) localStorage.newsLe = "?hl=en-US&gl=US&ceid=US:en";
    document.getElementById('newsL').value = localStorage.newsLe;
    //Add options for news locale
    const sel = document.getElementById("newsL");
    if (sel.options.length < 20) {
      for (var el in locales) {
        var opt = document.createElement('option');
        opt.appendChild(document.createTextNode(el));
        opt.value = locales[el];
        sel.appendChild(opt);
        if (locales[el] == localStorage.newsLe) opt.selected = true;
      }
    }
    preconnectTo(newsServer);
    loadGNews();
    //Add swipe to delete on news items
    window.setTimeout(function () {
      f_astd();
    }, 1000);
    window.setTimeout(function () {
      f_astd();
    }, 2000);
  }
  //End of News Section Widget Config

  //Config widgets ordering and toggle
  Sortable.create(document.getElementById("stt_lwo"), {
    handle: '.stt_lwoh',
    animation: 150,
    onEnd: function (evt) {
      var list = document.getElementById("stt_lwo").getElementsByTagName("li");
      for (var z = 0; z < list.length; z++) {
        var y = parseInt(list[z].getAttribute("data-order"));
        ntp_sett.order[y] = z;
        orderListChanged = 1;
      }
      load_widgets();
      localStore("ntp_sett", ntp_sett);
      if (ntp_sett.status[1]) {
        f_setup_gtiles();
      }
      if (ntp_sett.status[4]) {
        f_setup_tabs();
      }
      if (ntp_sett.status[3]) {
        f_setup_wth();
      }
      wait(100);
    }
  });

  function toggle_widget(i) {
    var y = ntp_sett.order[i];
    var status = (ntp_sett.status[i] == 1) ? 0 : 1;
    console.log(" Widget : " + i + " Order : " + y + " Status :" + ntp_sett.status[i] + " - >" + status);
    ntp_sett.status[i] = status;
    document.getElementById("wdg_" + y).style.display = (status) ? "block" : "none";
    customInner(document.getElementById("wdg_" + y), (status) ? ntp_wdg[i].cached : "");
    localStore("ntp_sett", ntp_sett);
    if (ntp_sett.status[i] && i == 1) f_setup_gtiles();
  }
  //End of Config widgets ordering and toggle

  //Function to generate gradient color
  function random_gradient() {
    var colorOne = {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255)
    };
    var colorTwo = {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255)
    };
    colorOne.rgb = 'rgb(' + colorOne.R + ',' + colorOne.G + ',' + colorOne.B + ')';
    colorTwo.rgb = 'rgb(' + colorTwo.R + ',' + colorTwo.G + ',' + colorTwo.B + ')';
    var gradientC = 'radial-gradient(at top left, ' + colorOne.rgb + ', ' + colorTwo.rgb + ')';

  }

  //********* BG Wallpaper */
  const wDevice = (window.innerWidth) ? window.innerWidth : screen.width;
  const hDevice = (window.innerHeight) ? (window.innerHeight + 56) : screen.height;
  const bg_pld = document.getElementById('bg_pld'),
    crop = document.getElementById('crop'),
    result = document.getElementById('result'),
    imgRes = document.getElementById('imgRes'),
    crpp = document.getElementById('croppie');
  var cr, cr_img = '',
    img_w = wDevice / 2.5,
    img_h = hDevice / 2.5,
    isCrop = 0;
  while (img_w > 670) {
    img_w = img_w / 1.2;
    img_h = img_h / 1.2;
  }
  ntp_bdy.style.setProperty("--bg-cw", img_w + "px");
  ntp_bdy.style.setProperty("--bg-ch", img_h + "px");
  var bg_value_l = getComputedStyle(document.body).getPropertyValue("--bg-img-l");
  document.getElementById("wllp_value_l").value = bg_value_l;
  var bg_value_d = getComputedStyle(document.body).getPropertyValue("--bg-img-d");
  document.getElementById("wllp_value_d").value = bg_value_d;

  function savebg_cropped(t) {
    ntp_bdy.style.setProperty("--bg-img-l", "url(" + imgRes.src + ")");
    ntp_bdy.style.setProperty("--bg-img-d", "var(--bg-img-l)");
    ntp_bdy.style.setProperty("--bg-cl", "#fff");
    save_ntpbdy();
    ntoast.success(" Background saved !");
    cropCancel();
  }
  const wllp_file_l = document.getElementById("wllp_file_l");
  const wllp_file_d = document.getElementById("wllp_file_d");
  function random_gradient() {
    var colorOne = {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255)
    };
    var colorTwo = {
      R: Math.floor(Math.random() * 255),
      G: Math.floor(Math.random() * 255),
      B: Math.floor(Math.random() * 255)
    };
    colorOne.rgb = 'rgb(' + colorOne.R + ',' + colorOne.G + ',' + colorOne.B + ')';
    colorTwo.rgb = 'rgb(' + colorTwo.R + ',' + colorTwo.G + ',' + colorTwo.B + ')';
    return 'radial-gradient(at top left, ' + colorOne.rgb + ', ' + colorTwo.rgb + ')';
  }
  function f_wallp1(a) {
    var file = (a=="l")? wllp_file_l.files[0] : wllp_file_d.files[0] ;
    if (file && file.type.match('image.*')) {
      var reader = new FileReader();
      reader.onload = function (e) {
        bg_pld.style.display = "none";
        if (cr_img == '') {
          cr_img = e.target.result;
          cropInit();
        } else {
          cr_img = e.target.result;
          bindCropImg();
        }
        crop.style.display = "inline";
      }
      reader.readAsDataURL(file);
    }
  }
  function f_wallp2() {
    var url = prompt("Enter url of the wallpaper . \nExample : ", "url");
    var image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = function (e) {
      bg_pld.style.display = "none";
      if (cr_img == '') {
        cr_img = image.src;
        cropInit();
      } else {
        cr_img = image.src;
        bindCropImg();
      }
      crop.style.display = "inline";
    };
    image.src = (url);
  }
  function f_wallp3(a) {
    var rg = random_gradient()
    document.body.style.setProperty("--bg-img-"+a, rg);
    document.getElementById("wllp_value_"+a).value = rg;
  }
  wllp_file_l.onchange = () => {
    f_wallp1("l");
  };
  wllp_file_d.onchange = () => {
    f_wallp1("d");
  };
  document.getElementById("wllp_url_l").onclick = () => {
    f_wallp2("l");
  };
  document.getElementById("wllp_url_d").onclick = () => {
    f_wallp2("d");
  };
  document.getElementById("wllp_gradient_l").onclick = () => {
    f_wallp3("l");
  };
  document.getElementById("wllp_gradient_d").onclick = () => {
    f_wallp3("d");
  };
  document.getElementById("wllp_bg_cl").onclick = () => {
    f_cp_bg("l");
  };
  document.getElementById("wllp_bg_cd").onclick = () => {
    f_cp_bg("d");
  };
  function f_wallp4(a) {
    var v = document.getElementById("wllp_value_"+a).value;
    document.body.style.setProperty("--bg-img-"+a, v);
    document.body.style.setProperty("--bg-c"+a, v);
    save_ntpbdy();
    ntoast.success(" Background saved !");
  }
  document.getElementById("wllp_custom_l").onclick = () => {
    f_wallp4("l");
  };
  document.getElementById("wllp_custom_d").onclick = () => {
    f_wallp4("d");
  };
  document.getElementById("wllp_clearvalue_l").onclick = () => {
    document.getElementById("wllp_value_l").value = "";
  };
  document.getElementById("wllp_clearvalue_d").onclick = () => {
    document.getElementById("wllp_value_d").value = "";
  };


  //********* Cropping  *********/
  function cropInit() {
    cr = new Croppie(crpp, {
      viewport: {
        width: img_w,
        height: img_h
      },
      boundary: {
        width: img_w,
        height: img_h
      },
      mouseWheelZoom: false,
      enableOrientation: true
    });
    bindCropImg();
  }

  function bindCropImg() {
    cr.bind({
      url: cr_img
    })
  }

  function cropCancel() {
    if (bg_pld.style.display == "none") {
      bg_pld.style.display = "inline";
      crop.style.display = "none";
      result.style.display = "none";
      wllp_file_l.value = "";
      wllp_file_d.value = "";
      isCrop = 0;
    }
  }

  function cropResult() {
    if (!isCrop) {
      isCrop = 1;
      cr.result({
        type: 'base64', // canvas(base64)|html
        size: '{width:wDevice, height:hDevice}',
        format: 'jpeg', //'jpeg'|'png'|'webp'
        quality: 1 //0~1
      }).then(function (resp) {
        crop.style.display = "none";
        imgRes.src = resp;
        result.style.display = "inline";
      });
    }
  }
  document.getElementById("b_cc").onclick = ()=>{cropCancel()};
  document.getElementById("b_cc2").onclick = ()=>{cropCancel()};
  document.getElementById("b_cr").onclick = ()=>{cropResult()};
  document.getElementById("b_sbgc").onclick = ()=>{savebg_cropped(this);};

  //********  Color picker ******/
  var cp_current_el;
  var cp_type;
  var picker = new Picker({
    parent: document.querySelector('#cp_v'),
    popup: false,
    cancelButton: true,
    onDone: function (color) {
      if (cp_current_el != null && cp_current_el != "bgcl" && cp_current_el != "bgcd" && cp_current_el != "mtcl" && cp_current_el != "mtcd") {
        if(cp_type == "clight")
          ntp_bdy.style.setProperty("--cl" + cp_current_el, color.hex);
        if(cp_type == "cdark")
          ntp_bdy.style.setProperty("--cd" + cp_current_el, color.hex);
        save_ntpbdy();
      } else {
        if (cp_current_el == "bgcl") {
          ntp_bdy.style.setProperty("--bg-img-l", "none");
          ntp_bdy.style.setProperty("--bg-cl", color.hex);
          save_ntpbdy();
        } else if (cp_current_el == "bgcd") {
          ntp_bdy.style.setProperty("--bg-img-d", "none");
          ntp_bdy.style.setProperty("--bg-cd", color.hex);
          save_ntpbdy();
        } else {
          if(cp_current_el =="mtcl"){
            mtc.light=color.hex;
            document.getElementById("sett_mtc").style.background = color.hex;
          }else{
            mtc.dark=color.hex;
            document.getElementById("sett_mtc1").style.background = color.hex;
          }
          document.querySelector("meta[name=theme-color]").setAttribute("content", color.hex);
          localStorage.setItem("ntp_mtc", JSON.stringify(mtc));
        }
      }
      cl_vn.hide();
    }
  });

  function f_cp_mtc(a) {
    if(a == 0){
      cp_current_el = "mtcl";
      picker.setColor(mtc.light, true);
    }else{
      cp_current_el = "mtcd";
      picker.setColor(mtc.dark, true);
    }
    cl_vn.show();
  }

  function f_cp_bg(a) {
    cp_current_el = "bgc"+a;
    let color = getComputedStyle(ntp_bdy).getPropertyValue("--bg-c"+a);
    picker.setColor(color, true);
    cl_vn.show();
  }

  function f_cp_rgb(t) {
    cp_current_el = t;
    cp_type="clight";
    let color = getComputedStyle(ntp_bdy).getPropertyValue("--cl" + t);
    picker.setColor(color, true);
    cl_vn.show();
  }
  function f_cpd_rgb(t) {
    cp_current_el = t;
    cp_type="cdark";
    let color = getComputedStyle(ntp_bdy).getPropertyValue("--cd" + t);
    picker.setColor(color, true);
    cl_vn.show();
  }

  function f_close_cl() {
    cl_vn.hide();
  }

  var stt_cl = document.querySelectorAll(".stt_clfrt");
  stt_cl.forEach((el)=>{
    var s = el.id;
    var s1 = s.split("_");
    el.addEventListener("click",function (){
      if(s1[1] == "cl"){
        f_cp_rgb(parseInt(s1[2]));
      }else if(s1[1] == "cld"){
        f_cpd_rgb(parseInt(s1[2]));
      }else{
        if(s[1] == "mtc")
          f_cp_mtc(0)
        else
          f_cp_mtc(1)
      }
    });
  });
}

//*Search bar shadow on highlight */
document.getElementById("sb_input").addEventListener("focus", addShadow);
document.getElementById("sb_input").addEventListener("blur", removeShadow);

function addShadow() {
  document.getElementById("sb_input").style.boxShadow = "var(--sb-shadow)";
}
function removeShadow() {
  document.getElementById("sb_input").style.boxShadow = "none";
}

const tg_r77 = document.getElementById('tg_r77');
  const tg_r77vs = document.getElementById('tg_r77v');
  var tg_r77v = parseInt(ntp_bdy.style.getPropertyValue("--bg-blur").replace("px", ""));
  tg_r77vs.innerText=tg_r77v;
  if (isNaN(tg_r77v)) {
    tg_r77v = 0;
    tg_r77vs.innerText=tg_r77v;
    ntp_bdy.style.setProperty("--bg-blur", tg_r77v + "px");
    save_ntpbdy();
  }
  tg_r77.value = tg_r77v;
  tg_r77.addEventListener("input", function () {
    tg_r77v = parseInt(tg_r77.value);
    tg_r77vs.innerText=tg_r77v;
    ntp_bdy.style.setProperty("--bg-blur", tg_r77v + "px");
    save_ntpbdy();
  });

  const tg_r777 = document.getElementById('tg_r777');
  const tg_r777vs = document.getElementById('tg_r777v');
  var tg_r777v = parseInt(ntp_bdy.style.getPropertyValue("--bg-dark").replace("%", ""));
  tg_r777vs.innerText=tg_r777v;
  if (isNaN(tg_r777v)) {
    tg_r777v = 100;
    tg_r777vs.innerText=tg_r777v;
    ntp_bdy.style.setProperty("--bg-dark", tg_r777v + "%");
    save_ntpbdy();
  }
  tg_r777.value = tg_r777v;
  tg_r777.addEventListener("input", function () {
    tg_r777v = parseInt(tg_r777.value);
    tg_r777vs.innerText=tg_r777v;
    ntp_bdy.style.setProperty("--bg-dark", tg_r777v + "%");
    save_ntpbdy();
  });

  var ls_size= localGet("ls_size");
  const size_p= document.getElementById('size_progress');
  function gen(n) {
    return new Array((n * 1024) + 1).join('a')
  }
  function set_maxSize(){
    var size;
    // Determine size of localStorage if it's not set
    if (!localStorage.getItem('ls_size')) {
      var i = 0;
      try {
          // Test up to 10 MB
          for (i = 0; i <= 10000; i += 250) {
              localStorage.setItem('test', gen(i));
          }
      } catch (e) {
          localStorage.removeItem('test');
          localStorage.setItem('ls_size', i ? i - 250 : 0);
      }
    }      
    size= localStorage.getItem('ls_size');
    document.getElementById('size').innerHTML = size;
    size_p.setAttribute("maxValue",size);
  }
  function get_usedSize(){
    var _lsTotal = 0,
    _xLen, _x;
    for (_x in localStorage) {
      if (!localStorage.hasOwnProperty(_x)) {
          continue;
      }
      _xLen = ((localStorage[_x].length + _x.length) * 2);
      _lsTotal += _xLen;
    };
    var total = (_lsTotal / 1024).toFixed(0);
    document.getElementById('size_used').innerHTML =total;
    size_p.setAttribute("value",total);
  }
  if(ls_size==undefined){
    get_usedSize();
    set_maxSize();
  }else{
 
    document.getElementById('size').innerHTML = localStorage.getItem('ls_size');
    get_usedSize();
  }
  
  document.getElementById("size_calc").onclick=()=>{
    get_usedSize();
    set_maxSize();
  }