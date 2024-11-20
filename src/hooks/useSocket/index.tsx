import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export const useSocket = (lazy?: boolean) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined)

  const connectSocket = <T extends { [key: string]: unknown }>(query?: T) => {
    const socketInstance = io(process.env.NEXT_PUBLIC_WAITING_LINE_BACK, {
      query,
    })

    socketInstance.on('connect', () => {
      console.log('conectado')
      setSocket(socketInstance)
    })

    socketInstance.on('disconnect', () => {
      console.log('desconectado')
    })

    return socketInstance
  }

  useEffect(() => {
    if (!lazy) connectSocket()

    return () => {
      socket?.close()
    }
  }, [])

  return { socket, connectSocket }
}
