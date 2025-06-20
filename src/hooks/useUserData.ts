import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import type {
  ActivityData,
  AverageSessionData,
  PerformanceData,
  UserAPIResponse,
  UserInfo,
} from '@/types/global'
import mockUser from '@/assets/data/mocks/userMock.ts'
import standardizeUser from '@/utils/standardizeUser.ts'

interface UseUserDataReturn {
  data: UserInfo
  loading: boolean
  isMock: boolean
  refetch: () => void
}

const API_BASE_URL = '/api/user'

export default function useUserData(userId: number): UseUserDataReturn {
  const [data, setData] = useState<UserInfo>({
    ...mockUser,
    user: standardizeUser(mockUser.user),
  })
  const [loading, setLoading] = useState(false)
  const [isMock, setIsMock] = useState(true)

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const [user, activity, performance, averageSessions] = await Promise.all([
        axios
          .get<{ data: UserAPIResponse }>(`${API_BASE_URL}/${userId}`)
          .then((res) => res.data.data),
        axios
          .get<{ data: ActivityData }>(`${API_BASE_URL}/${userId}/activity`)
          .then((res) => res.data.data),
        axios
          .get<{ data: PerformanceData }>(`${API_BASE_URL}/${userId}/performance`)
          .then((res) => res.data.data),
        axios
          .get<{ data: AverageSessionData }>(`${API_BASE_URL}/${userId}/average-sessions`)
          .then((res) => res.data.data),
      ])

      setData({
        user: standardizeUser(user),
        activity,
        performance,
        averageSessions,
      })
      setIsMock(false)
    } catch (error) {
      console.warn("[EXPECTED] API error, using mock data instead:", error);
      setData({
        ...mockUser,
        user: standardizeUser(mockUser.user),
      })
      setIsMock(true)
    } finally {
      setLoading(false)
    }
  }, [userId])

  useEffect(() => {
    fetchData().catch((err) => console.error(err))
  }, [fetchData])

  return { data, loading, isMock, refetch: fetchData }
}
