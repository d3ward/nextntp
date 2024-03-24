(()=>{"use strict";var t=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'];function e(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}function i(t,e){return i=(e||document).querySelectorAll(t),Array.prototype.slice.call(i);var i}function s(t){(t.querySelector("[autofocus]")||t).focus()}function o(){i("[data-a11y-dialog]").forEach((function(t){new e(t)}))}function n(){var t=this;t.n=document.querySelector("nav"),t.close=function(){document.body.style.overflow="auto",t.n.classList.remove("active")},t.open=function(){document.body.style.overflow="hidden",t.n.classList.add("active")},t.n&&(document.querySelector("nav>button").addEventListener("click",(()=>{console.log("toggleNav"),t.n.classList.contains("active")?t.close():t.open()})),document.querySelector("nav>.nav-overlay").addEventListener("click",(()=>{t.close()})),document.querySelectorAll("nav ul > a").forEach((e=>e.addEventListener("click",(()=>{t.close()})))))}function r(){var t=this;t.gt=document.getElementById("gt-link"),t.scrollToTop=function(){window.scroll({top:0,left:0,behavior:"smooth"})},t.listeners=function(){window.addEventListener("scroll",(()=>{window.scrollY>0?t.gt.classList.remove("hidden"):t.gt.classList.add("hidden")})),t.gt.onclick=function(e){e.preventDefault(),(document.documentElement.scrollTop||document.body.scrollTop>0)&&t.scrollToTop()}},t.gt&&t.listeners()}e.prototype.create=function(){this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=i('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(t){t.addEventListener("click",this._show)}.bind(this));const t=this.$el;return this._closers=i("[data-a11y-dialog-hide]",this.$el).filter((function(e){return e.closest('[aria-modal="true"], [data-a11y-dialog]')===t})).concat(i('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(t){t.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this},e.prototype.show=function(t){if(this.shown)return this;this._previouslyFocused=document.activeElement;const e=t&&t.target?t.target:null;return e&&Object.is(this._previouslyFocused,document.body)&&(this._previouslyFocused=e),this.$el.removeAttribute("aria-hidden"),this.shown=!0,s(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this},e.prototype.hide=function(t){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this},e.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this},e.prototype.on=function(t,e){return void 0===this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},e.prototype.off=function(t,e){var i=(this._listeners[t]||[]).indexOf(e);return i>-1&&this._listeners[t].splice(i,1),this},e.prototype._fire=function(t,e){var i=this._listeners[t]||[],s=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(s),i.forEach(function(t){t(this.$el,e)}.bind(this))},e.prototype._bindKeypress=function(e){const s=document.activeElement;s&&s.closest('[aria-modal="true"]')!==this.$el||(this.shown&&"Escape"===e.key&&"alertdialog"!==this.$el.getAttribute("role")&&(e.preventDefault(),this.hide(e)),this.shown&&"Tab"===e.key&&function(e,s){var o=function(e){return i(t.join(","),e).filter((function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}))}(e),n=o.indexOf(document.activeElement);s.shiftKey&&0===n?(o[o.length-1].focus(),s.preventDefault()):s.shiftKey||n!==o.length-1||(o[0].focus(),s.preventDefault())}(this.$el,e))},e.prototype._maintainFocus=function(t){!this.shown||t.target.closest('[aria-modal="true"]')||t.target.closest("[data-a11y-dialog-ignore-focus-trap]")||s(this.$el)},"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):window.requestAnimationFrame?window.requestAnimationFrame(o):window.setTimeout(o,16));const a=JSON.parse('{"nextntp":{"title":"NextNTP","author":"d3ward","description":"Kiwi inspired theme. Default for NextNTP ","palette":["#4ca3e2","#f2f4f7ff","#dde2eaff","#14191fff","#242e37ff"]},"dracula-purple":{"title":"Dracula (Purple)","author":"d3ward","credits":"https://draculatheme.com","description":"Dracula inspired theme ","palette":["#282a36","#44475a","#44475a","#f8f8f2","#bd93f9"],"onetheme":true},"nord-frost":{"title":"Nord Frost","author":"d3ward","credits":"https://nordtheme.com","description":"Nord inspired theme ","palette":["#2E3440","#3B4252","#434C5E","#4C566A","#D8DEE9","#E5E9F0","#ECEFF4","#88C0D0"]}}');var d=function(){const t="ontouchstart"in window;return{start:t?"touchstart":"mousedown",move:t?"touchmove":"mousemove",end:t?"touchend":"mouseup"}}();const c=new class{constructor(t,e={}){this.bottomSheet=document.querySelector(t),this.activeClass="active",this.options={threshold:e.threshold||100,eventMap:e.eventMap||{start:"mousedown",move:"mousemove",end:"mouseup"}},this.init()}init(){this.bottomSheet.querySelector(".bs-handle").addEventListener(this.options.eventMap.start,this.startDrag.bind(this),{passive:!1}),this.bottomSheet.querySelector(".bs-scrim").addEventListener("click",this.hide.bind(this),{passive:!1}),this.bottomSheet.querySelector(".bs-footer").addEventListener("click",this.hide.bind(this),{passive:!1})}startDrag(t){t.preventDefault(),navigator.vibrate(100);const e="touchstart"===t.type?t.touches[0].clientY:t.clientY;let i=e;const s=t=>{t.preventDefault(),i="touchmove"===t.type?t.touches[0].clientY:t.clientY;const s=e-i;if(console.log(s),s<40){var o=""+-1*s;s>0&&(o="-"+s),-1*s>=this.options.threshold&&navigator.vibrate(100),this.bottomSheet.querySelector(".bs-sheet").style.transform=`translateY(${o}px)`}},o=t=>{t.preventDefault(),navigator.vibrate(100);-1*(e-i)>=this.options.threshold?this.hide():this.show(),document.removeEventListener(this.options.eventMap.move,s),document.removeEventListener(this.options.eventMap.end,o)};document.addEventListener(this.options.eventMap.move,s,{passive:!1}),document.addEventListener(this.options.eventMap.end,o,{passive:!1})}show(){this.bottomSheet.classList.add(this.activeClass),this.bottomSheet.querySelector(".bs-sheet").style.transform="translateY(0)"}hide(){this.bottomSheet.classList.remove(this.activeClass),this.bottomSheet.querySelector(".bs-sheet").style.transform="translateY(100%)"}}("#pt",{threshold:50,eventMap:d});function h(){document.querySelectorAll(".preview-btn").forEach((t=>{t.addEventListener("click",(()=>{!function(t){const e=document.getElementById("pt_cnt");var i="";if(a.hasOwnProperty(t)){const e=a[t];var s="";e.credits&&(s+='<div>Credits : <a href="'+e.credits+'" target="_blank">'+e.credits+"</a></div>");var o="";e.onetheme?o+="<div><span>Light & Dark Theme</span></div>":o+="<div><span>Light Theme</span><span>Dark Theme</span></div>",i+='<div class="card _aos-bottom"><div class="pi"><img src="./themes/'+t+'-p.png">'+o+"</div><div><span><b>"+e.title+"</b></span><span> by "+e.author+"</span></div><p>"+e.description+"</p>"+s+'<div class="col-2"><a class="btn btn-p" href="./themes/'+t+'.json" download="'+t+'.json""><svg class="_icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> Download</a></div></div>'}e.innerHTML=i}(t.getAttribute("data-id")),c.show()}))}))}document.addEventListener("DOMContentLoaded",(()=>{new e(document.querySelector("#dlg_support"));!function(){var t=document.getElementsByClassName("theme-toggle");if(window.CSS&&CSS.supports("color","var(--bg)")&&t){var e=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");e&&document.documentElement.setAttribute("data-theme",e);for(var i=0;i<t.length;i++)t[i].onclick=function(){var t="light";"light"===document.documentElement.getAttribute("data-theme")&&(t="dark"),document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)}}}(),function(){let t=document.querySelectorAll("[class*=_aos]");if(IntersectionObserver&&t){let e=new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting&&!t.target.classList.contains("_aos-done")?t.target.classList.add("_aos-done"):t.target.classList.remove("_aos-done")}))}),{root:null,threshold:0});t.forEach((t=>{e.observe(t)}))}}(),new n,new r,h()}))})();