import{j as n}from"./jsx-runtime-f961835c.js";import{u as p}from"./index-97f8d36d.js";import{ae as x,aq as o}from"./index-2b6747da.js";import{c as r}from"./index-9b4c0917.js";import"./ColorPicker-56dce380.js";import"./Avatar-911d8627.js";import"./BarChart-a0f29a42.js";import"./CalendarChart-8737125b.js";import"./Dropdown-4bac02d6.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./Pagination-41c73bc4.js";import"./Popover-024376aa.js";import"./Text-6fe683eb.js";import"./Timeline-7a6a2af7.js";import"./ClickOutside-ccba0f4c.js";import"./WhiskerChart-a4b481de.js";import"./index-f80c8c95.js";import{F as h,C as i,S as a,b as l,a as d}from"./IconGalleryWithSearch-117a046e.js";import"./iframe-15b9b7fb.js";import"../sb-preview/runtime.js";import"./index-345cee61.js";import"./index-1b441bc2.js";import"./index-33f634d0.js";import"./index-356e4a49.js";import"./colors-0c7b34f5.js";import"./styled-components.browser.esm-f891f5b9.js";import"./index-e8e5dbb3.js";import"./extends-34e645d9.js";import"./index-495e5f6b.js";import"./Compact-35a5bcb3.js";import"./reactNode-f7e50cfa.js";import"./type-30d10e57.js";import"./button-3a9ea77e.js";import"./index-300952f0.js";import"./motion-787a5bbf.js";import"./RightOutlined-a42d53f0.js";import"./Axis-806b9145.js";import"./utils-8bad284d.js";import"./dayjs.min-b50de240.js";import"./BarRounded-86230f55.js";const m=`const borders = {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
    '8px': '8px solid',
};

export default borders;
`,u=`const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    white: '#FFFFFF',
    black: '#000000', // do not use black, use grays 600 for primary text and 1700 for secondary

    gray: {
        0: '#FFFFFF', // white
        100: '#EBECF0', // border
        200: '#CFD1DA', // should be deprecated
        300: '#A9ADBD', // should be deprecated
        400: '#81879F', // should be deprecated
        500: '#5B6282', // should be deprecated
        600: '#374066', // primary text
        700: '#2F3657', // should be deprecated
        800: '#272D48', // should be deprecated
        900: '#231A58', // should be deprecated
        1000: '#F1F3FD', // violet 0
        1100: '#F1FBFE', // blue 0
        1200: '#FBF3EF', // red 0
        1300: '#F7FBF4', // green 0
        1400: '#E9EAEE', // border
        1500: '#F9FAFC', // bg surface
        1600: '#F5F6FA', // bg of new nav
        1700: '#5F6685', // secondary text
        1800: '#8088A3', // tertiary text, disabled text, placeholder text, icon
        1900: '#A3A7B9',
        2000: '#1E2338', // dark bg-suface
        2100: '#171B2B', // dark bg
    },

    violet: {
        0: '#F1F3FD',
        100: '#CAC3F1',
        200: '#B0A7EA',
        300: '#8C7EE0',
        400: '#7565DA',
        500: '#533FD1',
        600: '#4C39BE', // primary value
        700: '#3B2D94',
        800: '#2E2373',
        900: '#231A58',
        1000: '#E5E2F8',
        1100: '#E5E2F8',
    },

    // by default, our primary pallette is the same as our violet pallette
    primary: {
        0: '#F1F3FD',
        100: '#CAC3F1',
        200: '#B0A7EA',
        300: '#8C7EE0',
        400: '#7565DA',
        500: '#533FD1', // primary value
        600: '#4C39BE',
        700: '#3B2D94',
        800: '#2E2373',
        900: '#231A58',
        1000: '#E5E2F8',
        1100: '#E5E2F8',
    },

    green: {
        0: '#F1F8EE',
        100: '#D5E9C9',
        200: '#C0DEAF',
        300: '#A4CF8A',
        400: '#92C573',
        500: '#77B750', // primary value
        600: '#6CA749',
        700: '#548239',
        800: '#41652C',
        900: '#324D22',
        1000: '#0D7543',
        1100: '#E1F0D6',
        1200: '#248F5B',
    },

    red: {
        0: '#FBF3EF',
        100: '#F6D5D5',
        200: '#F2C1C1',
        300: '#ECA5A5',
        400: '#E99393',
        500: '#CD0D24', // primary value
        600: '#CF6D6D',
        700: '#A15555',
        800: '#7D4242',
        900: '#5F3232',
        1000: '#C4360B',
        1100: '#F3DACE',
        1200: '#E54D1F',
    },

    blue: {
        0: '#F1FBFE',
        100: '#EFF8FC',
        200: '#E6F5FB',
        300: '#CCEBF6',
        400: '#5ABDE1', // primary value
        500: '#51AACB',
        600: '#4897B4',
        700: '#448EA9',
        800: '#367187',
        900: '#285565',
        1000: '#09739A',
        1100: '#CCEBF6',
    },

    yellow: {
        0: '#FFFAEB',
        100: '#FCEDC7',
        200: '#FAE4AB',
        300: '#F8D785',
        400: '#F6D06D',
        500: '#EEAE09', // primary value
        600: '#DEB242',
        700: '#AD8B34',
        800: '#866C28',
        900: '#66521F',
        1000: '#C77100',
        1100: '#FCEDC7',
        1200: '#FFFAEB',
    },
};

export default colors;
`,j=`const radius = {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '100%',
};

export default radius;
`,y=`import { BoxShadowOptions } from '@components/theme/config';

const shadows: Record<BoxShadowOptions, string> = {
    xs: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    sm: '0 4px 4px 0 rgba(0 0 0 / 0.25)',
    md: '0 8px 8px 4px rgba(0 0 0 / 0.25)',
    lg: '0 12px 12px 8px rgba(0 0 0 / 0.25)',
    xl: '0 16px 16px 12px rgba(0 0 0 / 0.25)',
    '2xl': '0 24px 24px 16px rgba(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0 0 0 / 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
    dropdown: '0px 0px 14px 0px #00000026',
};

export default shadows;
`,g=`const sizes = {
    max: 'max-content',
    min: 'min-content',
    full: '100%',
};

export default sizes;
`,F=`const spacing = {
    none: '0px',
    xxsm: '4px',
    xsm: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xlg: '32px',
    xxlg: '48px',
};

export default spacing;
`,b=`const transitionProperty = {
    common: \`background-color, border-color, color, fill,
	stroke, opacity, box-shadow, transform\`,
    colors: 'background-color, border-color, color, fill, stroke',
    dimensions: 'width, height',
    position: 'left, right, top, bottom',
    background: 'background-color, background-image, background-position',
};

const transitionTimingFunction = {
    'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
    'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
    'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
};

const transitionDuration = {
    'ultra-fast': '50ms',
    faster: '100ms',
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '400ms',
    'ultra-slow': '500ms',
};

const transition = {
    property: transitionProperty,
    easing: transitionTimingFunction,
    duration: transitionDuration,
};

export default transition;
`,f=`const typography = {
    letterSpacings: {
        tighter: '-2px',
        tight: '-1px',
        normal: '0',
        wide: '1px',
        wider: '2px',
        widest: '4px',
    },

    lineHeights: {
        normal: 'normal',
        none: 1,
        xs: '16px',
        sm: '20px',
        md: '24px',
        lg: '28px',
        xl: '32px',
        '2xl': '36px',
        '3xl': '40px',
        '4xl': '44px',
    },

    fontWeights: {
        normal: 400, // regular
        medium: 500,
        semiBold: 600,
        bold: 700,
    },

    fonts: {
        heading: \`'Mulish', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Helvetica, Arial, sans-serif\`,
        body: \`'Mulish', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Helvetica, Arial, sans-serif\`,
        mono: \`SFMono-Regular, Menlo, Monaco, Consolas,
		'Liberation Mono', 'Courier New', monospace\`,
    },

    fontSizes: {
        xs: '10px',
        sm: '12px',
        md: '14px', // default body text size
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '22px',
        '4xl': '24px',
    },
};

export default typography;
`,C=`const zIndices = {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
};

export default zIndices;
`;function c(t){const e={code:"code",div:"div",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",span:"span",...p(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(x,{title:"Style Guide"}),`
`,n.jsxs("div",{className:"custom-docs",children:[n.jsx(e.h2,{id:"style-guide",children:"Style Guide"}),n.jsx(e.p,{children:"The purpose of this Style Guide is to establish a unified and cohesive design language that ensures a consistent user experience across all DataHub products. By adhering to these guidelines, we can maintain a high standard of design quality and improve the usability of our applications."}),n.jsx(e.h3,{id:"theme",children:"Theme"}),n.jsx(e.p,{children:"You can import the theme object into any component or file in your application and use it to style your components. The theme object is a single source of truth for your application's design system."}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { typography, colors, spacing } from '@components/theme';
`})}),n.jsx(e.h3,{id:"colors",children:"Colors"}),n.jsxs(e.p,{children:["Colors are managed via the ",n.jsx(e.code,{children:"colors.ts"})," file in the ",n.jsx(e.code,{children:"theme/foundations"})," directory. The colors are defined as a nested object with the following structure:"]}),n.jsx(o,{code:u}),n.jsxs(e.p,{children:["By default, all ",n.jsx(e.code,{children:"500"}),' values are considered the "default" value of that color range. For example, ',n.jsx(e.code,{children:"gray.500"})," is the default gray color. The other values are used for shading and highlighting. Color values are defined in hex format and their values range between 25 and 1000. With 25 being the lighest and 1000 being the darkest."]}),n.jsx(e.h4,{id:"black--white",children:"Black & White"}),n.jsxs(h,{children:[n.jsxs(i,{color:r.black,children:[n.jsx("span",{className:"colorChip"}),n.jsxs("div",{children:[n.jsx("span",{className:"colorValue",children:"Black"}),n.jsx("span",{className:"hex",children:r.black})]})]}),n.jsxs(i,{color:r.white,children:[n.jsx("span",{className:"colorChip"}),n.jsxs("div",{children:[n.jsx("span",{className:"colorValue",children:"White"}),n.jsx("span",{className:"hex",children:r.white})]})]})]}),n.jsx(a,{}),n.jsx(e.h4,{id:"gray",children:"Gray"}),n.jsx(l,{children:Object.keys(r.gray).map(s=>n.jsxs(i,{color:r.gray[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Gray ",s," ",n.jsx(d,{text:`gray.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.gray[s]})]})]},s))}),n.jsx(a,{}),n.jsx(e.h4,{id:"violet-primary",children:"Violet (Primary)"}),n.jsx(l,{children:Object.keys(r.violet).map(s=>n.jsxs(i,{color:r.violet[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Violet ",s," ",n.jsx(d,{text:`violet.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.violet[s]})]})]},s))}),n.jsx(a,{}),n.jsx(e.h4,{id:"blue",children:"Blue"}),n.jsx(l,{children:Object.keys(r.blue).map(s=>n.jsxs(i,{color:r.blue[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Blue ",s," ",n.jsx(d,{text:`blue.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.blue[s]})]})]},s))}),n.jsx(a,{}),n.jsx(e.h4,{id:"green",children:"Green"}),n.jsx(l,{children:Object.keys(r.green).map(s=>n.jsxs(i,{color:r.green[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Green ",s," ",n.jsx(d,{text:`green.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.green[s]})]})]},s))}),n.jsx(a,{}),n.jsx(e.h4,{id:"yellow",children:"Yellow"}),n.jsx(l,{children:Object.keys(r.yellow).map(s=>n.jsxs(i,{color:r.yellow[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Yellow ",s," ",n.jsx(d,{text:`yellow.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.yellow[s]})]})]},s))}),n.jsx(a,{}),n.jsx(e.h4,{id:"red",children:"Red"}),n.jsx(l,{children:Object.keys(r.red).map(s=>n.jsxs(i,{color:r.red[s],children:[n.jsx(e.span,{className:"colorChip"}),n.jsxs(e.div,{children:[n.jsxs(e.span,{className:"colorValue",children:["Red ",s," ",n.jsx(d,{text:`red.${s}`})]}),n.jsx(e.span,{className:"hex",children:r.red[s]})]})]},s))}),n.jsx(e.h3,{id:"typography",children:"Typography"}),n.jsxs(e.p,{children:["Font styles are managed via the ",n.jsx(e.code,{children:"typography.ts"})," file in the ",n.jsx(e.code,{children:"theme/foundations"})," directory. The primary font family in use is ",n.jsx(e.code,{children:"Mulish"}),". The font styles are defined as a nested object with the following structure:"]}),n.jsx(o,{code:f}),n.jsx(e.h3,{id:"borders",children:"Borders"}),n.jsx(e.p,{children:"A set of border values defined by the border key."}),n.jsx(o,{code:m}),n.jsx(e.h3,{id:"border-radius",children:"Border Radius"}),n.jsx(e.p,{children:"A set smooth corner radius values defined by the radii key."}),n.jsx(o,{code:j}),n.jsx(e.h3,{id:"shadows",children:"Shadows"}),n.jsx(e.p,{children:"A set of shadow values defined by the shadows key."}),n.jsx(o,{code:y}),n.jsx(e.h2,{id:"sizes",children:"Sizes"}),n.jsx(e.p,{children:"A set of size values defined by the sizes key."}),n.jsx(o,{code:g}),n.jsx(e.h3,{id:"spacing",children:"Spacing"}),n.jsx(e.p,{children:"A set of spacing values defined by the spacing key."}),n.jsx(o,{code:F}),n.jsx(e.h3,{id:"transitions",children:"Transitions"}),n.jsx(e.p,{children:"A set of transition values defined by the transition key."}),n.jsx(o,{code:b}),n.jsx(e.h3,{id:"z-index",children:"Z-Index"}),n.jsx(e.p,{children:"A set of z-index values defined by the zindex key."}),n.jsx(o,{code:C})]})]})}function xn(t={}){const{wrapper:e}={...p(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{xn as default};
