import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;
  padding: 24px 40px;
  font-size: 0.875rem;
  border-top: 1px solid #e5e5e5;

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const Copyright = styled.p`
  color: #979797;
  text-align: left;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`

const MandatoryLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1240px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
`
const LinkItem = styled.li`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  color: #979797;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  font-style: normal;

  &:hover {
    text-decoration: underline;
  }
`
const Dot = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #979797;
  margin: 0 6px;
  @media (max-width: 1240px) {
    display: none;
  }
`

const Footer = () => {
  const links = [
    { label: 'Mentions légales', href: '#' },
    { label: 'Confidentialité', href: '#' },
    { label: 'CGU', href: '#' },
    { label: 'Politique de cookies', href: '#' },
  ]
  return (
    <FooterContainer>
      <Copyright>© 2025 SportSee — Bouge mieux, vis plus fort. Tous droits réservés.</Copyright>
      <nav aria-label="Mentions et politique">
        <MandatoryLinks>
          {links.map((link, index) => (
            <LinkItem key={link.label}>
              <Link href={link.href}>{link.label}</Link>
              {index !== links.length - 1 && <Dot aria-hidden />}
            </LinkItem>
          ))}
        </MandatoryLinks>
      </nav>
    </FooterContainer>
  )
}

export default Footer
