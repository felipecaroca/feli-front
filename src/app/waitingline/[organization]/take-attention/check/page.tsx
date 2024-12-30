'use client'

import { WithOrganizationParam } from '@/commons'
import {
  FullScreenCenterComponent,
  ModuleCardComponent,
  TitleComponent,
} from '@/components'
import { useTakeAttentionCheckPage } from '@/hooks'
import { FC } from 'react'

const TakeAttentionCheckPage: FC<WithOrganizationParam> = (props) => {
  const { modules, onCardClick } = useTakeAttentionCheckPage(props)

  if (modules === undefined) return null

  return (
    <FullScreenCenterComponent>
      <TitleComponent>Selecciona el módulo de atención</TitleComponent>
      {modules.map((module) => (
        <ModuleCardComponent
          key={module.id}
          {...{
            module,
            onCardClick,
            maxW: '100%',
            h: 'fit-content',
            w: 'full',
          }}
        />
      ))}
    </FullScreenCenterComponent>
  )
}

export default TakeAttentionCheckPage
