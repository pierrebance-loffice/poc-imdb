import axios from 'axios'
import { cache } from 'react'
import { IApiGenre } from '@/app/lib/service/models/genre'
import { env } from '@/app/settings'

export const getGenres = cache(async (): Promise<Record<number, string>> => {
  const url = `${env.API_ENDPOINT}/genre/movie/list?language=${process.env.API_LANG}&api_key=${process.env.API_KEY}`
  const { data } = await axios.get<IApiGenre>(url)
  return Object.fromEntries(data.genres.map(({ id, name }) => [id, name]))
})
