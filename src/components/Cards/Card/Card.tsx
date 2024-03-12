import { FC, memo } from 'react'
import styles from './styles.module.scss'

export type CardType = {
  name: string
  id: string
  image: string
  bgColor: string
  tags: string[]
}

type CardProps = {
  element: CardType
}

export const Card: FC<CardProps> = memo(({ element }) => {
  return (
    <div className={styles.container} style={{ background: element.bgColor }}>
      <div className={styles.imageContainer}>
        <img src={element.image} alt="" width={144} height={144} />
      </div>
      <div className={styles.textContainer}>
        <span>{element.name}</span>
      </div>
    </div>
  )
})
