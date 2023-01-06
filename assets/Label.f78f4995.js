var c=Object.defineProperty;var t=(e,r)=>c(e,"name",{value:r,configurable:!0});import{s}from"./styled-components.browser.esm.495df637.js";import{A as o}from"./global.f1ce907a.js";import{T as d}from"./Text.570f644b.js";import{j as l}from"./jsx-runtime.c8bff8aa.js";const p={default:{bgColor:o.redLight,color:o.red},primary:{bgColor:o.greenLight,color:o.green},secondary:{bgColor:o.orangeLight,color:o.primary},tertiary:{bgColor:o.blueLight,color:o.blue}},g=s.div`
    width: auto;
    font-weight: 600;
    height: auto;
    background-color: ${e=>e.bgColor};
    color: ${e=>e.color};
    text-align: center;
    padding-top: 3px;
    text-transform: uppercase;
    border-radius: 4px;
    line-height: 1;
    display: inline-block;
    padding: 0.35rem 0.375rem;
`;function a({children:e,variant:r}){const{bgColor:n,color:i}=p[r];return l(g,{bgColor:n,color:i,children:l(d,{size:"textCustom",children:e})})}t(a,"Label");try{a.displayName="Label",a.__docgenInfo={description:"",displayName:"Label",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"default"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Label/Label.tsx#Label"]={docgenInfo:a.__docgenInfo,name:"Label",path:"src/components/Label/Label.tsx#Label"})}catch{}export{a as L};
//# sourceMappingURL=Label.f78f4995.js.map
