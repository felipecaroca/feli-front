'use client'

import { MAX_ORGANIZATIONS_ALLOWED } from '@/commons'
import {
  AddNewButtonComponent,
  ConfirmationDialogComponent,
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
    currentOrganization,
    onDelete,
    onCancel,
    onDeleteOrganization,
    onEdit,
    onNew,
  } = useOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <TitleComponent mb="10px">Mis Organizaciones</TitleComponent>
      <Flex gap={4} wrap="wrap" justify="center">
        {getting ? (
          <SkeletonSquare noOfLines={2} w={200} h={200} />
        ) : (
          <>
            {myOrganizations?.map((org) => (
              <OrganizationCardComponent
                key={org.id}
                organization={org}
                w="200px"
                h="200px"
                onEdit={() => onEdit(org)}
                onDelete={() => onDelete(org)}
                isCurrent={currentOrganization?.id === org.id}
              />
            ))}
            {(myOrganizations?.length || 0) < MAX_ORGANIZATIONS_ALLOWED && (
              <AddNewButtonComponent w={200} h={200} onClick={onNew} />
            )}
          </>
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
    </ProtectedRouteComponent>
  )
}

export default OrganizationPage
