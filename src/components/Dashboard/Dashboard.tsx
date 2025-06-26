import DashboardHeader from '@/components/Dashboard/DashboardHeader.tsx'
import styled from 'styled-components'

import ProfileCard from '@/components/ProfileCard.tsx'
import MacroCard from '@/components/MacroCard.tsx'
import DailyGoal from '@/components/charts/DailyGoal.tsx'
import DailyActivityChart from '@/components/charts/DailyActivityChart.tsx'
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
  min-height: 263px;
  align-self: stretch;
  grid-template-rows: repeat(1, minmax(0, 1fr));
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader />
      <div>
        <ChartsContainer>
          <DailyActivityChart data={} />
          <div>
            <AverageSessionChart data={} />
            <DailyGoal />
            <AverageSessionChart data={} />
          </div>
        </ChartsContainer>
        <ChartsGridContainer>
          <ProfileCard
            name="Thomas Monsouri"
            bio="Be stronger than your excuses"
            height="173cm"
            weight="63kg"
            pictureUrl="/pp.jpg"
            onEdit={() => console.log('Edit clicked')}
          />
          <MacroCard />
          <DailyGoal />
        </ChartsGridContainer>
      </div>
    </DashboardContainer>
  )
}

export default Dashboard
