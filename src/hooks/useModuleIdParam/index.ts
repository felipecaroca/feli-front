import { WithModuleParam } from '@/commons'
import { useParam } from '../useParam'


export const useModuleIdParam = ({params}: WithModuleParam) => {

  const {param: moduleId} = useParam(params, 'moduleId')

  return {
    moduleId
  }
}