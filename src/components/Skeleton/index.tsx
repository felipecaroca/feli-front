import { FC } from 'react'
import { ComponentProps } from './types'
import { FlexComponent } from '../Flex'
import styles from './styles.module.css'

export const SkeletonComponent: FC<ComponentProps> = ({
  width,
  height,
  noOfLines,
  direction,
}) => {
  const iterator = [...Array(noOfLines || 1).keys()]

  return (
    <FlexComponent direction={direction}>
      {iterator.map((i) => (
        <div className={styles.div} key={i} style={{ width, height }} />
      ))}
    </FlexComponent>
  )
}
