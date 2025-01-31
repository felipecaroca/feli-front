import { FC } from 'react'
import { ComponentProps } from './types'
import style from './style.module.css'
import Image from 'next/image'
import { ButtonComponent } from '../Button'
import { FlexComponent } from '../Flex'
import BoxComponent from '../Box'
import CardMarkComponent from '../CardMark'

export const AppSelectionCardComponent: FC<ComponentProps> = ({
  app,
  onSeeMore,
  onSelect,
  isSelected,
}) => {
  return (
    <div>
      {isSelected && (
        <CardMarkComponent
          text="En carro"
          width="110px"
          height="28px"
          left="75%"
          top="38px"
          variant="success"
        />
      )}
      <div className={style.cardContainer}>
        <Image
          className={style.img}
          width={400}
          height={250}
          alt="plan image"
          src={app.img || ''}
        />
        <div className={style.padding}>
          <div>{app.name}</div>
          <FlexComponent justify="end" padding="20px 0 0">
            <BoxComponent>
              <ButtonComponent onClick={() => onSeeMore(app)} variant="danger">
                Ver mas
              </ButtonComponent>
            </BoxComponent>
            <BoxComponent>
              <ButtonComponent onClick={() => onSelect(app)}>
                {isSelected ? 'Quitar' : 'Agregar'}
              </ButtonComponent>
            </BoxComponent>
          </FlexComponent>
        </div>
      </div>
    </div>
  )
}
