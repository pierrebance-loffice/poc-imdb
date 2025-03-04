import { toImages } from '@/app/lib/service/adapters/image'
import { IApiMovie, IApiMoviePerson, Movie, MoviePerson } from '@/app/lib/service/models/movie'

export function toPersonMovie({id, name, popularity, profile_path, character, job}: IApiMoviePerson): MoviePerson {
  return {
    id,
    name,
    popularity,
    profilePath: profile_path ? toImages(profile_path) : undefined,
    character: character || undefined,
    job: job || undefined
  }
}

function toMovie(movie: IApiMovie): Movie {
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
    genres: movie.genres.map((genre) => genre.name).sort(),
    keywords: (keywords?.keywords || []).map(({ name }) => name),
    credits: {
      cast: (movie?.credits?.cast || []).map(toPersonMovie),
      crew: (movie?.credits?.crew || []).map(toPersonMovie),
    },
    imdbId: movie.imdb_id || undefined,
  }
}

export { toMovie }
