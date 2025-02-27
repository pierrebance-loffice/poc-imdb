import axios from 'axios'
import { env } from '@/app/settings'

export interface IApiGenre {
  genres: {
    id: string
    name: string
  }[]
}

export type Genre = Record<string, string>

export async function getGenres(): Promise<Genre> {
  const url = `${env.API_ENDPOINT}/genre/movie/list?language=${process.env.API_LANG}&api_key=${process.env.API_KEY}`
  const { data } = await axios.get<IApiGenre>(url)
  return Object.fromEntries(data.genres.map(({ id, name }) => [id, name]))
}
