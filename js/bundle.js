!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});
!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():e.NProgress=n()}(this,function(){var e,n,t={version:"0.2.0"},r=t.settings={minimum:.08,easing:"linear",positionUsing:"",speed:200,trickle:!0,trickleSpeed:200,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName}function o(e,n,t){return e<n?n:e>t?t:e}function s(e){return 100*(-1+e)}t.configure=function(e){var n,t;for(n in e)void 0!==(t=e[n])&&e.hasOwnProperty(n)&&(r[n]=t);return this},t.status=null,t.set=function(e){var n=t.isStarted();e=o(e,r.minimum,1),t.status=1===e?null:e;var i=t.render(!n),c=i.querySelector(r.barSelector),l=r.speed,f=r.easing;return i.offsetWidth,a(function(n){""===r.positionUsing&&(r.positionUsing=t.getPositioningCSS()),u(c,function(e,n,t){var i;i="translate3d"===r.positionUsing?{transform:"translate3d("+s(e)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(e)+"%,0)"}:{"margin-left":s(e)+"%"};return i.transition="all "+n+"ms "+t,i}(e,l,f)),1===e?(u(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){u(i,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},l)},l)):setTimeout(n,l)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var e=function(){setTimeout(function(){t.status&&(t.trickle(),e())},r.trickleSpeed)};return r.trickle&&e(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var n=t.status;return n?n>1?void 0:("number"!=typeof e&&(e=n>=0&&n<.2?.1:n>=.2&&n<.5?.04:n>=.5&&n<.8?.02:n>=.8&&n<.99?.005:0),n=o(n+e,0,.994),t.set(n)):t.start()},t.trickle=function(){return t.inc()},e=0,n=0,t.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&t.start(),e++,n++,r.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this},t.render=function(e){if(t.isRendered())return document.getElementById("nprogress");l(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=r.template;var o,a=n.querySelector(r.barSelector),c=e?"-100":s(t.status||0),f=i(r.parent)?r.parent:document.querySelector(r.parent);return u(a,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),r.showSpinner||(o=n.querySelector(r.spinnerSelector))&&p(o),f!=document.body&&l(f,"nprogress-custom-parent"),f.appendChild(n),n},t.remove=function(){f(document.documentElement,"nprogress-busy"),f(i(r.parent)?r.parent:document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function n(){var t=e.shift();t&&t(n)}return function(t){e.push(t),1==e.length&&n()}}(),u=function(){var e=["Webkit","O","Moz","ms"],n={};function t(t){return t=t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()}),n[t]||(n[t]=function(n){var t=document.body.style;if(n in t)return n;for(var r,i=e.length,o=n.charAt(0).toUpperCase()+n.slice(1);i--;)if((r=e[i]+o)in t)return r;return n}(t))}function r(e,n,r){n=t(n),e.style[n]=r}return function(e,n){var t,i,o=arguments;if(2==o.length)for(t in n)void 0!==(i=n[t])&&n.hasOwnProperty(t)&&r(e,t,i);else r(e,o[1],o[2])}}();function c(e,n){return("string"==typeof e?e:d(e)).indexOf(" "+n+" ")>=0}function l(e,n){var t=d(e),r=t+n;c(t,n)||(e.className=r.substring(1))}function f(e,n){var t,r=d(e);c(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function d(e){return(" "+(e&&e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return t});