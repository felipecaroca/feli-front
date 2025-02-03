import { FC, useEffect, useRef } from 'react'
import { ComponentProps } from './types'

import { TitleComponent } from '../Title'
import { FooterComponent } from '../Footer'
import { FlexComponent } from '../Flex'
import { BoxComponent } from '../Box'
import { ButtonComponent } from '../Button'
import styles from './styles.module.css'

export const ConfirmationDialogComponent: FC<ComponentProps> = ({
  open,
  children,
  onCancel,
  onConfirm,
  loading,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref?.current && ref2?.current) {
      ref.current.style.visibility = open ? 'visible' : 'hidden'
      ref2.current.style.opacity = open ? '1' : '0'
    }
  }, [open])

  return (
    <div className={styles.modal} ref={ref}>
      <div ref={ref2}>
        <TitleComponent>Confirmar</TitleComponent>
        <BoxComponent padding="0 0 40px 0">{children}</BoxComponent>
        <FooterComponent>
          <FlexComponent justify="end">
            <BoxComponent>
              <ButtonComponent onClick={onCancel} disabled={loading}>
                Cancelar
              </ButtonComponent>
            </BoxComponent>
            <BoxComponent>
              <ButtonComponent
                onClick={onConfirm}
                variant="danger"
                loading={loading}
              >
                Confirmar
              </ButtonComponent>
            </BoxComponent>
          </FlexComponent>
        </FooterComponent>
      </div>
    </div>
  )
}
