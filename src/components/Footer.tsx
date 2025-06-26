import { DotFilledIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  padding: 24px 40px;
`
const Copyright = styled.p`
  color: #979797;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
const MandatoryLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;

  > svg {
    width: 12px;
    height: 12px;
    aspect-ratio: 1/1;
    color: #979797;
  }

  > li a {
    color: #979797;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>© 2025 SportSee — Bouge mieux, vis plus fort. Tous droits réservés.</Copyright>

      <MandatoryLinks>
        <li>
          <a href="#">Mentions légales</a>
        </li>
        <DotFilledIcon />
        <li>
          <a href="#">Confidentialité</a>
        </li>
        <DotFilledIcon />
        <li>
          <a href="#">CGU</a>
        </li>
        <DotFilledIcon />
        <li>
          <a href="#">Politique de cookies</a>
        </li>
      </MandatoryLinks>
    </FooterContainer>
  )
}

export default Footer
