const baseURL = 'http://localhost:3000/user'

export const fetchJSON = async (path: string) => {
  const response = await fetch(`${baseURL}/${path}`)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  const responseData = await response.json()
  return responseData.data // Assuming responseData has a 'data' property
}
