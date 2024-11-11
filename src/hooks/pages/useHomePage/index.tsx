import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { schema, SchemaType } from './schema'

export const useHomePage = () => {
  const router = useRouter()
  const { control, handleSubmit } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  })

  const onClick = (organization: string) => router.push(`/${organization}`)
  const onSubmit = (values: SchemaType) => onClick(values.organization)

  return {
    control,
    handleSubmit,
    onSubmit,
  }
}
