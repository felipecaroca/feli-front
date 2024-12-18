import axios from 'axios'
import { getFromLocalStorage } from '../utils'

const getHeaders = () => {
  const token = JSON.parse((getFromLocalStorage('AUTH_TOKEN') || '""'))
  return {
    Authorization: `Bearer ${token}`
  }
}



export const Post = async <T, TT>(url: string, data: T) => {
  const response = await axios.post<TT>(url, data, {
    headers: getHeaders()
  })
  
  return response.data
}

export const Put = async <T, TT>(url: string, data: T) => {
  const response = await axios.put<TT>(url, data, {
    headers: getHeaders()
  })
 
  return response.data
}


export const Get = async <T>(url: string) => {
  const response = await axios.get<T>(url, {
    headers: getHeaders()
  })

  return response.data
}

export const Delete = async <T>(url: string) => {
  const response = await axios.delete<T>(url, {
    headers: getHeaders()
  })

  return response.data
}
