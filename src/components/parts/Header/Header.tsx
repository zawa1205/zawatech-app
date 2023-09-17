'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Logo } from '../Logo'
import Image from 'next/image'
import styles from './Header.module.scss'
import { SearchInput } from '../SearchInput'
import Link from 'next/link'
import { Button } from '../Button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const Header: FC = () => {
  const [inputVisible, setInputVisible] = useState(false)
  const [loginVisible, setLoginVisible] = useState(false)
  const { data: session } = useSession()
  const pathName = usePathname()

  useEffect(() => {
    if (pathName === '/preview') setLoginVisible(true)
    else setLoginVisible(false)
  }, [pathName])

  return (
    <header className={styles.header}>
      <div className={styles['normal-contents']}>
        <div className={styles['left-contents']}>
          <Link href="/">
            <Logo width={100} height={40} />
          </Link>
        </div>
        <div className={styles['right-contents']}>
          <div className={styles['login-button-wrapper']}>
            {loginVisible && !session && (
              <Button text="ログイン" onClickHandler={() => signIn()} />
            )}
            {loginVisible && session && (
              <Button text="ログアウト" onClickHandler={() => signOut()} />
            )}
          </div>
          {!inputVisible && (
            <div className={styles['pc-input']}>
              <SearchInput />
            </div>
          )}

          <button
            onClick={() => setInputVisible(true)}
            className={styles['sp-button']}
          >
            <Image src="/search.svg" alt="検索" width={24} height={24} />
          </button>
        </div>
      </div>
      {inputVisible && (
        <div className={styles['search-wrapper']}>
          <SearchInput />
        </div>
      )}
    </header>
  )
}
