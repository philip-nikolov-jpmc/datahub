import{j as o}from"./jsx-runtime-f961835c.js";import{r as t}from"./index-f80c8c95.js";import{s as n}from"./styled-components.browser.esm-f891f5b9.js";import{c as p}from"./colors-0c7b34f5.js";import{T as s}from"./index-300952f0.js";function d(e){return o.jsx(s,{showArrow:!1,color:"white",overlayInnerStyle:{color:p.gray[1700]},...e})}try{s.displayName="Tooltip",s.__docgenInfo={description:"",displayName:"Tooltip",props:{}}}catch{}const f=n.span`
    display: block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
`,l=({text:e})=>{const i=t.useRef(null),[a,c]=t.useState(!1);return t.useEffect(()=>{const r=i.current;r&&c(r.scrollWidth>r.clientWidth)},[e]),o.jsx(d,{title:a?e:void 0,children:o.jsx(f,{ref:i,children:e})})};try{l.displayName="OverflowText",l.__docgenInfo={description:"",displayName:"OverflowText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}export{d as D,l as O};
