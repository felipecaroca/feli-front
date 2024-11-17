import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { ModuleFormType } from './types'
export * from './types'


export const useModuleForm = (defaultValues?: ModuleFormType) => {
  const {control, handleSubmit, } = useForm<ModuleFormType>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(schema)
  })

  return {
    control,
    handleSubmit
  }
}