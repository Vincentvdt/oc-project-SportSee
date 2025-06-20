const handleNoUserData = (res: any, userData: unknown) => {
    res.setHeader('Content-Type', 'application/json')
    if (!userData) {
        res.statusCode = 404
        res.end(JSON.stringify('can not get user'))
        return
    }

    res.end(JSON.stringify({ data: userData }))
}

export { handleNoUserData }
