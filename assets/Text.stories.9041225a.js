var l=Object.defineProperty;var t=(e,a)=>l(e,"name",{value:a,configurable:!0});import{T as n}from"./Text.570f644b.js";import{j as o}from"./jsx-runtime.c8bff8aa.js";import"./styled-components.browser.esm.495df637.js";import"./index.4d9bdf62.js";import"./index.d84dc5e2.js";import"./iframe.20817d94.js";import"./global.f1ce907a.js";const M={parameters:{storySource:{source:`import { ComponentMeta, Story } from '@storybook/react'
import Text, {TextProps} from "./Text";

export default {
    title: 'Components/Texts',
    component: Text,
    argsTypes: {
        label: {
            defaultValue: 'textSmall',
            control: {
                type: 'select',
                values: ['textSmall', 'textMedium', 'textLarge', 'headingSmall', 'headingMedium', 'headingLarge'],
            }
        }
    }
} as ComponentMeta<typeof Text>


// export const textRegular: Story<TextProps> = (args) => (
//     <Text {... args}> Text small </Text>
// )

// textRegular.args = {
//     style: 'textRegular'
// }

// export const textBold: Story<TextProps> = (args) => (
//     <Text {... args}> Text small </Text>
// )

// textBold.args = {
//     style: 'textBold'
// }



export const textCustom: Story<TextProps> = (args) => (
    <Text {... args}> Text Custom </Text>
)

textCustom.args = {
    size: 'textCustom'
}

export const textSmall: Story<TextProps> = (args) => (
    <Text {... args}> Text small </Text>
)

textSmall.args = {
    size: 'textSmall'
}

export const textMedium: Story<TextProps> = (args) => (
    <Text {... args}> Text medium </Text>
)

textMedium.args = {
    size: 'textMedium'
}


export const textLarge: Story<TextProps> = (args) => (
    <Text {... args}> Text large </Text>
)

textLarge.args = {
    size: 'textLarge'
}

export const headingSmall: Story<TextProps> = (args) => (
    <Text {... args}> Heading small </Text>
)

headingSmall.args = {
    size: 'headingSmall'
}

export const headingMedium: Story<TextProps> = (args) => (
    <Text {... args}> Heading medium </Text>
)

headingMedium.args = {
    size: 'headingMedium'
}

export const headingLarge: Story<TextProps> = (args) => (
    <Text {... args}> Heading large </Text>
)

headingLarge.args = {
    size: 'headingLarge'
}
`,locationsMap:{"text-custom":{startLoc:{col:44,line:37},endLoc:{col:1,line:39},startBody:{col:44,line:37},endBody:{col:1,line:39}},"text-small":{startLoc:{col:43,line:45},endLoc:{col:1,line:47},startBody:{col:43,line:45},endBody:{col:1,line:47}},"text-medium":{startLoc:{col:44,line:53},endLoc:{col:1,line:55},startBody:{col:44,line:53},endBody:{col:1,line:55}},"text-large":{startLoc:{col:43,line:62},endLoc:{col:1,line:64},startBody:{col:43,line:62},endBody:{col:1,line:64}},"heading-small":{startLoc:{col:46,line:70},endLoc:{col:1,line:72},startBody:{col:46,line:70},endBody:{col:1,line:72}},"heading-medium":{startLoc:{col:47,line:78},endLoc:{col:1,line:80},startBody:{col:47,line:78},endBody:{col:1,line:80}},"heading-large":{startLoc:{col:46,line:86},endLoc:{col:1,line:88},startBody:{col:46,line:86},endBody:{col:1,line:88}}}}},title:"Components/Texts",component:n,argsTypes:{label:{defaultValue:"textSmall",control:{type:"select",values:["textSmall","textMedium","textLarge","headingSmall","headingMedium","headingLarge"]}}}},r=t(e=>o(n,{...e,children:" Text Custom "}),"textCustom");r.args={size:"textCustom"};const s=t(e=>o(n,{...e,children:" Text small "}),"textSmall");s.args={size:"textSmall"};const i=t(e=>o(n,{...e,children:" Text medium "}),"textMedium");i.args={size:"textMedium"};const x=t(e=>o(n,{...e,children:" Text large "}),"textLarge");x.args={size:"textLarge"};const d=t(e=>o(n,{...e,children:" Heading small "}),"headingSmall");d.args={size:"headingSmall"};const g=t(e=>o(n,{...e,children:" Heading medium "}),"headingMedium");g.args={size:"headingMedium"};const m=t(e=>o(n,{...e,children:" Heading large "}),"headingLarge");m.args={size:"headingLarge"};const B=["textCustom","textSmall","textMedium","textLarge","headingSmall","headingMedium","headingLarge"];export{B as __namedExportsOrder,M as default,m as headingLarge,g as headingMedium,d as headingSmall,r as textCustom,x as textLarge,i as textMedium,s as textSmall};
//# sourceMappingURL=Text.stories.9041225a.js.map
