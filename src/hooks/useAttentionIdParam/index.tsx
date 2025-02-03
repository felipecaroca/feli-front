import { useParams } from 'next/navigation'

export const useAttentionIdParam = () => {
  const { attentionId } = useParams()

  return {
    attentionId: attentionId?.toString() || '',
  }
}
