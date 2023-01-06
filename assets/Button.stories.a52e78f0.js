var s=Object.defineProperty;var t=(n,i)=>s(n,"name",{value:i,configurable:!0});import{B as r}from"./Button.1a4bb6f1.js";import{j as e}from"./jsx-runtime.c8bff8aa.js";import"./styled-components.browser.esm.495df637.js";import"./index.4d9bdf62.js";import"./index.d84dc5e2.js";import"./iframe.20817d94.js";import"./global.f1ce907a.js";const S={parameters:{storySource:{source:`
import { ComponentMeta, Story } from '@storybook/react'
import Button, {ButtonProps} from "./Button";


export default {
    title: 'Components/Buttons',
    component: Button,
    // args: {
    //     size: 'p',
    // },
    argsTypes: {
        label: {
            defaultValue: 'primary',
            control: {
                type: 'select',
                values: ['primary', 'secondary', 'outline', 'tertiary']
            }
        },
        size: {
            defaultValue: 'g',
            options: ['p', 'm', 'g'],
            control: {
                type: 'select'
            }

        }
    }

} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {... args}> Primary </Button>
)

Primary.args = {
    variant: 'primary',
    size: 'g'
}

Primary.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A6&t=p7BXUe32BiYNsjOn-4",
    },
};


export const Secondary: Story<ButtonProps> = (args) => (
    <Button {... args}> Secondary </Button>
    
)

Secondary.args = {
    variant: 'secondary',
    size: 'g'
}

export const Outline: Story<ButtonProps> = (args) => (
    <Button {... args}> Outline </Button>
)

Outline.args = {
    variant: 'outline',
    size: 'g'
}

Outline.parameters = {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A23&t=p7BXUe32BiYNsjOn-4",
    },
};

export const Quaternary: Story<ButtonProps> = (args) => (
    <Button {... args}> Quaternary </Button>
)

Quaternary.args = {
    variant: 'quaternary',
    size: 'm'
}



export const Tertiary: Story<ButtonProps> = (args) => (
    <Button {... args}> Tertiary </Button>
)

Tertiary.args = {
    variant: 'tertiary',
    size: 'p'
}

`,locationsMap:{primary:{startLoc:{col:43,line:32},endLoc:{col:1,line:34},startBody:{col:43,line:32},endBody:{col:1,line:34}},secondary:{startLoc:{col:45,line:49},endLoc:{col:1,line:52},startBody:{col:45,line:49},endBody:{col:1,line:52}},outline:{startLoc:{col:43,line:59},endLoc:{col:1,line:61},startBody:{col:43,line:59},endBody:{col:1,line:61}},quaternary:{startLoc:{col:46,line:75},endLoc:{col:1,line:77},startBody:{col:46,line:75},endBody:{col:1,line:77}},tertiary:{startLoc:{col:44,line:86},endLoc:{col:1,line:88},startBody:{col:44,line:86},endBody:{col:1,line:88}}}}},title:"Components/Buttons",component:r,argsTypes:{label:{defaultValue:"primary",control:{type:"select",values:["primary","secondary","outline","tertiary"]}},size:{defaultValue:"g",options:["p","m","g"],control:{type:"select"}}}},o=t(n=>e(r,{...n,children:" Primary "}),"Primary");o.args={variant:"primary",size:"g"};o.parameters={design:{type:"figma",url:"https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A6&t=p7BXUe32BiYNsjOn-4"}};const l=t(n=>e(r,{...n,children:" Secondary "}),"Secondary");l.args={variant:"secondary",size:"g"};const a=t(n=>e(r,{...n,children:" Outline "}),"Outline");a.args={variant:"outline",size:"g"};a.parameters={design:{type:"figma",url:"https://www.figma.com/file/3tRZNTkSN9Dhh5bXpjCYeD/Helpdesk---Dashboard?node-id=5%3A23&t=p7BXUe32BiYNsjOn-4"}};const c=t(n=>e(r,{...n,children:" Quaternary "}),"Quaternary");c.args={variant:"quaternary",size:"m"};const p=t(n=>e(r,{...n,children:" Tertiary "}),"Tertiary");p.args={variant:"tertiary",size:"p"};const z=["Primary","Secondary","Outline","Quaternary","Tertiary"];export{a as Outline,o as Primary,c as Quaternary,l as Secondary,p as Tertiary,z as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories.a52e78f0.js.map
