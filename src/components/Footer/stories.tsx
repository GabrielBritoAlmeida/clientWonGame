import { Story, Meta } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Mobile: Story = () => <Footer />
export const Desktop: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
