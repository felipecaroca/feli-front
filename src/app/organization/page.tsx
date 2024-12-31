'use client'

import {
  ConfirmationDialogComponent,
  FullScreenCenterComponent,
  OrganizationCardComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { useOrganizationPage } from '@/hooks'
import { Flex, Text, chakra } from '@chakra-ui/react'

const OrganizationPage = () => {
  const {
    myOrganizations,
    getting,
    confirmIsOpen,
    forDelete,
    deleting,
    onDelete,
    onCancel,
    onDeleteOrganization,
    onEdit,
  } = useOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        <TitleComponent mb="10px">Mis Organizaciones</TitleComponent>
        <Flex gap={4}>
          {getting ? (
            <SkeletonSquare noOfLines={3} w={200} h={200} />
          ) : (
            myOrganizations?.map((org) => (
              <OrganizationCardComponent
                key={org.id}
                organization={org}
                w="200px"
                h="200px"
                onCardClick={() => onEdit(org)}
                onDelete={() => onDelete(org)}
              />
            ))
          )}
        </Flex>
        <ConfirmationDialogComponent
          onCancel={onCancel}
          onConfirm={onDeleteOrganization}
          open={confirmIsOpen}
          onClose={onCancel}
          loading={deleting}
        >
          <Text>
            La organización{' '}
            <chakra.span fontWeight={600}>{forDelete?.name}</chakra.span> se
            eliminará de forma permanete,{' '}
            <chakra.span fontWeight={600}>
              ¿Realmente deseas eliminar?
            </chakra.span>
          </Text>
        </ConfirmationDialogComponent>
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default OrganizationPage
