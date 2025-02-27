import axios from 'axios'
import { IApiDiscovery } from '@/app/lib/services/models'
import { Discovery } from '@/app/lib/services/types'
import { PaginatedResults, toDiscovery } from '@/app/lib/services/utils'

type ApiResults = PaginatedResults<IApiDiscovery[]>
export type DiscoveryResults = PaginatedResults<Discovery[]>

export async function discoverMovies(
  page: number,
  sorting: string
): Promise<DiscoveryResults> {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/discover/movie?include_adult=false&include_video=false&language=${process.env.NEXT_PUBLIC_API_LANG}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}&sort_by=${sorting}`
  const { data } = await axios.get<ApiResults>(url)
  return { ...data, results: data.results.map(toDiscovery) }
}
