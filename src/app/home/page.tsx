'use client'

import { ProtectedRouteComponent } from '@/components'

const HomePage = () => {
  return (
    <ProtectedRouteComponent>
      <div>hola</div>
    </ProtectedRouteComponent>
  )
}

export default HomePage
