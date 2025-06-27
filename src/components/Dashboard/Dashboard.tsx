import DashboardHeader from '@/components/Dashboard/DashboardHeader.tsx'
import styled from 'styled-components'

import ProfileCard from '@/components/ProfileCard.tsx'
import MacroCard from '@/components/MacroCard.tsx'
import DailyGoal from '@/components/DailyGoal.tsx'
import type { UserData } from '../../../api/types'
import AverageSessionChart from '@/components/charts/AverageSessionChart.tsx'

const DashboardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex: 1 0 0;
`

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`

const ChartsGridContainer = styled.div`
  display: grid;

  align-self: stretch;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

interface DashboardProps {
  user: UserData
}
const Dashboard = ({ user }: DashboardProps) => {
  console.log(user.averageSessions)
  return (
    <DashboardContainer>
      <DashboardHeader name={user.firstName} />
      <div>
        <ChartsContainer>
          <ChartsGridContainer>
            <AverageSessionChart data={user.averageSessions} />
          </ChartsGridContainer>
        </ChartsContainer>
        <div>
          <ProfileCard user={user} onEdit={() => console.log('Edit clicked')} />
          <MacroCard />
          <DailyGoal goals={user.goals} />
        </div>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
