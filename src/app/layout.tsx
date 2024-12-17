import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import localFont from 'next/font/local'
import { GoogleOAuthProvider } from '@react-oauth/google'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Waiting line',
  description: 'Aplicación para manejo de espera de clientes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ''}>
          <Provider>{children}</Provider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
