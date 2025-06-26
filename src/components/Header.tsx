import styled from 'styled-components'
import logoSVG from '/logo-name.svg'

const HeaderContainer = styled.header`
  display: flex;
  padding: 24px 40px;
  align-items: center;
  gap: 120px;
`
const LogoWrapper = styled.button`
  background: none;
  border: none;
  height: 24px;
  flex-shrink: 0;
`

const NavWrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      padding: 10px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #282d30;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={logoSVG} alt="Logo SportSee" />
      </LogoWrapper>
      <NavWrapper>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </NavWrapper>
    </HeaderContainer>
  )
}

export default Header
