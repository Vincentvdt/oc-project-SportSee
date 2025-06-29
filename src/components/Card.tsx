import styled, { css } from 'styled-components'
import type { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  title?: string | ReactNode
  titleColor?: string
  titleInCard?: boolean
  background?: string
  padding?: string
  borderRadius?: string
  className?: string
  style?: CSSProperties
  order?: number
  mobileOrder?: number
  tabletOrder?: number
  aspect?: number | string // NEW: aspect ratio like 1.5, "16/9", etc.
}

const aspectRatioStyle = (aspect?: number | string) =>
  aspect
    ? css`
        aspect-ratio: ${aspect};
        /* Fallback for older browsers (can be removed if not needed): */
        @supports not (aspect-ratio: 1) {
          position: relative;
          &:before {
            content: '';
            display: block;
            padding-bottom: calc(
              100% /
                (${typeof aspect === 'string' && aspect.includes('/') ? aspect : aspect + ' / 1'})
            );
          }
        }
      `
    : ''

const Wrapper = styled.div<{
  $background?: string
  $padding?: string
  $borderRadius?: string
  $order?: number
  $mobileOrder?: number
  $tabletOrder?: number
  $aspect?: number | string
}>`
  background: ${({ $background }) => $background ?? '#fff'};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? '16px'};
  padding: ${({ $padding }) => $padding ?? '16px'};
  position: relative;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  order: ${({ $order }) => $order ?? 0};

  ${({ $aspect }) => aspectRatioStyle($aspect)};

  @media (max-width: 900px) {
    order: ${({ $tabletOrder, $order }) => $tabletOrder ?? $order ?? 0};
  }
  @media (max-width: 600px) {
    padding: ${({ $padding }) => $padding ?? 'unset'};
    order: ${({ $mobileOrder, $tabletOrder, $order }) =>
      $mobileOrder ?? $tabletOrder ?? $order ?? 0};
  }
`

export const CardTitle = styled.h3<{ $color?: string }>`
  color: ${({ $color }) => $color ?? '#222a34'};
  text-align: left;
  font-size: 0.95rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7;
  margin: 0 0 1rem 0;
  letter-spacing: 0.02em;
`

const Card = ({
  children,
  title,
  titleColor,
  titleInCard = true,
  background,
  padding,
  borderRadius,
  className,
  style,
  order,
  mobileOrder,
  tabletOrder,
  aspect,
}: CardProps) => {
  const renderTitle = () => {
    if (!title) return null
    if (typeof title === 'string') return <CardTitle $color={titleColor}>{title}</CardTitle>
    return title
  }

  if (titleInCard) {
    return (
      <Wrapper
        $background={background}
        $padding={padding}
        $borderRadius={borderRadius}
        $order={order}
        $mobileOrder={mobileOrder}
        $tabletOrder={tabletOrder}
        $aspect={aspect}
        className={className}
        style={style}
      >
        {renderTitle()}
        {children}
      </Wrapper>
    )
  }

  return (
    <div className={className} style={style}>
      {renderTitle()}
      <Wrapper
        $background={background}
        $padding={padding}
        $borderRadius={borderRadius}
        $order={order}
        $mobileOrder={mobileOrder}
        $tabletOrder={tabletOrder}
        $aspect={aspect}
      >
        {children}
      </Wrapper>
    </div>
  )
}

export default Card
