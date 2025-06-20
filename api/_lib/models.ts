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
const getUserById = (id: number) =>
    USER_MAIN_DATA.filter(user => user.id === id).shift()


/**
 * @param {number} id 
 */
const getUserActivityById = (id: number) =>
    USER_ACTIVITY.filter(userActivity => userActivity.userId === id).shift()


/**
 * @param {number} id 
 */
const getUserAverageSession = (id: number) =>
    USER_AVERAGE_SESSIONS.filter(userActivity => userActivity.userId === id).shift()


/**
 * @param {number} id 
 */
const getUserPerformance = (id: number) =>
    USER_PERFORMANCE.filter(userPerformance => userPerformance.userId === id).shift()

export {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
}
