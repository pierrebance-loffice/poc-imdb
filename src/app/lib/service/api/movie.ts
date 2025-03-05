import { notFound } from 'next/navigation'
import axios from 'axios'
import { cache } from 'react'
import { toMovie } from '@app/lib/service/adapters/movie'
import { IApiMovie, Movie } from '@app/lib/service/models/movie'

export const getMovie = cache(async (id: string): Promise<Movie> => {
  const extra = ['keywords', 'credits', 'images', 'keywords', 'videos']
  const url = `${process.env.API_ENDPOINT}/movie/${id}?language=${process.env.API_LANG}&api_key=${process.env.API_KEY}&append_to_response=${extra.join(',')}`
  const { data } = await axios.get<IApiMovie>(url)
  if (!data) notFound()
  return toMovie(data)
})
