import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'check' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
export const CheckLabel: Story<CheckboxProps> = (args) => <Checkbox {...args} />

CheckLabel.args = {
  label: 'action',
  labelFor: 'action check'
}

CheckLabel.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
