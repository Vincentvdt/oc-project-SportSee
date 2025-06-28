// Mock data derived from the provided real data
import type {
  UserActivity,
  UserAverage,
  UserMainData,
  UserPerformance,
  UserData,
  UserGoal,
} from './_types'

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
    keyData: [
      { quantity: 1930, macro: 'kCal' },
      { quantity: 155, macro: 'Proteines', unit: 'g' },
      { quantity: 290, macro: 'Glucides', unit: 'g' },
      { quantity: 50, macro: 'Lipides', unit: 'g' },
    ],
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
    keyData: [
      { quantity: 1930, macro: 'kCal' },
      { quantity: 155, macro: 'Proteines', unit: 'g' },
      { quantity: 290, macro: 'Glucides', unit: 'g' },
      { quantity: 50, macro: 'Lipides', unit: 'g' },
    ],
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
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    },
    data: [
      { value: 80, kind: 1 }, // Cardio
      { value: 120, kind: 2 }, // Énergie
      { value: 50, kind: 4 }, // Force
      { value: 140, kind: 3 }, // Endurance
      { value: 200, kind: 5 }, // Vitesse
      { value: 90, kind: 6 }, // Intensité
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'Cardio',
      2: 'Énergie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
    },
    data: [
      { value: 200, kind: 1 }, // Cardio
      { value: 240, kind: 2 }, // Énergie
      { value: 80, kind: 4 }, // Force
      { value: 80, kind: 3 }, // Endurance
      { value: 220, kind: 5 }, // Vitesse
      { value: 110, kind: 6 }, // Intensité
    ],
  },
]

export const USER_GOALS: UserGoal[] = [
  {
    userId: 12,
    goals: [
      {
        type: 'workout',
        objectif: { value: '1', unit: 'h' },
        title: 'Squat',
        details: '8x15 rep, 30s',
        done: false,
      },
      {
        type: 'cycling',
        objectif: { value: '10', unit: 'km' },
        title: "Parc de l'étoile",
        details: 'Parcoure extérieur',
        done: true,
      },
      {
        type: 'swimming',
        objectif: { value: '30', unit: 'min' },
        title: 'Piscine municipale',
        details: 'Nager crawl et brasse',
        done: false,
      },
      {
        type: 'yoga',
        objectif: { value: '45', unit: 'min' },
        title: 'Vinyasa Flow',
        details: 'Étirements et respiration',
        done: true,
      },
    ],
  },
  {
    userId: 18,
    goals: [
      {
        type: 'workout',
        objectif: { value: '1', unit: 'h' },
        title: 'Squat',
        details: '8x15 rep, 30s',
        done: false,
      },
      {
        type: 'cycling',
        objectif: { value: '10', unit: 'km' },
        title: "Parc de l'étoile",
        details: 'Parcoure extérieur',
        done: true,
      },
      {
        type: 'swimming',
        objectif: { value: '30', unit: 'min' },
        title: 'Piscine municipale',
        details: 'Nager crawl et brasse',
        done: false,
      },
      {
        type: 'yoga',
        objectif: { value: '45', unit: 'min' },
        title: 'Vinyasa Flow',
        details: 'Étirements et respiration',
        done: false,
      },
    ],
  },
]

const USERS_DATA: UserData[] = USER_MAIN_DATA.map((user) => ({
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
  performance: USER_PERFORMANCE.find((p) => p.userId === user.id)
    ? {
        data: USER_PERFORMANCE.find((p) => p.userId === user.id)!.data,
        kind: USER_PERFORMANCE.find((p) => p.userId === user.id)!.kind,
      }
    : {
        data: [],
        kind: {},
      },
  goals: USER_GOALS.find((g) => g.userId === user.id)?.goals ?? [],
}))

export default USERS_DATA
