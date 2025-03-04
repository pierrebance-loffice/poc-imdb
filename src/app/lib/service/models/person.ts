import { Images } from "./image"

export interface IApiPersonMovie {
  id: number
  title: string
  poster_path?: string | null
}

export type PersonMovie = {
  id: number
  title: string
  posterPath?: Images
}

export interface IApiPerson {
  id: number
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
    cast?: IApiPersonMovie[] | null
    crew?: IApiPersonMovie[] | null
  } | null
  imdb_id?: string | null
}

export type Person = {
  id: number
  name: string
  birthday: Date
  placeOfBirth: string
  biography?: string
  popularity: number
  profilePath?: Images | null
  homepage?: string | null
  knownForDepartment: string
  job?: string
  character?: string
  images: Images[]
  credits: {
    cast: PersonMovie[]
    crew: PersonMovie[]
  }
  imdbId?: string
}
