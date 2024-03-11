import React, { FC, memo } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

type ButtonProps = {
  item: string
  selectedFilter: string
  onClick: () => void
}

export const Button: FC<ButtonProps> = memo(({ item, selectedFilter, onClick }) => {
  return (
    <button
      className={clsx(styles.button, selectedFilter === item && styles.active)}
      onClick={onClick}
    >
      {item}
    </button>
  )
})
