import{a as x,r as i,S as d,b as m,j as e,F as h,c as u}from"./index-d93e0992.js";import{u as p}from"./useTitle-43acadd7.js";const f=()=>{const{productName:r}=x(),{waferProducts:a}=i.useContext(d),n=m(),s=a.findIndex(o=>o.id===r),t=a[s];p(t.id);const l=o=>{const c=o==="next"?(s+1)%a.length:(s-1+a.length)%a.length;n(`/products/${a[c].id}`)};return t&&e.jsxs("article",{className:"overflow-hidden relative py-8 md:py-6 h-[calc(100vh-70px)]",children:[e.jsx(h,{className:"select-none text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 left-0 -translate-y-1/2",onClick:()=>l("prev")}),e.jsx(u,{className:"select-none event text-4xl cursor-pointer text-yellow hover:text-yellow/80 focus:outline-0  absolute z-20 top-1/4 md:top-1/2 right-0 -translate-y-1/2 translat",onClick:()=>l("next")}),e.jsxs("section",{className:"relative z-10 contain",children:[e.jsx("img",{src:t.coverUrl,alt:`${t.name} box`,className:"select-none h-28 sm:h-36 md:h-48 rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"},t.id),e.jsx("p",{className:"max-w-md text-white md:mx-auto md:text-xl rtl:text-2xl",children:t.desc})]}),e.jsx("img",{src:t.characterUrl,alt:`${t.name} character`,className:"absolute bottom-0  ltr:right-0 rtl:left-0 ltr:translate-x-[40%] rtl:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"},t.id+"_")]})};export{f as default};
