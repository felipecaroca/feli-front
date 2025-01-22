import { SaveModInput, ModuleModel } from '../types'
import { Delete, Get, Post, Put } from './api'

const url = `${process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''}/modules` 

export const getModulesService = async (organizationId: string) => Get<ModuleModel[]>(`${url}/${organizationId}`)

export const getModuleService = async (organizationId: string, id: string) => Get<ModuleModel>(`${url}/${organizationId}/${id}`)

export const createModuleService = async (organizationId: string, data: SaveModInput) => Post<SaveModInput, ModuleModel>(`${url}/${organizationId}`, data)

export const updateModuleService = async (organizationId: string, moduleId: string, data: SaveModInput) => Put<SaveModInput, ModuleModel>(`${url}/${organizationId}/${moduleId}`, data)

export const deleteModuleService = async (organizationId: string, moduleId: string) => Delete<ModuleModel>(`${url}/${organizationId}/${moduleId}`)
