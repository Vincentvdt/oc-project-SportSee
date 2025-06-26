export interface UserInfo {
  firstName: string
  lastName: string
  age: number
  bio: string
  height: number
  weight: number
  gender: string
  birthday: string
  picture: string
}

export interface KeyData {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

export interface ActivitySession {
  day: string
  kilogram: number
  calories: number
}

export interface AverageSession {
  day: number
  sessionLength: number
}

export interface PerformanceEntry {
  value: number
  kind: number
}

export interface PerformanceKind {
  [key: number]: string
}

export interface UserMainData {
  id: number
  userInfos: UserInfo
  todayScore?: number
  score?: number
  keyData: KeyData
}

export interface UserActivity {
  userId: number
  sessions: ActivitySession[]
}

export interface UserAverage {
  userId: number
  sessions: AverageSession[]
}

export interface UserPerformance {
  userId: number
  kind: PerformanceKind
  data: PerformanceEntry[]
}

export interface UserData {
  id: number
  firstName: string
  lastName: string
  age: number
  bio: string
  height: number
  weight: number
  gender: string
  birthday: string
  picture: string
  todayScore?: number
  score?: number
  keyData: KeyData
  activity: ActivitySession[]
  averageSessions: AverageSession[]
  performance: {
    kind: PerformanceKind
    data: PerformanceEntry[]
  }
}
