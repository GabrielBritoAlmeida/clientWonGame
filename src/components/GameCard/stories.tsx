import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardoProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/teste.jpeg',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardoProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
