import React, { FC, memo } from 'react'
import clsx from 'clsx'
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
    <div className={clsx(styles.container)} style={{ background: element.bgColor }}>
      <div className={clsx(styles.imageContainer)}>
        <img src={element.image} alt="" width={144} height={144} />
      </div>
      <div className={clsx(styles.textContainer)}>
        <span>{element.name}</span>
      </div>
    </div>
  )
})
