'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ImageNotSupported, Star } from '@mui/icons-material'
import { useMemo } from 'react'
import { Movie } from '@/app/lib/services/types'
import Genre from '@/app/ui/genre/genre'
import MovieVideo from '../movie-video/movie-video'
import MovieVotes from '../movie-votes/movie-votes'

export default function MovieCard({
  movie,
  compact,
  role,
}: {
  movie: Movie
  compact: boolean
  role?: string
}) {
  const { posterPath, title, genres } = movie
  const videos = useMemo(
    () =>
      (movie.videos || []).filter(({ site }) => site === 'YouTube').slice(0, 4),
    [movie]
  )
  return (
    <>
      <h1 className="text-4xl">
        {title}
        {!!movie.releaseDate && ` (${movie.releaseDate.getFullYear()})`}
      </h1>

      {!!role && (
        <div className="flex items-center text-blue-500">
          <Star />
          <span className="text-xl italic">{role}</span>
        </div>
      )}

      <div className="flex gap-2">
        {genres.map(({ name }) => (
          <Genre key={name} name={name} className="p-2 text-2xl" />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2" style={{ width: '350px' }}>
          {!!posterPath && (
            <Image
              src={posterPath.big}
              alt="affiche"
              className="flex rounded"
              height={450}
              width={300}
            />
          )}
          {!posterPath && (
            <div
              className="flex justify-center bg-gray-400 dark:bg-gray-900"
              style={{ height: 450, width: 300 }}
            >
              <ImageNotSupported className="self-center text-6xl dark:text-gray-200" />
            </div>
          )}
          <div
            className="flex items-center justify-between"
            style={{ width: '300px' }}
          >
            <MovieVotes movie={movie} size="large" />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-lg">
          {!!movie.tagline && <span className="italic">{movie.tagline}</span>}

          {!!movie.overview && (
            <div className="inline-block">
              <span className="font-bold">Résumé du film</span>
              <span> - {movie.overview}</span>
            </div>
          )}

          {!compact && (
            <>
              {movie.homepage && (
                <Link
                  href={movie.homepage}
                  className="text-sm text-blue-500 underline hover:text-blue-800"
                >
                  Lien vers le site du film
                </Link>
              )}

              {!!movie.imdbId && (
                <Link
                  href={`https://www.imdb.com/title/${movie.imdbId}`}
                  className="text-sm text-blue-500 underline hover:text-blue-800"
                >
                  Lien vers la page IMDB du film
                </Link>
              )}

              {!!videos.length && (
                <>
                  <h3 className="font-xl mt-4">Vidéos</h3>
                  <div className="inline-flex items-start gap-2">
                    {!!videos.length &&
                      videos.map((video) => (
                        <MovieVideo key={video.key} video={video} />
                      ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}
