import{u as p,r as a,j as e}from"./index-3304f546.js";import{F as x}from"./footer.component-44b7997a.js";const h=()=>{const[t]=p("contact"),o=a.useRef(null),[r,n]=a.useState("");a.useEffect(()=>(document.title="contact us",()=>{document.title="el-shamedan"}),[]);const c=m=>{m.preventDefault();const s=o.current,l=s.name.value,u=s.email.value,i=s.message.value;if(!(l&&u&&i))return n(t("errorMsg"));n(t("successMsg")),s.reset()};return a.useEffect(()=>{if(!r)return;const m=setTimeout(()=>{n("")},3e3);return()=>{clearTimeout(m)}},[r]),e.jsxs(e.Fragment,{children:[e.jsx("article",{className:"contain py-8",children:e.jsx("div",{className:"w-full max-w-md mx-auto",children:e.jsxs("form",{ref:o,onSubmit:c,children:[e.jsx("input",{type:"text",name:"name",placeholder:t("name"),className:"form-input mb-4"}),e.jsx("input",{type:"email",name:"email",placeholder:t("email"),className:"form-input mb-4"}),e.jsx("textarea",{name:"message",placeholder:t("message"),className:"form-input",rows:5}),e.jsx("p",{className:"h-8 text-red",children:r}),e.jsx("button",{type:"submit",className:"bg-purple text-white py-2 px-4 rounded hover:bg-purple/80",children:t("submit")})]})})}),e.jsx(x,{})]})};export{h as default};
