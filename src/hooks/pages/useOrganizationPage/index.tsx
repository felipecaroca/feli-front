import { MenuItem, WithOrganizationParam } from '@/commons'
import { useOrganizationParam } from '@/hooks'
import { useRouter } from 'next/navigation'

export const useOrganizationPage = (props: WithOrganizationParam) => {
  const router = useRouter()
  const { organization } = useOrganizationParam(props)

  const onClick = (item: MenuItem) => {
    router.push(`${organization}/${item.path}`)
  }

  return {
    onClick,
  }
}
