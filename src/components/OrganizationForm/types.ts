import { UpdateOrganizationInput } from '@/commons'

export type ComponentProps = {
  loading: boolean
  onSubmit(values: UpdateOrganizationInput):void
  buttonText?: string
  defaultValues?: UpdateOrganizationInput
}