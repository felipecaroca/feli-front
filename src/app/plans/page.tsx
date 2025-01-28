'use client'

import {
  AppSelectionCardComponent,
  CardListComponent,
  TitleComponent,
} from '@/components'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { usePlansPage } from '@/hooks'

const PlansPage = () => {
  const { apps, loading, onSeeMore, onSelect } = usePlansPage()

  return loading ? (
    <SkeletonSquare noOfLines={3} />
  ) : (
    <div>
      <TitleComponent>Personaliza tu plan</TitleComponent>
      <CardListComponent>
        {apps?.map((app) => (
          <AppSelectionCardComponent
            key={app.id}
            {...{ app, onSeeMore, onSelect }}
          />
        ))}
      </CardListComponent>
    </div>
  )
}

export default PlansPage
