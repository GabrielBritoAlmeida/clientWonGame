import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    // Verifique se o title existe renderizado (.toBeIntheDocument())
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()
    //verifique se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', { name: /play the new/i })
    ).toBeInTheDocument()
    // verifique se a imagem existe renderizada

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
