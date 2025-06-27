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
export interface MacroData {
  quantity: number
  unit?: string
  macro: 'kCal' | 'Proteines' | 'Glucides' | 'Lipides'
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
export interface Performance {
  data: PerformanceEntry[]
  kind: PerformanceKind
}
export interface UserMainData {
  id: number
  userInfos: UserInfo
  todayScore?: number
  score?: number
  keyData: MacroData[]
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

export interface GoalObjectif {
  value: string
  unit: string
}

export interface Goal {
  type: 'workout' | 'cycling' | 'swimming' | 'yoga'
  objectif: GoalObjectif
  title: string
  details: string
  done: boolean
}

export interface UserGoal {
  userId: number
  goals: Goal[]
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
  keyData: MacroData[]
  activity: ActivitySession[]
  averageSessions: AverageSession[]
  performance: Performance
  goals: Goal[]
}
