import styled from 'styled-components'
import logoSVG from '/logo-name.svg'
import ProfilePicture from '@/components/ProfilePicture'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useState } from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const HeaderContainer = styled.header`
  display: flex;
  padding: 24px 40px;
  align-items: center;
  gap: 7.5rem;
  position: relative;
  background: #fff;

  @media (max-width: 600px) {
    width: 100%;
    padding: 32px 24px;
    gap: 1rem;
    justify-content: space-between;
  }
`
const LogoWrapper = styled.button`
  background: none;
  border: none;
  height: 24px;
  flex-shrink: 0;
`
const NavWrapper = styled.nav<{ $mobile?: boolean }>`
  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    a {
      font-weight: 700;
      text-transform: uppercase;
      display: flex;
      padding: 8px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      color: #282d30;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  ${({ $mobile }) =>
    $mobile &&
    `
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.11);
    padding: 2rem 2.5rem;
    z-index: 999;
    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }
    a {
      font-size: 1.25rem;
      color: #ff0000;
    }
  `}
`

const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0;

  cursor: pointer;
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`

const BurgerNavBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(30, 31, 36, 0.12);
`

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 600px')
  const [open, setOpen] = useState(false)

  return (
    <HeaderContainer>
      {!isMobile && (
        <>
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
        </>
      )}

      {isMobile && (
        <>
          <BurgerButton aria-label="Ouvrir le menu" onClick={() => setOpen(true)} tabIndex={0}>
            <HamburgerMenuIcon width={26} height={26} color="#FF0000" />
          </BurgerButton>
          <ProfilePicture />
        </>
      )}

      {isMobile && open && (
        <>
          <BurgerNavBackdrop onClick={() => setOpen(false)} />
          <NavWrapper $mobile>
            <ul>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Profil
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Réglage
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Communauté
                </a>
              </li>
            </ul>
          </NavWrapper>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
