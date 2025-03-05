import { Person as Model } from '@app/lib/service/models/person'
import PersonCard from '@app/ui/person-card/person-card'
import PersonMovies from '@app/ui/person-movies/person-movies'

export default function Person({ person }: { person: Model }) {
  return (
    <div className="mb-4 mt-4 flex flex-col justify-between gap-5">
      <PersonCard person={person} compact={false} />
      <PersonMovies person={person} />
    </div>
  )
}
