import Button from 'components/Button'
import { RibbonColors, RibbonSizes } from '../Ribbon'
import Ribbon from '../Ribbon'

import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal'
}: BannerProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
