import{a as y,S as h,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const b="51523631-287343b93ff65c0abc5c9078c",v="https://pixabay.com/api/";function S(o){return y.get(v,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.log(t),new Error(t)})}const m=document.querySelector(".gallery"),f=document.querySelector(".loader");function L(o){const t=o.map(n=>{const{webformatURL:e,largeImageURL:i,tags:s,likes:p,views:u,comments:d,downloads:g}=n;return`<li class="list-item">
      <a href="${i}" class="item-img-link">
        <img class="gallery-img" src="${e}" alt="${s}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${p}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${u}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${d}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${g}</p>
        </div>
      </div>
    </li>`}).join("");m.insertAdjacentHTML("beforeend",t),new h(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function w(){m.innerHTML=""}function q(){f.style.display="block"}function x(){f.style.display="none"}const c=document.querySelector(".form"),l=document.querySelector('button[type="submit"]'),O=document.querySelector('input[name="search-text"]');async function $(o){o.preventDefault();const t=O.value.trim();if(t===""){a.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1}),c.reset();return}else w(),q(),l.disabled=!0;try{const r=await S(t);if(!r.hits.length){a.error({title:"",color:"red",messageSize:"18",icon:!1,maxWidth:"432px",minHeight:"88px",progressBar:!1,message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits)}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{setTimeout(()=>{c.reset()},1e3),l.disabled=!1,x()}}c.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
