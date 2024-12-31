import { UpdateOrganizationInput } from '@/commons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from './schema'

export const useOrganizationForm = (
  defaultValues?: UpdateOrganizationInput
) => {
  const { handleSubmit, control } = useForm<UpdateOrganizationInput>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(schema),
  })

  return {
    handleSubmit,
    control,
  }
}
