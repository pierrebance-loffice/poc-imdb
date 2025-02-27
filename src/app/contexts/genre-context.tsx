'use client'

import { createContext, useState } from 'react'
import { Genre } from '@/app/lib/services/genres'

export const GenreContext = createContext<{ genres: Genre }>({ genres: {} })

export const GenreProvider = ({
  data,
  children,
}: {
  data: Genre
  children: React.ReactNode
}) => {
  const [genres] = useState<Genre>(data)
  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  )
}
