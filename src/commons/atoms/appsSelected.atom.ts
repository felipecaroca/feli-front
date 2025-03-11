import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { LOCAL_STORAGE_KEYS } from '../constants'
import { getFromSessionStorage } from '../utils'
import { AppModel } from '../types'

const storage = createJSONStorage<AppModel[]>(  
  () => sessionStorage,   
)

export const appsSelectedAtom = atomWithStorage<AppModel[]>(LOCAL_STORAGE_KEYS.APPS_SELECTED, JSON.parse(getFromSessionStorage('APPS_SELECTED') || '[]'), storage)