import { OrganizationModel } from '@/commons'
import { useRouter } from 'next/navigation'

export const useHomePage = () => {
  const router = useRouter()

  const onClick = (organization: OrganizationModel) =>
    router.push(`/${organization.id}`)

  return {
    onClick,
  }
}
