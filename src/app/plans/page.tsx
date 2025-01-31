'use client'

import {
  AppSelectionCardComponent,
  BoxComponent,
  FlexComponent,
  SkeletonComponent,
  TitleComponent,
} from '@/components'

import { usePlansPage } from '@/hooks'
import { FaShoppingCart } from 'react-icons/fa'

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
      {selectedApps?.length > 0 && (
        <button
          style={{
            backgroundColor: '#fff',
            position: 'fixed',
            right: '30px',
            bottom: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '100%',
            boxShadow: '0 0 10px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <FaShoppingCart size="30px" />
        </button>
      )}
    </div>
  )
}

export default PlansPage
