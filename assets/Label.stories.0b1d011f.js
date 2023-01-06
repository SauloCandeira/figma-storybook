var o=Object.defineProperty;var a=(r,t)=>o(r,"name",{value:t,configurable:!0});import{L as e}from"./Label.f78f4995.js";import{j as n}from"./jsx-runtime.c8bff8aa.js";import"./styled-components.browser.esm.495df637.js";import"./index.4d9bdf62.js";import"./index.d84dc5e2.js";import"./iframe.20817d94.js";import"./global.f1ce907a.js";import"./Text.570f644b.js";const S={parameters:{storySource:{source:`
import { ComponentMeta, Story } from '@storybook/react'
import Label, {SpanProps} from "../Label/Label";

export default {
    title: 'Components/Label',
    component: Label,
    argsTypes: {
        label: {
            defaultValue: 'default',
            control: {
                type: 'select',
                values: ['default', 'primary', 'secondary', 'tertiary']
            }
        }
    }
} as ComponentMeta<typeof Label>


export const Default: Story<LabelProps> = (args) => (
    <Label {... args}> Default </Label>
)

Default.args = {
    variant: 'default',
}

export const Primary: Story<LabelProps> = (args) => (
    <Label {... args}> Primary </Label>
)

Primary.args = {
    variant: 'primary',
}


export const Secondary: Story<LabelProps> = (args) => (
    <Label {... args}> Secondary </Label>
)

Secondary.args = {
    variant: 'secondary',
}


export const Tertiary: Story<LabelProps> = (args) => (
    <Label {... args}> Tertiary </Label>
)

Tertiary.args = {
    variant: 'tertiary',
}
`,locationsMap:{default:{startLoc:{col:42,line:20},endLoc:{col:1,line:22},startBody:{col:42,line:20},endBody:{col:1,line:22}},primary:{startLoc:{col:42,line:28},endLoc:{col:1,line:30},startBody:{col:42,line:28},endBody:{col:1,line:30}},secondary:{startLoc:{col:44,line:37},endLoc:{col:1,line:39},startBody:{col:44,line:37},endBody:{col:1,line:39}},tertiary:{startLoc:{col:43,line:46},endLoc:{col:1,line:48},startBody:{col:43,line:46},endBody:{col:1,line:48}}}}},title:"Components/Label",component:e,argsTypes:{label:{defaultValue:"default",control:{type:"select",values:["default","primary","secondary","tertiary"]}}}},l=a(r=>n(e,{...r,children:" Default "}),"Default");l.args={variant:"default"};const s=a(r=>n(e,{...r,children:" Primary "}),"Primary");s.args={variant:"primary"};const i=a(r=>n(e,{...r,children:" Secondary "}),"Secondary");i.args={variant:"secondary"};const c=a(r=>n(e,{...r,children:" Tertiary "}),"Tertiary");c.args={variant:"tertiary"};const P=["Default","Primary","Secondary","Tertiary"];export{l as Default,s as Primary,i as Secondary,c as Tertiary,P as __namedExportsOrder,S as default};
//# sourceMappingURL=Label.stories.0b1d011f.js.map
