'use client'

import {
  FullScreenCenterComponent,
  ModuleCardComponent,
  TitleComponent,
} from '@/components'
import { useTakeAttentionCheckPage } from '@/hooks'

const TakeAttentionCheckPage = () => {
  const { modules, onCardClick } = useTakeAttentionCheckPage()

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
