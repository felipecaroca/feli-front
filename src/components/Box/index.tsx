import { FC } from 'react'
import { ComponentProps } from './types'

const BoxComponent: FC<ComponentProps> = ({
  children,
  width,
  height,
  padding,
}) => {
  return (
    <div
      style={{
        width,
        height,
        padding,
      }}
    >
      {children}
    </div>
  )
}

export default BoxComponent
