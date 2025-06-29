import styled from 'styled-components'
import ChickenIcon from '@/assets/icons/chicken.svg?react'
import EnergyIcon from '@/assets/icons/energy.svg?react'
import AppleIcon from '@/assets/icons/apple.svg?react'
import FatIcon from '@/assets/icons/fat-icon.svg?react'
import type { MacroData } from '@api/_types'
import type { GridOrder } from '@/components/ProfileCard'
import Card from '@/components/Card'

const MacroList = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MacroListItem = styled.li``
const macroStyles = {
  kCal: { Icon: EnergyIcon, bg: '#FF00001A' },
  Proteines: { Icon: ChickenIcon, bg: '#4AB8FF1A' },
  Glucides: { Icon: AppleIcon, bg: '#F9CE231A' },
  Lipides: { Icon: FatIcon, bg: '#FD51811A' },
} as const

const MacroItemContainer = styled.article<{ $bg: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 16px;
  background: ${({ $bg }) => $bg};
  border-radius: 16px;
  flex: 1 0 0;
  min-width: 0;

  @media (max-width: 1240px) {
    flex-direction: column;
  }
`

const MacroIconBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #f9f9fb;
  flex-shrink: 0;

  svg {
    display: block;
  }
`

const MacroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1240px) {
    align-items: center;
  }

  > span:first-child {
    color: #1e1f24;
    font-size: 0.875rem;
    font-weight: 700;
  }

  > span:nth-child(2) {
    color: #62636c;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 24px;
  }
`
const MacroItem = ({ quantity, unit, macro }: MacroData) => {
  const { Icon, bg } = macroStyles[macro] ?? macroStyles.kCal
  return (
    <MacroItemContainer $bg={bg}>
      <MacroIconBox>
        <Icon aria-hidden="true" />
      </MacroIconBox>
      <MacroInfo>
        <span>
          {quantity}
          {unit}
        </span>
        <span>{macro}</span>
      </MacroInfo>
    </MacroItemContainer>
  )
}

interface MacroCardProps extends GridOrder {
  macros: MacroData[]
}

const MacroCard = ({ macros, order, mobileOrder }: MacroCardProps) => (
  <Card order={order} mobileOrder={mobileOrder} title="Macros">
    <MacroList>
      {macros.map((item) => (
        <MacroListItem key={item.macro}>
          <MacroItem {...item} />
        </MacroListItem>
      ))}
    </MacroList>
  </Card>
)

export default MacroCard
