import axios from 'axios'
import { toDiscovery } from '@app/lib/service/adapters/discovery'
import {
  IApiDiscovery,
  PaginatedDiscoveries,
} from '@app/lib/service/models/discovery'
import { Paginated } from '@app/lib/service/utils'
import { getGenres } from '@app/lib/service/api/genre'

type PaginatedApiDiscoveries = Paginated<IApiDiscovery[]>

export async function discoverMovies(
  page: number,
  sorting: string
): Promise<PaginatedDiscoveries> {
  const genres = await getGenres()
  const url = `${process.env.API_ENDPOINT}/discover/movie?include_adult=false&include_video=false&language=${process.env.API_LANG}&api_key=${process.env.API_KEY}&page=${page}&sort_by=${sorting}`
  const { data } = await axios.get<PaginatedApiDiscoveries>(url)
  return {
    ...data,
    results: data.results.map((discovery) => toDiscovery(discovery, genres)),
  }
}
