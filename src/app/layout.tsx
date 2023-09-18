import React from 'react'
import { NextAuthProvider } from '@/providors/NextAuth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/parts/Header'
import styles from './layout.module.scss'
import { Footer } from '@/components/parts/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="ja">
      <body className={`${inter.className}, ${styles.body}`}>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
