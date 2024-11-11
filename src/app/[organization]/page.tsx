import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { PageProps } from './types'

const OrganizationPage: NextPage<PageProps> = async ({ params }) => {
  const { organization } = await params

  return <Box>{organization}</Box>
}

export default OrganizationPage
