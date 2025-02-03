'use client'

import {
  BoxComponent,
  FlexComponent,
  SkeletonComponent,
  TextComponent,
  TitleComponent,
} from '@/components'
import styles from './styles.module.css'
import { useCartPage } from '@/hooks'

const PlansCardPage = () => {
  const { apps, subTotal, total, iva, loading } = useCartPage()

  return (
    <BoxComponent>
      <TitleComponent>Tu selección de aplicaciones</TitleComponent>

      <FlexComponent direction="column" padding="40px 0 0 0">
        {loading ? (
          <SkeletonComponent
            width="300px"
            height="20px"
            noOfLines={6}
            direction="column"
          />
        ) : (
          <>
            {apps.map((app) => (
              <FlexComponent key={app.id} justify="space-between" width="300px">
                <BoxComponent>{app.name}</BoxComponent>
                <BoxComponent>
                  ${app.price.toLocaleString('es-CL')}
                </BoxComponent>
              </FlexComponent>
            ))}
            <div className={styles.divider} />
            <FlexComponent justify="space-between" width="300px">
              <TextComponent fontWeight={600}>Subtotal:</TextComponent>
              <BoxComponent>${subTotal.toLocaleString('es-CL')}</BoxComponent>
            </FlexComponent>
            <FlexComponent justify="space-between" width="300px">
              <TextComponent fontWeight={600}>IVA:</TextComponent>
              <BoxComponent>${iva.toLocaleString('es-CL')}</BoxComponent>
            </FlexComponent>
            <FlexComponent justify="space-between" width="300px">
              <TextComponent fontWeight={700}>Total:</TextComponent>
              <TextComponent fontWeight={600}>
                ${total.toLocaleString('es-CL')}
              </TextComponent>
            </FlexComponent>
          </>
        )}
      </FlexComponent>
    </BoxComponent>
  )
}

export default PlansCardPage
