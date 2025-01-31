'use client'

import {
  AppSelectionCardComponent,
  FlexComponent,
  TitleComponent,
} from '@/components'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { usePlansPage } from '@/hooks'

const PlansPage = () => {
  const { apps, loading, onSeeMore, onSelect, selectedApps } = usePlansPage()

  return loading ? (
    <SkeletonSquare noOfLines={3} />
  ) : (
    <div>
      <TitleComponent>Personaliza tu plan</TitleComponent>
      <FlexComponent>
        {apps?.map((app) => (
          <AppSelectionCardComponent
            key={app.id}
            {...{
              app,
              onSeeMore,
              onSelect,
              isSelected: selectedApps.some((i) => i.id === app.id),
            }}
          />
        ))}
      </FlexComponent>
    </div>
  )
}

export default PlansPage
