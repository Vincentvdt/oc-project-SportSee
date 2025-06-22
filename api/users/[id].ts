import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { User } from '../my-types'

const users: User[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 28 },
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  const id = Number(req.query.id)
  const user = users.find((u) => u.id === id)
  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }
  res.status(200).json(user)
}
