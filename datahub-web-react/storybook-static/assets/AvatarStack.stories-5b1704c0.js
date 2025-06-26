import{j as a}from"./jsx-runtime-f961835c.js";import{A as d}from"./Avatar-911d8627.js";import{s as v}from"./styled-components.browser.esm-f891f5b9.js";import"./index-f80c8c95.js";import"./index-9b4c0917.js";import"./colors-0c7b34f5.js";import"./extends-34e645d9.js";import"./index-e8e5dbb3.js";const A=v.div`
    position: relative;
    display: flex;
    align-items: flex-start;
`,g=v.div`
    margin-left: -10px;
    &:first-child {
        margin-left: 0;
    }
`,h={avatars:[{name:"John Doe",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Test User",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Micky Test",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"}],size:"md"},e=({avatars:r,size:l="md",showRemainingNumber:U=!0,maxToShow:u=4})=>{if(r?.length===0)return a.jsx("div",{children:"-"});const c=r.length-u,j=r?.slice(0,u).map(p=>a.jsx(g,{children:a.jsx(d,{size:l,isOutlined:!0,imageUrl:p.imageUrl,name:p.name})},p.name));return a.jsxs(A,{children:[j,U&&c>0&&a.jsx(g,{children:a.jsx(d,{size:l,isOutlined:!0,name:`+${c}`})},"more-avatars")]})};try{e.displayName="AvatarStack",e.__docgenInfo={description:"",displayName:"AvatarStack",props:{avatars:{defaultValue:null,description:"",name:"avatars",required:!0,type:{name:"AvatarItemProps[]"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"default"'}]}},showRemainingNumber:{defaultValue:{value:"true"},description:"",name:"showRemainingNumber",required:!1,type:{name:"boolean"}},maxToShow:{defaultValue:{value:"4"},description:"",name:"maxToShow",required:!1,type:{name:"number"}}}}}catch{}const b={title:"Components / AvatarStack",component:e,parameters:{layout:"centered",docs:{subtitle:"Displays a list of assignees with avatars."}},argTypes:{avatars:{description:"List of avatar objects with name and image source.",control:"object",table:{type:{summary:"Array<{ name: string; imageUrl: string }>"},defaultValue:{summary:"[]"}}}},args:{avatars:h.avatars,size:h.size}},t={render:r=>a.jsx(e,{...r})},s=()=>a.jsx(e,{avatars:[{name:"John Doe",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Test User",imageUrl:"https://robohash.org/sample-profile.png"},{name:"Micky Test",imageUrl:"https://randomuser.me/api/portraits/women/1.jpg"}],size:"md"}),m=()=>a.jsx(e,{avatars:[{name:"John Doe",imageUrl:null},{name:"Test User",imageUrl:null},{name:"Micky Test",imageUrl:null}],size:"md"}),i=()=>a.jsx(e,{avatars:[{name:"John Doe",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"}]}),o=()=>a.jsx(e,{avatars:[]}),n=()=>a.jsx(e,{avatars:[{name:"John Doe",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Test User",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Micky Test",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Jake",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"},{name:"Mike",imageUrl:"https://randomuser.me/api/portraits/men/1.jpg"}],size:"md",maxToShow:3});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <AvatarStack {...props} />
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <AvatarStack avatars={[{
  name: 'John Doe',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
  name: 'Test User',
  imageUrl: 'https://robohash.org/sample-profile.png'
}, {
  name: 'Micky Test',
  imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg'
}]} size="md" />`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => <AvatarStack avatars={[{
  name: 'John Doe',
  imageUrl: null
}, {
  name: 'Test User',
  imageUrl: null
}, {
  name: 'Micky Test',
  imageUrl: null
}]} size="md" />`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <AvatarStack avatars={[{
  name: 'John Doe',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}]} />`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"() => <AvatarStack avatars={[]} />",...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <AvatarStack avatars={[{
  name: 'John Doe',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
  name: 'Test User',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
  name: 'Micky Test',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
  name: 'Jake',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}, {
  name: 'Mike',
  imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
}]} size="md" maxToShow={3} />`,...n.parameters?.docs?.source}}};const D=["sandbox","withMultipleAvatar","witouthImagesMultipleAvatar","withSingleAvatar","withNoAvatar","withMoreAvatars"];export{D as __namedExportsOrder,b as default,t as sandbox,n as withMoreAvatars,s as withMultipleAvatar,o as withNoAvatar,i as withSingleAvatar,m as witouthImagesMultipleAvatar};
