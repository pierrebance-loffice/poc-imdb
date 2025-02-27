export interface IApiVideo {
  name: string
  key: string
  site: string
}

export interface IApiKeywords {
  id: number
  name: string
}

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
    cast?: IApiPerson[] | null
    crew?: IApiPerson[] | null
  } | null
  imdb_id?: string | null
}

export interface IApiPerson {
  id: string
  name: string
  birthday: string
  place_of_birth: string
  popularity: number
  biography?: string | null
  profile_path?: string | null
  homepage?: string | null
  known_for_department: string
  job?: string | null
  character?: string | null
  images?: {
    profiles?: { file_path: string }[] | null
  } | null
  credits?: {
    cast?: IApiMovie[] | null
    crew?: IApiMovie[] | null
  } | null
  imdb_id?: string | null
}
