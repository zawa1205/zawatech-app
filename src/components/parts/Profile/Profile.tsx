import { FC } from 'react'
import styles from './Profile.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export const Profile: FC = () => {
  const userName = 'zawa1205'
  const mailAddress = 'zawa1205.contact@gmail.com'
  const introduce = 'webフロントエンドエンジニア'

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <Image
          src={`https://github.com/${userName}.png`}
          width={50}
          height={50}
          alt={userName}
        />
        <p className={styles.name}>{userName}</p>
      </div>
      <div className={styles.sns}>
        <div className={styles['sns-icon']}>
          <Link href={`https://qiita.com/${userName}`} target="_blank">
            <Image src="/qiitaIcon.png" alt="Qiita" width={20} height={20} />
          </Link>
        </div>
        <div className={styles['sns-icon']}>
          <Link href={`https://github.com/${userName}`} target="_blank">
            <Image src="/githubIcon.svg" alt="GitHub" width={20} height={20} />
          </Link>
        </div>
        <div className={styles['sns-icon']}>
          <Link href={`mailto:${mailAddress}`}>
            <Image src="/mail.svg" alt="mail" width={20} height={20} />
          </Link>
        </div>
      </div>
      <p className={styles.introduce}>{introduce}</p>
    </div>
  )
}
