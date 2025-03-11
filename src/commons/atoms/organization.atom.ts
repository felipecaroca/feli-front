import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { LOCAL_STORAGE_KEYS } from '../constants'
import { getFromSessionStorage } from '../utils'
import { OrganizationModel } from '../types'

const storage = createJSONStorage<OrganizationModel | undefined>(  
  () => sessionStorage,   
)

export const organizationAtom = atomWithStorage<OrganizationModel | undefined>(LOCAL_STORAGE_KEYS.ORGANIZATION, JSON.parse(getFromSessionStorage('ORGANIZATION') || '{}'), storage)