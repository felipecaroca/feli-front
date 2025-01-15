import { UpdateOrganizationInput } from '@/commons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { schema } from './schema'

export const useOrganizationForm = (
  defaultValues?: UpdateOrganizationInput
) => {
  const { handleSubmit, control, watch, setValue } =
    useForm<UpdateOrganizationInput>({
      mode: 'all',
      defaultValues,
      resolver: zodResolver(schema),
    })

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'colaborators',
  })

  return {
    handleSubmit,
    control,
    append,
    remove,
    fields,
    watch,
    setValue,
  }
}
