(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`


  <section id="contact" class="px-4 md:px-8 lg:px-16 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
    <p class="text-base md:text-lg text-gray-600">Get in touch with us at contact@jigsawenergy.org</p>
  </section>
`;
