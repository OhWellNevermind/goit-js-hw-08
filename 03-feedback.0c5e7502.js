var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,u=setTimeout(S,t),c?y(e):a}function w(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=i}function S(){var e=m();if(w(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return v?d(n,i-(e-l)):n}(e))}function T(e){return u=void 0,b&&o?y(e):(o=r=void 0,a)}function j(){var e=m(),n=w(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(v)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},j.flush=function(){return void 0===u?a:T(m())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");window.addEventListener("load",(function(){const{elements:{email:e,message:t}}=b;if(localStorage.getItem("feedback-form-state")){console.log(b.elements);const n=JSON.parse(localStorage.getItem("feedback-form-state"));e.value=n.email,t.value=n.message}else e.value="",t.value=""})),b.addEventListener("input",t((function(e){try{let e={email:y.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}catch(e){return}}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");const o={email:t.value,message:n.value};console.log(o),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.0c5e7502.js.map