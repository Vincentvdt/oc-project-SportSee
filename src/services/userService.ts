import type {
  ActivityData,
  AverageSessionData,
  PerformanceData,
  UserAPIResponse,
} from '@/types/global'
import { fetchJSON } from './api'

export const getUserInfo = async (id: number): Promise<UserAPIResponse> => {
  return await fetchJSON(`${id}`)
}

export const getUserActivity = async (id: number): Promise<ActivityData> => {
  return await fetchJSON(`${id}/activity`)
}

export const getUserPerformance = async (id: number): Promise<PerformanceData> => {
  return await fetchJSON(`${id}/performance`)
}

export const getUserAverageSessions = async (
  id: number
): Promise<AverageSessionData> => {
  return await fetchJSON(`${id}/average-sessions`)
}
