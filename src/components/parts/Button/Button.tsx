import { FC } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  text: string
  onClickHandler: () => void
}

export const Button: FC<ButtonProps> = ({ text, onClickHandler }) => (
  <button onClick={onClickHandler} className={styles.button}>
    {text}
  </button>
)
