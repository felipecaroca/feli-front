'use client'

import {
  FullScreenCenterComponent,
  ProtectedRouteComponent,
} from '@/components'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { useOrganizationPage } from '@/hooks'

const OrganizationPage = () => {
  const { myOrganizations, getting } = useOrganizationPage()

  // TODO: crear cards con opción de eliminar y editar
  // TODO: agregar botón hacia la vista de crear nuevo

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        {getting ? (
          <SkeletonSquare noOfLines={3} w={200} h={200} />
        ) : (
          myOrganizations?.map((org) => <div key={org.id}>{org.name}</div>)
        )}
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default OrganizationPage
