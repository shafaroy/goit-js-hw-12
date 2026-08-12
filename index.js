import{a as f,S as d,i as a}from"./assets/vendor-S2qh7U4E.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="56969422-27ce9849604fb527b4b7accd4";async function m(s){return(await f.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function c(){l.innerHTML=""}function h(){u.classList.add("is-visible")}function g(){u.classList.remove("is-visible")}function b(s){const o=s.map(t=>`
  <li class="gallery-item">
    <a href="${t.largeImageURL}">
      <img
        src="${t.webformatURL}"
        alt="${t.tags}"
      />
    </a>

    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        ${t.likes}
      </p>

      <p class="info-item">
        <b>Views</b>
        ${t.views}
      </p>

      <p class="info-item">
        <b>Comments</b>
        ${t.comments}
      </p>

      <p class="info-item">
        <b>Downloads</b>
        ${t.downloads}
      </p>
    </div>
  </li>
`).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}const L=document.querySelector(".form");L.addEventListener("submit",w);async function w(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.error({message:"Please enter a search query!",position:"topRight"});return}c(),h();try{const t=await m(o);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}b(t.hits),s.target.reset()}catch(t){console.error(t),a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}}
//# sourceMappingURL=index.js.map
