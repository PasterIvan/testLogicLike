import { create } from 'zustand'
import { CardType } from '../components/Cards/Card/Card'

type State = {
  data: CardType[]
  selectedFilter: string
  buttons: string[]
}

type Action = {
  setData: (data: State['data']) => void
  setSelectedFilter: (selectedFilter: State['selectedFilter']) => void
  setButtons: (buttons: State['buttons']) => void
}
const initialValues: State = {
  data: [],
  selectedFilter: 'Все темы',
  buttons: ['Все темы'],
}

export const useStore = create<State & Action>(set => ({
  ...initialValues,
  setData: data => set({ data }),
  setSelectedFilter: selectedFilter => set({ selectedFilter }),
  setButtons: buttons => set({ buttons }),
}))
