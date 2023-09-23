import React from 'react'
import { NextAuthProvider } from '@/providors/NextAuth'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Header } from '@/components/parts/Header'
import styles from './layout.module.scss'
import { Footer } from '@/components/parts/Footer'

const notojp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'zawatech.com',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notojp.className}>
      <body className={styles.body}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
