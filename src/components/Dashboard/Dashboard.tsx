import DashboardHeader from '@/components/Dashboard/DashboardHeader'
import styled from 'styled-components'

import ProfileCard from '@/components/ProfileCard'
import MacroCard from '@/components/MacroCard'
import DailyGoal from '@/components/DailyGoal'
import type { UserData } from '@api/_types'
import AverageSessionChart from '@/components/charts/AverageSessionChart'
import DailyActivityChart from '@/components/charts/DailyActivityChart'
import GoalChart from '@/components/charts/GoalChart'
import PerformanceChart from '@/components/charts/PerformanceChart'
import MealPrepCard from '@/components/MealPrepCard'

const DashboardContainer = styled.section`
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 1440px) {
    max-width: 100vw;
    margin-left: 16px;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0;
  }
`

const DashboardCharts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 3fr 1fr;
  align-items: stretch; /* << KEY!! both columns get full height of the tallest child */
  min-height: 0;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`

const ChartsGridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  align-self: stretch;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const DashboardAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  align-self: stretch;
`

interface DashboardProps {
  user: UserData
}
const Dashboard = ({ user }: DashboardProps) => {
  return (
    <DashboardContainer>
      <DashboardHeader name={user.firstName} />
      <DashboardCharts>
        <ChartsContainer>
          <DailyActivityChart data={user.activity} />
          <ChartsGridContainer>
            <PerformanceChart data={user.performance} />
            <GoalChart data={user.score || user.todayScore || null} />
            <AverageSessionChart data={user.averageSessions} />
          </ChartsGridContainer>
          <MealPrepCard />
        </ChartsContainer>
        <DashboardAside>
          <ProfileCard user={user} />
          <MacroCard macros={user.keyData} />
          <DailyGoal goals={user.goals} />
        </DashboardAside>
      </DashboardCharts>
    </DashboardContainer>
  )
}

export default Dashboard
