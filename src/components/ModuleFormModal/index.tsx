import { Box, Flex } from '@chakra-ui/react'
import { ModalComponent } from '../Modal'
import { TitleComponent } from '../Title'
import { ModuleFormComponent } from '../ModuleForm'
import { FC } from 'react'
import { ComponentProps } from './types'

export const ModuleFormModalComponent: FC<ComponentProps> = ({
  open,
  onClose,
  onSubmit,
  saving: loading,
}) => {
  return (
    <ModalComponent {...{ open, onClose }}>
      <TitleComponent>Agregar nuevo módulo</TitleComponent>
      <Flex justify="center" alignItems="center" mt={10}>
        <Box w={['full', 'full', '80%', '60%', '40%']}>
          <ModuleFormComponent {...{ onSubmit, loading }} />
        </Box>
      </Flex>
    </ModalComponent>
  )
}
