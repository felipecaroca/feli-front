import { Box, Flex, Text, chakra } from '@chakra-ui/react'
import { ModalComponent } from '../Modal'
import { TitleComponent } from '../Title'
import { SkeletonSquare } from '../ui/skeleton'
import { OrganizationCardComponent } from '../OrganizationCard'
import { useOrganizationHandler } from '@/hooks'
import { Button } from '../ui/button'

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
    <Box p="10px">
      <Flex
        p="10px"
        gap="5px"
        justify="start"
        align="center"
        maxW={['70%', '90%', 'full']}
        boxShadow="lg"
      >
        <Text>
          Organización seleccionada:{' '}
          <chakra.span fontWeight={600}>
            {currentOrganization?.name}
          </chakra.span>
        </Text>
        <Button variant="ghost" onClick={onOpen}>
          Cambiar
        </Button>
      </Flex>
      <ModalComponent {...{ open, onClose }}>
        <TitleComponent mb="50px">Selecciona una Organización</TitleComponent>
        <Flex gap={4} wrap="wrap" justify="center">
          {loading ? (
            <SkeletonSquare noOfLines={3} w={200} h={200} />
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
        </Flex>
      </ModalComponent>
    </Box>
  )
}
