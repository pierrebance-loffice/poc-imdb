'use client'

import { Discovery } from '@app/lib/service/models/discovery'
import DiscoveryGenres from '@app/ui/discovery-genres/discovery-genres'
import DiscoveryImage from '@app/ui/discovery-image/discovery-image'
import MovieVotes from '@app/ui/movie-votes/movie-votes'
import { Card } from '@mui/material'
import Link from 'next/link'

export default function DiscoveryCard({ discovery }: { discovery: Discovery }) {
  const { title, id, genres } = discovery
  return (
    <Link key={`movie-${id}`} href={`movies/${id}`}>
      <Card className="flex flex-col" sx={{ width: 240, height: 520 }}>
        <DiscoveryImage discovery={discovery} width={240} height={360} />

        <div className="flex grow flex-col justify-end gap-2 p-2">
          <span className="grow text-xl">{title}</span>
          <p>
            <DiscoveryGenres genres={genres} classNames="inline" />
          </p>
          <div className="flex justify-between gap-2">
            <MovieVotes movie={discovery} size="small" />
          </div>
        </div>
      </Card>
    </Link>
  )
}
