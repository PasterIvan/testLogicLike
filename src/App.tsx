import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './App.module.scss'
import axios from 'axios'
import styles from './App.module.scss'
import { Filters } from './Filters/Filters'
import { Cards } from './Cards/Cards'

function App() {
  const [selectedFilter, setSelectedFilter] = useState('Все темы')

  const [data, setData] = useState([])

  const getData = useCallback(async () => {
    const res = await axios.get('https://logiclike.com/docs/courses.json')
    setData(res.data)
  }, [])

  useEffect(() => {
    getData().then()
  }, [])

  const buttons = useMemo(() => {
    const tagsArray = data.map(course => course.tags).flat()
    return ['Все темы', ...new Set(tagsArray)]
  }, [data])

  return (
    <div className={styles.container}>
      <Filters setFilter={setSelectedFilter} buttons={buttons} />
      <Cards
        data={
          selectedFilter === 'Все темы' ? data : data.filter(el => el.tags.includes(selectedFilter))
        }
      />
    </div>
  )
}

export default App
