import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    buttonLabel: 'Buy now',
    buttonLink: '/ref'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
