import React, { FC, memo } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'
import { useStore } from '../../store/useStor'

type ButtonProps = {
  button: string
  isActive: boolean
}

export const Button: FC<ButtonProps> = memo(({ button, isActive }) => {
  const setSelectedFilter = useStore(state => state.setSelectedFilter)

  const selectFilter = () => {
    setSelectedFilter(button)
  }

  return (
    <button
      type={'button'}
      className={clsx(styles.button, isActive && styles.active)}
      onClick={selectFilter}
    >
      {button}
    </button>
  )
})
