'use client'

import { Grid, GridItem } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PageProps } from './types'
import { FullScreenCenterComponent } from '@/components'
import { useBusinessPage } from '@/hooks'
import { WAITINGLINE_MENU } from '@/commons'
import { Button } from '@/components/ui/button'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const menu = WAITINGLINE_MENU

const BusinessPage: NextPage<PageProps> = (props) => {
  const { onClick } = useBusinessPage(props)

  return (
    <ProtectedRouteComponent>
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
    </ProtectedRouteComponent>
  )
}

export default BusinessPage
