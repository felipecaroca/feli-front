'use client'

import { BoxComponent, ButtonComponent, FlexComponent } from '@/components'
import LoggedUserComponent from '@/components/LoggedUserComponent'
import { useSession } from '@/hooks'

import { useRouter } from 'next/navigation'

const LandingPage = () => {
  const router = useRouter()
  const { user } = useSession(true)

  console.log(user)

  return (
    <FlexComponent justify="center">
      <BoxComponent width="20%" padding="50px">
        <ButtonComponent onClick={() => router.push('/plans')}>
          ver planes
        </ButtonComponent>
      </BoxComponent>
      <LoggedUserComponent
        {...{
          user,
          onClick: () => router.push('/home'),
          tooltip: 'Ir a mi inicio',
        }}
      />
    </FlexComponent>
  )
}

export default LandingPage
