'use client'

import {
  BoxComponent,
  FlexComponent,
  GoogleButtonComponent,
  SkeletonComponent,
  TextComponent,
  TitleComponent,
} from '@/components'
import styles from './styles.module.css'
import { useCartPage } from '@/hooks'
import { Payment, initMercadoPago } from '@mercadopago/sdk-react'
import { useEffect } from 'react'

const PlansCardPage = () => {
  const {
    apps,
    subTotal,
    total,
    iva,
    loading,
    user,
    onPay,
    isInitialized,
    setIsInitialized,
  } = useCartPage()

  useEffect(() => {
    if (
      !isInitialized &&
      process.env.NEXT_PUBLIC_MERCAROPAGO_KEY &&
      typeof setIsInitialized === 'function'
    ) {
      initMercadoPago(process.env.NEXT_PUBLIC_MERCAROPAGO_KEY)
      setIsInitialized(true)
    }
  }, [setIsInitialized, isInitialized])

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

            <BoxComponent width="300px" padding="20px 0 0 0">
              {user?.email && total > 0 && typeof onPay === 'function' ? (
                <Payment
                  initialization={{
                    payer: {
                      email: user.email,
                    },
                    amount: total,
                  }}
                  customization={{
                    paymentMethods: {
                      creditCard: 'all',
                      debitCard: 'all',
                      mercadoPago: 'all',
                    },
                  }}
                  onSubmit={async ({ formData }) => {
                    onPay(formData)
                  }}
                  onReady={console.log}
                  onError={console.log}
                />
              ) : (
                <GoogleButtonComponent returnUrl="/plans/cart">
                  Registrate con google
                </GoogleButtonComponent>
              )}
            </BoxComponent>
          </>
        )}
      </FlexComponent>
    </BoxComponent>
  )
}

export default PlansCardPage
