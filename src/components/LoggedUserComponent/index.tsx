import { FlexComponent } from '../Flex'
import Image from 'next/image'
import styles from './styles.module.css'
import { FC } from 'react'
import { ComponentProps } from './types'
import { BoxComponent } from '../Box'
import { TextComponent } from '../Text'

const LoggedUserComponent: FC<ComponentProps> = ({
  user,
  onClick,
  tooltip,
}) => {
  if (!user) return null

  return (
    <div
      onClick={onClick}
      className={onClick ? styles.clickable : undefined}
      title={tooltip}
    >
      <FlexComponent justify="start">
        <Image
          className={styles.avatar}
          width={40}
          height={40}
          alt={user?.name}
          src={user?.picture || ''}
        />

        <BoxComponent>
          <TextComponent fontWeight={600} fontSize="20px">
            {user?.name}
          </TextComponent>
          <TextComponent>{user?.email}</TextComponent>
        </BoxComponent>
      </FlexComponent>
    </div>
  )
}

export default LoggedUserComponent
