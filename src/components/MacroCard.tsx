import styled from 'styled-components'
import ChickenIcon from '@/assets/icons/chicken.svg?react'
import EnergyIcon from '@/assets/icons/energy.svg?react'
import AppleIcon from '@/assets/icons/apple.svg?react'
import FatIcon from '@/assets/icons/fat-icon.svg?react'
import type { MacroData } from '@api/types.ts'

const MacroCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 1rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(32, 32, 56, 0.06);
`

const CardTitle = styled.h3`
  color: #1e1f24;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  text-align: left;
`

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
  gap: 1.5rem;
  padding: 16px;
  background: ${({ $bg }) => $bg};
  border-radius: 16px;
  flex: 1 0 0;
  min-width: 0;
`

const MacroIconBox = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #f9f9fb;

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`

const MacroInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

interface MacroCardProps {
  macros: MacroData[]
}

const MacroCard = ({ macros }: MacroCardProps) => (
  <MacroCardContainer>
    <CardTitle>Macros</CardTitle>
    <MacroList>
      {macros.map((item) => (
        <MacroListItem key={item.macro}>
          <MacroItem {...item} />
        </MacroListItem>
      ))}
    </MacroList>
  </MacroCardContainer>
)

export default MacroCard
