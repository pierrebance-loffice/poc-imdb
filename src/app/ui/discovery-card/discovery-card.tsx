'use client'

import { Card } from '@mui/material'
import Link from 'next/link'
import { Discovery } from '@/app/lib/services/types'
import DiscoveryGenres from '@/app/ui/discovery-genres/discovery-genres'
import MovieVotes from '../movie-votes/movie-votes'
import DiscoveryImage from '../discovery-image/discovery-image'

export default function DiscoveryCard({ discovery }: { discovery: Discovery }) {
  const { title, id, genreIds } = discovery
  return (
    <Link key={`movie-${id}`} href={`movies/${id}`}>
      <Card className="flex flex-col" sx={{ width: 240, height: 520 }}>
        <DiscoveryImage discovery={discovery} width={240} height={360} />

        <div className="flex grow flex-col justify-end gap-2 p-2">
          <span className="grow text-xl">{title}</span>
          <p>
            {genreIds && !!genreIds.length && (
              <DiscoveryGenres ids={genreIds} classNames="inline" />
            )}
          </p>
          <div className="flex justify-between gap-2">
            <MovieVotes movie={discovery} size="small" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
