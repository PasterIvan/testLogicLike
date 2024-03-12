import { useMemo } from 'react'
import { Card } from './Card/Card'
import styles from './styles.module.scss'
import { useStore } from '../../store/useStor'

export const Cards = () => {
  const data = useStore(state => state.data)
  const selectedFilter = useStore(state => state.selectedFilter)

  const filteredData = useMemo(
    () =>
      selectedFilter === 'Все темы' ? data : data.filter(el => el.tags.includes(selectedFilter)),
    [selectedFilter, data],
  )

  return (
    <div className={styles.container}>
      {filteredData &&
        !!filteredData.length &&
        filteredData.map(el => <Card key={el.id} element={el} />)}
    </div>
  )
}
