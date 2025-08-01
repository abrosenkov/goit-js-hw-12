import{a as z,S as E,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const M="51523631-287343b93ff65c0abc5c9078c",O="https://pixabay.com/api/",h=15;async function b(i,t=1){return z.get(O,{params:{key:M,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:t}}).then(s=>s.data).catch(s=>{throw console.log(s),new Error(s)})}const v=document.querySelector(".gallery"),L=document.querySelector(".loader"),g=document.querySelector(".gallery-btn");function S(i){const t=i.map(l=>{const{webformatURL:e,largeImageURL:o,tags:n,likes:q,views:x,comments:P,downloads:R}=l;return`<li class="list-item">
      <a href="${o}" class="item-img-link">
        <img class="gallery-img" src="${e}" alt="${n}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${q}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${x}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${P}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${R}</p>
        </div>
      </div>
    </li>`}).join("");v.insertAdjacentHTML("beforeend",t),new E(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function $(){v.innerHTML=""}function m(){L.style.display="block"}function w(){L.style.display="none"}function B(){g.classList.add("load-more-btn")}function d(){g.classList.remove("load-more-btn")}let r=1,p=0,f,c;const u=document.querySelector(".form"),y=document.querySelector('button[type="submit"]'),k=document.querySelector('input[name="search-text"]');async function D(i){if(i.preventDefault(),c=k.value.trim(),c===""){a.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1}),u.reset();return}else $(),m(),d(),y.disabled=!0;try{r=1;const t=await b(c,r);if(p=t.total,f=Math.ceil(p/h),!t.hits.length){a.error({title:"",color:"red",messageSize:"18",icon:!1,maxWidth:"432px",minHeight:"88px",progressBar:!1,message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(t.hits)}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{u.reset(),y.disabled=!1,r<f?B():d(),w()}}async function H(){m(),r+=1;try{const i=await b(c,r);S(i.hits),d(),m()}catch{a.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{w(),I(),r<f?B():a.info({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}}function I(){const i=document.querySelector(".list-item");if(i){const t=i.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}u.addEventListener("submit",D);g.addEventListener("click",H);
//# sourceMappingURL=index.js.map
