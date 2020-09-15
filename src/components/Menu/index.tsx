import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Search as SearchIcon } from '@styled-icons/boxicons-regular/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
