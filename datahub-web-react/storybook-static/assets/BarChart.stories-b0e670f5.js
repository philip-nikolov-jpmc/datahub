import{j as t}from"./jsx-runtime-f961835c.js";import{t as p}from"./index-4d9335bf.js";import{B as n,D as d}from"./BarChart-a0f29a42.js";import{D as l,a as m,g as c,b as u,c as h}from"./utils-8bad284d.js";import"./index-f80c8c95.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./Popover-024376aa.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./index-345cee61.js";import"./index-300952f0.js";import"./motion-787a5bbf.js";import"./type-30d10e57.js";import"./reactNode-f7e50cfa.js";import"./BarRounded-86230f55.js";import"./Axis-806b9145.js";import"./dayjs.min-b50de240.js";import"./index-9b4c0917.js";import"./colors-0c7b34f5.js";const j={title:"Charts / BarChart",component:n,parameters:{layout:"centered",badges:[p.EXPERIMENTAL],docs:{subtitle:"A component that is used to show BarChart"}},argTypes:{data:{description:"Array of datum to show",table:{type:{summary:"DatumType[]",detail:`The DatumType includes:
- x: A numeric value representing the x-coordinate.
- y: A numeric value representing the y-coordinate.
- colorScheme (optional): A ColorScheme enum value to define the color of the data point. If not provided, a default color may be used.`}}},horizontal:{description:"Whether to show horizontal bars",table:{defaultValue:{summary:"false"}},control:{type:"boolean"}},maxYDomainForZeroData:{description:"For the case where the data has only zero values, you can set the yScale domain to better display the chart",table:{defaultValue:{summary:`${l}`}}},minYForZeroData:{description:"For the case where the data has only zero values, you can set minimal Y value to better display the chart",table:{defaultValue:{summary:`${d}`}}},popoverRenderer:{description:"A function to replace default rendering of toolbar"},margin:{description:"Add margins to chart"},leftAxisProps:{description:"The props for the left axis"},maxLengthOfLeftAxisLabel:{description:"Enables truncating of label up to provided value. The full value will be available in popover",table:{defaultValue:{summary:`${m}`},type:{summary:"number"}},control:{type:"number"}},showLeftAxisLine:{description:"Enable to show left vertical line"},bottomAxisProps:{description:"The props for the bottom axis"},gridProps:{description:"The props for the grid"}},args:{...c(),popoverRenderer:e=>t.jsxs(t.Fragment,{children:["DATUM: ",JSON.stringify(e)]})}},r={tags:["dev"],render:e=>t.jsx("div",{style:{width:"900px",height:"350px"},children:t.jsx(n,{...e})})},o={args:{horizontal:!0,xScale:{type:"linear",nice:!0,round:!0},yScale:{type:"band",reverse:!0,padding:.1},gridProps:{rows:!1,columns:!0,strokeWidth:1},margin:{top:0,right:20,bottom:0,left:20},bottomAxisProps:{tickFormat:e=>u(e)}},render:e=>{const a=h();return t.jsx("div",{style:{width:"900px",height:"300px"},children:t.jsx(n,{...e,data:a,leftAxisProps:{tickFormat:i=>a.find(s=>s.y===i)?.label,computeNumTicks:()=>a.length}})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <div style={{
    width: '900px',
    height: '350px'
  }}>
            <BarChart {...props} />
        </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    horizontal: true,
    xScale: {
      type: 'linear',
      nice: true,
      round: true
    },
    yScale: {
      type: 'band',
      reverse: true,
      padding: 0.1
    },
    gridProps: {
      rows: false,
      columns: true,
      strokeWidth: 1
    },
    margin: {
      top: 0,
      right: 20,
      bottom: 0,
      left: 20
    },
    bottomAxisProps: {
      tickFormat: v => abbreviateNumber(v)
    }
  },
  render: props => {
    const data = generateMockDataHorizontal();
    return <div style={{
      width: '900px',
      height: '300px'
    }}>
                <BarChart {...props} data={data} leftAxisProps={{
        tickFormat: y => data.find(datum => datum.y === y)?.label,
        computeNumTicks: () => data.length
      }} />
            </div>;
  }
}`,...o.parameters?.docs?.source}}};const B=["sandbox","horizontal"];export{B as __namedExportsOrder,j as default,o as horizontal,r as sandbox};
