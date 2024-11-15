import { SaveModInput, ModuleModel } from '../types'
import { Delete, Get, Post, Put } from './api'

const url = `${process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''}/modules` 

export const getModulesService = async (business: string) => Get<ModuleModel[]>(`${url}/${business}`)

export const createModuleService = async (business: string, data: SaveModInput) => Post<SaveModInput, ModuleModel>(`${url}/${business}`, data)

export const updateModuleService = async (business: string, moduleId: string, data: SaveModInput) => Put<SaveModInput, ModuleModel>(`${url}/${business}/${moduleId}`, data)

export const deleteModuleService = async (business: string, moduleId: string) => Delete<ModuleModel>(`${url}/${business}/${moduleId}`)
