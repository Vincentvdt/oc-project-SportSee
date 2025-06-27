import styled from 'styled-components'
import logoSVG from '/logo-name.svg'

const HeaderContainer = styled.header`
  display: flex;
  padding: 1.5rem 2.5rem;
  align-items: center;
  gap: 120px;
`
const LogoWrapper = styled.button`
  background: none;
  border: none;
  height: 1.5rem;
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
      padding: 0.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;
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
