import type { UserData } from '../../api/my-types'

export const fetchUserData = async (): Promise<UserData> => {
  const res = await fetch('/api/users/12')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}
