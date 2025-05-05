'use client'

import { Discovery } from '@app/lib/service/models/discovery'
import DiscoveryGenres from '@app/ui/discovery-genres/discovery-genres'
import DiscoveryImage from '@app/ui/discovery-image/discovery-image'
import MovieVotes from '@app/ui/movie-votes/movie-votes'
import { Card } from '@mui/material'
import Link from 'next/link'

export default function DiscoveryRow({ discovery }: { discovery: Discovery }) {
  const { title, id, genres } = discovery
  return (
    <Link key={`movie-${id}`} href={`movies/${id}`}>
      <Card className="flex w-full gap-2" sx={{ height: 72 }}>
        <DiscoveryImage discovery={discovery} width={48} height={72} />

        <div className="flex grow flex-col justify-end gap-2 p-2 pl-0">
          <span className="grow text-xl">{title}</span>
          <div className="flex">
            {!!genres.length ? <DiscoveryGenres genres={genres} classNames="grow" /> : <p className="grow"></p>}
            <div className="flex items-center gap-2">
              <MovieVotes movie={discovery} size="small" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
