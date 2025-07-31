import{a as B,S as P,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const O="51523631-287343b93ff65c0abc5c9078c",$="https://pixabay.com/api/";async function p(s,o=1){return B.get($,{params:{key:O,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}}).then(i=>i.data).catch(i=>{throw console.log(i),new Error(i)})}const g=document.querySelector(".gallery"),y=document.querySelector(".loader"),d=document.querySelector(".gallery-btn");function h(s){const o=s.map(i=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:S,views:w,comments:q,downloads:x}=i;return`<li class="list-item">
      <a href="${t}" class="item-img-link">
        <img class="gallery-img" src="${e}" alt="${n}" />
      </a>
      <div class="img-info-wrap">
        <div class="img-info">
          <p class="img-info-title">Likes</p>
          <p class="img-info-content">${S}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Views</p>
          <p class="img-info-content">${w}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Comments</p>
          <p class="img-info-content">${q}</p>
        </div>
        <div class="img-info">
          <p class="img-info-title">Downloads</p>
          <p class="img-info-content">${x}</p>
        </div>
      </div>
    </li>`}).join("");g.insertAdjacentHTML("beforeend",o),new P(".item-img-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()}function M(){g.innerHTML=""}function b(){y.style.display="block"}function L(){y.style.display="none"}function v(){d.classList.add("load-more-btn")}function k(){d.classList.remove("load-more-btn")}let r=1,f=0,a;const m=document.querySelector(".form"),u=document.querySelector('button[type="submit"]'),z=document.querySelector('input[name="search-text"]');async function D(s){if(s.preventDefault(),a=z.value.trim(),a===""){l.error({title:"",color:"red",message:"❌ Search field cannot be empty!",position:"topRight",messageSize:"18",icon:!1,progressBar:!1}),m.reset();return}else M(),b(),v(),u.disabled=!0;try{r=1,console.log(r);const o=await p(a,r);if(f=o.total,console.log(f),!o.hits.length){l.error({title:"",color:"red",messageSize:"18",icon:!1,maxWidth:"432px",minHeight:"88px",progressBar:!1,message:"❌ Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch{l.error({title:"",color:"red",messageSize:"18",icon:!1,progressBar:!1,message:"❌ Sorry, network Error",position:"topRight"})}finally{m.reset(),u.disabled=!1,L()}}async function E(){r+=1;try{console.log(r);const s=await p(a,r);h(s.hits),k(),b()}catch{}finally{L(),v()}}m.addEventListener("submit",D);d.addEventListener("click",E);
//# sourceMappingURL=index.js.map
