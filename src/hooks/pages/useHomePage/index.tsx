import { WAITINGLINE_URL, OrganizationModel } from '@/commons'
import { useRouter } from 'next/navigation'

export const useHomePage = () => {
  const router = useRouter()

  const onClick = (organization: OrganizationModel) =>
    router.push(`${WAITINGLINE_URL}/${organization.id}`)

  return {
    onClick,
  }
}
