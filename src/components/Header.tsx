import styled from 'styled-components'
import logo from '../assets/logo.svg'

const HeaderContainer = styled.header`
  background: #020203;
  height: 91px;
  box-shadow: 0 4px 4px 0 #00000040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 29px;

  img {
    width: 178px;
    height: 61px;
    flex-shrink: 0;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 110px;

    @media (max-width: 1024px) {
      gap: 50px;
    }

    li > a {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0;
      color: #ffffff;
      text-align: left;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} className="logo" alt="Vite logo" />
      <nav>
        <ul>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">Profil</a>
          </li>
          <li>
            <a href="">Réglage</a>
          </li>
          <li>
            <a href="">Communauté</a>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}

export default Header
