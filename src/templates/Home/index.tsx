import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Footer />
    </Container>
  </S.Wrapper>
)

export default Home
