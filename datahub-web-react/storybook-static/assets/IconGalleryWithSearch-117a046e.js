import{j as e}from"./jsx-runtime-f961835c.js";import{t as p}from"./index-9b4c0917.js";import{j as i}from"./ColorPicker-56dce380.js";import{I as x}from"./Avatar-911d8627.js";import"./BarChart-a0f29a42.js";import"./CalendarChart-8737125b.js";import"./Dropdown-4bac02d6.js";import"./LineChart-92e8f08c.js";import"./MatchText-a254fd6b.js";import"./OverflowText-66629e85.js";import"./Pagination-41c73bc4.js";import"./Popover-024376aa.js";import"./Text-6fe683eb.js";import"./Timeline-7a6a2af7.js";import"./ClickOutside-ccba0f4c.js";import"./WhiskerChart-a4b481de.js";import{r as u}from"./index-f80c8c95.js";import{s as r}from"./styled-components.browser.esm-f891f5b9.js";const v=t=>navigator.clipboard.writeText(t).then(()=>console.log(`${t} copied to clipboard`)).catch(),h=({text:t})=>e.jsx("div",{style:{display:"inline-block"},children:e.jsx(i,{variant:"text",color:"gray",size:"sm",onClick:()=>v(t),children:e.jsx(x,{icon:"ContentCopy",size:"xs"})})});try{h.displayName="CopyButton",h.__docgenInfo={description:"",displayName:"CopyButton",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const k={display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"},f=({isVertical:t=!1,width:l="100%",children:n})=>e.jsx("div",{style:{...k,width:l,flexDirection:t?"column":"row"},children:n});try{f.displayName="GridList",f.__docgenInfo={description:"",displayName:"GridList",props:{isVertical:{defaultValue:{value:"false"},description:"",name:"isVertical",required:!1,type:{name:"boolean"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string | number"}}}}}catch{}const Q=r.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
`,Z=r.div`
    display: flex;
    gap: 16px;
`,K=r.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,J=r.div`
    height: 16px;
`,X=r.div`
    display: flex;
    gap: 16px;
    align-items: center;

    ${({size:t})=>t==="sm"&&`
		gap: 8px;
	`}

    & span {
        display: block;
        line-height: 1.3;
    }

    & .colorChip {
        background: ${({color:t})=>t};
        width: 3rem;
        height: 3rem;

        ${({size:t})=>t==="sm"&&`
			width: 2rem;
			height: 2rem;
			border-radius: 4px;
		`}

        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    }

    & .colorValue {
        display: flex;
        align-items: center;
        gap: 0;
        font-weight: bold;
        font-size: 14px;
    }

    & .hex {
        font-size: 11px;
        opacity: 0.5;
        text-transform: uppercase;
    }
`,L=r.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
    margin-top: 20px;
`,T=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${p.semanticTokens.colors["border-color"]};
    border-radius: 8px;
    overflow: hidden;

    & span {
        width: 100%;
        border-top: 1px solid ${p.semanticTokens.colors["border-color"]};
        background-color: ${p.semanticTokens.colors["subtle-bg"]};
        text-align: center;
        padding: 4px 8px;
        font-size: 10px;
    }
`,j=r.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
`,g=({icons:t})=>{const[l,n]=u.useState(t),[m,c]=u.useState(""),[d,y]=u.useState("outline"),w=l.filter(o=>o.toLowerCase().includes(m.toLowerCase())),b=["ArrowBack","ArrowCircleDown","ArrowCircleLeft","ArrowCircleRight","ArrowCircleUp","ArrowDownward","ArrowForward","ArrowOutward","ArrowUpward","CloseFullscreen","Cached","Code","CodeOff","CompareArrows","Compress","ChevronLeft","ChevronRight","DoubleArrow","FastForward","FastRewind","FileDownload","FileUpload","ForkLeft","ForkRight","GetApp","LastPage","Launch","Login","Logout","LowPriority","ManageHistory","Merge","MergeType","MoveUp","MultipleStop","OpenInFull","Outbound","Outbox","Output","PlayArrow","PlayCircle","Publish","ReadMore","ExitToApp","Redo","Refresh","Replay","ReplyAll","Reply","Restore","SaveAlt","Shortcut","SkipNext","SkipPrevious","Start","Straight","SubdirectoryArrowLeft","SubdirectoryArrowRight","SwapHoriz","SwapVert","SwitchLeft","SwitchRight","SyncAlt","SyncDisabled","SyncLock","Sync","Shuffle","SyncProblem","TrendingDown","TrendingFlat","TrendingUp","TurnLeft","TurnRight","TurnSlightLeft","TurnSlightRight","Undo","UnfoldLessDouble","UnfoldLess","UnfoldMoreDouble","UnfoldMore","UpdateDisabled","Update","Upgrade","Upload","ZoomInMap","ZoomOutMap"],C=["AccountTree","Analytics","ArtTrack","Article","BackupTable","BarChart","BubbleChart","Calculate","Equalizer","List","FormatListBulleted","FormatListNumbered","Grading","InsertChart","Hub","Insights","Lan","Leaderboard","LegendToggle","Map","MultilineChart","Nat","PivotTableChart","Poll","Polyline","QueryStats","Radar","Route","Rule","Schema","Sort","SortByAlpha","ShowChart","Source","SsidChart","StackedBarChart","StackedLineChart","Storage","TableChart","TableRows","TableView","Timeline","ViewAgenda","ViewArray","ViewCarousel","ViewColumn","ViewComfy","ViewCompact","ViewCozy","ViewDay","ViewHeadline","ViewKanban","ViewList","ViewModule","ViewQuilt","ViewSidebar","ViewStream","ViewTimeline","ViewWeek","Visibility","VisibilityOff","Webhook","Window"],S=["AccountCircle","Badge","Campaign","Celebration","Chat","ChatBubble","CommentBank","Comment","CommentsDisabled","Message","ContactPage","Contacts","GroupAdd","Group","GroupRemove","Groups","Handshake","ManageAccounts","MoodBad","SentimentDissatisfied","SentimentNeutral","SentimentSatisfied","Mood","NoAccounts","People","PersonAddAlt1","PersonOff","Person","PersonRemoveAlt1","PersonSearch","SwitchAccount","StarBorder","StarHalf","Star","ThumbDown","ThumbUp","ThumbsUpDown","Verified","VerifiedUser"],A=["Mail","Drafts","MarkAsUnread","Inbox","Outbox","MoveToInbox","Unsubscribe","Upcoming","NotificationAdd","NotificationImportant","NotificationsActive","NotificationsOff","Notifications","NotificationsPaused"],s=o=>{n(o),c("")},V=()=>{n(t),c("")},a={size:"sm",color:"gray"};return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"search",value:m,onChange:o=>c(o.target.value),placeholder:"Search for an icon…",style:{width:"100%",padding:"0.5rem",marginBottom:"0.5rem"}}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{onClick:V,...a,children:"All"}),e.jsx(i,{onClick:()=>s(b),...a,children:"Arrows"}),e.jsx(i,{onClick:()=>s(C),...a,children:"Data Viz"}),e.jsx(i,{onClick:()=>s(S),...a,children:"Social"}),e.jsx(i,{onClick:()=>s(A),...a,children:"Notifications"})]}),e.jsx("div",{style:{display:"flex",gap:"8px"},children:e.jsxs(i,{onClick:()=>y(d==="outline"?"filled":"outline"),...a,children:["Variant: ",d==="filled"?"Filled":"Outline"]})})]}),e.jsx(L,{children:w.map(o=>e.jsxs(T,{children:[e.jsx(j,{title:o,children:e.jsx(x,{icon:o,variant:d,size:"2xl"})},o),e.jsx("span",{children:o})]}))})]})};try{g.displayName="IconGalleryWithSearch",g.__docgenInfo={description:"",displayName:"IconGalleryWithSearch",props:{icons:{defaultValue:null,description:"",name:"icons",required:!0,type:{name:"string[]"}}}}}catch{}export{X as C,Z as F,f as G,g as I,J as S,K as V,h as a,Q as b};
