export type SubscribeInput = {
  installments: number
  issuer_id: string
  payer: {
    email: string
    identification: {
      number: string
      type: string
    }
  }
  payment_method_id: string
  token: string
  transaction_amount: number
}
