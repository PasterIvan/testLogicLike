import React, { FC, memo, useCallback, useMemo, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Button } from './Button'

type FiltersProps = {
  setFilter: (value: string) => void
  buttons: string[]
}

export const Filters: FC<FiltersProps> = memo(({ setFilter, buttons }) => {
  const [selectedFilter, setSelectedFilter] = useState('Все темы')

  const select = useCallback(selectedMenuItem => {
    setSelectedFilter(selectedMenuItem)
    setFilter(selectedMenuItem)
  }, [])

  const filteredButtons = useMemo(() => buttons, [buttons])

  return (
    <div className={clsx(styles.container)}>
      {filteredButtons.map((el, index) => (
        <Button
          key={index + 1}
          item={el}
          selectedFilter={selectedFilter}
          onClick={() => select(el)}
        />
      ))}
    </div>
  )
})
