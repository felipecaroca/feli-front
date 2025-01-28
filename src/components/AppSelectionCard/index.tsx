import { FC } from 'react'
import { ComponentProps } from './types'
import style from './style.module.css'

export const AppSelectionCardComponent: FC<ComponentProps> = ({
  app,
  onSeeMore,
  onSelect,
}) => {
  return (
    <div className={style.cardContainer}>
      <img className={style.img} src={app.img} />
      <div className={style.padding}>
        <div>{app.name}</div>
        <div className={style.buttonsContainer}>
          <button className={style.button} onClick={() => onSeeMore(app)}>
            Ver mas
          </button>
          <button
            className={`${style.button} ${style.borderBlue}`}
            onClick={() => onSelect(app)}
          >
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  )
}
