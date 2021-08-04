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
var kiwiIcon = "data:image/png;base64,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";
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
  //Function to export NTP settings and widgets
  document.getElementById('export-data').onclick = function () {
    //Create a copy of localstorage
    var dataStr = JSON.stringify(localStorage);
    var dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
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
    var dataStr = localStorage;
    delete dataStr.itemsNews;
    delete dataStr.newsLe;
    delete dataStr.ntp_sb;
    delete dataStr.ntp_wdg;
    delete dataStr.shouldIC;
    delete dataStr.ntp_ver;
    delete dataStr.cachedNewsUpdate;
    delete dataStr.cachedGridUpdate;
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
      Object.assign(localStorage,data)
      console.log(localStorage);
      localStorage.ntp_ver = ntp_ver;
    };
    reader.readAsText(file);
    location.reload();
  };
    //Function to import NTP Theme
    document.getElementById('import-theme').onchange = function () {
      var file = this.files[0];
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        var str = this.result;
        var data = JSON.parse(str);
        delete data.itemsNews;
        delete data.newsLe;
        delete data.ntp_sb;
        delete data.ntp_wdg;
        delete data.shouldIC;
        delete data.ntp_ver;
        delete data.cachedNewsUpdate;
        delete data.cachedGridUpdate;
        console.log(data);
        Object.assign(localStorage,data);
        console.log(localStorage);
        localStorage.ntp_ver = ntp_ver;
      };
      reader.readAsText(file);
      location.reload();
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

if (window.chrome.embeddedSearch.newTabPage.isIncognito) {
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
        chd = '<div id="sb_r"><img id="sb_logo" alt="">' +
          '<input name="sb_input" type="text" id="sb_input" size="50" spellcheck="false" onkeydown="handleKeyPress(event)"></div>'
        break;
      case 1:
        chd = '<div id="tlg"> <div class="tlg_item folder"> <div class="tlg_img tlg_fld"></div><span id="tlg_span" class="tlg_title">Folder</span></a> </div><div class="tlg_item"> <a id="tile_target" class="tile_target" href="https://kiwibrowser.com"> <img class="tlg_img" src="https://logos.kiwibrowser.com/kiwibrowser.com" onerror="f_iimg(this)" alt=""> <span id="tlg_span" class="tlg_title">Kiwi Browser</span> </a> </div></div>';
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
        customInner(wdgn, ntp_wdg[z].cached);
      } else {
        wdgn.style.display = "none";
        customInner(wdgn, "...");
      }
      if (orderListChanged == 0) {
        list[y].setAttribute("data-order", z);
        customInner(list[y], '<svg class="_icon stt_lwoh" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>' + ntp_wdg[z].name + '</label><input ' +
          'class="toggle" type="checkbox" onchange="toggle_widget(' + y + ')" ' + c + '/>');
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

  

  //Search Bar Settings Config
  var ntp_sb = localGet("ntp_sb");
  if (ntp_sb == undefined) {
    ntp_sb = { //SearchBar kiwiIcon
      logo: "./nextntpd.svg",
      sK: {
        "placeholder": "Search with commands..",
        "key": ",",
        "default": "d",
        "b": "https://bing.com/search?q=",
        "g": "https://google.com/search?q=",
        "d": "https://duckduckgo.com/?q=",
        "r": "https://www.reddit.com/search?q=",
        "y": "https://www.youtube.com/results?q="
      }
    };
    localStore("ntp_sb", ntp_sb);
  }
  const sb_len = document.getElementById("sb_len");
  var sk = ntp_sb.sK;
  var sb_len_v = "";
  for (var key in sk) {
    sb_len_v += key + ' -> ' + sk[key] + '\n';
  }
  sb_len.value = sb_len_v;
  //Function to remove multiple, leading or trailing spaces 
  function f_trim(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    return s;
  }
  //Function to save search bar config
  function f_svsbc() {
    var tlen = f_trim(document.getElementById("sb_len").value)+"\n";
    var error = false;
    var lines = tlen.split('\n');
    lines.splice(-1, 1);
    lines= lines.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
    var sKc = {};
    for (var i = 0; i < lines.length; i++) {
      var zlen = lines[i].split("->");
      if (zlen.length != 2) {
        i = lines.length;
        error = true;
      } else {
        sKc[f_trim(zlen[0])] = f_trim(zlen[1]);
      }
    }
    error = error || !(sKc['placeholder'] && sKc['key'] && sKc['default']);
    if (error) {
      ntoast.warn("Looks like you removed important keywords like \n-placeholder\n-key\n-default\n ");
      ntoast.warn("Make sure to follow the syntax too :'k' -> 'value'");
    } else {
      ntp_sb.sK = sKc;
      localStore("ntp_sb", ntp_sb);
      f_setup_sb();
      ntoast.success("Search Bar Config saved !");
    }
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
  sett_sblgp.src = ntp_sb.logo;

  function f_sb_lg1() {
    // fetch FileList object
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
    };
    img.src = (url);
  }
  //End of Search Bar Settings Config

  //Search Bar Widget Config 
  if (ntp_sett.status[0]) {
    function f_cache_sb() {
      const y = ntp_sett.order[0];
      ntp_wdg[0].cached = document.getElementById('wdg_' + y).innerHTML;
      localStorage.cachedNewsUpdate = (Date.now() / 1000);
      console.log("Cache search bar");
      localStore("ntp_wdg", ntp_wdg);
    }
    String.prototype.replaceAll = function (search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
    };

    function f_setup_sb() {
      document.getElementById("sb_input").placeholder = ntp_sb.sK["placeholder"];
      if (sb_logo.src != ntp_sb.logo) {
        sb_logo.src = ntp_sb.logo;
        f_cache_sb();
      }
    }

    function handleKeyPress(e) {
      const key = e.keyCode || e.which;
      var text = document.getElementById("sb_input").value.replaceAll("+", "%2B");
      if (key == 13) search(text);
    }

    function search(text) {
      var option = text.substr(1, text.indexOf(' ') - 1) || text.substr(1);
      var subtext = text.substr(2 + option.length);
      var sK = ntp_sb.sK;
      var def_se = sK[sK["default"]];
      var key_se = sK[option];
      if (text[0] === sK["key"]) {
        if (text.indexOf(' ') > -1 && key_se != undefined)
          window.location = key_se + subtext;
        else {
          if (key_se != undefined)
            window.location = (key_se).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)[0];
          else
            window.location = def_se + subtext;
        }
      } else
        window.location = def_se + text;
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
    //Get fallback icon on preview tile src error
    function f_gfi() {
      var url = i_url.value;
      if (url[30]) p_tile.src = url + "?fallback=1";
    }
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
        '<a id="tile_target" class="tile_target" href="' + item.url + '" ' + targetBlank + '>' +
        '<img class="tlg_img" src="' + item.imgSrc +
        '" onError="f_iimg(this)" /><span id="tlg_span" class="tlg_title">' +
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
        },
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

          fetch(newsServer + 'foryou' + localStorage.newsLe, {
              method: 'GET',
              credentials: 'include'
            })
            .then(function (response) {
              if (response.url.includes("&ceid=")) {
                localStorage.newsLe = response.url.substr(response.url.lastIndexOf('?'));
              }
              return response.text();
            }).then(function (answer) {
              render_gnews(answer);
              localStorage.cachedNewsUpdate = (Date.now() / 1000);
            });
        } catch (err) {
          console.log('Fetch news failed for: ' + err.message);
        }
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


  
  //End of Config Settings page 



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

  function savebg_cropped(t) {
    ntp_bdy.style.setProperty("--bg-img-l", "url(" + imgRes.src + ")");
    ntp_bdy.style.setProperty("--bg-img-d", "var(--bg-img-l)");
    ntp_bdy.style.setProperty("--bg-cl", "#fff");
    save_ntpbdy();
    ntoast.success(" Background saved !");
    cropCancel();
  }
  const wllp_file = document.getElementById("wllp_file");

  function f_wallp1() {
    var file = wllp_file.files[0];
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
      wllp_file.value = "";
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

  //********  Color picker ******/
  var cp_current_el;
  var cp_type;
  var picker = new Picker({
    parent: document.querySelector('#cp_v'),
    popup: false,
    cancelButton: true,
    onDone: function (color) {
      if (cp_current_el != null && cp_current_el != "bgcl" && cp_current_el != "mtcl" && cp_current_el != "mtcd") {
        if(cp_type == "clight")
          ntp_bdy.style.setProperty("--cl" + cp_current_el, color.hex);
        if(cp_type == "cdark")
          ntp_bdy.style.setProperty("--cd" + cp_current_el, color.hex);
        save_ntpbdy();
      } else {
        if (cp_current_el == "bgcl") {
          ntp_bdy.style.setProperty("--bg-img", "none");
          ntp_bdy.style.setProperty("--bg-cl", color.hex);
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

  function f_cp_bg() {
    cp_current_el = "bgcl";
    let color = getComputedStyle(ntp_bdy).getPropertyValue("--bg-cl");
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

}