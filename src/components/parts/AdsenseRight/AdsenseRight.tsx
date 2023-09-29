import Script from 'next/script'
import { FC } from 'react'

export const AdsenseRight: FC = () => {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6775345886458617"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6775345886458617"
        data-ad-slot="2317778861"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id="ads-right"
        dangerouslySetInnerHTML={{
          __html: `
        (adsbygoogle = window.adsbygoogle || []).push({});
         `,
        }}
      />
    </>
  )
}
