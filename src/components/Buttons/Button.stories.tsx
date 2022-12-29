
import { ComponentMeta, Story } from '@storybook/react'
import Button, {ButtonProps} from "./Button";


export default {
    title: 'Components/Buttons',
    component: Button,
    argsTypes: {
        label: {
            defaultValue: 'primary',
            control: {
                type: 'select',
                values: ['primary', 'secondary', 'outline']
            }
        }
    }

} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) => (
    <Button {... args}> Primary </Button>
)

Primary.args = {
    variant: 'primary'
}

export const Secondary: Story<ButtonProps> = (args) => (
    <Button {... args}> Secondary </Button>
)

Secondary.args = {
    variant: 'secondary'
}

export const Outline: Story<ButtonProps> = (args) => (
    <Button {... args}> Outline </Button>
)

Outline.args = {
    variant: 'outline'
}


// export const stroke = {
//     args: {
//         Type: 'button-stroke'
//     }
// }

