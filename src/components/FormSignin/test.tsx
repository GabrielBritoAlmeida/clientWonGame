import { renderWithTheme } from 'utils/tests/helpers'

import FormSignin from '.'

describe('<FormSignin />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignin />)

    // expect(container.firstChild).toMatchSnapshot()
  })
})
