'use client'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import Link from 'next/link'
import { Movie } from '@app/lib/service/models/movie'
import { Person } from '@app/lib/service/models/person'
import Modal from '@app/ui/modal/modal'
import MovieCard from '@app/ui/movie-card/movie-card'

export default function MovieModal({ person, movie }: { person?: Person; movie: Movie }) {
  const roleInCrew = (movie?.credits?.crew || []).find(({ id }) => id === person?.id)
  const roleInCast = (movie?.credits?.cast || []).find(({ id }) => id === person?.id)
  const role = roleInCrew?.job || roleInCast?.character

  return (
    <Modal>
      <MovieCard movie={movie} compact={true} personRole={person ? `${person.name}: ${role}` : role} />
      <span className="grow" />
      <Link href={`/movies/${movie.id}`} className="self-center text-blue-500 hover:text-blue-800">
        <ArrowCircleRightIcon /> Consulter la page du film
      </Link>
    </Modal>
  )
}
