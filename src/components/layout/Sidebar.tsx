import styled from 'styled-components'

import armIcon from '../../assets/icons/arm.svg'
import bikeIcon from '../../assets/icons/bike.svg'
import swimIcon from '../../assets/icons/swim.svg'
import zenIcon from '../../assets/icons/zen.svg'

const SidebarContainer = styled.aside`
  display: grid;
  grid-template-rows: repeat(3, 1fr); // Adjusted to accommodate the copyright text
  gap: 30px;
  width: fit-content;
  background: #020203;
  box-shadow: 0 4px 4px 0 #00000040;
`

const NavigationMenu = styled.nav`
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 0;
    padding: 0 25px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 64px;
      height: 64px;
      flex-shrink: 0;
      background: #ffffff;
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background: #c7c7c7;
      }
    }
  }
`

const CopyrightText = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-row: 3;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  white-space: nowrap;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 24px;
  margin-top: auto;
  margin-bottom: 60px;
`

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavigationMenu>
        <ul>
          <li>
            <img src={zenIcon} alt="Yoga icon" />
          </li>
          <li>
            <img src={swimIcon} alt="Swimming icon" />
          </li>
          <li>
            <img src={bikeIcon} alt="Cycling icon" />
          </li>
          <li>
            <img src={armIcon} alt="Workout icon" />
          </li>
        </ul>
      </NavigationMenu>
      <CopyrightText>Copyright, SportSee 2020</CopyrightText>
    </SidebarContainer>
  )
}

export default Sidebar
