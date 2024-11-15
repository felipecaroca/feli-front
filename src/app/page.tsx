'use client'

import { OrganizationModel } from '@/commons'
import {
  FullScreenCenterComponent,
  OrganizationCardComponent,
} from '@/components'

import { useHomePage } from '@/hooks'
import { Grid, GridItem } from '@chakra-ui/react'

const dummie: OrganizationModel[] = [
  { id: 'local1', name: 'local1' },
  {
    id: 'local2',
    name: 'local organización 2',
  },
]

export default function Home() {
  const { onClick } = useHomePage()

  return (
    <FullScreenCenterComponent>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {dummie.map((organization) => (
          <GridItem key={organization.id}>
            <OrganizationCardComponent {...{ organization, onClick }} />
          </GridItem>
        ))}
      </Grid>
    </FullScreenCenterComponent>
  )
}
