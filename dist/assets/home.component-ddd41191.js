import{r as t,j as e}from"./index-e8e56a43.js";import{P as f}from"./product-card.component-60a0f7b2.js";const v=[{name:"king",coverUrl:"images/king.png",characterUrl:"images/king_.png"},{name:"mafia",coverUrl:"images/mafia.png",characterUrl:"images/mafia_.png"},{name:"magician",coverUrl:"images/magician.png",characterUrl:"images/magician_.png"},{name:"hero",coverUrl:"images/hero.png",characterUrl:"images/hero_.png"},{name:"joker",coverUrl:"images/joker.png",characterUrl:"images/joker_.png"},{name:"diva",coverUrl:"images/diva.png",characterUrl:"images/diva_.png"}],c={days:2,hours:0,minutes:0,seconds:0},w=()=>{const[r,l]=t.useState(c);t.useEffect(()=>{const a=setInterval(()=>{l(i=>{const{days:n,hours:m,minutes:d,seconds:g}=i;let s=n*24*60*60+m*60*60+d*60+g;if(s--,n===0)return c;const u=Math.floor(s/(24*60*60));s%=86400;const x=Math.floor(s/(60*60));s%=3600;const p=Math.floor(s/60),h=s%60;return{days:u,hours:x,minutes:p,seconds:h}})},1e3);return()=>{clearInterval(a)}},[]);const o=[{label:"days",value:r.days},{label:"hours",value:r.hours},{label:"minutes",value:r.minutes},{label:"seconds",value:r.seconds}];return e.jsxs("article",{children:[e.jsx("section",{className:"py-6 contain",children:e.jsxs("div",{className:"w-fit mx-auto md:mx-0",children:[e.jsx("img",{src:"/images/secret.png",alt:"secret",className:"max-w-xs mx-auto md:mx-0 mb-4 w-full"}),e.jsx("div",{className:"text-center grid grid-cols-4 gap-4",children:o.map(a=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-yellow py-2 rounded-lg",children:e.jsx("span",{className:"text-xl font-bold text-white",children:a.value})}),e.jsx("span",{className:"block capitalize",children:a.label})]},a.label))})]})}),e.jsxs("section",{className:"bg-black py-8",children:[e.jsx("h2",{className:"text-center text-3xl md:text-4xl pb-2 mb-6 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple",children:"products"}),e.jsx("div",{className:"contain",children:e.jsx("div",{className:"grid grid-cols-2 gap-4",children:v.map(a=>e.jsx(f,{product:a},a.name))})})]})]})};export{w as default};
