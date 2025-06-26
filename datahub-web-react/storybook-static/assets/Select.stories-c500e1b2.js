import{j as l}from"./jsx-runtime-f961835c.js";import{t as V}from"./index-4d9335bf.js";import"./index-2b6747da.js";import"./index-f80c8c95.js";import{G as s}from"./IconGalleryWithSearch-117a046e.js";import"./Avatar-911d8627.js";import{A as R}from"./constants-15fcc1a3.js";import{r as i,t,k as a}from"./ColorPicker-56dce380.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-345cee61.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";import"./index-9b4c0917.js";import"./colors-0c7b34f5.js";import"./BarChart-a0f29a42.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./Popover-024376aa.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./index-300952f0.js";import"./motion-787a5bbf.js";import"./type-30d10e57.js";import"./reactNode-f7e50cfa.js";import"./utils-8bad284d.js";import"./Axis-806b9145.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";import"./CalendarChart-8737125b.js";import"./Dropdown-4bac02d6.js";import"./RightOutlined-a42d53f0.js";import"./Compact-35a5bcb3.js";import"./button-3a9ea77e.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./Text-6fe683eb.js";import"./OverflowText-66629e85.js";import"./Pagination-41c73bc4.js";import"./Timeline-7a6a2af7.js";import"./ClickOutside-ccba0f4c.js";import"./WhiskerChart-a4b481de.js";const he={title:"Forms / Select",component:i,parameters:{layout:"centered",badges:[V.STABLE,"readyForDesignReview"],docs:{subtitle:"This component allows users to select one or multiple input options from a dropdown list."}},argTypes:{options:{description:"Array of options for the Select component.",control:{type:"object"},table:{defaultValue:{summary:JSON.stringify(t.options)}}},label:{description:"Label for the Select component.",control:{type:"text"},table:{defaultValue:{summary:t.label}}},values:{description:"Selected values for the Select component.",control:{type:"object"},table:{defaultValue:{summary:t.values?.toString()}}},showSearch:{description:"Whether to show the search input.",control:{type:"boolean"},table:{defaultValue:{summary:t.showSearch?.toString()}}},isDisabled:{description:"Whether the Select component is disabled.",control:{type:"boolean"},table:{defaultValue:{summary:t.isDisabled?.toString()}}},isReadOnly:{description:"Whether the Select component is read-only.",control:{type:"boolean"},table:{defaultValue:{summary:t.isReadOnly?.toString()}}},isRequired:{description:"Whether the Select component is required.",control:{type:"boolean"},table:{defaultValue:{summary:t.isRequired?.toString()}}},size:{description:"Size of the Select component.",control:{type:"select",options:["sm","md","lg"]},table:{defaultValue:{summary:t.size}}},width:{description:"Width of the Select component.",control:{type:"number"},table:{defaultValue:{summary:`${t.width}`}}},isMultiSelect:{description:"Whether the Select component allows multiple values to be selected.",control:{type:"boolean"},table:{defaultValue:{summary:t.isMultiSelect?.toString()}}},placeholder:{description:"Placeholder for the Select component.",control:{type:"text"},table:{defaultValue:{summary:t.placeholder}}},disabledValues:{description:"Disabled values for the multi-select component.",control:{type:"object"},table:{defaultValue:{summary:t.disabledValues?.toString()}}},showSelectAll:{description:"Whether the multi select component shows Select All button.",control:{type:"boolean"},table:{defaultValue:{summary:t.showSelectAll?.toString()}}},selectAllLabel:{description:"Label for Select All button.",control:{type:"text"},table:{defaultValue:{summary:t.selectAllLabel}}},showDescriptions:{description:"Whether to show descriptions with the select options.",control:{type:"boolean"},table:{defaultValue:{summary:t.showDescriptions?.toString()}}},icon:{description:"The name of the icon to display.",type:"string",options:R,table:{defaultValue:{summary:"undefined"}},control:{type:"select"}},optionSwitchable:{description:"Set to `true` to uselect option by clicking on it",type:"boolean",table:{defaultValue:{summary:"undefined"}},control:{type:"boolean"}},selectLabelProps:{description:"Additional props for rendering of select label",table:{defaultValue:{summary:"undefined"}}}},args:{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Select Label",values:void 0,showSearch:t.showSearch,isDisabled:t.isDisabled,isReadOnly:t.isReadOnly,isRequired:t.isRequired,onCancel:()=>console.log("Cancel clicked"),onUpdate:e=>console.log("Update clicked",e),size:"md",width:255,isMultiSelect:t.isMultiSelect,placeholder:t.placeholder,disabledValues:void 0,showSelectAll:!1,selectAllLabel:"Select All",showDescriptions:!1}},D=["sm","md","lg"],r={tags:["dev"],render:e=>l.jsx(a,{options:e.options,label:e.label,values:e.values,showSearch:e.showSearch,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,size:e.size,width:e.width,onUpdate:e.onUpdate,isMultiSelect:e.isMultiSelect,placeholder:e.placeholder,disabledValues:e.disabledValues,icon:e.icon})},c=()=>l.jsx(s,{isVertical:!0,children:l.jsxs(l.Fragment,{children:[l.jsx(a,{options:[{label:"Default",value:"default"}],label:"Default",values:["default"]}),l.jsx(a,{options:[{label:"Disabled State",value:"disabled"}],label:"Disabled State",isDisabled:!0,values:["disabled"]}),l.jsx(a,{options:[{label:"Read Only State",value:"readonly"}],label:"Read Only State",isReadOnly:!0,values:["readonly"]})]})}),n=()=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Simple Select with Search",showSearch:!0,values:["2"]}),p=()=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Simple Select with multi-select",showSearch:!0,values:["2","3"],isMultiSelect:!0}),u=()=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Simple Select with disabled values",values:["2"],isMultiSelect:!0,disabledValues:["2"]}),d=()=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Simple Select with Select All",isMultiSelect:!0,showSelectAll:!0}),m=()=>l.jsx(a,{options:[{label:"Option 1",value:"1",description:"Description of option 1"},{label:"Option 2",value:"2",description:"Description of option 2 is  longgggggg"},{label:"Option 3",value:"3",description:"Description of option 3"}],label:"Simple Select with descriptions",showDescriptions:!0}),S=()=>l.jsx(s,{isVertical:!0,children:D.map((e,o)=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:`Simple Select - Font Size: ${e}, Width: ${255+50*o}px`,values:["3"],size:e,width:255+50*o},`simpleselect-${e}`))}),b=()=>l.jsx(a,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Simple Select with icon",icon:"Search"}),h={tags:["dev"],render:e=>l.jsx(i,{options:e.options,label:e.label,values:e.values,onCancel:e.onCancel,onUpdate:e.onUpdate,showSearch:e.showSearch,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,size:e.size,width:e.width,isMultiSelect:e.isMultiSelect,placeholder:e.placeholder,icon:e.icon})},v=()=>l.jsx(s,{isVertical:!0,children:l.jsxs(l.Fragment,{children:[l.jsx(i,{options:[{label:"Default",value:"default"}],label:"Default",values:["default"]}),l.jsx(i,{options:[{label:"Disabled State",value:"disabled"}],label:"Disabled State",isDisabled:!0,values:["disabled"]}),l.jsx(i,{options:[{label:"Read Only State",value:"readonly"}],label:"Read Only State",isReadOnly:!0,values:["readonly"]})]})}),O=()=>l.jsx(i,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Select with Search",showSearch:!0,values:["2"],filterResultsByQuery:!0}),w=()=>l.jsx(i,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Select with multi-select",showSearch:!0,values:["2","3"],isMultiSelect:!0}),y=()=>l.jsx(s,{isVertical:!0,children:D.map((e,o)=>l.jsx(i,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:`Select - Font Size: ${e}, Width: ${255+50*o}px`,values:["3"],onCancel:()=>alert("Cancel clicked"),onUpdate:x=>alert(`Update clicked with values: ${x}`),size:e,width:255+50*o},`select-${e}`))}),f=()=>l.jsx(s,{isVertical:!0,children:l.jsx(i,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Select with Footer Actions",values:["3"],onCancel:()=>alert("Cancel clicked"),onUpdate:e=>alert(`Update clicked with values: ${e}`),size:"md"})}),g=()=>l.jsx(i,{options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],label:"Select with icon",values:["2"],icon:"Search"});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <SimpleSelect options={props.options} label={props.label} values={props.values} showSearch={props.showSearch} isDisabled={props.isDisabled} isReadOnly={props.isReadOnly} isRequired={props.isRequired} size={props.size} width={props.width} onUpdate={props.onUpdate} // Optional: to log the selected value
  isMultiSelect={props.isMultiSelect} placeholder={props.placeholder} disabledValues={props.disabledValues} icon={props.icon} />
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        <>
            <SimpleSelect options={[{
      label: 'Default',
      value: 'default'
    }]} label="Default" values={['default']} />
            <SimpleSelect options={[{
      label: 'Disabled State',
      value: 'disabled'
    }]} label="Disabled State" isDisabled values={['disabled']} />
            <SimpleSelect options={[{
      label: 'Read Only State',
      value: 'readonly'
    }]} label="Read Only State" isReadOnly values={['readonly']} />
        </>
    </GridList>`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Simple Select with Search" showSearch values={['2']} />`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Simple Select with multi-select" showSearch values={['2', '3']} isMultiSelect />`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Simple Select with disabled values" values={['2']} isMultiSelect disabledValues={['2']} />`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Simple Select with Select All" isMultiSelect showSelectAll />`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1',
  description: 'Description of option 1'
}, {
  label: 'Option 2',
  value: '2',
  description: 'Description of option 2 is  longgggggg'
}, {
  label: 'Option 3',
  value: '3',
  description: 'Description of option 3'
}]} label="Simple Select with descriptions" showDescriptions />`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        {sizeOptions.map((size, index) => <SimpleSelect key={\`simpleselect-\${size}\`} options={[{
    label: 'Option 1',
    value: '1'
  }, {
    label: 'Option 2',
    value: '2'
  }, {
    label: 'Option 3',
    value: '3'
  }]} label={\`Simple Select - Font Size: \${size}, Width: \${255 + 50 * index}px\`} values={['3']} size={size} width={255 + 50 * index} />)}
    </GridList>`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => <SimpleSelect options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Simple Select with icon" icon="Search" />`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <Select options={props.options} label={props.label} values={props.values} onCancel={props.onCancel} onUpdate={props.onUpdate} showSearch={props.showSearch} isDisabled={props.isDisabled} isReadOnly={props.isReadOnly} isRequired={props.isRequired} size={props.size} width={props.width} isMultiSelect={props.isMultiSelect} placeholder={props.placeholder} icon={props.icon} />
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        <>
            <Select options={[{
      label: 'Default',
      value: 'default'
    }]} label="Default" values={['default']} />
            <Select options={[{
      label: 'Disabled State',
      value: 'disabled'
    }]} label="Disabled State" isDisabled values={['disabled']} />
            <Select options={[{
      label: 'Read Only State',
      value: 'readonly'
    }]} label="Read Only State" isReadOnly values={['readonly']} />
        </>
    </GridList>`,...v.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => <Select options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Select with Search" showSearch values={['2']} filterResultsByQuery />`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Select options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Select with multi-select" showSearch values={['2', '3']} isMultiSelect />`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        {sizeOptions.map((size, index) => <Select key={\`select-\${size}\`} options={[{
    label: 'Option 1',
    value: '1'
  }, {
    label: 'Option 2',
    value: '2'
  }, {
    label: 'Option 3',
    value: '3'
  }]} label={\`Select - Font Size: \${size}, Width: \${255 + 50 * index}px\`} values={['3']} onCancel={() => alert('Cancel clicked')} onUpdate={selectedValues => alert(\`Update clicked with values: \${selectedValues}\`)} size={size} width={255 + 50 * index} />)}
    </GridList>`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => <GridList isVertical>
        <Select options={[{
    label: 'Option 1',
    value: '1'
  }, {
    label: 'Option 2',
    value: '2'
  }, {
    label: 'Option 3',
    value: '3'
  }]} label="Select with Footer Actions" values={['3']} onCancel={() => alert('Cancel clicked')} onUpdate={selectedValues => alert(\`Update clicked with values: \${selectedValues}\`)} size="md" />
    </GridList>`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <Select options={[{
  label: 'Option 1',
  value: '1'
}, {
  label: 'Option 2',
  value: '2'
}, {
  label: 'Option 3',
  value: '3'
}]} label="Select with icon" values={['2']} icon="Search" />`,...g.parameters?.docs?.source}}};const ve=["simpleSelectSandbox","simpleSelectStates","simpleSelectWithSearch","simpleSelectWithMultiSelect","simpleSelectWithDisabledValues","simpleSelectWithSelectAll","simpleSelectWithDescriptions","simpleSelectSizes","simpleSelectWithIcon","BasicSelectSandbox","states","withSearch","withMultiSelect","sizes","footerActions","withIcon"];export{h as BasicSelectSandbox,ve as __namedExportsOrder,he as default,f as footerActions,r as simpleSelectSandbox,S as simpleSelectSizes,c as simpleSelectStates,m as simpleSelectWithDescriptions,u as simpleSelectWithDisabledValues,b as simpleSelectWithIcon,p as simpleSelectWithMultiSelect,n as simpleSelectWithSearch,d as simpleSelectWithSelectAll,y as sizes,v as states,g as withIcon,w as withMultiSelect,O as withSearch};
