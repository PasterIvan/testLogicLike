import styles from './styles.module.scss'
import { Button } from './Button'
import { useStore } from '../../store/useStor'

export const Filters = () => {
  const buttons = useStore(state => state.buttons)
  const selectedFilter = useStore(state => state.selectedFilter)

  return buttons.length > 0 ? (
    <div className={styles.container}>
      {buttons.map(button => (
        <Button key={button} button={button} isActive={selectedFilter === button} />
      ))}
    </div>
  ) : null
}
