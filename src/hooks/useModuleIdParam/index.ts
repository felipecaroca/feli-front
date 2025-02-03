import { useParams } from 'next/navigation'


export const useModuleIdParam = () => {

  const {moduleId} = useParams()

  return {
    moduleId: moduleId?.toString() ||''
  }
}