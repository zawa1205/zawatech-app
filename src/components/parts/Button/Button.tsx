import { FC } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  text: string
  shape: 'round' | 'square'
  size: 's' | 'm' | 'l'
  outlined?: boolean
  onClickHandler: () => void
}

export const Button: FC<ButtonProps> = ({
  text,
  shape,
  size,
  outlined,
  onClickHandler,
}) => (
  <button
    onClick={onClickHandler}
    className={`${styles.button} ${styles[shape]} ${styles[size]} ${
      outlined && styles.outlined
    }`}
  >
    {text}
  </button>
)
