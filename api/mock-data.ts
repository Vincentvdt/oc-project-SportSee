// Mock data derived from the provided real data
import type { UserActivity, UserAverage, UserMainData, UserPerformance, UserData } from './my-types'

export const USER_MAIN_DATA: UserMainData[] = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
      bio: 'Fitness addict, coffee lover, and tech enthusiast. Living life one squat at a time.',
      height: 182,
      weight: 78,
      gender: 'male',
      birthday: '1993-02-15',
      picture: 'pp.jpg',
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia',
      lastName: 'Ratorez',
      age: 34,
      bio: 'Marathon runner & plant-based foodie. Loves dogs, data, and early morning yoga.',
      height: 168,
      weight: 61,
      gender: 'female',
      birthday: '1990-06-22',
      picture: 'pp2.png',
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
]

export const USER_ACTIVITY: UserActivity[] = [
  {
    userId: 12,
    sessions: [
      { day: '2020-07-01', kilogram: 80, calories: 240 },
      { day: '2020-07-02', kilogram: 80, calories: 220 },
      { day: '2020-07-03', kilogram: 81, calories: 280 },
      { day: '2020-07-04', kilogram: 81, calories: 290 },
      { day: '2020-07-05', kilogram: 80, calories: 160 },
      { day: '2020-07-06', kilogram: 78, calories: 162 },
      { day: '2020-07-07', kilogram: 76, calories: 390 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: '2020-07-01', kilogram: 70, calories: 240 },
      { day: '2020-07-02', kilogram: 69, calories: 220 },
      { day: '2020-07-03', kilogram: 70, calories: 280 },
      { day: '2020-07-04', kilogram: 70, calories: 500 },
      { day: '2020-07-05', kilogram: 69, calories: 160 },
      { day: '2020-07-06', kilogram: 69, calories: 162 },
      { day: '2020-07-07', kilogram: 69, calories: 390 },
    ],
  },
]

export const USER_AVERAGE_SESSIONS: UserAverage[] = [
  {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 23 },
      { day: 3, sessionLength: 45 },
      { day: 4, sessionLength: 50 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 60 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 40 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 30 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 50 },
    ],
  },
]

export const USER_PERFORMANCE: UserPerformance[] = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 80, kind: 1 },
      { value: 120, kind: 2 },
      { value: 140, kind: 3 },
      { value: 50, kind: 4 },
      { value: 200, kind: 5 },
      { value: 90, kind: 6 },
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 200, kind: 1 },
      { value: 240, kind: 2 },
      { value: 80, kind: 3 },
      { value: 80, kind: 4 },
      { value: 220, kind: 5 },
      { value: 110, kind: 6 },
    ],
  },
]

export const USERS_DATA: UserData[] = USER_MAIN_DATA.map((user) => ({
  id: user.id,
  firstName: user.userInfos.firstName,
  lastName: user.userInfos.lastName,
  age: user.userInfos.age,
  bio: user.userInfos.bio,
  height: user.userInfos.height,
  weight: user.userInfos.weight,
  gender: user.userInfos.gender,
  birthday: user.userInfos.birthday,
  picture: user.userInfos.picture,
  todayScore: user.todayScore,
  score: user.score,
  keyData: user.keyData,
  activity: USER_ACTIVITY.find((a) => a.userId === user.id)?.sessions ?? [],
  averageSessions: USER_AVERAGE_SESSIONS.find((s) => s.userId === user.id)?.sessions ?? [],
  performance: USER_PERFORMANCE.find((p) => p.userId === user.id) ?? {
    kind: {},
    data: [],
  },
}))

export default USERS_DATA
