import{u as f,r as n,j as e}from"./index-f376cdb0.js";import{F as p}from"./footer.component-91a54c9c.js";import{u as x}from"./useTitle-40fcdea4.js";const b=()=>{const[t]=f("contact"),o=n.useRef(null),[a,r]=n.useState("");x("contact us");const l=m=>{m.preventDefault();const s=o.current,c=s.name.value,u=s.email.value,i=s.message.value;if(!(c&&u&&i))return r(t("errorMsg"));r(t("successMsg")),s.reset()};return n.useEffect(()=>{if(!a)return;const m=setTimeout(()=>{r("")},3e3);return()=>{clearTimeout(m)}},[a]),e.jsxs(e.Fragment,{children:[e.jsx("article",{className:"contain py-8",children:e.jsx("div",{className:"w-full max-w-md mx-auto",children:e.jsxs("form",{ref:o,onSubmit:l,children:[e.jsx("input",{type:"text",name:"name",placeholder:t("name"),className:"form-input mb-4"}),e.jsx("input",{type:"email",name:"email",placeholder:t("email"),className:"form-input mb-4"}),e.jsx("textarea",{name:"message",placeholder:t("message"),className:"form-input",rows:5}),e.jsx("p",{className:"h-8 text-red ltr:font-bold ltr:dark:font-normal",children:a}),e.jsx("button",{type:"submit",className:"form-button",children:t("submit")})]})})}),e.jsx(p,{})]})};export{b as default};