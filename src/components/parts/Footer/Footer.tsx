import { FC } from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <div>
      <Link href="https://github.com/zawa1205">GitHub</Link>
    </div>
    <div className={styles.separator}>|</div>
    <div>
      <Link href="https://qiita.com/zawa1205">Qiita</Link>
    </div>
  </footer>
)
