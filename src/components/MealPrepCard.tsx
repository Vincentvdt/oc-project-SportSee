import styled from 'styled-components'
import AppleIcon from '@/assets/icons/apple.svg?react'

const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 1.25rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(32, 32, 56, 0.06);
  align-self: stretch;
`

const CardTitle = styled.h3`
  color: #1e1f24;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  text-align: left;

  span {
    color: #62636c;
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MealItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const IconBox = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #f9f9fb;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span:first-child {
    color: #1e1f24;
    font-size: 0.9375rem;
    font-weight: 600;
  }

  span:nth-child(2) {
    color: #62636c;
    font-size: 0.875rem;
    font-weight: 500;
  }
`

const MealPrepCard = () => (
  <Card>
    <CardTitle>
      Préparation des repas <span>végétarien</span>
    </CardTitle>
    <CardGrid>
      <MealItem>
        <IconBox>
          <AppleIcon aria-hidden="true" />
        </IconBox>
        <Info>
          <span>Salade quinoa</span>
          <span>350kCal • 15g prot • 10min</span>
        </Info>
      </MealItem>
      <MealItem>
        <IconBox>
          <AppleIcon aria-hidden="true" />
        </IconBox>
        <Info>
          <span>Pâtes aux légumes</span>
          <span>600kCal • 25g prot • 25min</span>
        </Info>
      </MealItem>
      <MealItem>
        <IconBox>
          <AppleIcon aria-hidden="true" />
        </IconBox>
        <Info>
          <span>Smoothie protéiné</span>
          <span>250kCal • 20g prot • 5min</span>
        </Info>
      </MealItem>
    </CardGrid>
  </Card>
)

export default MealPrepCard
