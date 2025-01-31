import {LOCAL_STORAGE_KEYS} from '@/commons'


export const getFromLocalStorage = (key: keyof typeof LOCAL_STORAGE_KEYS) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key) || undefined

    if(saved === 'undefined') return undefined

    return saved
  }

  return undefined
}