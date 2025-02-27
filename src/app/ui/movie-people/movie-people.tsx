'use client'

import Image from 'next/image'
import Link from 'next/link'
import { sift } from 'radash'
import { Movie } from '@/app/lib/services/types'
import Genre from '../genre/genre'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Pagination } from '@mui/material'
import { sortPopularity } from '@/app/lib/services/utils'
import { ImageNotSupported } from '@mui/icons-material'

const creditsPagination = 6

export default function MoviePeople({ movie }: { movie: Movie }) {
  const director = useMemo(
    () => movie.credits.crew.find(({ job }) => job === 'Director'),
    [movie]
  )

  const actors = useMemo(
    () =>
      movie.credits.cast
        .sort(sortPopularity)
        .filter((actor) => !!actor.character),
    [movie]
  )

  const persons = useMemo(
    () => sift([...(director ? [director] : []), ...actors]),
    [director, actors]
  )

  const total = useMemo(
    () => Math.ceil(persons.length / creditsPagination),
    [persons]
  )

  const [page, setPage] = useState(1)

  const handlePaginationChange = useCallback(
    (event: ChangeEvent<unknown>, value: number) => setPage(value),
    [setPage]
  )

  if (!persons.length) return

  return (
    <>
      <h2 className="text-2xl">Crédits</h2>

      <div className="flex items-center gap-2 self-center">
        {persons
          .slice((page - 1) * creditsPagination, page * creditsPagination)
          .map((person, index) => (
            <Link
              key={`credits-person-${index}`}
              href={`/movies/${movie.id}/people/${person.id}`}
              className="relative text-sm"
            >
              {!!person?.profilePath && (
                <Image
                  src={person?.profilePath?.small}
                  alt="affiche"
                  className="rounded"
                  height={300}
                  width={200}
                />
              )}

              {!person?.profilePath && (
                <div
                  className="flex justify-center bg-gray-400 dark:bg-gray-900"
                  style={{ height: 300, width: 200 }}
                >
                  <ImageNotSupported className="self-center text-6xl dark:text-gray-200" />
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 top-0">
                <div className="absolute bottom-0 left-0 right-0 top-0 text-ellipsis p-2 text-center text-lg font-bold text-white ">
                  <div className="absolute bottom-0 left-0 right-0 top-0 p-2 text-center opacity-0 hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black p-0 opacity-50"></div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 mt-1 opacity-0 shadow-lg hover:opacity-100">
                      {person.name}
                    </div>
                    {!!director && index === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 p-2 text-center text-xl font-bold">
                        <Genre
                          name="Director"
                          className="inline text-ellipsis p-2 text-xs font-bold"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>

      {total > 1 && (
        <Pagination
          count={total}
          page={page}
          onChange={handlePaginationChange}
          showFirstButton
          showLastButton
          siblingCount={1}
          boundaryCount={1}
          className="self-center rounded-full bg-zinc-300 p-2 text-white"
        />
      )}
    </>
  )
}
