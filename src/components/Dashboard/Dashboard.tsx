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

const DashboardContainer = styled.section`
  max-width: 1440px;
  width: 100%;
  margin-right: auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  box-sizing: border-box; // important

  /* NEW: never overflow screen */
  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 40px 8px;
    overflow-x: hidden;
  }
  @media (max-width: 1240px) {
    padding: 0 16px;
  }
`

const DashboardCharts = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 3fr 1fr;
  align-items: stretch;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;

  > div {
    max-width: 100%;
    min-width: 0;
  }

  @media (max-width: 1240px) {
    grid-template-columns: 2fr 1fr;
  }
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
  order: 1;
  width: 100%; // force full width
  min-width: 0; // allow shrinking

  @media (max-width: 600px) {
    order: 2;
  }
`

const ChartsGridContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  align-self: stretch;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  min-width: 0; // important for grid children

  @media (max-width: 1240px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const DashboardAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  order: 2;
  align-self: stretch;
  width: 100%;
  min-width: 0;

  @media (max-width: 600px) {
    order: 1;
  }
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
        </ChartsContainer>
        <DashboardAside>
          <ProfileCard user={user} order={1} mobileOrder={1} />
          <MacroCard macros={user.keyData} order={2} mobileOrder={3} />
          <DailyGoal goals={user.goals} order={3} mobileOrder={2} />
        </DashboardAside>
      </DashboardCharts>
    </DashboardContainer>
  )
}

export default Dashboard
