!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(e.i,o,i),o.locals?o.locals:{});e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a={};function c(e,n,t){for(var r=0;r<n.length;r++){var o={css:n[r][1],media:n[r][2],sourceMap:n[r][3]};a[e][r]?a[e][r](o):a[e].push(h(o,t))}}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var i=m++;t=f||(f=u(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o()),e=t.base?e+t.base:e,n=n||[],a[e]||(a[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){a[e]||(a[e]=[]),c(e,n,t);for(var r=n.length;r<a[e].length;r++)a[e][r]();a[e].length=n.length,0===a[e].length&&delete a[e]}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"#content{\r\n    width:50%;\r\n    margin:0px auto;\r\n    text-align: center;\r\n}\r\n\r\n.heading {\r\n    color: rgb(81, 255, 0);\r\n    font-size: 42px;\r\n    font-family:cursive;\r\n    padding-top:1%;\r\n  }\r\n\r\n  .heading2{\r\n      font-size:24px;\r\n      color:rgb(187, 94, 187);\r\n      padding:10px;\r\n      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  }\r\n\r\n  .logo{\r\n      width: 20%;\r\n      height:20%;\r\n      float:left;\r\n    }\r\n\r\n    .tabs{\r\n   padding:10px;\r\n   margin-right:10px;\r\n   border-radius: 30%;\r\n   width:30%;\r\n   background-color: greenyellow;     \r\n    }\r\n\r\n    .menu , .contact{\r\n        font-size: 20px;\r\n        margin-top:10%;\r\n        text-align: center;\r\n        color: rgb(187, 94, 187);;\r\n        border-radius: 5px;\r\n        margin-left:20%;\r\n\r\n    }",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var r=()=>{const e=document.createElement("div");return e.innerHTML="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque commodi eos voluptatem numquam pariatur deleniti repellat fugiat eligendi nulla molestiae sunt praesentium vero sequi distinctio error quibusdam maiores natus magnam, explicabo hic sed alias dolores, quis eum! Reprehenderit atque cupiditate dolorum? Saepe, doloribus veniam? Nulla!",e.classList.add("menu"),e};var o=()=>{const e=document.createElement("div");return e.innerHTML="Contact us today via email,whatsapp or telephone. ",e.classList.add("contact"),e},i=t.p+"d62924843d8c41ca134c7a632c4089b2.png";var a=()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div");n.innerHTML="TEAM 54 RESTAURANT",t.innerHTML="The Place To Code, Build, Innovate And Test While You Eat",n.classList.add("heading"),t.classList.add("heading2");const r=new Image;return r.src=i,r.classList.add("logo"),e.appendChild(r),e.appendChild(n),e.appendChild(t),e};const c=document.getElementById("content");c.appendChild(a()),c.appendChild(function(){const e=document.createElement("div"),n=document.createElement("button");n.innerHTML="MENU",n.classList.add("tabs"),n.addEventListener("click",()=>{const e=document.querySelector(".contact");c.contains(e)&&c.removeChild(e),c.appendChild(r())});const t=document.createElement("button");return t.innerHTML="CONTACT US",t.classList.add("tabs"),t.addEventListener("click",()=>{const e=document.querySelector(".menu");c.contains(e)&&c.removeChild(e),c.appendChild(o())}),e.appendChild(n),e.appendChild(t),e}())}]);