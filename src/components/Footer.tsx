import { DotFilledIcon } from '@radix-ui/react-icons'
import styled from 'styled-components'
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
  padding: 24px 40px;
  font-size: 0.875rem;
  border-top: 1px solid #e5e5e5;
  margin-top: 24px;
`
const Copyright = styled.p`
  color: #979797;

  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`
const MandatoryLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  > svg {
    width: 12px;
    height: 12px;
    aspect-ratio: 1/1;
    color: #979797;
  }

  > li a {
    color: #979797;

    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    &:hover {
      text-decoration: underline;
    }
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
        <DotFilledIcon aria-hidden="true" />
        <li>
          <a href="#">Confidentialité</a>
        </li>
        <DotFilledIcon aria-hidden="true" />
        <li>
          <a href="#">CGU</a>
        </li>
        <DotFilledIcon aria-hidden="true" />
        <li>
          <a href="#">Politique de cookies</a>
        </li>
      </MandatoryLinks>
    </FooterContainer>
  )
}

export default Footer
