'use client'

import { MAX_ORGANIZATIONS_ALLOWED } from '@/commons'
import {
  AddNewButtonComponent,
  BoxComponent,
  ConfirmationDialogComponent,
  FlexComponent,
  OrganizationCardComponent,
  ProtectedRouteComponent,
  SkeletonComponent,
  SpanComponent,
  TitleComponent,
} from '@/components'
import { TextComponent } from '@/components/Text'
import { useOrganizationPage } from '@/hooks'

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
      <BoxComponent padding="0 0 20px 0">
        <TitleComponent>Mis Organizaciones</TitleComponent>
      </BoxComponent>
      <FlexComponent justify="center">
        {getting ? (
          <SkeletonComponent noOfLines={2} width="200px" height="200px" />
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
              <AddNewButtonComponent
                width="200px"
                height="200px"
                onClick={onNew}
              />
            )}
          </>
        )}
      </FlexComponent>
      <ConfirmationDialogComponent
        onCancel={onCancel}
        onConfirm={onDeleteOrganization}
        open={confirmIsOpen}
        onClose={onCancel}
        loading={deleting}
      >
        <TextComponent>
          La organización{' '}
          <SpanComponent fontWeight={600}>{forDelete?.name}</SpanComponent> se
          eliminará de forma permanente.{' '}
          <TextComponent fontWeight={600}>
            ¿Realmente deseas eliminar?
          </TextComponent>
        </TextComponent>
      </ConfirmationDialogComponent>
    </ProtectedRouteComponent>
  )
}

export default OrganizationPage
