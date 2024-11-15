'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PageProps } from './types'
import { FullScreenCenterComponent } from '@/components'
import { useOrganizationPage } from '@/hooks'
import { ORGANIZATION_MENU } from '@/commons'
import { Button } from '@/components/ui/button'

const menu = ORGANIZATION_MENU

const OrganizationPage: NextPage<PageProps> = (props) => {
  const { onClick } = useOrganizationPage(props)

  return (
    <FullScreenCenterComponent>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {menu.map((item) => (
          <GridItem key={item.name}>
            <Button
              variant="outline"
              onClick={() => onClick(item)}
              w={200}
              h={200}
            >
              {item.name}
            </Button>
          </GridItem>
        ))}
      </Grid>
    </FullScreenCenterComponent>
  )
}

export default OrganizationPage
