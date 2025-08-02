import{a as E,S as R,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const k="51523631-287343b93ff65c0abc5c9078c",z="https://pixabay.com/api/",y=15;async function h(r,t=1){try{return(await E.get(z,{params:{key:k,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:t}})).data}catch(s){throw console.error("Pixabay API Error:",s.message||s),new Error("❌ Failed to fetch images. Please check your connection or try again.")}}const b=document.querySelector(".gallery"),v=document.querySelector(".loader"),u=document.querySelector(".gallery-btn"),M=new R(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function L(r){const t=r.map(s=>{const{webformatURL:c,largeImageURL:e,tags:o,likes:n,views:q,comments:P,downloads:x}=s;return`<li class="list-item">
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
          <p class="img-info-content">${q}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${P}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${x}</p>
        </div>
      </div>
    </li>`}).join("");b.insertAdjacentHTML("beforeend",t),M.refresh()}function O(){b.innerHTML=""}function S(){v.style.display="block"}function w(){v.style.display="none"}function B(){u.classList.add("load-more-btn")}function m(){u.classList.remove("load-more-btn")}let i=1,p=0,d,l;const f=document.querySelector(".form"),g=document.querySelector('button[type="submit"]'),$=document.querySelector('input[name="search-text"]');async function I(r){if(r.preventDefault(),l=$.value.trim(),l===""){a.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1}),f.reset();return}else O(),S(),m(),g.disabled=!0;try{i=1;const t=await h(l,i);if(p=t.total,d=Math.ceil(p/y),!t.hits.length){a.error({title:"",color:"red",messageSize:"18",icon:!1,maxWidth:"432px",minHeight:"88px",progressBar:!1,message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits)}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{f.reset(),g.disabled=!1,i<d?B():m(),w()}}async function D(){S(),i+=1;try{const r=await h(l,i);L(r.hits),m()}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{w(),H(),i<d?B():a.info({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}function H(){const r=document.querySelector(".list-item");if(r){const t=r.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}f.addEventListener("submit",I);u.addEventListener("click",D);
//# sourceMappingURL=index.js.map
