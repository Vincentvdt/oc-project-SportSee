import DashboardHeader from '@/components/Dashboard/DashboardHeader.tsx'
import styled, { css } from 'styled-components'

import ProfileCard from '@/components/ProfileCard.tsx'
import MacroCard from '@/components/MacroCard.tsx'
import DailyGoal from '@/components/DailyGoal.tsx'
import type { UserData } from '@api/types.ts'
import AverageSessionChart from '@/components/charts/AverageSessionChart.tsx'
import DailyActivityChart from '@/components/charts/DailyActivityChart.tsx'
import GoalChart from '@/components/charts/GoalChart.tsx'
import PerformanceChart from '@/components/charts/PerformanceChart.tsx'
import MealPrepCard from '@/components/MealPrepCard.tsx'

const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  width: 100%;
`

const DashboardGrid = styled.div`
  display: grid;
  width: 100%;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch;
`

const Item = styled.div<{ $span?: number }>`
  width: 100%;
  ${(p) =>
    p.$span &&
    css`
      @media (min-width: 1024px) {
        grid-column: span ${p.$span};
      }
    `}
`

interface DashboardProps {
  user: UserData
}
const Dashboard = ({ user }: DashboardProps) => {
  return (
    <DashboardContainer>
      <DashboardHeader name={user.firstName} />
      <DashboardGrid>
        <Item $span={2}>
          <DailyActivityChart data={user.activity} />
        </Item>
        <Item>
          <PerformanceChart data={user.performance} />
        </Item>
        <Item>
          <GoalChart data={user.score || user.todayScore || null} />
        </Item>
        <Item>
          <AverageSessionChart data={user.averageSessions} />
        </Item>
        <Item $span={2}>
          <MealPrepCard />
        </Item>
        <Item $span={2}>
          <ProfileCard user={user} />
        </Item>
        <Item>
          <MacroCard macros={user.keyData} />
        </Item>
        <Item>
          <DailyGoal goals={user.goals} />
        </Item>
      </DashboardGrid>
    </DashboardContainer>
  )
}

export default Dashboard
