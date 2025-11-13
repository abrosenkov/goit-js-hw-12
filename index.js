import{a as E,S as R,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const k="51523631-287343b93ff65c0abc5c9078c",z="https://pixabay.com/api/",p=15;async function y(r,t=1){try{return(await E.get(z,{params:{key:k,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}})).data}catch(s){throw console.error("Pixabay API Error:",s.message||s),new Error("❌ Failed to fetch images. Please check your connection or try again.")}}const h=document.querySelector(".gallery"),b=document.querySelector(".loader"),d=document.querySelector(".gallery-btn"),M=new R(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function v(r){const t=r.map(s=>{const{webformatURL:c,largeImageURL:e,tags:o,likes:n,views:B,comments:q,downloads:P}=s;return`<li class="list-item">
      <a href="${e}" class="item-img-link">
        <img class="gallery-img" src="${c}" alt="${o}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${n}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${B}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${q}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${P}</p>
        </div>
      </div>
    </li>`}).join("");h.insertAdjacentHTML("beforeend",t),M.refresh()}function $(){h.innerHTML=""}function L(){b.style.display="block"}function S(){b.style.display="none"}function w(){d.classList.add("load-more-btn")}function m(){d.classList.remove("load-more-btn")}let i=1,u=0,f=0,l="";const x=document.querySelector(".form"),g=document.querySelector('button[type="submit"]'),I=document.querySelector('input[name="search-text"]');async function O(r){if(r.preventDefault(),l=I.value.trim(),l===""){a.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1});return}$(),L(),m(),g.disabled=!0;try{i=1;const t=await y(l,i);if(u=t.totalHits,f=Math.ceil(u/p),!t.hits.length){a.error({title:"",color:"red",message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1});return}v(t.hits)}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{g.disabled=!1,S(),i<f?w():m()}}async function D(){i+=1,m(),L();try{const r=await y(l,i);v(r.hits)}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{S(),H(),i<f?w():a.info({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}function H(){const r=document.querySelector(".list-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}x.addEventListener("submit",O);d.addEventListener("click",D);
//# sourceMappingURL=index.js.map
