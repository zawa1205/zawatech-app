import Script from 'next/script'
import { FC } from 'react'
import styles from './AdsenseLeft.module.scss'

export const AdsenseLeft: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6775345886458617"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6775345886458617"
        data-ad-slot="3253825704"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id="ads-left"
        dangerouslySetInnerHTML={{
          __html: `
        (adsbygoogle = window.adsbygoogle || []).push({});
         `,
        }}
      />
    </div>
  )
}
