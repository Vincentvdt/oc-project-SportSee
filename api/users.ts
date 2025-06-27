import type { VercelRequest, VercelResponse } from '@vercel/node'
import USERS_DATA from './mock-data.ts'

export default function handler(_req: VercelRequest, res: VercelResponse): void {
  res.status(200).json(USERS_DATA)
}
