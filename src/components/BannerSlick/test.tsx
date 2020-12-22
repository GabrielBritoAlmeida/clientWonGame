import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import BannerSlick from '.'

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x581',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlick />', () => {
  it('should render vertical slide', () => {
    const { container } = renderWithTheme(<BannerSlick items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /1/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /3/i })).toBeInTheDocument()
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
})
