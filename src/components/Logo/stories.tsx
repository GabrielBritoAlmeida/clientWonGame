import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const Desktop: Story<LogoProps> = (args) => <Logo {...args} />
export const Mobile: Story<LogoProps> = (args) => (
  <Logo hideOnMobile {...args} />
)

Desktop.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

Mobile.parameters = {
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}
