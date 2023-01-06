var s=Object.defineProperty;var a=(r,e)=>s(r,"name",{value:e,configurable:!0});import{s as h}from"./styled-components.browser.esm.495df637.js";import{A as o}from"./global.f1ce907a.js";import{j as b}from"./jsx-runtime.c8bff8aa.js";const C={p:{width:"65px",height:"26px"},m:{width:"97px",height:"29px"},g:{width:"120px",height:"36px"}},g={primary:{bgColor:o.primary,borderColor:o.primary,color:o.white,hover:{bgColor:o.secondary,color:o.white}},secondary:{bgColor:o.secondary,borderColor:o.secondary,color:o.dark,hover:{bgColor:o.primaryHover,color:o.primaryHover}},outline:{bgColor:"transparent",borderColor:o.primary,color:o.primary,hover:{bgColor:o.primary,color:o.white}},quaternary:{bgColor:o.blue,borderColor:o.blue,color:o.white,hover:{bgColor:o.blue,color:o.white}},tertiary:{bgColor:"transparent",borderColor:o.blue,color:o.blue,hover:{bgColor:o.blue,color:o.white}}},m=h.button`
    /* width: 100%; */
    width: ${r=>r.width};
    height: ${r=>r.height};
    background-color: ${r=>r.bgColor};
    border: 1px solid ${r=>r.borderColor};
    color: ${r=>r.color};
    font-size: 16px;
    cursos: pointer;
    border-radius: 6px;
    margin: 0 5px;

    &:hover {
        background-color: ${r=>r.hoverBgColor};
        border: 1x solid ${r=>r.hoverColor};
        color: ${r=>r.hoverColor};
    } 
`;function t({size:r,children:e,variant:n}){const{height:i,width:u}=C[r],{bgColor:c,borderColor:d,color:p,hover:l}=g[n];return b(m,{bgColor:c,color:p,borderColor:d,hoverBgColor:l.bgColor,hoverColor:l.color,width:u,height:i,children:e})}a(t,"Button");try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"p"'},{value:'"m"'},{value:'"g"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'},{value:'"quaternary"'},{value:'"tertiary"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/components/Buttons/Button.tsx#Button"})}catch{}export{t as B};
//# sourceMappingURL=Button.1a4bb6f1.js.map
