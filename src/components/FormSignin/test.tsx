import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    // verifique email
    const email = screen.getByPlaceholderText(/email/i)
    expect(email).toBeInTheDocument()

    // verifique password
    const password = screen.getByPlaceholderText(/password/i)
    expect(password).toBeInTheDocument()

    // verifique button
    const button = screen.getByText(/sign in now/i)
    expect(button).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    const forgot = screen.getByText(/forgot your password?/i)
    expect(forgot).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    renderWithTheme(<FormSignIn />)

    // text
    const account = screen.getByText(/don’t have an account\?/i)
    expect(account).toBeInTheDocument()

    // link
    const link = screen.getByRole('link', { name: /sign up/i })
    expect(link).toBeInTheDocument()
  })
})
