import styled from 'styled-components'
import { BellIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;

    h1 {
      line-height: 2.5rem;
    }
  }

  h1 {
    color: #1e1f24;
    text-align: left;
    font-size: 2rem;
    font-weight: 500;

    span {
      color: #f00;
    }
  }
`

const NotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 600px) {
    align-self: stretch;
    justify-content: unset;
  }
`

const NotificationPopup = styled.div`
  display: flex;
  min-width: 240px;
  gap: 0.5rem;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: #d6fde4;

  span {
    color: #0f462b;
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: #0f462b;
  }

  @media (max-width: 600px) {
    justify-content: unset;
    gap: 16px;
  }
`

const NotificationButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 60px;
  background: #f00;
  border: none;
  color: #ffffff;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`

const DashboardHeader = ({ name }: { name: string }) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(true)

  const isMobile = useMediaQuery('(max-width: 600px)')

  const handleOnClick = () => {
    setAlertOpen((prev) => !prev)
  }
  return (
    <DashboardContainer>
      <h1>
        Bonjour, <span>{name}</span> <br />
        Quoi de beau aujourd'hui ?
      </h1>

      <NotificationContainer>
        {alertOpen && isMobile && (
          <NotificationPopup>
            <LightningBoltIcon aria-hidden="true" />
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </NotificationPopup>
        )}
        {!isMobile && (
          <NotificationButton onClick={handleOnClick} aria-label="Notification">
            <BellIcon aria-hidden="true" />
          </NotificationButton>
        )}
      </NotificationContainer>
    </DashboardContainer>
  )
}

export default DashboardHeader
