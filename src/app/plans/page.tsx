'use client'

import {
  AppSelectionCardComponent,
  BoxComponent,
  FlexComponent,
  SkeletonComponent,
  TitleComponent,
} from '@/components'

import { usePlansPage } from '@/hooks'

const PlansPage = () => {
  const { apps, loading, onSeeMore, onSelect, selectedApps } = usePlansPage()

  return loading ? (
    <BoxComponent>
      <FlexComponent justify="center">
        <BoxComponent padding="20px 0 0 0">
          <SkeletonComponent width="250px" height="20px" />
        </BoxComponent>
      </FlexComponent>
      <FlexComponent justify="center">
        <BoxComponent padding="10px">
          <SkeletonComponent width="300px" height="380px" noOfLines={3} />
        </BoxComponent>
      </FlexComponent>
    </BoxComponent>
  ) : (
    <div>
      <TitleComponent>Personaliza tu plan</TitleComponent>
      <FlexComponent justify="center">
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
