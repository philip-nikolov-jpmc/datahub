import{j as p}from"./jsx-runtime-f961835c.js";import{a as I,I as g}from"./IconLabel-f3c90e63.js";import{s as d}from"./styled-components.browser.esm-f891f5b9.js";import"./index-f80c8c95.js";import"./index-e8e5dbb3.js";const L=d.img`
    cursor: pointer;
`,f=d.span`
    font-family: Mulish;
    font-size: 14px;
    font-weight: 400;
    color: #374066;
    white-space: normal;
`,e={NONE:"NONE",LOW:"LOW",MEDIUM:"MEDIUM",HIGH:"HIGH",CRITICAL:"CRITICAL"},h=""+new URL("incident-chart-bar-one-18c65952.svg",import.meta.url).href,C=""+new URL("incident-chart-bar-three-fc359c67.svg",import.meta.url).href,b=""+new URL("incident-chart-bar-two-573c0194.svg",import.meta.url).href,w=""+new URL("incident-critical-43c789dd.svg",import.meta.url).href,P={[e.CRITICAL]:w,[e.HIGH]:C,[e.MEDIUM]:b,[e.LOW]:h,[e.NONE]:null},M=Object.fromEntries(Object.entries(P).map(([r,t])=>[r,{icon:t?p.jsx(L,{src:t,alt:r}):null,type:I.ICON}])),l=({priority:r,title:t,style:y})=>{const{icon:m,type:u}=M[r]||{};return m?p.jsx(g,{testId:"priority-title",style:y,icon:m,name:t,type:u}):p.jsx(f,{"data-testid":"priority-title",children:t})};try{l.displayName="IncidentPriorityLabel",l.__docgenInfo={description:"",displayName:"IncidentPriorityLabel",props:{priority:{defaultValue:null,description:"",name:"priority",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const x={title:"Components / IncidentPriorityLabel",component:l,parameters:{layout:"centered",docs:{subtitle:"Displays a priority label for incidents with an icon and title."}},argTypes:{priority:{description:"Incident string containing priority",control:{type:"text"},table:{type:{summary:'"CRITICAL" | "HIGH" | "MEDIUM" | "LOW"'}}},title:{description:"Incident string containing title",control:{type:"text"},table:{type:{summary:"title: string"}}}},args:{priority:"CRITICAL",title:"Critical"}},i={render:r=>p.jsx(l,{...r})},o={args:{priority:"CRITICAL",title:"Critical"}},n={args:{priority:"HIGH",title:"High"}},s={args:{priority:"MEDIUM",title:"Medium"}},a={args:{priority:"LOW",title:"Low"}},c={args:{priority:"UNKNOWN",title:"Unknown"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <IncidentPriorityLabel {...props} />
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    priority: 'CRITICAL',
    title: 'Critical'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    priority: 'HIGH',
    title: 'High'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    priority: 'MEDIUM',
    title: 'Medium'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    priority: 'LOW',
    title: 'Low'
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    priority: 'UNKNOWN',
    title: 'Unknown'
  }
}`,...c.parameters?.docs?.source}}};const E=["sandbox","criticalPriority","highPriority","mediumPriority","lowPriority","unknownPriority"];export{E as __namedExportsOrder,o as criticalPriority,x as default,n as highPriority,a as lowPriority,s as mediumPriority,i as sandbox,c as unknownPriority};
