var c=Object.defineProperty;var n=(a,l)=>c(a,"name",{value:l,configurable:!0});import{a as i,j as e}from"./jsx-runtime.c8bff8aa.js";import"./index.d84dc5e2.js";import"./iframe.20817d94.js";function t({hover:a=!0,striped:l=!0,variant:f}){const s=[{id:"Blend",name:"Kim Parrish",address:"Garnerville, NY 10923",date:"07/11/2020",order:"87349585892118"},{id:"Peninsula",name:"Peninsula",address:"Fullerton, NE 68638",date:"07/11/2020",order:"58418278790810"},{id:"Acqua Village",name:"Acqua Village",address:"Toccoa, GA 30577",date:"07/10/2020",order:"81534454080477"}],o=[{field:"id",header:"Cliente"},{field:"teste",header:"Prioridade"},{field:"name",header:"Numero"},{field:"address",header:"Abertura"},{field:"date",header:"Status"},{field:"order",header:"Tipo"},{field:"teste",header:"Funcionarios"},{field:"teste",header:"BOT\xD5ES"}],u=n((r,d)=>r?r.toUpperCase():d.toUpperCase(),"getCaps");return i("div",{children:[i("table",{children:[e("thead",{children:e("tr",{children:o&&o.map(r=>e("th",{children:u(r.header,r.field)}))})}),e("tbody",{children:s&&s.map(r=>e("tr",{className:`${a&&"hover"} ${l&&"striped"}`,children:o.map(d=>e("td",{children:r[d.field]}))}))})]}),s?null:e("h2",{style:{textAlign:"center"},children:"Nenhuma OS"})]})}n(t,"Tables");try{t.displayName="Tables",t.__docgenInfo={description:"",displayName:"Tables",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'}]}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"null"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"null"}},hover:{defaultValue:{value:"true"},description:"",name:"hover",required:!1,type:{name:"true"}},striped:{defaultValue:{value:"true"},description:"",name:"striped",required:!1,type:{name:"true"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Tables/Tables.tsx#Tables"]={docgenInfo:t.__docgenInfo,name:"Tables",path:"src/components/Tables/Tables.tsx#Tables"})}catch{}const v={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import Tables, { TablesProps }  from "./Tables";


export default {
    title: 'Components/Tables',
    component: Tables,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary']
            }
        }    
    }
} as ComponentMeta<typeof Tables>

export const Default: Story<TablesProps> = (args) => (
    <Tables {... args}> Nenhuma OS </Tables>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<TablesProps> = (args) => (
    <Tables {... args}> Primary </Tables>
)

Primary.args = {
    variant: 'primary',
}

`,locationsMap:{default:{startLoc:{col:43,line:19},endLoc:{col:1,line:21},startBody:{col:43,line:19},endBody:{col:1,line:21}},primary:{startLoc:{col:43,line:27},endLoc:{col:1,line:29},startBody:{col:43,line:27},endBody:{col:1,line:29}}}}},title:"Components/Tables",component:t,argsTypes:{label:{defaultValue:"default",control:{type:"select",values:["default","primary"]}}}},p=n(a=>e(t,{...a,children:" Nenhuma OS "}),"Default");p.args={variant:"default"};const m=n(a=>e(t,{...a,children:" Primary "}),"Primary");m.args={variant:"primary"};const g=["Default","Primary"];export{p as Default,m as Primary,g as __namedExportsOrder,v as default};
//# sourceMappingURL=Tables.stories.87bbaf89.js.map
