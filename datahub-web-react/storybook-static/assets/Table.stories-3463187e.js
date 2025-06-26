import{j as e}from"./jsx-runtime-f961835c.js";import{t as O}from"./index-4d9335bf.js";import{r as S}from"./index-f80c8c95.js";import{T as r,w as t,x as d}from"./ColorPicker-56dce380.js";import"./index-9b4c0917.js";import"./colors-0c7b34f5.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./ClickOutside-ccba0f4c.js";import"./Dropdown-4bac02d6.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./index-345cee61.js";import"./RightOutlined-a42d53f0.js";import"./motion-787a5bbf.js";import"./type-30d10e57.js";import"./Compact-35a5bcb3.js";import"./reactNode-f7e50cfa.js";import"./index-300952f0.js";import"./button-3a9ea77e.js";import"./Pagination-41c73bc4.js";import"./Avatar-911d8627.js";import"./BarChart-a0f29a42.js";import"./Popover-024376aa.js";import"./utils-8bad284d.js";import"./Axis-806b9145.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";import"./CalendarChart-8737125b.js";import"./Text-6fe683eb.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./Timeline-7a6a2af7.js";import"./WhiskerChart-a4b481de.js";const io={title:"Lists & Tables / Table",component:r,parameters:{layout:"padded",badges:[O.STABLE,"readyForDesignReview"],docs:{subtitle:"This component allows users to render a table with different columns and their data"}},argTypes:{columns:{description:"Array of column objects for the table header.",control:"object",table:{defaultValue:{summary:JSON.stringify(t.columns)}}},data:{description:"Array of data rows for the table body.",control:"object",table:{defaultValue:{summary:JSON.stringify(t.data)}}},showHeader:{description:"Whether to show the table header.",control:"boolean",table:{defaultValue:{summary:t.showHeader?.toString()}}},isLoading:{description:"Whether the table is in loading state.",control:"boolean",table:{defaultValue:{summary:t.isLoading?.toString()}}},isScrollable:{description:"Whether the table is scrollable.",control:"boolean",table:{defaultValue:{summary:t.isScrollable?.toString()}}},maxHeight:{description:"Maximum height of the table container.",control:"text",table:{defaultValue:{summary:t.maxHeight}}},isBorderless:{description:"Whether the table is borderless.",control:"boolean",table:{defaultValue:{summary:t.isBorderless?.toString()}}},onRowClick:{description:"Callback function for row click."},rowClassName:{description:"Callback to get class name for the rows."},onExpand:{description:"Callback for when a row is expanded."},expandable:{description:"Set of props when a row is expandable.",control:!1},rowRefs:{description:"List of refs for table rows.",control:!1},headerRef:{description:"Ref for table header.",control:!1},footer:{description:"Optional footer for the table.",table:{type:{summary:"React.ReactNode"}}}},args:{columns:[{title:"Column 1",key:"column1",dataIndex:"column1"},{title:"Column 2",key:"column2",dataIndex:"column2"}],data:[{column1:"Row 1 Col 1",column2:"Row 1 Col 2"},{column1:"Row 2 Col 1",column2:"Row 2 Col 2"}],showHeader:t.showHeader,isLoading:t.isLoading,isScrollable:t.isScrollable,maxHeight:t.maxHeight,isBorderless:t.isBorderless}},i={tags:["dev"],render:o=>e.jsx(r,{...o})},C=()=>e.jsx(r,{columns:[{title:"Column 1",key:"column1",dataIndex:"column1"},{title:"Column 2",key:"column2",dataIndex:"column2"}],data:[{column1:"Row 1 Col 1",column2:"Row 1 Col 2"},{column1:"Row 2 Col 1",column2:"Row 2 Col 2"},{column1:"Row 3 Col 1",column2:"Row 3 Col 2"},{column1:"Row 4 Col 1",column2:"Row 4 Col 2"},{column1:"Row 5 Col 1",column2:"Row 5 Col 2"},{column1:"Row 6 Col 1",column2:"Row 6 Col 2"}],maxHeight:"180px",isScrollable:!0}),w=()=>e.jsx(r,{columns:[{title:"Column 1",key:"column1",dataIndex:"column1",width:"50%"},{title:"Column 2",key:"column2",dataIndex:"column2",width:"30%"},{title:"Column 3",key:"column3",dataIndex:"column3",width:"20%"}],data:[{column1:"Row 1 Col 1",column2:"Row 1 Col 2",column3:1},{column1:"Row 2 Col 1",column2:"Row 2 Col 2",column3:2},{column1:"Row 3 Col 1",column2:"Row 3 Col 2",column3:3}]}),p=()=>e.jsx(r,{columns:[{title:"Column 1",key:"column1",dataIndex:"column1",sorter:(o,n)=>o.column1.localeCompare(n.column1)},{title:"Column 2",key:"column2",dataIndex:"column2"},{title:"Column 3",key:"column3",dataIndex:"column3",sorter:(o,n)=>o.column3-n.column3}],data:[{column1:"Row 2 Col 1",column2:"Row 2 Col 2",column3:3},{column1:"Row 1 Col 1",column2:"Row 1 Col 2",column3:2},{column1:"Row 3 Col 1",column2:"Row 3 Col 2",column3:1}]}),R=()=>e.jsx(r,{columns:[{title:"Column 1",key:"column1",dataIndex:"column1"},{title:"Column 2",key:"column2",dataIndex:"column2"}],data:[{column1:"Row 1 Col 1",column2:"Row 1 Col 2"},{column1:"Row 2 Col 1",column2:"Row 2 Col 2"}],showHeader:!1}),y=()=>{const[o,n]=S.useState();return e.jsx(r,{columns:[{title:"Key",key:"key",dataIndex:"key"},{title:"Column 1",key:"column1",dataIndex:"column1"},{title:"Column 2",key:"column2",dataIndex:"column2"}],data:[{key:1,column1:"Row 1 Col 1",column2:"Row 1 Col 2"},{key:2,column1:"Row 2 Col 1",column2:"Row 2 Col 2"}],onRowClick:c=>n(c.key),rowClassName:c=>c.key===o?"selected-row":""})},I=[{key:"id",title:"ID",width:"10%",render:o=>e.jsx("div",{children:o.id})},{key:"name",title:"Name",width:"30%",render:o=>e.jsx("div",{children:o.name}),sorter:(o,n)=>o-n},{key:"status",title:"Status",width:"20%",sorter:(o,n)=>o-n,render:o=>e.jsx("div",{children:o.status})},{key:"createdAt",title:"Created At",width:"25%",render:o=>e.jsx("div",{children:o.createdAt})},{title:"",dataIndex:"",key:"actions",width:"15%",render:o=>!o.children&&e.jsx("div",{children:"actions"}),alignment:"right"}],N=[{id:"1",name:"Parent Row 1",status:"Active",createdAt:"2024-11-20",children:[{id:"1.1",name:"Child Row 1.1",status:"Active",createdAt:"2024-11-21"},{id:"1.2",name:"Child Row 1.2",status:"Inactive",createdAt:"2024-11-22"}]},{id:"2",name:"Parent Row 2",status:"Inactive",createdAt:"2024-11-19",children:[{id:"2.1",name:"Child Row 2.1",status:"Active",createdAt:"2024-11-21"},{id:"2.2",name:"Child Row 2.2",status:"Inactive",createdAt:"2024-11-22"}]}],h=()=>{const[o,n]=S.useState(["Parent Row 1"]),[c,g]=S.useState({sortColumn:"",sortOrder:d.ORIGINAL}),f=a=>{const l=a.name;n(u=>u.includes(l)?u.filter(b=>b!==l):[...u,l])},E=a=>{const{sortOrder:l,sortColumn:u}=c;if(l===d.ORIGINAL)return a.children;const k={status:{[d.ASCENDING]:(s,m)=>s.name.localeCompare(m.name),[d.DESCENDING]:(s,m)=>m.name.localeCompare(s.name)},name:{[d.ASCENDING]:(s,m)=>s.name.localeCompare(m.name),[d.DESCENDING]:(s,m)=>m.name.localeCompare(s.name)}}[u]?.[l];return k?[...a.children].sort(k):a.children};return e.jsx(r,{columns:I,data:N,handleSortColumnChange:({sortColumn:a,sortOrder:l})=>g({sortColumn:a,sortOrder:l}),expandable:{expandedRowRender:a=>{let l=a.children;return c.sortColumn&&c.sortOrder&&(l=E(a)),e.jsx(r,{columns:I,data:l,showHeader:!1,isBorderless:!0,isExpandedInnerTable:!0})},rowExpandable:()=>!0,expandIconPosition:"end",expandedGroupIds:o},onExpand:f})},x=()=>{const[o,n]=S.useState([]);return e.jsx(r,{columns:[{title:"ID",key:"id",dataIndex:"id"},{title:"Column 1",key:"column1",dataIndex:"column1"},{title:"Column 2",key:"column2",dataIndex:"column2"}],data:[{id:"1",column1:"Row 1 Col 1",column2:"Row 1 Col 2",column3:2},{id:"2",column1:"Row 2 Col 1",column2:"Row 2 Col 2",column3:3},{id:"3",column1:"Row 3 Col 1",column2:"Row 3 Col 2",column3:1}],rowKey:"id",rowSelection:{selectedRowKeys:o,onChange:c=>n(c)}})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['dev'],
  render: props => <Table {...props} />
}`,...i.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => <Table columns={[{
  title: 'Column 1',
  key: 'column1',
  dataIndex: 'column1'
}, {
  title: 'Column 2',
  key: 'column2',
  dataIndex: 'column2'
}]} data={[{
  column1: 'Row 1 Col 1',
  column2: 'Row 1 Col 2'
}, {
  column1: 'Row 2 Col 1',
  column2: 'Row 2 Col 2'
}, {
  column1: 'Row 3 Col 1',
  column2: 'Row 3 Col 2'
}, {
  column1: 'Row 4 Col 1',
  column2: 'Row 4 Col 2'
}, {
  column1: 'Row 5 Col 1',
  column2: 'Row 5 Col 2'
}, {
  column1: 'Row 6 Col 1',
  column2: 'Row 6 Col 2'
}]} maxHeight="180px" isScrollable />`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Table columns={[{
  title: 'Column 1',
  key: 'column1',
  dataIndex: 'column1',
  width: '50%'
}, {
  title: 'Column 2',
  key: 'column2',
  dataIndex: 'column2',
  width: '30%'
}, {
  title: 'Column 3',
  key: 'column3',
  dataIndex: 'column3',
  width: '20%'
}]} data={[{
  column1: 'Row 1 Col 1',
  column2: 'Row 1 Col 2',
  column3: 1
}, {
  column1: 'Row 2 Col 1',
  column2: 'Row 2 Col 2',
  column3: 2
}, {
  column1: 'Row 3 Col 1',
  column2: 'Row 3 Col 2',
  column3: 3
}]} />`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <Table columns={[{
  title: 'Column 1',
  key: 'column1',
  dataIndex: 'column1',
  sorter: (a, b) => a.column1.localeCompare(b.column1)
}, {
  title: 'Column 2',
  key: 'column2',
  dataIndex: 'column2'
}, {
  title: 'Column 3',
  key: 'column3',
  dataIndex: 'column3',
  sorter: (a, b) => a.column3 - b.column3
}]} data={[{
  column1: 'Row 2 Col 1',
  column2: 'Row 2 Col 2',
  column3: 3
}, {
  column1: 'Row 1 Col 1',
  column2: 'Row 1 Col 2',
  column3: 2
}, {
  column1: 'Row 3 Col 1',
  column2: 'Row 3 Col 2',
  column3: 1
}]} />`,...p.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => <Table columns={[{
  title: 'Column 1',
  key: 'column1',
  dataIndex: 'column1'
}, {
  title: 'Column 2',
  key: 'column2',
  dataIndex: 'column2'
}]} data={[{
  column1: 'Row 1 Col 1',
  column2: 'Row 1 Col 2'
}, {
  column1: 'Row 2 Col 1',
  column2: 'Row 2 Col 2'
}]} showHeader={false} />`,...R.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [selectedRow, setSelectedRow] = useState<number | undefined>();
  return <Table columns={[{
    title: 'Key',
    key: 'key',
    dataIndex: 'key'
  }, {
    title: 'Column 1',
    key: 'column1',
    dataIndex: 'column1'
  }, {
    title: 'Column 2',
    key: 'column2',
    dataIndex: 'column2'
  }]} data={[{
    key: 1,
    column1: 'Row 1 Col 1',
    column2: 'Row 1 Col 2'
  }, {
    key: 2,
    column1: 'Row 2 Col 1',
    column2: 'Row 2 Col 2'
  }]} onRowClick={record => setSelectedRow(record.key)} rowClassName={record => record.key === selectedRow ? 'selected-row' : ''} />;
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const [expandedRowKeys, setExpandedRowKeys] = useState(['Parent Row 1']);
  const [sortedOptions, setSortedOptions] = useState<{
    sortColumn: string;
    sortOrder: SortingState;
  }>({
    sortColumn: '',
    sortOrder: SortingState.ORIGINAL
  });
  const onExapand = (record: any) => {
    const key = record.name;
    setExpandedRowKeys((prev: any) => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };
  const getSortedRecord = record => {
    const {
      sortOrder,
      sortColumn
    } = sortedOptions;
    if (sortOrder === SortingState.ORIGINAL) {
      return record.children;
    }
    const sortFunctions = {
      status: {
        [SortingState.ASCENDING]: (a, b) => a.name.localeCompare(b.name),
        [SortingState.DESCENDING]: (a, b) => b.name.localeCompare(a.name)
      },
      name: {
        [SortingState.ASCENDING]: (a, b) => a.name.localeCompare(b.name),
        [SortingState.DESCENDING]: (a, b) => b.name.localeCompare(a.name)
      }
    };
    const sortFunction = sortFunctions[sortColumn]?.[sortOrder];
    const data = sortFunction ? [...record.children].sort(sortFunction) : record.children;
    return data;
  };
  return <Table columns={groupByColumns} data={groupByData} handleSortColumnChange={({
    sortColumn,
    sortOrder
  }: {
    sortColumn: string;
    sortOrder: SortingState;
  }) => setSortedOptions({
    sortColumn,
    sortOrder
  })} expandable={{
    expandedRowRender: record => {
      let sortedRecord = record.children;
      if (sortedOptions.sortColumn && sortedOptions.sortOrder) {
        sortedRecord = getSortedRecord(record);
      }
      return <Table columns={groupByColumns} data={sortedRecord} showHeader={false} isBorderless isExpandedInnerTable />;
    },
    rowExpandable: () => true,
    expandIconPosition: 'end',
    expandedGroupIds: expandedRowKeys
  }} onExpand={onExapand} />;
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  return <Table columns={[{
    title: 'ID',
    key: 'id',
    dataIndex: 'id'
  }, {
    title: 'Column 1',
    key: 'column1',
    dataIndex: 'column1'
  }, {
    title: 'Column 2',
    key: 'column2',
    dataIndex: 'column2'
  }]} data={[{
    id: '1',
    column1: 'Row 1 Col 1',
    column2: 'Row 1 Col 2',
    column3: 2
  }, {
    id: '2',
    column1: 'Row 2 Col 1',
    column2: 'Row 2 Col 2',
    column3: 3
  }, {
    id: '3',
    column1: 'Row 3 Col 1',
    column2: 'Row 3 Col 2',
    column3: 1
  }]} rowKey="id" rowSelection={{
    selectedRowKeys: selectedKeys,
    onChange: keys => setSelectedKeys(keys)
  }} />;
}`,...x.parameters?.docs?.source}}};const Co=["sandbox","withScroll","withCustomColumnWidths","withColumnSorting","withoutHeader","ClickableRows","WithGroupByFunctionality","WithRowSelection"];export{y as ClickableRows,h as WithGroupByFunctionality,x as WithRowSelection,Co as __namedExportsOrder,io as default,i as sandbox,p as withColumnSorting,w as withCustomColumnWidths,C as withScroll,R as withoutHeader};
