import{r as l,S as r,u as x,j as e,L as c,d as n,e as i}from"./index-cfd0a01c.js";const m=()=>{const{waferProducts:s}=l.useContext(r),[t]=x("footer");return e.jsx("footer",{className:"bg-gray-900 text-white py-6",children:e.jsxs("div",{className:"contain flex flex-col md:flex-row items-center md:items-start justify-between",children:[e.jsxs("div",{className:"mb-6 md:mb-0",children:[e.jsx("h3",{className:"text-lg lg:text-xl font-bold mb-2",children:t("products")}),e.jsx("nav",{children:s.map(a=>e.jsx(c,{to:`/products/${a.id}`,className:"text-center md:text-start block mb-2 hover:text-red capitalize lg:text-lg",children:a.name},a.id))})]}),e.jsxs("div",{className:"mb-4 md:mb-0 text-center max-w-xs md:text-start",children:[e.jsx("h3",{className:"text-lg lg:text-xl font-bold mb-2",children:t("address")}),e.jsx("p",{className:"lg:text-lg",children:t("addressVal")})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex items-center gap-x-4 scale-125",children:[e.jsx("a",{href:"https://www.facebook.com/ElShamadan/",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Facebook page of ElShamadan",children:e.jsx(n,{className:"text-white text-xl"})}),e.jsx("a",{href:"https://twitter.com/elshamadanco",target:"_blank",rel:"noopener noreferrer","aria-label":"Visit Twitter page of ElShamadan",children:e.jsx(i,{className:"text-white text-xl"})}),e.jsx("a",{href:"mailto:contact@elshamedan.com",children:e.jsx("span",{className:"text-white text-xl",children:"@"})})]})})]})})};export{m as F};
