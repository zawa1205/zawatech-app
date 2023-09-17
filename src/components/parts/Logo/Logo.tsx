import Image from 'next/image'
import { FC } from 'react'

type LogoProps = {
  height: number
  width: number
}

export const Logo: FC<LogoProps> = ({ height, width }) => (
  <Image
    src="/title.png"
    height={height}
    width={width}
    alt="zawatech"
    style={{ objectFit: 'contain' }}
  />
)
