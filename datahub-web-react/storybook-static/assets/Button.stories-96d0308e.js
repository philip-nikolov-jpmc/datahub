import{j as t}from"./jsx-runtime-f961835c.js";import{S as m}from"./index-9b4c0917.js";import{j as e,F as o}from"./ColorPicker-56dce380.js";import"./Avatar-911d8627.js";import"./BarChart-a0f29a42.js";import"./CalendarChart-8737125b.js";import"./Dropdown-4bac02d6.js";import{A as p,M as h,P as B}from"./constants-15fcc1a3.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./Pagination-41c73bc4.js";import"./Popover-024376aa.js";import"./Text-6fe683eb.js";import"./Timeline-7a6a2af7.js";import"./ClickOutside-ccba0f4c.js";import"./WhiskerChart-a4b481de.js";import{t as g}from"./index-4d9335bf.js";import"./index-2b6747da.js";import"./index-f80c8c95.js";import{G as r}from"./IconGalleryWithSearch-117a046e.js";import"./colors-0c7b34f5.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./index-345cee61.js";import"./Compact-35a5bcb3.js";import"./reactNode-f7e50cfa.js";import"./type-30d10e57.js";import"./button-3a9ea77e.js";import"./index-300952f0.js";import"./motion-787a5bbf.js";import"./RightOutlined-a42d53f0.js";import"./Axis-806b9145.js";import"./utils-8bad284d.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";var u=(i=>(i.filled="filled",i.outline="outline",i.text="text",i.secondary="secondary",i))(u||{});const nt={title:"Forms / Button",component:e,parameters:{layout:"centered",badges:[g.STABLE,"readyForDesignReview"],docs:{subtitle:"Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation."}},argTypes:{children:{description:"The content of the Button.",control:{type:"text"}},variant:{description:"The variant of the Button.",options:Object.values(u),table:{defaultValue:{summary:o.variant}},control:{type:"radio"}},color:{description:"The color of the Button.",options:["violet","green","red","gray"],table:{defaultValue:{summary:o.color}},control:{type:"select"}},size:{description:"The size of the Button.",options:Object.values(m),table:{defaultValue:{summary:o.size}},control:{type:"select"}},icon:{description:"The icon to display in the Button.",type:"string",options:p,mapping:Object.fromEntries([...h.map(i=>[i,{icon:i,source:"material",size:"2xl"}]),...B.map(i=>[i,{icon:i,source:"phosphor",size:"2xl"}])]),table:{defaultValue:{summary:"undefined"}},control:{type:"select"}},iconPosition:{description:"The position of the icon in the Button.",options:["left","right"],table:{defaultValue:{summary:o.iconPosition}},control:{type:"radio"}},isCircle:{description:"Whether the Button should be a circle. If this is selected, the Button will ignore children content, so add an Icon to the Button.",table:{defaultValue:{summary:o?.isCircle?.toString()}},control:{type:"boolean"}},isLoading:{description:"Whether the Button is in a loading state.",table:{defaultValue:{summary:o?.isLoading?.toString()}},control:{type:"boolean"}},isDisabled:{description:"Whether the Button is disabled.",table:{defaultValue:{summary:o?.isDisabled?.toString()}},control:{type:"boolean"}},isActive:{description:"Whether the Button is active.",table:{defaultValue:{summary:o?.isActive?.toString()}},control:{type:"boolean"}},onClick:{description:"Function to call when the button is clicked",table:{defaultValue:{summary:"undefined"}},action:"clicked"}},args:{children:"Button",variant:o.variant,color:o.color,size:o.size,icon:void 0,iconPosition:o.iconPosition,isCircle:o.isCircle,isLoading:o.isLoading,isDisabled:o.isDisabled,isActive:o.isActive,onClick:()=>console.log("Button clicked")}},s={tags:["dev"],render:i=>t.jsx(e,{...i})},n=()=>t.jsxs(r,{children:[t.jsx(e,{children:"Default"}),t.jsx(e,{isLoading:!0,children:"Loading State"}),t.jsx(e,{isActive:!0,children:"Active/Focus State"}),t.jsx(e,{isDisabled:!0,children:"Disabled State"})]}),a=()=>t.jsxs(r,{children:[t.jsx(e,{children:"Violet Button"}),t.jsx(e,{color:"green",children:"Green Button"}),t.jsx(e,{color:"red",children:"Red Button"}),t.jsx(e,{color:"blue",children:"Blue Button"}),t.jsx(e,{color:"gray",children:"Gray Button"})]}),c=()=>t.jsxs(r,{children:[t.jsx(e,{size:"xs",children:"XSmall"}),t.jsx(e,{size:"sm",children:"Small"}),t.jsx(e,{size:"md",children:"Regular"}),t.jsx(e,{size:"lg",children:"Large"}),t.jsx(e,{size:"xl",children:"XLarge"})]}),l=()=>t.jsxs(r,{children:[t.jsx(e,{icon:{icon:"Add",source:"material"},children:"Icon Left"}),t.jsx(e,{icon:{icon:"Add",source:"material"},iconPosition:"right",children:"Icon Right"})]}),d=()=>t.jsxs(r,{children:[t.jsx(e,{icon:{icon:"Add",source:"material"},size:"sm",isCircle:!0}),t.jsx(e,{icon:{icon:"Add",source:"material"},isCircle:!0}),t.jsx(e,{icon:{icon:"Add",source:"material"},size:"lg",isCircle:!0})]});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <Button {...props} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <GridList>
        <Button>Default</Button>
        <Button isLoading>Loading State</Button>
        <Button isActive>Active/Focus State</Button>
        <Button isDisabled>Disabled State</Button>
    </GridList>`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <GridList>
        <Button>Violet Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="gray">Gray Button</Button>
    </GridList>`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <GridList>
        <Button size="xs">XSmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Regular</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XLarge</Button>
    </GridList>`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <GridList>
        <Button icon={{
    icon: 'Add',
    source: 'material'
  }}>Icon Left</Button>
        <Button icon={{
    icon: 'Add',
    source: 'material'
  }} iconPosition="right">
            Icon Right
        </Button>
    </GridList>`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <GridList>
        <Button icon={{
    icon: 'Add',
    source: 'material'
  }} size="sm" isCircle />
        <Button icon={{
    icon: 'Add',
    source: 'material'
  }} isCircle />
        <Button icon={{
    icon: 'Add',
    source: 'material'
  }} size="lg" isCircle />
    </GridList>`,...d.parameters?.docs?.source}}};const at=["sandbox","states","colors","sizes","withIcon","circleShape"];export{at as __namedExportsOrder,d as circleShape,a as colors,nt as default,s as sandbox,c as sizes,n as states,l as withIcon};
