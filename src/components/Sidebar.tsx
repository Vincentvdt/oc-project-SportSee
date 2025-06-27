import styled from 'styled-components'
import YogaIcon from '@/assets/icons/yoga.svg?react'
import SwimmingIcon from '@/assets/icons/swimming.svg?react'
import CyclingIcon from '@/assets/icons/cycling.svg?react'
import WorkoutIcon from '@/assets/icons/workout.svg?react'
import { GearIcon } from '@radix-ui/react-icons'

const HeaderIcon = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;

  border-radius: 3.75rem;
  transition: 250ms ease-in-out;

  svg {
    width: 1.5rem;
    height: 1.5rem;
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
  border-radius: 5rem;
  background: #fff;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`
const SideBarFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const GearIconWrapper = styled.button`
  width: 1.5rem;
  height: 1.5rem;
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
  width: 2.5rem;
  height: 2.5rem;
  aspect-ratio: 1/1;
  border-radius: 2.5rem;
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
