import { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { Logo } from '../Logo'

export const Footer: FC = () => {
  const date = new Date()
  const lastYear = date.getFullYear()
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Logo width={100} height={21} />
      </Link>
      <span className={styles.copyright}>© 2021 - {lastYear} zawatech</span>
      <Link href="/privacy-policy">プライバシーポリシー</Link>
    </footer>
  )
}
