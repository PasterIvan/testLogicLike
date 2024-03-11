import React, { FC } from 'react'
import { Card, CardType } from './Card/Card'
import styles from './styles.module.scss'
import clsx from 'clsx'

type CardsProps = {
  data: CardType[]
}

export const Cards: FC<CardsProps> = ({ data }) => {
  return (
    <div className={clsx(styles.container)}>
      {data && !!data.length && data.map(el => <Card key={el.id} element={el} />)}
    </div>
  )
}
