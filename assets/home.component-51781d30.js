import{r as o,S as d,u,j as e}from"./index-cfd0a01c.js";import{P as x}from"./product-card.component-0e400b9c.js";import{F as h}from"./footer.component-b82e6f48.js";const i=()=>{const l=new Date;l.setDate(l.getDate()+2);let t=new Date(l.getFullYear(),l.getMonth(),l.getDate()).getTime()-Date.now();const a={day:1e3*60*60*24,hour:1e3*60*60,minute:1e3*60,second:1e3},c=Math.floor(t/a.day);t=t%a.day;const s=Math.floor(t/a.hour);t=t%a.hour;const r=Math.floor(t/a.minute);t=t%a.minute;const m=Math.floor(t/a.second);return{days:c,hours:s,minutes:r,seconds:m}},b=()=>{const{waferProducts:l}=o.useContext(d),[n]=u("home"),[t,a]=o.useState(i());o.useEffect(()=>(document.title="home",()=>{document.title="el-shamedan"}),[]),o.useEffect(()=>{const s=setInterval(()=>{const r=i();a(r),r===null&&clearInterval(s)},1e3);return()=>{clearInterval(s)}},[]);const c=t?[{label:n("time.days"),value:t.days},{label:n("time.hours"),value:t.hours},{label:n("time.minutes"),value:t.minutes},{label:n("time.seconds"),value:t.seconds}]:[];return e.jsxs(e.Fragment,{children:[e.jsxs("article",{children:[e.jsx("section",{className:"py-6 relative",children:e.jsxs("div",{className:"contain",children:[e.jsx("img",{src:"images/curtain-left.png",alt:"curtain-left",className:"absolute left-0 top-0 h-4/5 opacity-50"}),e.jsx("img",{src:"images/curtain-right.png",alt:"curtain-left",className:"absolute right-0 top-0 h-4/5 opacity-50"}),e.jsxs("div",{className:"w-fit mx-auto md:mx-0 relative",children:[e.jsx("img",{src:"images/secret.png",alt:"secret",className:"max-w-xs mx-auto md:mx-0 mb-4 w-full"}),e.jsx("div",{className:"text-center grid grid-cols-4 gap-4",children:c.map(s=>e.jsxs("div",{children:[e.jsx("div",{className:"bg-yellow rounded-lg h-10 grid place-items-center",children:e.jsx("span",{className:"rtl:text-2xl ltr:text-xl font-bold text-grey",children:s.value})}),e.jsx("span",{className:"block capitalize text-white rtl:text-2xl h-5",children:s.label})]},s.label))})]})]})}),e.jsxs("section",{className:"bg-black py-8",children:[e.jsx("h2",{className:"text-center text-3xl md:text-4xl md:rtl:text-5xl pb-2 mb-6 lg:mb-14 uppercase text-white relative before:absolute before:bottom-0 before:w-20 before:left-1/2 before:-translate-x-1/2 before:h-[2px] before:bg-purple",children:n("products")}),e.jsx("div",{className:"contain",children:e.jsx("div",{className:"grid grid-cols-2 gap-4 md:gap-6 lg:gap-16",children:l.map(s=>e.jsx(x,{product:s},s.name))})})]})]}),e.jsx(h,{})]})};export{b as default};
