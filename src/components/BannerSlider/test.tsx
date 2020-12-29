import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import BannerSlick from '.'
import items from './mock'

describe('<BannerSlick />', () => {
  it('should render vertical slide', () => {
    const { container } = renderWithTheme(<BannerSlick items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlick items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death 3/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlick items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })
})
