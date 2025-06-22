import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { User } from './my-types'

const users: User[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 32 },
  { id: 3, name: 'Charlie', age: 28 },
]

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.status(200).json(users)
}
