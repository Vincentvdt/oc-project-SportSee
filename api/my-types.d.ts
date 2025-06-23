export interface UserData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  todayScore?: number
  score?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
  activity: { day: string; kilogram: number; calories: number }[]
  averageSessions: { day: number; sessionLength: number }[]
  performance: {
    kind: Record<number, string>
    data: { value: number; kind: number }[]
  }
}
