import {LOCAL_STORAGE_KEYS} from '@/commons'


export const getFromLocalStorage = (key: keyof typeof LOCAL_STORAGE_KEYS) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key) || undefined;
  }

  return undefined;
}