'use client'

import { DarkMode, LightMode } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { useState, useEffect } from 'react'

export default function ThemeMode() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    typeof window !== 'undefined' && window.localStorage.getItem('theme') === 'dark',
  )

  useEffect(() => {
    const theme = window.localStorage.getItem('theme')
    setIsDarkTheme(theme === 'dark')
  }, [])

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkTheme])

  return (
    <button
      className="m-2 mr-2 flex gap-2 self-center rounded-full border bg-slate-300 p-1"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      <LightMode className="m-1 self-center rounded-full bg-amber-300 p-1 dark:bg-transparent " fontSize="large" />
      <Divider orientation="vertical" flexItem />
      <DarkMode className="m-1 self-center rounded-full p-1 dark:bg-amber-300 " fontSize="large" />
    </button>
  )
}
