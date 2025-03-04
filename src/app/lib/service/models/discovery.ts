import { Paginated } from "@/app/lib/service/utils"
import { Images } from "@/app/lib/service/models/image"

export interface IApiDiscovery {
  id: string
  title: string
  release_date?: string | null
  overview: string
  popularity: number
  poster_path?: string | null
  video: boolean
  vote_average: number
  vote_count: number
  genre_ids: number[]
}

export type Discovery = {
  id: string
  title: string
  releaseDate?: Date
  overview: string
  popularity: number
  posterPath?: Images | null
  video: boolean
  voteAverage: number
  voteCount: number
  genres: string[] 
}

export type PaginatedDiscoveries = Paginated<Discovery[]>
