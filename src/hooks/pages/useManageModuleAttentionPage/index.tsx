import {
  AttentionModel,
  AttentionStatusEnum,
  WithModuleParam,
  WithOrganizationParam,
} from '@/commons'
import { useOrganizationParam, useModuleIdParam } from '@/hooks'

export const useManageModuleAttentionPage = (
  props: WithModuleParam & WithOrganizationParam
) => {
  const { organization } = useOrganizationParam(props)
  const { moduleId } = useModuleIdParam(props)

  const attentions: AttentionModel[] = [
    {
      id: '1',
      number: 1,
      business: 'local1',
      moduleId: '673a10ba624b54b891f71532',
      module: {
        id: 'lala',
        name: 'module a',
        prefix: 'AA',
        description: '',
        business: 'local1',
      },
      status: AttentionStatusEnum.WAITING,
      active: true,
    },
    {
      id: '2',
      number: 2,
      name: 'Felipillo el gordillo',
      business: 'local1',
      moduleId: '673a10ba624b54b891f71532',
      module: {
        id: 'lalala',
        name: 'module a',
        prefix: 'AA',
        description: '',
        business: 'local1',
      },
      status: AttentionStatusEnum.WAITING,
      active: true,
    },
    {
      id: '3',
      number: 3,
      business: 'local1',
      moduleId: '673a10ba624b54b891f71532',
      module: {
        id: 'lalalala',
        name: 'module a',
        prefix: 'AA',
        description: '',
        business: 'local1',
      },
      status: AttentionStatusEnum.WAITING,
      active: true,
    },
  ]

  console.log(organization, moduleId)

  const currentAttention = {
    id: '3',
    number: 3,
    business: 'local1',
    moduleId: '673a10ba624b54b891f71532',
    module: {
      id: 'lalalala',
      name: 'module a',
      prefix: 'AA',
      description: '',
      business: 'local1',
    },
    status: AttentionStatusEnum.WAITING,
    active: true,
  }
  const onCall = (attention?: AttentionModel) =>
    console.log('on Call', attention?.id)
  const onOk = (attention?: AttentionModel) =>
    console.log('on OK', attention?.id)
  const onSkip = (attention?: AttentionModel) =>
    console.log('on Skip', attention?.id)
  const onNext = (currentAttention?: AttentionModel) =>
    console.log(
      'on Skip',
      currentAttention?.id,
      'Y setear siguiente de la lista como current'
    )
  const onReset = () => console.log('resetear la lista')

  return { attentions, currentAttention, onCall, onOk, onSkip, onNext, onReset }
}
