// Fetch data
export async function getData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  } catch (e) {
    console.log(e)
    throw e
  }
}