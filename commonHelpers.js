import"./assets/styles-98c47e35.js";import{f as d,i as m}from"./assets/vendor-651d7991.js";document.addEventListener("DOMContentLoaded",()=>{e.disabled=!0});const c=document.querySelector("[data-days]"),i=document.querySelector("[data-hours]"),u=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),e=document.querySelector("button[data-start]"),h=document.querySelector("#datetime-picker");let f,a;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0];const n=new Date;a<=n?(e.disabled=!0,m.warning({title:"Warning",message:"Please choose a date in the future"})):(e.disabled=!1,h._flatpickr.config.disable=[a])}};function s(t){return t.toString().padStart(2,"0")}function S(t){f=setInterval(()=>{const n=new Date,r=t-n;if(r<=0){clearInterval(f),c.textContent="00",i.textContent="00",u.textContent="00",l.textContent="00",e.disabled=!1,d("#datetime-picker").set("disabled",!1);return}const o=g(r);c.textContent=s(o.days),i.textContent=s(o.hours),u.textContent=s(o.minutes),l.textContent=s(o.seconds)},1e3)}function g(t){const y=Math.floor(t/864e5),p=Math.floor(t%864e5/36e5),b=Math.floor(t%864e5%36e5/6e4),C=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:p,minutes:b,seconds:C}}d("#datetime-picker",w);e.addEventListener("click",()=>{if(e.disabled)return;const t=new Date;if(a-t<=0){m.error({title:"Error",message:"Invalid date selected"});return}e.disabled=!0,d(h).close(),S(a)});
//# sourceMappingURL=commonHelpers.js.map
