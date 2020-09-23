import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css``};
`
type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme }) => css``};
`

export const Caption = styled.div`
  ${({ theme }) => css``};
`

export const Title = styled.h2`
  ${({ theme }) => css``};
`

export const SubTitle = styled.h3`
  ${({ theme }) => css``};
`
