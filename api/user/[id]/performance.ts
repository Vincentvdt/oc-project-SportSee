import { applyCors, handleOptions } from '../../_utils/cors'
import { getUserPerformance } from '../../_lib/models'
import { handleNoUserData } from '../../_lib/middleware'

export default async function handler(req: any, res: any) {
    if (handleOptions(req, res)) return
    applyCors(res)

    const { id } = req.query as { id?: string }
    const userData = getUserPerformance(Number(id))
    handleNoUserData(res, userData)
}
