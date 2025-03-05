import { Person as Model } from '@app/lib/service/models/person'
import PersonCard from '@app/ui/person-card/person-card'
import PersonMovies from '@app/ui/person-movies/person-movies'

export default function Person({ person }: { person: Model }) {
  const { cast, crew } = person.credits
  const hasCredits = cast.length + crew.length > 0
  return (
    <div className="flex flex-col justify-between gap-5">
      <PersonCard person={person} compact={false} />
      {hasCredits && <PersonMovies person={person} />}
    </div>
  )
}
