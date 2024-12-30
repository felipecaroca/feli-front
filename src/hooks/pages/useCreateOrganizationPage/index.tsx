import { useForm } from 'react-hook-form'
import { useOrganizationCRUD } from '../../useOrganizationCRUD'
import { CreateOrganizationInput, ORGANIZATION_URL } from '@/commons'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

//TODO: ordenrar schema en un archivo propio
const schema = z.object({
  name: z
    .string({
      required_error: '*El nombre es requerido',
      invalid_type_error: '*El valor no es válido',
    })
    .min(1, '*El nombre es requerido'),
})

export const useCreateOrganizationPage = () => {
  const { createOrganization, creating } = useOrganizationCRUD()
  const router = useRouter()

  const { handleSubmit, control } = useForm<CreateOrganizationInput>({
    mode: 'all',
    resolver: zodResolver(schema),
  })

  const onSubmit = async (values: CreateOrganizationInput) => {
    const res = await createOrganization(values)

    if (res?.id) router.push(ORGANIZATION_URL)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    creating,
  }
}
