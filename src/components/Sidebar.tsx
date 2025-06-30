import styled from 'styled-components'
import YogaIcon from '@/assets/icons/yoga.svg?react'
import SwimmingIcon from '@/assets/icons/swimming.svg?react'
import CyclingIcon from '@/assets/icons/cycling.svg?react'
import WorkoutIcon from '@/assets/icons/workout.svg?react'
import { GearIcon } from '@radix-ui/react-icons'
import ProfilePicture from '@/components/ProfilePicture'
import useMediaQuery from '@/hooks/useMediaQuery'

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

  @media (max-width: 600px) {
    width: 100%;
    padding: 40px 0;
  }
`

const SidebarWrapper = styled.aside`
  min-width: 60px;
  max-width: 80px;
  height: 100%;
  width: 80px;
  border-radius: 80px;
  background: #fff;
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  nav {
    width: 100%;
  }

  @media (max-width: 1240px) {
    width: 60px;
    padding: 32px 8px;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    min-width: unset;
    max-width: unset;
    height: unset;
    width: unset;
    padding: unset;
    border-radius: unset;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    @media (max-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      gap: unset;

      li {
        flex: 1 0 0;
      }
    }
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

const navIcons = [
  { Icon: YogaIcon, label: 'Yoga' },
  { Icon: SwimmingIcon, label: 'Natation' },
  { Icon: CyclingIcon, label: 'Cyclisme' },
  { Icon: WorkoutIcon, label: 'Musculation' },
] as const

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
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
      {!isMobile && (
        <SideBarFooter>
          <GearIconWrapper aria-label="Paramètres">
            <GearIcon aria-hidden="true" />
          </GearIconWrapper>
          <ProfilePicture rounded />
        </SideBarFooter>
      )}
    </SidebarWrapper>
  )
}

export default Sidebar
