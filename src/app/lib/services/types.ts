export type Video = {
  name: string
  key: string
  site: string
}

export type Images = {
  small: string
  big: string
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
  genreIds?: number[]
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
  genres: { id: number; name: string }[]
  keywords: string[]
  credits: {
    cast: Person[]
    crew: Person[]
  }
  imdbId?: string
}

export type Person = {
  id: string
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
    cast: Movie[]
    crew: Movie[]
  }
  imdbId?: string
}
