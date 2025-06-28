import USERS_DATA from '../mock-data'

export default function handler(req: any, res: any) {
  const id = Number(req.query.id)
  const user = USERS_DATA.find((u) => u.id === id)
  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }
  res.status(200).json(user)
}
