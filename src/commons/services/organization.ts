import { CreateOrganizationInput, OrganizationModel, UpdateOrganizationInput } from '../types'
import { Get, Post, Put, Delete } from './api'

const url = `${process.env.NEXT_PUBLIC_ORGANIZATION_BACK || ''}/organization`

export const getOrganizationByIdService = async (id: string) => Get<OrganizationModel>(`${url}/${id}`)

export const createOrganizationService = async (data: CreateOrganizationInput) => 
  Post<CreateOrganizationInput, OrganizationModel>(`${url}`, data)

export const getMyOrganizationsService = async () => 
  Get<OrganizationModel[]>(`${url}/by-owner`)

export const updateOrganizationService = async (id: string, data: UpdateOrganizationInput) =>
  Put<UpdateOrganizationInput, OrganizationModel>(`${url}/${id}`, data)

export const deleteOrganizationService = async (id: string) => Delete<OrganizationModel>(`${url}/${id}`)




