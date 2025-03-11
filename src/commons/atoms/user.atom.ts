import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { User } from '../types'
import { getFromSessionStorage } from '../utils'
import { LOCAL_STORAGE_KEYS } from '../constants'

const storage = createJSONStorage<string | undefined>(  
  () => sessionStorage,   
)



export const authTokenAtom = atomWithStorage<string | undefined>(LOCAL_STORAGE_KEYS.AUTH_TOKEN, getFromSessionStorage('AUTH_TOKEN'), storage)
export const authUserAtom = atom<User | undefined>(undefined)