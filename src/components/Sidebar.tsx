import styled from 'styled-components'
import YogaIcon from '@/assets/icons/yoga.svg?react'
import SwimmingIcon from '@/assets/icons/swimming.svg?react'
import CyclingIcon from '@/assets/icons/cycling.svg?react'
import WorkoutIcon from '@/assets/icons/workout.svg?react'
import { GearIcon } from '@radix-ui/react-icons'

const HeaderIcon = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;

  border-radius: 60px;
  transition: 250ms ease-in-out;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    aspect-ratio: 1/1;

    path {
      transition: 180ms ease-in-out;
      fill: #8b8d98;
    }
  }

  &:hover svg path {
    fill: #ff0000;
  }
`

const SidebarWrapper = styled.aside`
  height: 100%;
  width: 80px;
  border-radius: 80px;
  background: #fff;
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    width: auto;
    height: auto;
    border-radius: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`
const SideBarFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const GearIconWrapper = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 180ms ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    flex-shrink: 0;
  }

  &:hover {
    color: #ff0000;
  }
`

const ProfilPictureWrapper = styled.button`
  width: 40px;
  height: 40px;
  aspect-ratio: 1/1;
  border-radius: 40px;
  overflow: hidden;
  border: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`

interface SidebarProps {
  picture?: string
  firstName?: string
  loading: boolean
}

const navIcons = [
  { Icon: YogaIcon, label: 'Yoga' },
  { Icon: SwimmingIcon, label: 'Natation' },
  { Icon: CyclingIcon, label: 'Cyclisme' },
  { Icon: WorkoutIcon, label: 'Musculation' },
] as const

const Sidebar = ({ picture, loading, firstName }: SidebarProps) => {
  return (
    <SidebarWrapper>
      <nav>
        <ul>
          {navIcons.map(({ Icon, label }) => (
            <li key={label}>
              <HeaderIcon aria-label={label}>
                <Icon aria-hidden="true" />
              </HeaderIcon>
            </li>
          ))}
        </ul>
      </nav>
      <SideBarFooter>
        <GearIconWrapper aria-label="Paramètres">
          <GearIcon aria-hidden="true" />
        </GearIconWrapper>
        {!loading && picture && (
          <ProfilPictureWrapper aria-label="Profil">
            <img src={`/${picture}`} alt={`Photo de profil de ${firstName}`} />
          </ProfilPictureWrapper>
        )}
      </SideBarFooter>
    </SidebarWrapper>
  )
}

export default Sidebar
