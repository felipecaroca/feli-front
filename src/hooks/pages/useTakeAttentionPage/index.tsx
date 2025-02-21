'use client'

import { CreateAttentionInput, WAITINGLINE_URL } from '@/commons'
import { useAttentionsCRUD } from '@/hooks/useAttentionsCRUD'
import { useModuleIdParam } from '@/hooks/useModuleIdParam'

import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useRouter } from 'next/navigation'

export const useTakeAttentionPage = () => {
  const { organization } = useOrganizationParam()
  const { moduleId } = useModuleIdParam()
  const { createAttention, creating } = useAttentionsCRUD()

  const router = useRouter()

  const onSubmit = async (values: CreateAttentionInput) => {
    if (moduleId) values.moduleId = moduleId

    const attention = await createAttention(organization, values)

    if (!attention) return

    router.replace(
      `${WAITINGLINE_URL}/${organization}/attention-view/${attention.id}`
    )
  }

  return {
    onSubmit,
    creating,
  }
}
