import {
  appsSelectedAtom,
  IVA_VALUE,
  SubscribeInput,
  sumFieldFromArray,
} from '@/commons'
import { Post } from '@/commons/services/api'
import { useSession } from '@/hooks/useSession'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useCartPage = () => {
  const router = useRouter()
  const [subTotal, setSubtotal] = useState<number>(0)
  const [isInitialized, setIsInitialized] = useState(false)
  const [iva, setIva] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [appsSelected, setAppsSelected] = useAtom(appsSelectedAtom)
  const { user } = useSession(true)
  const onPay = async (formdata: SubscribeInput) => {
    try {
      const success = await Post(
        `${process.env.NEXT_PUBLIC_PAYMENTS_BACK}/mercadopago/subscribe`,
        {
          ...formdata,
          apps: appsSelected,
        }
      )

      if (success) {
        setAppsSelected([])
        router.replace('/home')
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (appsSelected.length > 0) {
      setSubtotal(sumFieldFromArray(appsSelected, 'price'))
      setLoading(false)
    }
  }, [appsSelected.length])

  useEffect(() => {
    const ivaCalculated = subTotal * IVA_VALUE
    setIva(ivaCalculated)
    setTotal(subTotal + ivaCalculated)
  }, [subTotal])

  return {
    loading,
    apps: appsSelected,
    subTotal,
    total,
    iva,
    user,
    onPay,
    isInitialized,
    setIsInitialized,
  }
}
