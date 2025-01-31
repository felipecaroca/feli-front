import { ModalComponent } from '../Modal'
import { TitleComponent } from '../Title'
import { OrganizationCardComponent } from '../OrganizationCard'
import { useOrganizationHandler } from '@/hooks'
import { SkeletonComponent } from '../Skeleton'
import { BoxComponent } from '../Box'
import { TextComponent } from '../Text'
import { SpanComponent } from '../Span'
import { ButtonComponent } from '../Button'
import { FlexComponent } from '../Flex'

export const OrganizationHandlerComponent = () => {
  const {
    myOrganizations,
    currentOrganization,
    loading,
    open,
    onOpen,
    onClose,
    selectOrganization,
  } = useOrganizationHandler()
  return (
    <BoxComponent padding="10px">
      <FlexComponent padding="10px" justify="space-between" width="100%">
        <TextComponent textAlign="center" width="100%">
          Organización seleccionada:{' '}
          <SpanComponent fontWeight={600}>
            {currentOrganization?.name}
          </SpanComponent>
        </TextComponent>
        <FlexComponent justify="center" width="100%">
          <BoxComponent width="100px">
            <ButtonComponent onClick={onOpen}>Cambiar</ButtonComponent>
          </BoxComponent>
        </FlexComponent>
      </FlexComponent>
      <ModalComponent {...{ open, onClose }}>
        <BoxComponent padding="0 0 50px 0">
          <TitleComponent>Selecciona una Organización</TitleComponent>
        </BoxComponent>
        <FlexComponent justify="center">
          {loading ? (
            <SkeletonComponent noOfLines={3} width="200px" height="200px" />
          ) : (
            <>
              {myOrganizations?.map((org) => (
                <OrganizationCardComponent
                  onCardClick={() => selectOrganization(org)}
                  key={org.id}
                  organization={org}
                  w="200px"
                  h="200px"
                  isCurrent={currentOrganization?.id === org.id}
                />
              ))}
            </>
          )}
        </FlexComponent>
      </ModalComponent>
    </BoxComponent>
  )
}
