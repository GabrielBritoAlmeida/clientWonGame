import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import Menu from 'components/Menu'
import Footer from 'components/Footer'
import BannerSlider from 'components/BannerSlider'
import Heading from 'components/Heading'
import GameCardSlider from 'components/GameCardSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularGames,
  mostPopularHighlight,
  freeGames,
  freeHighlight,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>

      <GameCardSlider items={upcomingGames} />
      <Highlight {...upcomingHighlight} />
      <GameCardSlider items={upcomingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
)

export default Home
