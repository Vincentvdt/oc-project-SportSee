import { applyCors, handleOptions } from '../../_utils/cors'
import { getUserActivityById } from '../../_lib/models'
import { handleNoUserData } from '../../_lib/middleware'

export default async function handler(req: any, res: any) {
    if (handleOptions(req, res)) return
    applyCors(res)

    const { id } = req.query as { id?: string }
    const userData = getUserActivityById(Number(id))
    handleNoUserData(res, userData)
}
