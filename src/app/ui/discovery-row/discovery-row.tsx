'use client'

import { Card } from '@mui/material'
import Link from 'next/link'
import { Discovery } from '@/app/lib/services/types'
import DiscoveryGenres from '@/app/ui/discovery-genres/discovery-genres'
import MovieVotes from '../movie-votes/movie-votes'
import DiscoveryImage from '../discovery-image/discovery-image'

export default function DiscoveryRow({ discovery }: { discovery: Discovery }) {
  const { title, id, genreIds } = discovery
  return (
    <Link key={`movie-${id}`} href={`movies/${id}`}>
      <Card className="flex w-full gap-2" sx={{ height: 72 }}>
        <DiscoveryImage discovery={discovery} width={48} height={72} />

        <div className="flex grow flex-col justify-end gap-2 p-2 pl-0">
          <span className="grow text-xl">{title}</span>
          <div className="flex">
            {genreIds && !!genreIds.length ? (
              <DiscoveryGenres ids={genreIds} classNames="grow" />
            ) : (
              <p className="grow"></p>
            )}
            <div className="flex items-center gap-2">
              <MovieVotes movie={discovery} size="small" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
