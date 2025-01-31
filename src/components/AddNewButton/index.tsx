import { FaPlus } from 'react-icons/fa'
import { FC } from 'react'
import { BoxComponent } from '../Box'
import { TextComponent } from '../Text'
import { FlexComponent } from '../Flex'
import styles from './styles.module.css'
import { ComponentProps } from './types'

export const AddNewButtonComponent: FC<ComponentProps> = ({
  width,
  height,
  onClick,
}) => {
  return (
    <div className={styles.button} onClick={onClick} style={{ width, height }}>
      <BoxComponent width="100%">
        <TextComponent textAlign="center">Agregar nuevo</TextComponent>
        <FlexComponent justify="center" padding="10px 0 0 0">
          <FaPlus />
        </FlexComponent>
      </BoxComponent>
    </div>
  )
}
