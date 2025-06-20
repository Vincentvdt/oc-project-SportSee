export interface UserAPIResponse {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score?: number
  todayScore?: number
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

export interface UserData {
  id: number
  userInfos: {
    firstName: string
    lastName: string
    age: number
  }
  score: number | undefined
  keyData: {
    calorieCount: number
    proteinCount: number
    carbohydrateCount: number
    lipidCount: number
  }
}

interface ActivitySession {
  day: string
  kilogram: number
  calories: number
}

export interface ActivityData {
  userId: number
  sessions: ActivitySession[]
}

interface AverageSessionInfo {
  day: number
  sessionLength: number
}

export interface AverageSessionData {
  userId: number
  sessions: AverageSessionInfo[]
}

interface PerformanceSession {
  value: number
  kind: number
}

export interface PerformanceData {
  userId: number
  kind: {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
  }
  data: PerformanceSession[]
}

export interface UserInfo {
  user: UserAPIResponse
  activity: ActivityData
  averageSessions: AverageSessionData
  performance: PerformanceData
}
