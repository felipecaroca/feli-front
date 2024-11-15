import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from '../ui/dialog'
import { FC } from 'react'
import { ComponentProps } from './types'
import { Button } from '../ui/button'
import { useModalClose } from '@/hooks'

export const ConfirmationDialogComponent: FC<ComponentProps> = ({
  open,
  onClose,
  children,
  onCancel,
  onConfirm,
  loading,
}) => {
  const { onOpenChange } = useModalClose(onClose)

  return (
    <DialogRoot role="alertdialog" {...{ open, onOpenChange }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" onClick={onCancel} disabled={loading}>
              Cancelar
            </Button>
          </DialogActionTrigger>
          <Button colorPalette="red" onClick={onConfirm} loading={loading}>
            Confirmar
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
