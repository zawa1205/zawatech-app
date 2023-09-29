import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has('title')
  const title = hasTitle ? searchParams.get('title')?.slice(0, 70) : ''
  const userName = 'zawa1205'

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: 'black',
          display: 'flex',
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg id="visual" viewBox="0 0 1200 630" width="1200" height="630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect width="1200" height="630" fill="#ffffff"></rect><g><g transform="translate(27 173)"><path d="M0 -142.9L123.7 -71.4L123.7 71.4L0 142.9L-123.7 71.4L-123.7 -71.4Z" fill="#bedcdd"></path></g><g transform="translate(843 311)"><path d="M0 -130L112.6 -65L112.6 65L0 130L-112.6 65L-112.6 -65Z" fill="#bedcdd"></path></g><g transform="translate(212 604)"><path d="M0 -48L41.6 -24L41.6 24L0 48L-41.6 24L-41.6 -24Z" fill="#bedcdd"></path></g><g transform="translate(1192 624)"><path d="M0 -102L88.3 -51L88.3 51L0 102L-88.3 51L-88.3 -51Z" fill="#bedcdd"></path></g><g transform="translate(1141 14)"><path d="M0 -108L93.5 -54L93.5 54L0 108L-93.5 54L-93.5 -54Z" fill="#bedcdd"></path></g><g transform="translate(387 2)"><path d="M0 -76L65.8 -38L65.8 38L0 76L-65.8 38L-65.8 -38Z" fill="#bedcdd"></path></g></g></svg>',
          )}`})`,
          width: '100%',
          height: '100%',
          padding: '50px 200px',
          position: 'relative',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2
          style={{
            width: '100%',
            fontWeight: 'bold',
            fontSize: 60,
          }}
        >
          {title}
        </h2>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <img
            src={`https://github.com/${userName}.png`}
            alt=""
            width="60"
            height="60"
            style={{ borderRadius: 60, marginRight: 10 }}
          />
          <p style={{ fontSize: 40, paddingBottom: 10 }}>{userName}</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
