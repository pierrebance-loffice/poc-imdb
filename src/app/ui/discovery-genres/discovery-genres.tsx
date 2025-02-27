'use client'

import { useGenre } from '@/app/hooks/genres'
import Genre from '@/app/ui/genre/genre'

export default function DiscoveryGenres({
  ids,
  classNames,
}: {
  ids: number[]
  classNames?: string
}) {
  const { genres } = useGenre()
  return (
    <div className={`${classNames ?? ''}`}>
      {ids
        .map((id) => genres[id])
        .sort()
        .map((name) => (
          <Genre
            key={name}
            name={name}
            className="mr-1 mt-1 inline-block p-1 text-xs"
          />
        ))}
    </div>
  )
}
