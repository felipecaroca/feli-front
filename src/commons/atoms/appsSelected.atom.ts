import { atomWithStorage } from 'jotai/utils'
import { LOCAL_STORAGE_KEYS } from '../constants'
import { getFromLocalStorage } from '../utils'
import { AppModel } from '../types'

export const appsSelectedAtom = atomWithStorage<AppModel[]>(LOCAL_STORAGE_KEYS.APPS_SELECTED, JSON.parse(getFromLocalStorage('APPS_SELECTED') || '[]'))