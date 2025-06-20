import { useEffect, useState } from 'react'
import userInfo from '../mocks/userMock.ts'
import type { UserAPIResponse, UserData, UserInfo } from "@/interfaces"
import styled from 'styled-components'
import MacroCard from './MacroCard.tsx'
import DailyActivityChart from './Charts/DailyActivityChart.tsx'
import AverageSessionChart from './Charts/AverageSessionChart.tsx'
import PerformanceChart from './Charts/PerformanceChart.tsx'
import GoalChart from './Charts/GoalChart.tsx'
import {
  getUserActivity,
  getUserAverageSessions,
  getUserInfo,
  getUserPerformance,
} from '../services/userService.tsx'

const LoaderIcon = () => (
  <svg width="60" height="15" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#000">
    <circle cx="15" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="60" cy="15" r="9" fillOpacity="0.3">
      <animate
        attributeName="r"
        from="9"
        to="9"
        begin="0s"
        dur="0.8s"
        values="9;15;9"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="0.5"
        to="0.5"
        begin="0s"
        dur="0.8s"
        values=".5;1;.5"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="105" cy="15" r="15">
      <animate
        attributeName="r"
        from="15"
        to="15"
        begin="0s"
        dur="0.8s"
        values="15;9;15"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill-opacity"
        from="1"
        to="1"
        begin="0s"
        dur="0.8s"
        values="1;.5;1"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
)

const DashboardContainer = styled.section`
  width: 100%;
  padding: 86px 90px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 43px 45px;
  }
`

const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 41px;
  margin-bottom: 77px;

  @media (max-width: 1024px) {
    gap: 10px;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;

    span {
      color: #ff0101;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    small {
      font-size: 11px;
      color: #777777;
      font-style: italic;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`

const MainLayout = styled.div`
  display: flex;
  gap: 31px;
  justify-content: space-between;
`

const ChartLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 28px;
`

const ChartLayoutRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width: 1024px) {
    gap: 15px;
  }

  > div {
    width: 258px;
    height: 263px;

    @media (max-width: 1024px) {
      width: 100px;
      height: 200px;
      flex: 1;
    }
  }
`

const MacrosLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 39px;

  @media (max-width: 1024px) {
    gap: 10px;
    justify-content: space-between;
  }
`

const standardizeUser = (user: UserAPIResponse): UserData => {
  return {
    id: user.id,
    userInfos: {
      firstName: user.userInfos.firstName,
      lastName: user.userInfos.lastName,
      age: user.userInfos.age,
    },
    score: user.score ?? user.todayScore,
    keyData: {
      calorieCount: user.keyData.calorieCount,
      proteinCount: user.keyData.proteinCount,
      carbohydrateCount: user.keyData.carbohydrateCount,
      lipidCount: user.keyData.lipidCount,
    },
  }
}

const Dashboard = () => {
  const [userId, setUserId] = useState(12)
  const [userData, setUserData] = useState<UserInfo>({
    ...userInfo,
    user: standardizeUser(userInfo.user),
  })
  const [mock, isMock] = useState(true)

  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)

    const fetchUserData = async () => {
      try {
        const [userInfoData, activityData, performanceData, averageSessionsData] =
          await Promise.all([
            getUserInfo(userId),
            getUserActivity(userId),
            getUserPerformance(userId),
            getUserAverageSessions(userId),
          ])

        setUserData({
          user: standardizeUser(userInfoData),
          activity: activityData,
          performance: performanceData,
          averageSessions: averageSessionsData,
        })
        isMock(false)
      } catch (error) {
        console.error(error)
        setUserData({
          ...userInfo,
          user: standardizeUser(userInfo.user),
        })
        isMock(true)
      } finally {
        setLoading(false)
      }
    }
    fetchUserData().catch()
  }, [userId])

  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>
          Bonjour{' '}
          <span onClick={() => (userId === 12 ? setUserId(18) : setUserId(12))}>
            {isLoading ? <LoaderIcon /> : userData.user.userInfos.firstName}
          </span>{' '}
          {mock ? <small>mock data</small> : null}
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </DashboardHeader>
      <MainLayout>
        <ChartLayout>
          <DailyActivityChart data={userData.activity} />
          <ChartLayoutRow>
            <AverageSessionChart data={userData.averageSessions} />
            <PerformanceChart data={userData.performance} />
            <GoalChart data={Number(userData.user.score)} />
          </ChartLayoutRow>
        </ChartLayout>
        <MacrosLayout>
          {Object.keys(userData.user.keyData).map((key) => {
            const value = userData.user.keyData[key as keyof typeof userData.user.keyData]
            return (
              <MacroCard key={key} name={key as keyof typeof userData.user.keyData} value={value} />
            )
          })}
        </MacrosLayout>
      </MainLayout>
    </DashboardContainer>
  )
}

export default Dashboard
