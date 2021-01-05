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

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)

    const checkEmptyId = screen.getByRole('checkbox')
    const notLabelIsExist = screen.queryByLabelText('checkbox')

    expect(checkEmptyId).toHaveAttribute('id', '')
    expect(notLabelIsExist).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox labelColor="black" label="checkbox label" labelFor="check" />
    )

    const textBlack = screen.getByText(/checkbox label/i)

    expect(textBlack).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render with label atribute line-height', () => {
    renderWithTheme(
      <Checkbox labelColor="black" label="checkbox label" labelFor="check" />
    )

    const textLine = screen.getByText(/checkbox label/i)

    expect(textLine).toHaveStyle({
      'line-height': '1.8rem'
    })
  })
})
