import { IApiDiscovery, IApiMovie, IApiPerson } from '@/app/lib/services/models'
import { Discovery, Images, Movie, Person } from '@/app/lib/services/types'
import { API_IMAGE_BASE_URL } from '../constants'

export type PaginatedResults<T> = {
  page: number
  results: T
  total_pages: number
  total_results: number
}

export const toDiscovery = (discovery: IApiDiscovery): Discovery => {
  const {
    id,
    title,
    release_date: releaseDate,
    overview,
    popularity,
    video,
    vote_average: voteAverage,
    vote_count: voteCount,
    genre_ids: genreIds,
  } = discovery
  return {
    id,
    title,
    releaseDate: releaseDate ? new Date(releaseDate) : undefined,
    overview,
    popularity,
    posterPath: discovery.poster_path
      ? toImages(discovery.poster_path)
      : undefined,
    video,
    voteAverage,
    voteCount,
    genreIds,
  }
}

export const toMovie = (movie: IApiMovie): Movie => {
  const {
    id,
    title,
    release_date: releaseDate,
    popularity,
    tagline,
    overview,
    homepage,
    video,
    videos,
    vote_average: voteAverage,
    vote_count: voteCount,
    genres,
    keywords,
  } = movie
  return {
    id,
    title,
    releaseDate: releaseDate ? new Date(releaseDate) : undefined,
    tagline,
    overview,
    popularity,
    posterPath: movie.poster_path ? toImages(movie.poster_path) : undefined,
    homepage,
    video,
    videos: videos?.results || undefined,
    voteAverage,
    voteCount,
    genres,
    keywords: (keywords?.keywords || []).map(({ name }) => name),
    credits: {
      cast: (movie?.credits?.cast || []).map(toPerson),
      crew: (movie?.credits?.crew || []).map(toPerson),
    },
    imdbId: movie.imdb_id || undefined,
  }
}

export const toPerson = (person: IApiPerson): Person => {
  const {
    id,
    name,
    place_of_birth: placeOfBirth,
    biography,
    popularity,
    homepage,
    known_for_department: knownForDepartment,
    job,
    character,
  } = person
  return {
    id,
    name,
    birthday: new Date(person.birthday),
    placeOfBirth,
    biography: biography || undefined,
    popularity,
    profilePath: person.profile_path ? toImages(person.profile_path) : null,
    homepage,
    knownForDepartment,
    job: job || undefined,
    character: character || undefined,
    images: (
      (person.images?.profiles || []).map(({ file_path }) => file_path) || []
    ).map(toImages),
    credits: {
      cast: (person?.credits?.cast || []).map(toMovie),
      crew: (person?.credits?.crew || []).map(toMovie),
    },
    imdbId: person.imdb_id || undefined,
  }
}

export const toImages = (path: string): Images => {
  return {
    small: `${API_IMAGE_BASE_URL}w200${path}`,
    big: `${API_IMAGE_BASE_URL}w400${path}`,
  }
}

export const sortPopularity = (person1: Person, person2: Person) =>
  person1.popularity > person2.popularity ? -1 : 1
