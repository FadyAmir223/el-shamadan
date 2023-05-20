import{G as o,r as l,S as i,j as e,L as g}from"./index-ce109a3d.js";import{P as v}from"./product-card.component-937f4971.js";function N(t){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(t)}function y(t){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)}const k=()=>{const{products:t}=l.useContext(i);return e.jsx("footer",{className:"bg-gray-900 text-white py-6",children:e.jsxs("div",{className:"contain flex flex-col md:flex-row items-center md:items-start justify-between",children:[e.jsxs("div",{className:"mb-6 md:mb-0",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"Products"}),e.jsx("nav",{children:t.map(r=>e.jsx(g,{to:`/products/${r}`,className:"text-center md:text-start block mb-2 hover:text-red capitalize",children:r},r))})]}),e.jsxs("div",{className:"mb-4 md:mb-0 text-center max-w-xs md:text-left",children:[e.jsx("h3",{className:"text-lg font-bold mb-2",children:"Address"}),e.jsx("p",{children:"P.O Box 544 Om Zegheiw way, El-Dekheila, Alexandria, Egypt."})]}),e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"flex items-center space-x-4 scale-125",children:[e.jsx("a",{href:"https://www.facebook.com/ElShamadan/",target:"_blank",rel:"noopener noreferrer",children:e.jsx(N,{className:"text-white text-xl"})}),e.jsx("a",{href:"https://twitter.com/elshamadanco",target:"_blank",rel:"noopener noreferrer",children:e.jsx(y,{className:"text-white text-xl"})}),e.jsx("a",{href:"mailto:contact@example.com",children:e.jsx("span",{className:"text-white text-xl",children:"@"})})]})})]})})},c={days:2,hours:0,minutes:0,seconds:0},M=()=>{const[t,r]=l.useState(c),{waferProducts:x}=l.useContext(i);l.useEffect(()=>{const s=setInterval(()=>{r(m=>{const{days:n,hours:h,minutes:u,seconds:f}=m;let a=n*24*60*60+h*60*60+u*60+f;if(a--,n===0)return c;const b=Math.floor(a/(24*60*60));a%=86400;const j=Math.floor(a/(60*60));a%=3600;const p=Math.floor(a/60),w=a%60;return{days:b,hours:j,minutes:p,seconds:w}})},1e3);return()=>{clearInterval(s)}},[]);const d=[{label:"days",value:t.days},{label:"hours",value:t.hours},{label:"minutes",value:t.minutes},{label:"seconds",value:t.seconds}];return e.jsxs(e.Fragment,{children:[e.jsxs("article",{children:[e.jsx("section",{className:"py-6 contain",children:e.jsxs("div",{className:"w-fit mx-auto md:mx-0",children:[e.jsx("img",{src:"images/secret.png",alt:"secret",className:"max-w-xs mx-auto md:mx-0 mb-4 w-full"}),e.jsx("div",{className:"text-center grid grid-cols-4 gap-4",children:d.map(s=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-yellow py-2 rounded-lg",children:e.jsx("span",{className:"text-xl font-bold text-white",children:s.value})}),e.jsx("span",{className:"block capitalize",children:s.label})]},s.label))})]})}),e.jsxs("section",{className:"bg-black py-8",children:[e.jsx("h2",{className:"text-center text-3xl md:text-4xl pb-2 mb-6 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple",children:"products"}),e.jsx("div",{className:"contain",children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:x.map(s=>e.jsx(v,{product:s},s.name))})})]})]}),e.jsx(k,{})]})};export{M as default};
