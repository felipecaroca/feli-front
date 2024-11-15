import { FC } from 'react'

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '../ui/dialog'
import { ComponentProps } from './types'
import { useModalClose } from '@/hooks'

export const ModalComponent: FC<ComponentProps> = ({
  header,
  footer,
  onClose,
  ...props
}) => {
  const { onOpenChange } = useModalClose(onClose)

  return (
    <DialogRoot
      size="cover"
      motionPreset="slide-in-bottom"
      {...{ ...props, onOpenChange }}
    >
      <DialogContent>
        {header && (
          <DialogHeader>
            <DialogTitle>{header}</DialogTitle>
          </DialogHeader>
        )}
        <DialogBody>{props.children}</DialogBody>
        {footer && footer}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
