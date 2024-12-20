'use client'

import { FullScreenCenterComponent, TitleComponent } from '@/components'
import { useSession } from '@/hooks'
import { Box, Text } from '@chakra-ui/react'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'
import styles from './styles.module.css'

const LoginPage = () => {
  const { saveToken, logout } = useSession()
  const router = useRouter()
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      if (credentialResponse.credential) {
        saveToken(credentialResponse.credential)
        router.replace('/')
      }
    },
  })

  useEffect(() => {
    logout()
  }, [])
  // TODO: ordenar componentes
  return (
    <FullScreenCenterComponent>
      <Box
        top={1}
        right={1}
        zIndex={1}
        border="2px dashed"
        borderColor="gray.300"
        position="fixed"
        w="26%"
        bg="white"
        h="40%"
      />
      <Box
        zIndex={1}
        position="fixed"
        right="30%"
        top="20%"
        display="flex"
        alignItems="center"
        transform="rotate(-5deg)"
        className={styles.arrow1}
      >
        <Box
          bg="red.600"
          h="30px"
          w="160px"
          clipPath="polygon(20px 0, 100% 20%, 100% 80%, 0 100%)"
        />
        <Box
          bg="red.600"
          h="50px"
          w="50px"
          clipPath="polygon(0% 0%, 100% 50%, 100% 50%, 0%  100%)"
        />
      </Box>
      <Box
        zIndex={1}
        position="fixed"
        right="28%"
        top="48%"
        display="flex"
        alignItems="center"
        transform="rotate(-40deg)"
        className={styles.arrow2}
      >
        <Box
          bg="red.600"
          h="30px"
          w="160px"
          clipPath="polygon(20px 0, 100% 20%, 100% 80%, 0 100%)"
        />
        <Box
          bg="red.600"
          h="50px"
          w="50px"
          clipPath="polygon(0% 0%, 100% 50%, 100% 50%, 0%  100%)"
        />
      </Box>
      <Box position="fixed" bg="gray.500" h="full" w="full">
        <Box
          bg="white"
          position="fixed"
          p="25px"
          borderRadius="25px"
          border="2px dashed"
          borderColor="gray.300"
          marginTop="16%"
          marginLeft="40%"
          marginRight="40%"
        >
          <TitleComponent>No estas logueado</TitleComponent>
          <Text textAlign="center">Inicia sesión con tu cuenta de google</Text>
        </Box>
      </Box>
    </FullScreenCenterComponent>
  )
}

export default LoginPage
