import DashboardHeader from '@/components/Dashboard/DashboardHeader.tsx'
import styled from 'styled-components'

import ProfileCard from '@/components/ProfileCard.tsx'
import MacroCard from '@/components/MacroCard.tsx'
import DailyGoal from '@/components/DailyGoal.tsx'
import type { UserData } from '@api/types.ts'
import AverageSessionChart from '@/components/charts/AverageSessionChart.tsx'
import DailyActivityChart from '@/components/charts/DailyActivityChart.tsx'
import GoalChart from '@/components/charts/GoalChart.tsx'
import PerformanceChart from '@/components/charts/PerformanceChart.tsx'

const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
`
const DashboardCharts = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
  align-self: stretch;
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`

const ChartsGridContainer = styled.div`
  display: grid;
  gap: 24px;
  align-self: stretch;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const DashboardAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
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
