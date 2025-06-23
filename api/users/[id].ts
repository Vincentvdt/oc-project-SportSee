import type { VercelRequest, VercelResponse } from '@vercel/node'
import USERS_DATA from '../mock-data'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const id = Number(req.query.id)
  const user = USERS_DATA.find((u) => u.id === id)
  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }
  res.status(200).json(user)
}
