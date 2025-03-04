import { Images } from "./image"
import { IApiKeywords } from "./keyword"
import { IApiVideo, Video } from "./video"

export interface IApiMoviePerson {
  id: number
  name: string
  profile_path?: string | null
  character?: string | null
  job?: string | null
  popularity: number
}

export type MoviePerson = {
  id: number
  name: string
  profilePath?: Images
  character?: string
  job?: string
  popularity: number
}

export interface IApiMovie {
  id: number
  title: string
  release_date?: string | null
  tagline: string
  overview: string
  popularity: number
  poster_path?: string | null
  homepage?: string | null
  video: boolean
  videos?: {
    results?: IApiVideo[] | null
  } | null
  vote_average: number
  vote_count: number
  genres: { id: number; name: string }[]
  keywords?: { keywords?: IApiKeywords[] | null } | null
  credits?: {
    cast?: IApiMoviePerson[] | null
    crew?: IApiMoviePerson[] | null
  } | null
  imdb_id?: string | null
}

export type Movie = {
  id: number
  title: string
  releaseDate?: Date
  tagline: string
  overview: string
  popularity: number
  posterPath?: Images | null
  homepage?: string | null
  video: boolean
  videos?: Video[]
  voteAverage: number
  voteCount: number
  genres: string[]
  keywords: string[]
  credits: {
    cast: MoviePerson[]
    crew: MoviePerson[]
  }
  imdbId?: string
}
