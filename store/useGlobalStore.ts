'use client'
import { create } from 'zustand'

type GlobalState = {
  user: { id: string; name: string } | null
  theme: 'light' | 'dark'
  setUser: (user: { id: string; name: string } | null) => void
  setTheme: (theme: 'light' | 'dark') => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  setTheme: (theme) => set({ theme }),
}))
