import { ReactNode } from 'react'
import styles from '../styles/Card.module.scss'

type CardProps = {
  bgColor?: string
  children?: ReactNode
}

export function Card(props: CardProps) {
  return (
    <div
      className={styles.cartao}
      style={{ background: props.bgColor ?? '#fff' }}
    >
      {props.children}
    </div>
  )
}
