import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

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

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="Checkbox" labelFor="check" onCheck={onCheck} />
    )

    //Verifica se a função não foi chamada no momento de renderizar
    expect(onCheck).not.toHaveBeenCalled()

    const buttonCheck = screen.getByRole('checkbox')

    // simula o evento de click
    userEvent.click(buttonCheck)

    await waitFor(() => {
      // toHaveBeenCalledTimes(1) garante que a função foi chamada apenas uma vez
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should onCheck status true with isChecked', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox isChecked label="Checkbox" labelFor="check" onCheck={onCheck} />
    )

    //Verifica se a função não foi chamada no momento de renderizar
    expect(onCheck).not.toHaveBeenCalled()

    const buttonCheck = screen.getByRole('checkbox')

    // simula o evento de click
    userEvent.click(buttonCheck)

    await waitFor(() => {
      // toHaveBeenCalledTimes(1) garante que a função foi chamada apenas uma vez
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="check" />)

    // página em foco
    expect(document.body).toHaveFocus()

    userEvent.tab()

    const buttonCheck = screen.getByLabelText(/checkbox/i)

    expect(buttonCheck).toHaveFocus()
  })
})
