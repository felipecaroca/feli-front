import { ModalComponent } from '../Modal'
import { TitleComponent } from '../Title'
import { ModuleFormComponent } from '../ModuleForm'
import { FC } from 'react'
import { ComponentProps } from './types'
import { FlexComponent } from '../Flex'
import { BoxComponent } from '../Box'

export const ModuleFormModalComponent: FC<ComponentProps> = ({
  open,
  onClose,
  onSubmit,
  saving: loading,
  defaultValues,
  title,
}) => {
  return (
    <ModalComponent {...{ open, onClose }}>
      <TitleComponent>{title || 'Agregar nuevo módulo'}</TitleComponent>
      <FlexComponent justify="center">
        <BoxComponent width="100%">
          <ModuleFormComponent {...{ onSubmit, loading, defaultValues }} />
        </BoxComponent>
      </FlexComponent>
    </ModalComponent>
  )
}
