import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { SaveModInput } from '@/commons'



export const useModuleForm = (defaultValues?: SaveModInput) => {
  const {control, handleSubmit, } = useForm<SaveModInput>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(schema)
  })

  return {
    control,
    handleSubmit
  }
}