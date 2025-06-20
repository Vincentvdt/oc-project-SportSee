import ProtIcon from '../assets/icons/ProtIcon.svg'
import GlucIcon from '../assets/icons/GlucIcon.svg'
import LipIcon from '../assets/icons/LipIcon.svg'
import CalIcon from '../assets/icons/CalIcon.svg'
import styled from 'styled-components'
import { memo, useMemo } from 'react'

const MacroContainer = styled.div<{ $angle: number }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  max-width: 258px;
  padding: 32px;
  border-radius: 5px;
  background: #fbfbfb;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
  transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);

  @media (max-width: 1024px) {
    padding: 16px;
  }

  img {
    width: 60px;
    height: 60px;
    transition: 100ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

    img {
      transform: rotate(${(props) => props.$angle}deg);
    }
  }
`

const MacroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
  }
`

const MacroValue = styled.span`
  color: #282d30;
  font-size: 20px;
  font-weight: 700;
`

const MacroName = styled.span`
  color: #74798c;
  font-size: 14px;
  font-weight: 500;
`

const macroData = {
  calorieCount: {
    unit: 'kCal',
    displayName: 'Calories',
    icon: CalIcon,
  },
  proteinCount: {
    unit: 'g',
    displayName: 'Proteines',
    icon: ProtIcon,
  },
  carbohydrateCount: {
    unit: 'g',
    displayName: 'Glucides',
    icon: GlucIcon,
  },
  lipidCount: {
    unit: 'g',
    displayName: 'Lipides',
    icon: LipIcon,
  },
}

interface MacroCardProps {
  name: keyof typeof macroData
  value: number
}

const MacroCard = ({ name, value }: MacroCardProps) => {
  const { unit, displayName, icon } = macroData[name]
  // useMemo to avoid recalculating random angle on every render
  const rotationAngle = useMemo(() => Math.floor(Math.random() * 21) - 10, [])

  return (
    <MacroContainer $angle={rotationAngle}>
      <img src={icon} alt={`${displayName} Icon`} />
      <MacroContent>
        <MacroValue>
          {value.toLocaleString()}
          {unit}
        </MacroValue>
        <MacroName>{displayName}</MacroName>
      </MacroContent>
    </MacroContainer>
  )
}

export default memo(MacroCard)
