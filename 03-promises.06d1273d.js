!function(){document.querySelector(".form").addEventListener("submit",(function(u){var a=function(e){var t,u;(t=e+1,u=i+r*e,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:t,delay:u}):n({position:t,delay:u})}),u)}))).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})).finally((function(){e===Number(n.value)-1&&o.removeAttribute("disabled")}))};u.preventDefault(),o.setAttribute("disabled","");for(var i=Number.parseInt(e.value),r=Number.parseInt(t.value),c=0;c<n.value;c++)a(c)}));var e=document.querySelector('input[name="delay"]'),t=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]'),o=document.querySelector("button")}();
//# sourceMappingURL=03-promises.06d1273d.js.map