import { toImages } from '@app/lib/service/adapters/image'
import { Discovery, IApiDiscovery } from '@app/lib/service/models/discovery'
import { sift } from 'radash'

function toDiscovery(
  discovery: IApiDiscovery,
  genres: Record<number, string>
): Discovery {
  const {
    id,
    title,
    release_date: releaseDate,
    overview,
    popularity,
    video,
    vote_average: voteAverage,
    vote_count: voteCount,
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
    genres: sift(
      (discovery.genre_ids || []).map((genreId) => genres[genreId])
    ).sort(),
  }
}

export { toDiscovery }
