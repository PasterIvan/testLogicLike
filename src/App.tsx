import React, { useCallback, useEffect } from 'react'
import './App.module.scss'
import axios from 'axios'
import styles from './App.module.scss'
import { Filters } from './components/Filters/Filters'
import { Cards } from './components/Cards/Cards'
import { useStore } from './store/useStor.ts'

function App() {
  const setData = useStore(state => state.setData)
  const setButtons = useStore(state => state.setButtons)

  const getData = useCallback(async () => {
    const { data } = await axios.get('https://logiclike.com/docs/courses.json')

    setButtons(['Все темы', ...new Set(data.map(course => course.tags).flat())])
    setData(data)
  }, [])

  useEffect(() => {
    getData().then()
  }, [])

  return (
    <div className={styles.container}>
      <Filters />
      <Cards />
    </div>
  )
}

export default App
