import{j as e}from"./jsx-runtime-f961835c.js";import{t as p}from"./index-4d9335bf.js";import{A as o,a as i}from"./Avatar-911d8627.js";import"./index-2b6747da.js";import"./index-f80c8c95.js";import{G as a}from"./IconGalleryWithSearch-117a046e.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./index-9b4c0917.js";import"./colors-0c7b34f5.js";import"./extends-34e645d9.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-345cee61.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";import"./ColorPicker-56dce380.js";import"./ClickOutside-ccba0f4c.js";import"./Dropdown-4bac02d6.js";import"./index-495e5f6b.js";import"./RightOutlined-a42d53f0.js";import"./motion-787a5bbf.js";import"./type-30d10e57.js";import"./Compact-35a5bcb3.js";import"./reactNode-f7e50cfa.js";import"./index-300952f0.js";import"./button-3a9ea77e.js";import"./Pagination-41c73bc4.js";import"./BarChart-a0f29a42.js";import"./Popover-024376aa.js";import"./utils-8bad284d.js";import"./Axis-806b9145.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";import"./CalendarChart-8737125b.js";import"./Text-6fe683eb.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./Timeline-7a6a2af7.js";import"./WhiskerChart-a4b481de.js";const r="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/78/cb/e1/78cbe16d-28d9-057e-9f73-524c32eb5fe5/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",oe={title:"Components / Avatar",component:o,parameters:{layout:"centered",badges:[p.STABLE,"readyForDesignReview"],docs:{subtitle:"This component allows users to render a user pill with picture and name"}},argTypes:{name:{description:"Name of the user.",table:{defaultValue:{summary:`${i.name}`}},control:"text"},imageUrl:{description:"URL of the user image.",control:"text"},onClick:{description:"On click function for the Avatar."},size:{description:"Size of the Avatar.",table:{defaultValue:{summary:`${i.size}`}},control:"select"},showInPill:{description:"Whether Avatar is shown in pill format with name.",table:{defaultValue:{summary:`${i.showInPill}`}},control:"boolean"},isOutlined:{description:"Whether Avatar is outlined.",table:{defaultValue:{summary:`${i.isOutlined}`}},control:"boolean"}},args:{name:"John Doe",size:"default",showInPill:!1,isOutlined:!1}},s={tags:["dev"],render:c=>e.jsx(o,{...c})},t=()=>e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",size:"lg"}),e.jsx(o,{name:"John Doe",size:"md"}),e.jsx(o,{name:"John Doe",size:"default"}),e.jsx(o,{name:"John Doe",size:"sm"})]}),n=()=>e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",imageUrl:r,size:"lg"}),e.jsx(o,{name:"John Doe",imageUrl:r,size:"md"}),e.jsx(o,{name:"John Doe",imageUrl:r,size:"default"}),e.jsx(o,{name:"John Doe",imageUrl:r,size:"sm"})]}),m=()=>e.jsxs(a,{isVertical:!0,children:[e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",size:"lg",showInPill:!0}),e.jsx(o,{name:"John Doe",size:"md",showInPill:!0}),e.jsx(o,{name:"John Doe",size:"default",showInPill:!0}),e.jsx(o,{name:"John Doe",size:"sm",showInPill:!0})]}),e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",size:"lg",imageUrl:r,showInPill:!0}),e.jsx(o,{name:"John Doe",size:"md",imageUrl:r,showInPill:!0}),e.jsx(o,{name:"John Doe",size:"default",imageUrl:r,showInPill:!0}),e.jsx(o,{name:"John Doe",size:"sm",imageUrl:r,showInPill:!0})]})]}),l=()=>e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",size:"lg",imageUrl:r,isOutlined:!0}),e.jsx(o,{name:"John Doe",size:"lg",showInPill:!0,imageUrl:r,isOutlined:!0})]}),d=()=>e.jsxs(a,{children:[e.jsx(o,{name:"John Doe",onClick:()=>window.alert("Avatar clicked")}),e.jsx(o,{name:"John Doe",onClick:()=>window.alert("Avatar clicked"),showInPill:!0})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <Avatar {...props} />
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <GridList>
        <Avatar name="John Doe" size="lg" />
        <Avatar name="John Doe" size="md" />
        <Avatar name="John Doe" size="default" />
        <Avatar name="John Doe" size="sm" />
    </GridList>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <GridList>
        <Avatar name="John Doe" imageUrl={IMAGE_URL} size="lg" />
        <Avatar name="John Doe" imageUrl={IMAGE_URL} size="md" />
        <Avatar name="John Doe" imageUrl={IMAGE_URL} size="default" />
        <Avatar name="John Doe" imageUrl={IMAGE_URL} size="sm" />
    </GridList>`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        <GridList>
            <Avatar name="John Doe" size="lg" showInPill />
            <Avatar name="John Doe" size="md" showInPill />
            <Avatar name="John Doe" size="default" showInPill />
            <Avatar name="John Doe" size="sm" showInPill />
        </GridList>
        <GridList>
            <Avatar name="John Doe" size="lg" imageUrl={IMAGE_URL} showInPill />
            <Avatar name="John Doe" size="md" imageUrl={IMAGE_URL} showInPill />
            <Avatar name="John Doe" size="default" imageUrl={IMAGE_URL} showInPill />
            <Avatar name="John Doe" size="sm" imageUrl={IMAGE_URL} showInPill />
        </GridList>
    </GridList>`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <GridList>
        <Avatar name="John Doe" size="lg" imageUrl={IMAGE_URL} isOutlined />
        <Avatar name="John Doe" size="lg" showInPill imageUrl={IMAGE_URL} isOutlined />
    </GridList>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <GridList>
        <Avatar name="John Doe" onClick={() => window.alert('Avatar clicked')} />
        <Avatar name="John Doe" onClick={() => window.alert('Avatar clicked')} showInPill />
    </GridList>`,...d.parameters?.docs?.source}}};const re=["sandbox","sizes","withImage","pills","outlined","withOnClick"];export{re as __namedExportsOrder,oe as default,l as outlined,m as pills,s as sandbox,t as sizes,n as withImage,d as withOnClick};
