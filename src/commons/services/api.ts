import axios from 'axios'

export const Post = async <T, TT>(url: string, data: T) => {
  const response = await axios.post<TT>(url,data)
  
  return response.data
}

export const Put = async <T, TT>(url: string, data: T) => {
  const response = await axios.put<TT>(url, data)
 
  return response.data
}


export const Get = async <T>(url: string) => {
  const response = await axios.get<T>(url)

  return response.data
}

export const Delete = async <T>(url: string) => {
  const response = await axios.delete<T>(url)

  return response.data
}
