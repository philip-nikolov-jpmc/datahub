import{j as e}from"./jsx-runtime-f961835c.js";import{u as s}from"./index-97f8d36d.js";import{ae as i}from"./index-2b6747da.js";import"./index-f80c8c95.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-345cee61.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";function t(o){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"alchemy-component-library",children:"Alchemy Component Library"}),`
`,e.jsx(n.p,{children:"This is a comprehensive library of accessible and reusable React components that streamlines the development of DataHub's applications and websites. The library offers a diverse range of components that can be easily combined to build complex user interfaces while adhering to accessibility best practices."}),`
`,e.jsx(n.h3,{id:"component-usage",children:"Component Usage"}),`
`,e.jsx(n.p,{children:"It's easy to use the components availble in the library. Simply import the component and use it anywhere you're rendering React components."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@components';

function YourComponent() {
    return <Button>Click me!</Button>;
}
`})}),`
`,e.jsx(n.p,{children:"In addition to the components themselves, you can also import their types:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import type { ButtonProps } from '@components';
`})}),`
`,e.jsx(n.h3,{id:"theme-usage",children:"Theme Usage"}),`
`,e.jsxs(n.p,{children:["This component library comes with a complete theme utility that pre-defines all of our styling atoms and makes them accessible at ",e.jsx(n.code,{children:"@components/theme"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { colors } from '@components/theme';

function YourComponent() {
	return (
		<div style={{ bgColor: colors.green.400 }}>
			This div has a green background!
		</div>
	)
}
`})}),`
`,e.jsxs(n.p,{children:["You can access the theme types at ",e.jsx(n.code,{children:"@components/theme/types"})," and the theme config at ",e.jsx(n.code,{children:"@components/theme/config"}),"."]}),`
`,e.jsx(n.h3,{id:"writing-docs",children:"Writing Docs"}),`
`,e.jsxs(n.p,{children:["Our docs are generated using ",e.jsx(n.a,{href:"https://storybook.js.org/",rel:"nofollow",children:"Storybook"})," and deployed to ",e.jsx(n.a,{href:"https://www.cloudflare.com/",rel:"nofollow",children:"Cloudfare"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Storybook config is located at ",e.jsx(n.code,{children:".storybook"})]}),`
`,e.jsxs(n.li,{children:["Static doc files are located at ",e.jsx(n.code,{children:"alchemy-components/.docs"})]}),`
`,e.jsxs(n.li,{children:["Component stories are located in each component directory: ",e.jsx("br",{}),e.jsx(n.code,{children:"alchemy-components/components/Component/Component.stories.tsx"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Storybook serves as our playground for developing components. You can start it locally:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn storybook
`})}),`
`,e.jsxs(n.p,{children:["This launches the docs app at ",e.jsx(n.code,{children:"localhost:6006"})," and enables everything you need to quickly develop and document components."]}),`
`,e.jsx(n.h3,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.p,{children:"Building a component library is a collaboriate effort! We're aiming to provide a first-class experience, so here's a list of the standards we'll be looking for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Consitent prop and variant naming conventions: ",e.jsx("br",{}),`
-- `,e.jsx(n.code,{children:"variant"})," is used to define style types, such as ",e.jsx(n.code,{children:"outline"})," or ",e.jsx(n.code,{children:"filled"}),". ",e.jsx("br",{}),`
-- `,e.jsx(n.code,{children:"color"})," is used to define the components color, such as ",e.jsx(n.code,{children:"violet"})," or ",e.jsx(n.code,{children:"blue"}),". ",e.jsx("br",{}),`
-- `,e.jsx(n.code,{children:"size"})," is used to define the components size, such as ",e.jsx(n.code,{children:"xs"})," or ",e.jsx(n.code,{children:"4xl"}),". ",e.jsx("br",{}),`
-- Booleans are prefixed with `,e.jsx(n.code,{children:"is"}),": ",e.jsx(n.code,{children:"isLoading"})," or ",e.jsx(n.code,{children:"isDisabled"}),"."]}),`
`,e.jsxs(n.li,{children:["All style props have a correseponding theme type, ie. ",e.jsx(n.code,{children:"FontSizeOptions"}),"."]}),`
`,e.jsx(n.li,{children:"All components have an export of default props."}),`
`,e.jsxs(n.li,{children:["Styles are defined using ",e.jsx(n.code,{children:"style objects"})," instead of ",e.jsx(n.code,{children:"tagged template literals"}),"."]}),`
`,e.jsx(n.li,{children:"Stories are organized into the correct directory ."}),`
`]}),`
`,e.jsx(n.h3,{id:"faqs",children:"FAQs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"How are components being styled?"})," ",e.jsx("br",{}),"Our components are built using ",e.jsx(n.a,{href:"https://styled-components.com/",rel:"nofollow",children:"Styled Components"})," that dynamically generate styles based on variant selection."]}),`
`]})]})}function c(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}function r(o){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction"}),`
`,e.jsxs("div",{className:"custom-docs",children:[e.jsx("div",{className:"acrylBg",children:e.jsx("img",{src:"https://www.acryldata.io/images/logo-pattern.svg",alt:"Acryl Logo"})}),e.jsx(c,{})]})]})}function y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r()}export{y as default};
