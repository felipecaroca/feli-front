import { appsSelectedAtom, IVA_VALUE, sumFieldFromArray } from '@/commons'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

export const useCartPage = () => {
  const [subTotal, setSubtotal] = useState<number>(0)
  const [iva, setIva] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const appsSelected = useAtomValue(appsSelectedAtom)

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
  }
}
