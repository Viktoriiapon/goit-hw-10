import{i as o}from"./vendor-651d7991.js";document.querySelector("button");const i=document.querySelector(".form"),c=document.querySelector('input[name="delay"]');document.querySelectorAll('input[name="state"]');i.addEventListener("submit",l);function l(s){s.preventDefault();const t=c.value,n=document.querySelector('input[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(()=>{t?e(t):r("No delay selected")},t),i.reset()}).then(e=>{n==="fulfilled"?o.show({title:`✅ Fulfilled promise in ${e}ms`}):n==="rejected"&&o.show({title:`❌ Rejected promise in ${e}ms`})}).catch(e=>{o.error({title:e})})}
//# sourceMappingURL=2-snackbar-b4dc365b.js.map
