import{a as o,r as a,S as l,j as e}from"./index-7fd4503c.js";const n=()=>{const{productName:s}=o(),{waferProducts:r}=a.useContext(l),t=r.find(c=>c.id===s);return a.useEffect(()=>(t&&(document.title=t.id),()=>{document.title="el-shamedan"}),[t]),t&&e.jsxs("article",{className:"relative overflow-hidden py-6 min-h-[calc(100vh-66px)]",children:[e.jsx("section",{className:"relative z-10 contain",children:e.jsxs("div",{className:"",children:[e.jsx("img",{src:t.coverUrl,alt:`${t.name} box`,className:"w-2/3 max-w-md rotate-6 mx-auto my-10 hover:scale-110 hover:rotate-3 will-change-transform duration-500 shadow-md"}),e.jsx("p",{className:"max-w-md text-white md:mx-auto lg:text-xl rtl:text-2xl",children:t.desc})]})}),e.jsx("img",{src:t.characterUrl,alt:`${t.name} character`,className:"absolute bottom-0 -translate-x-[30%] left-0 sm:-translate-x-[40%] opacity-20 h-[80%] sm:h-[90%] object-contain"})]})};export{n as default};