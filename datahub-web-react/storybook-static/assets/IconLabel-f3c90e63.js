import{j as r}from"./jsx-runtime-f961835c.js";import{r as l}from"./index-f80c8c95.js";import{s}from"./styled-components.browser.esm-f891f5b9.js";const f=s.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,g=s.div`
    display: flex;
    align-items: center;
    margin-right: 0px;
`,I=s.span`
    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    color: #374066;
    white-space: normal;
`;var i=(e=>(e.ICON="ICON",e.IMAGE="IMAGE",e))(i||{});const y=async e=>new Promise(n=>{const t=new Image;t.src=e,t.onload=()=>n(!0),t.onerror=()=>n(!1)}),o=({icon:e,name:n,type:t,style:d,imageUrl:a,testId:u})=>{const[c,m]=l.useState(!1);l.useEffect(()=>{t===i.IMAGE&&typeof a=="string"&&y(a).then(m)},[a,t]);const p=()=>t===i.ICON?e:t===i.IMAGE&&c?r.jsx("img",{alt:n,src:a,height:24,width:24}):null;return r.jsxs(f,{children:[r.jsx(g,{"data-testid":u,style:d,children:p()}),r.jsx(I,{"data-testid":n,title:n,children:n})]})};try{o.displayName="IconLabel",o.__docgenInfo={description:"",displayName:"IconLabel",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"Element"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"ICON"'},{value:'"IMAGE"'}]}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"string"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}}}}}catch{}export{o as I,i as a};
