import{j as d}from"./jsx-runtime-f961835c.js";import{s as m}from"./styled-components.browser.esm-f891f5b9.js";import{c as B}from"./index-9b4c0917.js";import{c as i}from"./colors-0c7b34f5.js";import"./index-f80c8c95.js";import"./index-e8e5dbb3.js";const b=m.div`
    display: flex;
    gap: 2px;
    align-items: baseline;
`,h=m.div`
    width: ${r=>r.size==="default"?"5px":"3px"};
    height: ${r=>r.height}px;
    background-color: ${r=>r.isColored?r.color:"#C6C0E0"};
    border-radius: 20px;
    transition:
        background-color 0.3s ease,
        height 0.3s ease;
`,y={lg:5,sm:4,default:5},n={color:B.violet[500],coloredBars:2,size:"default"},l=({color:r=n.color,coloredBars:p=n.coloredBars,size:u=n.size})=>{const f=Array.from({length:3},(C,c)=>{const g=(c+2)*y[u];return d.jsx(h,{size:u,height:g,isColored:c<p,color:r},c)});return d.jsx(b,{children:f})};try{l.displayName="Bar",l.__docgenInfo={description:"",displayName:"Bar",props:{color:{defaultValue:{value:"defaultProps.color"},description:"",name:"color",required:!1,type:{name:"string"}},coloredBars:{defaultValue:{value:"defaultProps.coloredBars"},description:"",name:"coloredBars",required:!1,type:{name:"number"}},size:{defaultValue:{value:"defaultProps.size"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"default"'}]}}}}}catch{}const V={title:"Components / Bar",component:l,parameters:{layout:"centered",docs:{subtitle:"Displays a bar component with up to three segments that can be dynamically colored."}},argTypes:{color:{description:"Color of the filled bars.",control:"color",table:{defaultValue:{summary:i.violet[500]}}},coloredBars:{description:"Number of bars to color.",control:{type:"number",min:0,max:3},table:{defaultValue:{summary:"2"}}},size:{description:"Size of the bars.",control:"select",options:["sm","lg","default"],table:{defaultValue:{summary:"default"}}}},args:{color:i.violet[500],coloredBars:2,size:"default"}},e={render:r=>d.jsx(l,{...r})},o={args:{color:"#ff6b6b",coloredBars:3}},a={args:{size:"sm",coloredBars:1,color:"#6bc1ff"}},s={args:{size:"default",coloredBars:2,color:i.violet[500]}},t={args:{size:"default",coloredBars:0,color:"#C6C0E0"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <Bar {...props} />
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#ff6b6b',
    coloredBars: 3
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    coloredBars: 1,
    color: '#6bc1ff'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    coloredBars: 2,
    color: colors.violet[500]
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    coloredBars: 0,
    color: '#C6C0E0'
  }
}`,...t.parameters?.docs?.source}}};const j=["sandbox","withCustomColors","smallBars","defaultBars","noColoredBars"];export{j as __namedExportsOrder,V as default,s as defaultBars,t as noColoredBars,e as sandbox,a as smallBars,o as withCustomColors};
