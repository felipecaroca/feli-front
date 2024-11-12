import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined)
  useEffect(() => {
    const socketInstance = io(process.env.NEXT_PUBLIC_WAITING_LINE_BACK)

    socketInstance.on('connect', () => {
      console.log('conectado')
      setSocket(socketInstance)
    })

    socketInstance.on('disconnect', () => {
      console.log('desconectado')
    })

    return () => {
      socketInstance.close()
    }
  }, [])

  return {
    socket,
  }
}
