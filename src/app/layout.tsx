import React from 'react'
import { NextAuthProvider } from '@/providors/NextAuth'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Header } from '@/components/parts/Header'
import styles from './layout.module.scss'
import { Footer } from '@/components/parts/Footer'
import Script from 'next/script'

const notojp = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'zawatech.com',
  description:
    'webフロントエンド領域を中心に、日々の技術で詰まった事の解決方法などをまとめているエンジニアブログです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notojp.className}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FM34WTX90M"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-FM34WTX90M');
           `,
        }}
      />
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
