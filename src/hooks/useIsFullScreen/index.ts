import { useEffect, useState } from 'react'

export const useIsFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  
  useEffect(() => {
    const checkIsFullScreen = () => {
      const isSameHeight = window.innerHeight === screen.height
      setIsFullScreen(isSameHeight)
    }
    
    window.addEventListener('resize', checkIsFullScreen)    
    checkIsFullScreen()
    
    return () => {
      window.removeEventListener('resize', checkIsFullScreen)
    }
  }, [])


  return {
    isFullScreen,
  }
}