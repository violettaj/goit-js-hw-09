!function(){document.querySelector(".form").addEventListener("submit",(function(c){c.preventDefault(),o.disabled=!0;for(var a=Number.parseInt(e.value),i=Number.parseInt(n.value),r=0;r<t.value;r++)u(r+1,a+i*r).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}));var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]'),o=document.querySelector("button");function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.1c8f6c8f.js.map
