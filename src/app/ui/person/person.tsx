import { Person as Model } from '@/app/lib/services/types'
import PersonMovies from '@/app/ui/person-movies/person-movies'
import PersonCard from '../person-card/person-card'

export default function Person({ person }: { person: Model }) {
  return (
    <div className="mb-4 mt-4 flex flex-col justify-between gap-5">
      <PersonCard person={person} compact={false} />
      <PersonMovies person={person} />
    </div>
  )
}
