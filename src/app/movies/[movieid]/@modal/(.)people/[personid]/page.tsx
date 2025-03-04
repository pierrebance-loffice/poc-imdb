import { getMovie } from '@/app/lib/service/api/movie'
import { getPerson } from '@/app/lib/service/api/person'
import PersonModal from '@/app/ui/person-modal/person-modal'

type Props = { params: { movieid: string; personid: string } }

export default async function Page({ params }: Props) {
  const person = await getPerson(params.personid)
  const movie = await getMovie(params.movieid)
  return <PersonModal movie={movie} person={person} />
}
