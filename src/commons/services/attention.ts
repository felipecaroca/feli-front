import { AttentionModel, ChangeStatusAttentionInput, CreateAttentionInput } from '../types'
import { Get, Post } from './api'

const url = `${process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''}/attentions`

export const getAttentionsService = async (organizationId: string, moduleId?: string) => 
  Get<AttentionModel[]>(`${url}/${organizationId}${moduleId ? `/${moduleId}` : ''}`)

export const createAttentionService = async (organizationId: string, data: CreateAttentionInput) => 
  Post<CreateAttentionInput, AttentionModel>(`${url}/${organizationId}`, data)

export const resetAttentionService = async (organizationId: string, moduleId?: string) =>
  Post<unknown, boolean>(`${url}/reset/${organizationId}${moduleId?`/${moduleId}`:''}`, {})

export const changeAttentionStatusService = async (organizationId: string, id: string, data: ChangeStatusAttentionInput) => 
  Post<ChangeStatusAttentionInput, AttentionModel>(`${url}/status/${organizationId}/${id}`, data)

export const callAttentionService = async (organizationId: string, id: string) => 
  Post<unknown, boolean>(`${url}/${organizationId}/${id}/call`, {})

export const getAttentionService = async (organizationId: string, attentionId: string)  =>
  Get<AttentionModel>(`${url}/${organizationId}/attention/${attentionId}`)




