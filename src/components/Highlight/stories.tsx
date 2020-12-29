import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import items from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: items
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
