export const applyCors = (res: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
}

export const handleOptions = (req: any, res: any): boolean => {
    if (req.method === 'OPTIONS') {
        applyCors(res)
        res.statusCode = 200
        res.end()
        return true
    }
    return false
}
