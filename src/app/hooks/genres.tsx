'use client'

import { useContext } from 'react'
import { GenreContext } from '@/app/contexts/genre-context'

export const useGenre = () => useContext(GenreContext)
