import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import Home from '.'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcomingGames: gamesMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighlight: highlightMock
}

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    const menuHome = screen.getByLabelText(/open menu/i)
    const footerHome = screen.getByRole('heading', { name: /contact us/i })

    expect(menuHome).toBeInTheDocument()
    expect(footerHome).toBeInTheDocument()
  })

  it('should render sections', () => {
    renderWithTheme(<Home {...props} />)

    const news = screen.getByRole('heading', { name: /news/i })
    const upcoming = screen.getByRole('heading', { name: /upcoming/i })
    const most = screen.getByRole('heading', { name: /most popular/i })
    const free = screen.getByRole('heading', { name: /free games/i })

    expect(news).toBeInTheDocument()
    expect(upcoming).toBeInTheDocument()
    expect(most).toBeInTheDocument()
    expect(free).toBeInTheDocument()
  })
})
