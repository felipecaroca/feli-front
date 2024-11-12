export const post = async <T, TT>(url: string, data: T) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: undefined
  })

  return response.json() as TT
}

export const get = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: undefined
  })

  return response.json() as T
}