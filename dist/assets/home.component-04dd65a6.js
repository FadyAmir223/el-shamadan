import{G as d,r as c,S as m,u as x,j as e,L as N}from"./index-48836966.js";import{P as y}from"./product-card.component-889a4aff.js";function k(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(t)}function C(t){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}const M=()=>{const{waferProducts:t}=c.useContext(m),[r]=x("footer");return e.jsx("footer",{className:"bg-gray-900 text-white py-6",children:e.jsxs("div",{className:"contain flex flex-col md:flex-row items-center md:items-start justify-between",children:[e.jsxs("div",{className:"mb-6 md:mb-0",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:r("products")}),e.jsx("nav",{children:t.map(n=>e.jsx(N,{to:`/products/${n.id}`,className:"text-center md:text-start block mb-2 hover:text-red capitalize",children:n.name},n.id))})]}),e.jsxs("div",{className:"mb-4 md:mb-0 text-center max-w-xs md:text-start",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:r("address")}),e.jsx("p",{children:r("addressVal")})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex items-center gap-x-4 scale-125",children:[e.jsx("a",{href:"https://www.facebook.com/ElShamadan/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(k,{className:"text-white text-xl"})}),e.jsx("a",{href:"https://twitter.com/elshamadanco",target:"_blank",rel:"noopener noreferrer",children:e.jsx(C,{className:"text-white text-xl"})}),e.jsx("a",{href:"mailto:contact@example.com",children:e.jsx("span",{className:"text-white text-xl",children:"@"})})]})})]})})},i={days:2,hours:0,minutes:0,seconds:0},I=()=>{const[t,r]=c.useState(i),{waferProducts:n}=c.useContext(m),[l]=x("home");c.useEffect(()=>(document.title="home",()=>{document.title="el-shamedan"}),[]),c.useEffect(()=>{const s=setInterval(()=>{r(u=>{const{days:o,hours:f,minutes:b,seconds:j}=u;let a=o*24*60*60+f*60*60+b*60+j;if(a--,o===0)return i;const p=Math.floor(a/(24*60*60));a%=86400;const w=Math.floor(a/(60*60));a%=3600;const v=Math.floor(a/60),g=a%60;return{days:p,hours:w,minutes:v,seconds:g}})},1e3);return()=>{clearInterval(s)}},[]);const h=[{label:l("time.days"),value:t.days},{label:l("time.hours"),value:t.hours},{label:l("time.minutes"),value:t.minutes},{label:l("time.seconds"),value:t.seconds}];return e.jsxs(e.Fragment,{children:[e.jsxs("article",{children:[e.jsx("section",{className:"py-6 contain",children:e.jsxs("div",{className:"w-fit mx-auto md:mx-0",children:[e.jsx("img",{src:"images/secret.png",alt:"secret",className:"max-w-xs mx-auto md:mx-0 mb-4 w-full"}),e.jsx("div",{className:"text-center grid grid-cols-4 gap-4",children:h.map(s=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-yellow py-2 rounded-lg",children:e.jsx("span",{className:"text-xl font-bold text-white",children:s.value})}),e.jsx("span",{className:"block capitalize",children:s.label})]},s.label))})]})}),e.jsxs("section",{className:"bg-black py-8",children:[e.jsx("h2",{className:"text-center text-3xl md:text-4xl pb-2 mb-6 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple",children:l("products")}),e.jsx("div",{className:"contain",children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:n.map(s=>e.jsx(y,{product:s},s.name))})})]})]}),e.jsx(M,{})]})};export{I as default};
