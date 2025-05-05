'use client'

import { Person } from '@app/lib/service/models/person'
import { ImageNotSupported } from '@mui/icons-material'
import { Pagination } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { sift, unique } from 'radash'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'

const creditsPagination = 6

export default function PersonMovies({ person }: { person: Person }) {
  const movies = useMemo(() => unique(sift([...person.credits.cast, ...person.credits.crew]), ({ id }) => id), [person])

  const total = useMemo(() => Math.ceil(movies.length / creditsPagination), [movies.length])
  const [page, setPage] = useState(1)
  const credits = useMemo(() => movies.slice((page - 1) * creditsPagination, page * creditsPagination), [page, movies])

  const handlePaginationChange = useCallback((event: ChangeEvent<unknown>, value: number) => setPage(value), [setPage])

  if (!movies.length) return

  return (
    <>
      <h2 className="text-2xl">Crédits</h2>

      <div className="flex items-center gap-2 self-center">
        {credits.map((movie) => (
          <Link
            data-testid={`credits-movie-${movie.id}`}
            key={`credits-movie-${movie.id}`}
            href={`/people/${person.id}/movies/${movie.id}`}
            className="relative text-sm"
          >
            {!!movie?.posterPath && (
              <Image
                className="rounded bg-black"
                src={movie?.posterPath?.small}
                alt="poster-mini"
                height={200}
                width={134}
              />
            )}

            {!movie?.posterPath && (
              <div className="flex justify-center bg-gray-400 dark:bg-gray-900" style={{ height: 200, width: 134 }}>
                <ImageNotSupported data-testid="no-poster" className="self-center text-6xl dark:text-gray-200" />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 top-0  p-2 text-center text-lg font-bold text-white opacity-0 hover:opacity-100">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-black p-0 opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 top-0 mt-1 text-ellipsis opacity-0 shadow-lg hover:opacity-100">
                {movie.title}
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
