import { WithAttentionParam } from '@/commons'
import { useParam } from '../useParam'

export const useAttentionIdParam = ({ params }: WithAttentionParam) => {
  const { param: attentionId } = useParam(params, 'attentionId')

  return {
    attentionId,
  }
}
