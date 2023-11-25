import Navbar from '@/components/navbar/navbar'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './Providers'
import { CssBaseline } from '@mui/material'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UNAM e-Books',
  description: 'Books and magazines for all university students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextAuthProvider>
          <CssBaseline />
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
