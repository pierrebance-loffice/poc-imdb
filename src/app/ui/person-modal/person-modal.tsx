'use client'

import { Movie } from '@app/lib/service/models/movie'
import { Person } from '@app/lib/service/models/person'
import Modal from '@app/ui/modal/modal'
import PersonCard from '@app/ui/person-card/person-card'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import Link from 'next/link'

export default function PersonModal({
  person,
  movie,
}: {
  person: Person
  movie?: Movie
}) {
  const roleInCrew = (movie?.credits?.crew || []).find(
    ({ id }) => id === person.id
  )
  const roleInCast = (movie?.credits?.cast || []).find(
    ({ id }) => id === person.id
  )
  const role = roleInCrew?.job || roleInCast?.character

  return (
    <Modal>
      <PersonCard
        person={person}
        compact={true}
        personRole={person ? `${movie?.title}: ${role}` : role}
      />
      <span className="grow" />
      <Link
        href={`/people/${person.id}`}
        className="self-center text-blue-500 hover:text-blue-800"
      >
        <ArrowCircleRightIcon /> Consulter la page de la personne
      </Link>
    </Modal>
  )
}
