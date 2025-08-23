import { create } from 'zustand'

const useStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  fetchCatgories: async () => {
    const res = await fetch('/api/categories')
    const data = await res.json()
    set({ categories: data })
  }

}))
