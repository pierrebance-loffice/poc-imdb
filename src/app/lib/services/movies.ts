import { notFound } from 'next/navigation'
import axios from 'axios'
import { cache } from 'react'
import { IApiMovie } from '@/app/lib/services/models'
import { Movie } from '@/app/lib/services/types'
import { toMovie } from '@/app/lib/services/utils'

export const getMovie = cache(async (id: string): Promise<Movie> => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/movie/${id}?language=${process.env.NEXT_PUBLIC_API_LANG}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=keywords,credits,images,keywords,videos`
  const { data } = await axios.get<IApiMovie>(url)
  if (!data) notFound()
  return toMovie(data)
})
