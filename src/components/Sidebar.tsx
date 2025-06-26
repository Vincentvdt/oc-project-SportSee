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
  border-radius: 85px;
  background: #fff;
  display: flex;
  padding: 32px 16px;
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

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <nav>
        <ul>
          <li key="yoga">
            <HeaderIcon>
              <YogaIcon />
            </HeaderIcon>
          </li>
          <li key="swimming">
            <HeaderIcon>
              <SwimmingIcon />
            </HeaderIcon>
          </li>
          <li key="cycling">
            <HeaderIcon>
              <CyclingIcon />
            </HeaderIcon>
          </li>
          <li key="workout">
            <HeaderIcon>
              <WorkoutIcon />
            </HeaderIcon>
          </li>
        </ul>
      </nav>
      <SideBarFooter>
        <GearIconWrapper>
          <GearIcon />
        </GearIconWrapper>
        <ProfilPictureWrapper>
          <img src="/pp.jpg" alt="Profile Picture" />
        </ProfilPictureWrapper>
      </SideBarFooter>
    </SidebarWrapper>
  )
}

export default Sidebar
