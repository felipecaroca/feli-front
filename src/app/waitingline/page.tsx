'use client'

import {
  FullScreenCenterComponent,
  OrganizationCardComponent,
} from '@/components'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'
import { SkeletonSquare } from '@/components/ui/skeleton'

import { useHomePage } from '@/hooks'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Home() {
  const { onClick, getting, organizations } = useHomePage()

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {getting ? (
            <SkeletonSquare noOfLines={2} w="200px" h="200px" />
          ) : (
            organizations?.map((organization) => (
              <GridItem key={organization.id}>
                <OrganizationCardComponent
                  {...{ organization, onCardClick: onClick }}
                />
              </GridItem>
            ))
          )}
        </Grid>
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}
