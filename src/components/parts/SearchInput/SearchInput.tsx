import { FC, useState } from 'react'
import styles from './SearchInput.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const SearchInput: FC = () => {
  const router = useRouter()
  const [text, setText] = useState('')

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== 'Enter') return
    router.push(`/search?offset=0&size=5&query=${text.replaceAll('　', ' ')}`)
  }

  return (
    <div className={styles['input-wrapper']}>
      <input
        className={styles.input}
        placeholder="記事を検索"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={keyDownHandler}
      />
      <div className={styles['input-img']}>
        <Image src="/search.svg" height={20} width={20} alt="" />
      </div>
    </div>
  )
}
