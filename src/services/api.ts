const baseURL = '/api/user'

export const fetchJSON = async (path: string) => {
  const response = await fetch(`${baseURL}/${path}`)
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  const responseData = await response.json()
  return responseData.data
}
