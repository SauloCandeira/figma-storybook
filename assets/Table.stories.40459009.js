var n=Object.defineProperty;var e=(a,o)=>n(a,"name",{value:o,configurable:!0});import{T as r}from"./Table.1b91c70e.js";import{j as t}from"./jsx-runtime.c8bff8aa.js";import"./Button.1a4bb6f1.js";import"./styled-components.browser.esm.495df637.js";import"./index.4d9bdf62.js";import"./index.d84dc5e2.js";import"./iframe.20817d94.js";import"./global.f1ce907a.js";import"./Avatar.f3234906.js";import"./Label.f78f4995.js";import"./Text.570f644b.js";const v={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import Table, { TableProps }  from "./Table";

export default {
    title: 'Components/Table',
    component: Table,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary']
            }
        }    
    }
} as ComponentMeta<typeof Table>

export const Default: Story<TableProps> = (args) => (
    <Table {... args}> Nenhuma OS </Table>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<TableProps> = (args) => (
    <Table {... args}> Primary </Table>
)

Primary.args = {
    variant: 'primary',
}

`,locationsMap:{default:{startLoc:{col:42,line:18},endLoc:{col:1,line:20},startBody:{col:42,line:18},endBody:{col:1,line:20}},primary:{startLoc:{col:42,line:26},endLoc:{col:1,line:28},startBody:{col:42,line:26},endBody:{col:1,line:28}}}}},title:"Components/Table",component:r,argsTypes:{label:{defaultValue:"default",control:{type:"select",values:["default","primary"]}}}},l=e(a=>t(r,{...a,children:" Nenhuma OS "}),"Default");l.args={variant:"default"};const s=e(a=>t(r,{...a,children:" Primary "}),"Primary");s.args={variant:"primary"};const x=["Default","Primary"];export{l as Default,s as Primary,x as __namedExportsOrder,v as default};
//# sourceMappingURL=Table.stories.40459009.js.map
