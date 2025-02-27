import * as React from 'react'
import { Movie as Model } from '@/app/lib/services/types'
import MovieCard from '../movie-card/movie-card'
import MoviePeople from '../movie-people/movie-people'

export default async function Movie({ movie }: { movie: Model }) {
  return (
    <div className="mb-4 mt-4 flex flex-col justify-between gap-5">
      <MovieCard movie={movie} compact={false} />
      <MoviePeople movie={movie} />
    </div>
  )
}
