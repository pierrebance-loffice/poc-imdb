'use client'

import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import { useRouter } from 'next/navigation'
import { Modal } from '@mui/material'
import Link from 'next/link'
import { Movie, Person } from '@/app/lib/services/types'
import PersonCard from '../person-card/person-card'
import { useCallback, useState } from 'react'

export default function PersonModal({
  person,
  movie,
}: {
  person: Person
  movie?: Movie
}) {
  const router = useRouter()
  const [open, setOpen] = useState(true)

  const roleInCrew = (movie?.credits?.crew || []).find(
    ({ id }) => id === person.id
  )
  const roleInCast = (movie?.credits?.cast || []).find(
    ({ id }) => id === person.id
  )
  const role = roleInCrew?.job || roleInCast?.character

  const closeModal = useCallback(() => {
    setOpen(false)
    router.back()
  }, [router])

  return (
    <Modal color="white" className="flew items-center" open={open}>
      <div className="flex h-full w-full items-center">
        <div className="mx-auto flex max-w-4xl items-baseline rounded-2xl bg-white shadow-xl dark:bg-zinc-600">
          <div className="relative grow p-4">
            <div className="flex flex-col gap-4" style={{ minWidth: 800 }}>
              <button className="ml-auto" onClick={closeModal}>
                <HighlightOffIcon
                  className="text-blue-500 hover:text-black"
                  fontSize="large"
                />
              </button>
              <PersonCard
                person={person}
                compact={true}
                role={person ? `${movie?.title}: ${role}` : role}
              />
              <Link
                href={`/people/${person.id}`}
                className="mb-4 self-center text-blue-500 hover:text-blue-800"
              >
                <ArrowCircleRightIcon /> Consulter la page de la personne
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
