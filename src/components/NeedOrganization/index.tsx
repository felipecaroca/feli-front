import { ORGANIZATION_URL, organizationAtom, WithChildren } from '@/commons'
import { useOrganizationCRUD } from '@/hooks'
import { FC, useEffect } from 'react'
import { toaster } from '../ui/toaster'
import { useRouter } from 'next/navigation'
import { useAtomValue } from 'jotai'
import { Alert } from '../ui/alert'

const NeedOrganizationComponent: FC<WithChildren> = ({ children }) => {
  const { getMyOrganizations, getting } = useOrganizationCRUD()
  const currentOrganization = useAtomValue(organizationAtom)
  const router = useRouter()

  useEffect(() => {
    getMyOrganizations().then((res) => {
      if (res.length === 0) {
        toaster.create({
          title: 'No has creado una organización',
          type: 'error',
          description:
            'Primero debes crear y seleccionar al menos una organización',
        })

        router.replace(`${ORGANIZATION_URL}`)
      } else if (!currentOrganization) {
        toaster.create({
          title: 'Selecciona una organización',
          type: 'info',
          description: 'Primero debes seleccionar una organización',
        })
      }
    })
  }, [])

  return getting ? null : (
    <>
      {!currentOrganization?.id ? (
        <Alert>Primero debes seleccionar una organización</Alert>
      ) : (
        children
      )}
    </>
  )
}

export default NeedOrganizationComponent
