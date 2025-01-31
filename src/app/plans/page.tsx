'use client'

import {
  AppSelectionCardComponent,
  FlexComponent,
  SkeletonComponent,
  TitleComponent,
} from '@/components'

import { usePlansPage } from '@/hooks'

const PlansPage = () => {
  const { apps, loading, onSeeMore, onSelect, selectedApps } = usePlansPage()

  return loading ? (
    <SkeletonComponent width="300px" height="500px" noOfLines={3} />
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
