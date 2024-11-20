import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from './schema'

import { CreateAttentionInput } from '@/commons'


export const useAttentionForm = (defaultValues?: CreateAttentionInput) => {
  const {control, handleSubmit, } = useForm<CreateAttentionInput>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(schema)
  })

  return {
    control,
    handleSubmit
  }
}