!function(c){function e(e){for(var t,n,i=e[0],r=e[1],o=e[2],s=0,a=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&a.push(u[n][0]),u[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(c[t]=r[t]);for(d&&d(e);a.length;)a.shift()();return h.push.apply(h,o||[]),l()}function l(){for(var e,t=0;t<h.length;t++){for(var n=h[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==u[o]&&(i=!1)}i&&(h.splice(t--,1),e=s(s.s=n[0]))}return e}var n={},u={2:0},h=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=c,s.c=n,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var d=i;h.push([110,0]),l()}({110:function(e,t,n){"use strict";n.r(t),n(14),n(16);var i=n(67),r=n.n(i);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function r(e,t,n,i){!function(e,t){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),this.trigger=t,this.content=e,this.dropdowns=n,this.dropdownLinks=i,this.arrows=document.querySelectorAll(".header__nav-link-icon")}return o(r.prototype,[{key:"onTriggerClick",value:function(e){return e.preventDefault(),this.trigger.classList.toggle("hamburger--open"),document.querySelector("body").classList.toggle("no-scroll"),this.content.classList.contains("header--open")?this.content.classList.remove("header--open"):this.content.classList.add("header--open"),!0}},{key:"onToggleDropdown",value:function(e){e.target.classList.toggle("header__nav-item--open")}},{key:"onDropDownClick",value:function(e){e.target.classList.toggle("header__nav-link--open"),e.stopPropagation()}},{key:"onArrowClick",value:function(e){e.preventDefault();var t=!1;e.target.closest(".header__nav-item").classList.contains("header__nav-item--open")&&(t=!0),this.dropdowns.forEach(function(e){e.classList.remove("header__nav-item--open")}),t||e.target.closest(".header__nav-item").classList.add("header__nav-item--open")}},{key:"initiateTriggerListener",value:function(){var t=this;this.trigger&&(this.trigger.addEventListener("click",function(e){return t.onTriggerClick(e)}),this.dropdownLinks.forEach(function(e){e.addEventListener("click",function(e){return t.onDropDownClick(e)})}),this.arrows.forEach(function(e){e.addEventListener("click",function(e){return t.onArrowClick(e)})}),this.dropdowns.forEach(function(e){e.addEventListener("click",function(e){return t.onToggleDropdown(e)})}))}},{key:"init",value:function(){this.initiateTriggerListener()}}]),r}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function n(e,t){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.body=e,this.dropdowns=t}return a(n.prototype,[{key:"onMouseOver",value:function(e){1024<=window.innerWidth&&(e.target.closest(".header__nav-item--has-child").classList.add("header__nav-item--open"),this.body.classList.add("has-overlay"))}},{key:"onMouseLeave",value:function(e){1024<=window.innerWidth&&(e.target.closest(".header__nav-item--has-child").classList.remove("header__nav-item--open"),this.body.classList.remove("has-overlay"))}},{key:"initiateListeners",value:function(){var t=this;this.dropdowns.forEach(function(e){e.addEventListener("mouseover",function(e){return t.onMouseOver(e)}),e.addEventListener("mouseleave",function(e){return t.onMouseLeave(e)})})}},{key:"init",value:function(){this.initiateListeners()}}]),n}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function n(e){!function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),this.trigger=e}return l(n.prototype,[{key:"moveUp",value:function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"initiateTriggerListener",value:function(){var t=this;this.trigger.addEventListener("click",function(e){return t.moveUp(e)})}},{key:"init",value:function(){this.initiateTriggerListener()}}]),n}();function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function d(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach(function(e){var t,n,i;t=r,i=o[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n(76),n(80),n(61),n(82),n(84);var f,g=function(){function r(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],i=2<arguments.length?arguments[2]:void 0;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,r),this.wrapper=e,this.siblings=n,this.config=d(d({},{trigger:(t=this.wrapper).querySelector(".tooltip__trigger"),closeTrigger:t.querySelector(".tooltip__close"),tooltip:t.querySelector(".tooltip__tooltip"),desktopWidth:440,className:"tooltip"}),i),this.trigger=this.config.trigger,this.tooltip=this.config.tooltip,this.closeTrigger=this.config.closeTrigger,this.desktopWidth=this.config.desktopWidth,this.className=this.config.className,this.carat=null,this.onClick=this.onClick.bind(this),this.closeTooltip=this.closeTooltip.bind(this)}return p(r.prototype,[{key:"closeSiblings",value:function(){0<this.siblings.length&&this.siblings.forEach(function(e){return e.closeTooltip()})}},{key:"setPositioning",value:function(){this.tooltip.style.maxWidth="none";var e,t,n,i,r=(e=this.tooltip,t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop,{top:t.top+i,left:t.left+n}).left;if(window.matchMedia("(min-width: 768px)").matches){if(r+this.desktopWidth>window.innerWidth){var o=this.desktopWidth-this.trigger.getBoundingClientRect().width;this.tooltip.style.left="-".concat(o,"px"),this.carat.style.left="".concat(o,"px")}}else this.tooltip.style.left="-".concat(r,"px"),this.carat.style.left="".concat(r,"px")}},{key:"closeTooltip",value:function(){this.wrapper.classList.remove("active"),this.tooltip.classList.remove("active"),this.trigger.classList.remove("active")}},{key:"onClick",value:function(e){return e.preventDefault(),this.tooltip.classList.contains("active")?(this.closeSiblings(),this.closeTooltip()):(this.closeSiblings(),this.setPositioning(),this.wrapper.classList.add("active"),this.tooltip.classList.add("active"),this.trigger.classList.add("active")),!0}},{key:"addCarat",value:function(){var e=document.createElement("span");e.classList.add("tooltip-carat"),e.setAttribute("aria-hidden","true"),this.tooltip.appendChild(e),this.carat=e}},{key:"transitionFinished",value:function(){this.tooltip.classList.contains("active")||(this.tooltip.style.left="auto",this.carat.style.left="auto",this.tooltip.style.maxWidth="0")}},{key:"clickedOutside",value:function(e){var t=e.target.classList.contains(this.className),n=e.target.closest(".".concat(this.className));t||n||this.closeTooltip()}},{key:"triggerListener",value:function(){var i,r,t=this;this.trigger.addEventListener("click",function(e){return t.onClick(e)}),this.closeTrigger.addEventListener("click",this.closeTooltip),this.tooltip.addEventListener("transitionend",function(e){return t.transitionFinished(e)}),window.addEventListener("resize",(i=function(){t.closeTooltip()},200,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];clearTimeout(r),r=setTimeout(function(){return i.apply(void 0,t)},200)})),document.addEventListener("click",function(e){return t.clickedOutside(e)})}},{key:"init",value:function(){this.addCarat(),this.triggerListener()}}]),r}();n(85),n(87),"function"!=typeof(f=window.Element.prototype).matches&&(f.matches=f.msMatchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=0;t[n]&&t[n]!==this;)++n;return Boolean(t[n])}),"function"!=typeof f.closest&&(f.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),Object.getOwnPropertyDescriptor(Element.prototype,"classList")||HTMLElement&&Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")&&Object.defineProperty(Element.prototype,"classList",Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")),window.hasOwnProperty("fetch")||(window.fetch=function(r,o){return new Promise(function(e,t){var n=new XMLHttpRequest;for(var i in n.withCredentials=Boolean(o.credentials),n.open(o.method||"GET",r),o.headers)n.setRequestHeader(i,o.headers[i]);n.onload=function(t){e({status:t.target.status,headers:{get:function(e){return t.target.getResponseHeader(e)}},arrayBuffer:function(){return Promise.resolve(t.target.response)},blob:function(){return Promise.resolve(new Blob([t.target.response],{type:t.target.getResponseHeader("Content-Type")}))},text:function(){return Promise.resolve(t.target.responseText)},json:function(){return Promise.resolve(JSON.parse(t.target.responseText))}})},n.onerror=t,n.send(o.body)})});var v=document.querySelector("body");window.addEventListener("DOMContentLoaded",function(){var e,t,i,n;!function(){var e=document.querySelector(".header");if(e){var t=e.querySelector(".hamburger"),n=e.querySelectorAll(".header__nav-item--has-child"),i=e.querySelectorAll(".header__nav-link");new s(e,t,n,i).init()}}(),(e=document.querySelectorAll(".header__nav-item--has-child"))&&new c(v,e).init(),(t=document.querySelector("#backToTop"))&&new u(t).init(),r()(),i=[],0<(n=document.querySelectorAll(".dashboard-strip__hotspot")).length&&n.forEach(function(e){var t={trigger:e.querySelector(".dashboard-strip__trigger"),closeTrigger:e.querySelector(".dashboard-strip__tooltip-close"),tooltip:e.querySelector(".dashboard-strip__tooltip")},n=new g(e,i,t);n.init(),i.push(n)})})}});