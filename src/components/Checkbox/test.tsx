import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    screen.debug(screen.getByText(/checkbox label/i))

    const labelIsExist = screen.getByRole('checkbox')
    const textIsExist = screen.getByLabelText(/checkbox label/i)
    const atributeIsExist = screen.getByText(/checkbox label/i)

    expect(labelIsExist).toBeInTheDocument()
    expect(textIsExist).toBeInTheDocument()
    expect(atributeIsExist).toHaveAttribute('for', 'check')
  })
})
