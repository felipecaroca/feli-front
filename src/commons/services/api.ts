export const Post = async <T, TT>(url: string, data: T) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json() as TT
}

export const Put = async <T, TT>(url: string, data: T) => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.json() as TT
}


export const Get = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: undefined
  })

  return response.json() as T
}

export const Delete = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: undefined
  })

  return response.json() as T
}
