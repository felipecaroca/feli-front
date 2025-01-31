import { atomWithStorage } from 'jotai/utils'
import { LOCAL_STORAGE_KEYS } from '../constants'
import { getFromLocalStorage } from '../utils'
import { OrganizationModel } from '../types'

export const organizationAtom = atomWithStorage<OrganizationModel | undefined>(LOCAL_STORAGE_KEYS.ORGANIZATION, JSON.parse(getFromLocalStorage('ORGANIZATION') || '{}'))