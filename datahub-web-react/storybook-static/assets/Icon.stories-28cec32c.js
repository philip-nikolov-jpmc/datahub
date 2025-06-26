import{j as o}from"./jsx-runtime-f961835c.js";import"./index-2b6747da.js";import"./index-f80c8c95.js";import{G as t}from"./IconGalleryWithSearch-117a046e.js";import{F as p,C as m}from"./index-9b4c0917.js";import{I as r,i}from"./Avatar-911d8627.js";import{A as f}from"./constants-15fcc1a3.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-345cee61.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";import"./ColorPicker-56dce380.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./ClickOutside-ccba0f4c.js";import"./Dropdown-4bac02d6.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./RightOutlined-a42d53f0.js";import"./motion-787a5bbf.js";import"./type-30d10e57.js";import"./Compact-35a5bcb3.js";import"./reactNode-f7e50cfa.js";import"./index-300952f0.js";import"./button-3a9ea77e.js";import"./Pagination-41c73bc4.js";import"./BarChart-a0f29a42.js";import"./Popover-024376aa.js";import"./utils-8bad284d.js";import"./Axis-806b9145.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";import"./CalendarChart-8737125b.js";import"./Text-6fe683eb.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./colors-0c7b34f5.js";import"./Timeline-7a6a2af7.js";import"./WhiskerChart-a4b481de.js";const d={icon:"AccountCircle",source:"material"},u={icon:"Activity",source:"phosphor"},to={title:"Media / Icon",component:r,parameters:{layout:"centered",badges:["productionReady"],docs:{subtitle:"A singular component for rendering the icons used throughout the application.",description:{component:"👉 See the [Icons Gallery](/docs/icons--docs) for more information."}}},argTypes:{icon:{description:"The name of the icon to display.",type:"string",options:f,table:{defaultValue:{summary:"undefined"}},control:{type:"select"}},variant:{description:"The variant of the icon to display.",defaultValue:"outline",options:["outline","filled"],table:{defaultValue:{summary:i.variant}}},size:{description:"The size of the icon to display.",defaultValue:"lg",table:{defaultValue:{summary:i.size}}},color:{description:"The color of the icon to display.",options:["inherit","white","black","violet","green","red","blue","gray"],type:"string",table:{defaultValue:{summary:i.color}},control:{type:"select"}},rotate:{description:"The rotation of the icon. Applies a CSS transformation.",table:{defaultValue:{summary:i.rotate}}}},args:{icon:"Activity",source:"phosphor"}},s={tags:["dev"],render:e=>o.jsx(r,{...e})},a=()=>o.jsxs(t,{children:[o.jsx(r,{icon:"AccountCircle",variant:"filled"}),o.jsx(r,{icon:"AddHome",variant:"filled"}),o.jsx(r,{icon:"AdminPanelSettings",variant:"filled"})]}),n=()=>o.jsxs(o.Fragment,{children:[o.jsx(t,{children:Object.values(p).map(e=>o.jsx(r,{...u,size:e},e))}),o.jsx(t,{children:Object.values(p).map(e=>o.jsx(r,{...d,size:e},e))})]}),c=()=>o.jsxs(o.Fragment,{children:[o.jsx(t,{children:Object.values(m).map(e=>o.jsx(r,{...u,color:e},e))}),o.jsx(t,{children:Object.values(m).map(e=>o.jsx(r,{...d,color:e},e))})]}),l=()=>o.jsxs(t,{children:[o.jsx(r,{icon:"ChevronLeft"}),o.jsx(r,{icon:"ChevronLeft",rotate:"90"}),o.jsx(r,{icon:"ChevronLeft",rotate:"180"}),o.jsx(r,{icon:"ChevronLeft",rotate:"270"})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <Icon {...props} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <GridList>
        <Icon icon="AccountCircle" variant="filled" />
        <Icon icon="AddHome" variant="filled" />
        <Icon icon="AdminPanelSettings" variant="filled" />
    </GridList>`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <>
        <GridList>
            {Object.values(FontSizeValues).map(size => <Icon key={size} {...storyDefaults} size={size} />)}
        </GridList>
        <GridList>
            {Object.values(FontSizeValues).map(size => <Icon key={size} {...storyMaterialDefaults} size={size} />)}
        </GridList>
    </>`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <>
        <GridList>
            {Object.values(ColorValues).map(color => <Icon key={color} {...storyDefaults} color={color} />)}
        </GridList>
        <GridList>
            {Object.values(ColorValues).map(color => <Icon key={color} {...storyMaterialDefaults} color={color} />)}
        </GridList>
    </>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <GridList>
        <Icon icon="ChevronLeft" />
        <Icon icon="ChevronLeft" rotate="90" />
        <Icon icon="ChevronLeft" rotate="180" />
        <Icon icon="ChevronLeft" rotate="270" />
    </GridList>`,...l.parameters?.docs?.source}}};const io=["sandbox","filled","sizes","colors","rotation"];export{io as __namedExportsOrder,c as colors,to as default,a as filled,l as rotation,s as sandbox,n as sizes};
