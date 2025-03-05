import { Movie as Model } from '@app/lib/service/models/movie'
import MovieCard from '@app/ui/movie-card/movie-card'
import MoviePeople from '@app/ui/movie-people/movie-people'

export default async function Movie({ movie }: { movie: Model }) {
  const { cast, crew } = movie.credits
  const hasCredits = cast.length + crew.length > 0
  return (
    <div className="flex flex-col justify-between gap-5">
      <MovieCard movie={movie} compact={false} />
      {hasCredits && <MoviePeople movie={movie} />}
    </div>
  )
}
