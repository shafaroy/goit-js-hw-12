import{a as w,S as v,i}from"./assets/vendor-S2qh7U4E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const S="56969422-27ce9849604fb527b4b7accd4";async function f(o,e){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const e=o.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${r.likes}
            </p>

            <p class="info-item">
              <b>Views</b>
              ${r.views}
            </p>

            <p class="info-item">
              <b>Comments</b>
              ${r.comments}
            </p>

            <p class="info-item">
              <b>Downloads</b>
              ${r.downloads}
            </p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",e),q.refresh()}function P(){m.innerHTML=""}function h(){p.classList.add("is-visible")}function b(){p.classList.remove("is-visible")}function d(){y.classList.add("is-visible")}function L(){y.classList.remove("is-visible")}const M=document.querySelector(".form"),R=document.querySelector(".load-more");let l="",a=1,u=0;M.addEventListener("submit",$);R.addEventListener("click",B);async function $(o){if(o.preventDefault(),l=o.target.elements["search-text"].value.trim(),!l){i.error({message:"Please enter a search query!",position:"topRight"});return}a=1,L(),P(),h();try{const e=await f(l,a);if(u=e.totalHits,e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),a*15<u&&d(),o.target.reset()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{b()}}async function B(){a+=1,L(),h();try{const o=await f(l,a);g(o.hits);const e=document.querySelector(".gallery-item");if(e){const{height:n}=e.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}a*15<u?d():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{b()}}
//# sourceMappingURL=index.js.map
