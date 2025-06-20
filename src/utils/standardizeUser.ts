import type { UserAPIResponse, UserData } from '@/types/global'

export default function standardizeUser(user: UserAPIResponse): UserData {
  return {
    id: user.id,
    userInfos: { ...user.userInfos },
    score: user.score ?? user.todayScore,
    keyData: { ...user.keyData },
  }
}
