import Script from 'next/script'
import { FC } from 'react'
import styles from './AdsenseButtom.module.scss'

export const AdsensePageBottom: FC = () => {
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
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-6775345886458617"
        data-ad-slot="7805909264"
      />
      <Script
        id="ids-bottom"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
             `,
        }}
      />
    </div>
  )
}
