import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from './data'

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id 
 */
export const getUserById = (id: number) =>
    USER_MAIN_DATA.filter(user => user.id === id).shift()


/**
 * @param {number} id 
 */
export const getUserActivityById = (id: number) =>
    USER_ACTIVITY.filter(userActivity => userActivity.userId === id).shift()


/**
 * @param {number} id 
 */
export const getUserAverageSession = (id: number) =>
    USER_AVERAGE_SESSIONS.filter(userActivity => userActivity.userId === id).shift()


/**
 * @param {number} id 
 */
export const getUserPerformance = (id: number) =>
    USER_PERFORMANCE.filter(userPerformance => userPerformance.userId === id).shift()

export {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
}
