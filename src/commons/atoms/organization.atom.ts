import { atomWithStorage } from "jotai/utils";
import { LOCAL_STORAGE_KEYS } from "../constants";
import { getFromLocalStorage } from "../utils";

export const organizationAtom = atomWithStorage<string | undefined>(LOCAL_STORAGE_KEYS.ORGANIZATION, getFromLocalStorage('ORGANIZATION'))