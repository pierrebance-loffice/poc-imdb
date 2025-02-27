import { getMovie } from '@/app/lib/services/movies'
import { getPerson } from '@/app/lib/services/persons'
import MovieModal from '@/app/ui/movie-modal/movie-modal'

type Props = { params: { movieid: string; personid: string } }

export default async function Page({ params }: Props) {
  const person = await getPerson(params.personid)
  const movie = await getMovie(params.movieid)
  return <MovieModal movie={movie} person={person} />
}
