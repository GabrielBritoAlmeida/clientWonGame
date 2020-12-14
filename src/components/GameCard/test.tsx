import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/teste.jpeg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the heading', () => {
    // renderizar o GameCard
    renderWithTheme(<GameCard {...props} />)
    // verifique se o title renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    // verifique se o developer renderizado
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    // verifique se o img renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    // verifique se o price renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
})
