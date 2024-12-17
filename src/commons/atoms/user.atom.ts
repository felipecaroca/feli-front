import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { User } from "../types";
import { getFromLocalStorage } from "../utils";
import { LOCAL_STORAGE_KEYS } from "../constants";



export const authTokenAtom = atomWithStorage<string | undefined>(LOCAL_STORAGE_KEYS.AUTH_TOKEN, getFromLocalStorage('AUTH_TOKEN'))
export const authUserAtom = atom<User | undefined>(undefined)