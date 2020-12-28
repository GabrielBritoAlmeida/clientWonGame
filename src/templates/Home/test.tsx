import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home />)

    const menuHome = screen.getByLabelText(/open menu/i)
    const footerHome = screen.getByRole('heading', { name: /contact us/i })

    expect(menuHome).toBeInTheDocument()
    expect(footerHome).toBeInTheDocument()
  })
})
