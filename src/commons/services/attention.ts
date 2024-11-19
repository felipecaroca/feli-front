import { AttentionModel, ChangeStatusAttentionInput, CreateAttentionInput } from '../types'
import { Get, Post } from './api'

const url = `${process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''}/attentions`

export const getAttentionsService = async (business: string, moduleId?: string) => 
  Get<AttentionModel[]>(`${url}/${business}${moduleId ? `/${moduleId}` : ''}`)

export const createAttentionService = async (business: string, data: CreateAttentionInput) => 
  Post<CreateAttentionInput, AttentionModel>(`${url}/${business}`, data)

export const resetAttentionService = async (business: string, moduleId?: string) =>
  Post<unknown, boolean>(`${url}/reset/${business}${moduleId?`/${moduleId}`:''}`, {})

export const changeAttentionStatusService = async (business: string, id: string, data: ChangeStatusAttentionInput) => 
  Post<ChangeStatusAttentionInput, AttentionModel>(`${url}/status/${business}/${id}`, data)

export const callAttentionService = async (business: string, id: string) => 
  Post<unknown, boolean>(`${url}/${business}/${id}/call`, {})



