import Image from 'next/image'
import { FC } from 'react'
import styles from './HamburgerIcon.module.scss'

type HamburgerIconProps = {
  height: number
  width: number
  onClickHandler: () => void
}

export const HamburgerIcon: FC<HamburgerIconProps> = ({
  height,
  width,
  onClickHandler,
}) => (
  <button className={styles.button}>
    <Image
      src="/hamburger.svg"
      height={height}
      width={width}
      onClick={onClickHandler}
      alt="メニュー"
    />
  </button>
)
