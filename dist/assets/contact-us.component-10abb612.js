import{u as f,r as n,j as e}from"./index-d93e0992.js";import{F as p}from"./footer.component-be578ccd.js";import{u as x}from"./useTitle-43acadd7.js";const g=()=>{const[s]=f("contact"),o=n.useRef(null),[a,m]=n.useState("");x("contact us");const c=r=>{r.preventDefault();const t=o.current,l=t.name.value,u=t.email.value,i=t.message.value;if(!(l&&u&&i))return m(s("errorMsg"));m(s("successMsg")),t.reset()};return n.useEffect(()=>{if(!a)return;const r=setTimeout(()=>{m("")},3e3);return()=>{clearTimeout(r)}},[a]),e.jsxs(e.Fragment,{children:[e.jsx("article",{className:"contain py-8",children:e.jsx("div",{className:"w-full max-w-md mx-auto",children:e.jsxs("form",{ref:o,onSubmit:c,children:[e.jsx("input",{type:"text",name:"name",placeholder:s("name"),className:"form-input mb-4"}),e.jsx("input",{type:"email",name:"email",placeholder:s("email"),className:"form-input mb-4"}),e.jsx("textarea",{name:"message",placeholder:s("message"),className:"form-input",rows:5}),e.jsx("p",{className:"h-8 text-red",children:a}),e.jsx("button",{type:"submit",className:"form-button",children:s("submit")})]})})}),e.jsx(p,{})]})};export{g as default};