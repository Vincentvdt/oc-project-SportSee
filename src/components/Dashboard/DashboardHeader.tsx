import styled from 'styled-components'
import { BellIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  h1 {
    color: #1e1f24;
    text-align: left;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #f00;
    }
  }
`

const NotificationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 16px;
`

const NotificationPopup = styled.div`
  display: flex;
  min-width: 15rem;
  gap: 8px;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: #d6fde4;

  span {
    color: #0f462b;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    color: #0f462b;
  }
`

const NotificationButton = styled.button`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;

  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3.75rem;
  background: #f00;
  border: none;
  color: #ffffff;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`

const DashboardHeader = ({ name }: { name: string }) => {
  const [alertOpen, setAlertOpen] = useState<boolean>(true)

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
        {alertOpen && (
          <NotificationPopup>
            <LightningBoltIcon aria-hidden="true" />
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </NotificationPopup>
        )}
        <NotificationButton onClick={handleOnClick} aria-label="Notification">
          <BellIcon aria-hidden="true" />
        </NotificationButton>
      </NotificationContainer>
    </DashboardContainer>
  )
}

export default DashboardHeader
