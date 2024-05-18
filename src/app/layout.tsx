import type { Metadata } from 'next'
import { Inter,Baloo_Bhai_2 } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Providers from '@/lib/Providers/Providers';
import { Toaster } from 'sonner';




const inter = Inter({ subsets: ['latin'] })
const balooBhai = Baloo_Bhai_2({ subsets: ['latin'] ,weight:[
  '400',
  '500',
  '700',
  '800'

]})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en">
      <body >
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
          <Toaster position='top-center' />
      </body>
    </html>
    </Providers>
  )
}
