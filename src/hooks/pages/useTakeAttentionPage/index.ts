import { CreateAttentionInput, WithOrganizationParam } from '@/commons'
import { useAttentionsCRUD } from '@/hooks/useAttentionsCRUD'
import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useRouter } from 'next/navigation'

export const useTakeAttentionPage = (props: WithOrganizationParam) => {

  const {organization} = useOrganizationParam(props)
  const {createAttention, creating} = useAttentionsCRUD()
  const router = useRouter()

  const onSubmit = async (values: CreateAttentionInput) => {
    const attention = await createAttention(organization, values)

    if(!attention) return

    router.replace(`take-attention/${attention.id}`)
  }

  return {
    onSubmit,
    creating,
  }
}