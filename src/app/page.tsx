'use client'

import { FlexComponent } from '@/components'
import BoxComponent from '@/components/Box'
import { ButtonComponent } from '@/components/Button'
import { useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter()

  return (
    <FlexComponent justify="center">
      <BoxComponent width="20%" padding="50px">
        <ButtonComponent onClick={() => router.push('/plans')}>
          ver planes
        </ButtonComponent>
      </BoxComponent>
    </FlexComponent>
  )
}

export default LandingPage
