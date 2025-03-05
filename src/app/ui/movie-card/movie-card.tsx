'use client'

import { Movie } from '@app/lib/service/models/movie'
import Genre from '@app/ui/genre/genre'
import MovieVideo from '@app/ui/movie-video/movie-video'
import MovieVotes from '@app/ui/movie-votes/movie-votes'
import { ImageNotSupported, Star } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

export default function MovieCard({
  movie,
  compact,
  personRole,
}: {
  movie: Movie
  compact: boolean
  personRole?: string
}) {
  const { posterPath, title, genres } = movie
  const videos = useMemo(
    () =>
      (movie.videos || []).filter(({ site }) => site === 'YouTube').slice(0, 4),
    [movie]
  )

  const size1 = compact ? 'text-xl' : 'text-4xl'
  const size2 = compact ? 'text-lg' : 'text-xl'
  const size3 = compact ? 'text-sm' : 'text-lg'
  const size4 = compact ? 'text-xs' : 'text-sm'

  const widthPic = compact ? 200 : 300
  const heightPic = compact ? 300 : 450

  return (
    <>
      <h1 className={size1}>
        {title}
        {!!movie.releaseDate && ` (${movie.releaseDate.getFullYear()})`}
      </h1>

      {!!personRole && (
        <div className="flex items-center text-blue-500">
          <Star />
          <span className={size2}>{personRole}</span>
        </div>
      )}

      <div className={`flex gap-2 ${size3}`}>
        {genres.map((genre) => (
          <Genre key={genre} name={genre} className={`p-2 ${size2}`} />
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2" style={{ width: widthPic }}>
          {!!posterPath && (
            <Image
              src={posterPath.big}
              alt="poster"
              className="flex rounded"
              height={heightPic}
              width={widthPic}
            />
          )}
          {!posterPath && (
            <div
              data-testid="no-poster"
              className="flex justify-center bg-gray-400 dark:bg-gray-900"
              style={{ height: heightPic, width: widthPic }}
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

        <div className={`flex flex-col gap-2 ${size3}`}>
          {!!movie.tagline && <span className="italic">{movie.tagline}</span>}

          {!!movie.overview && (
            <div className="inline-block">
              <span className="font-bold">Résumé du film</span>
              <span> - </span>
              <span>{movie.overview}</span>
            </div>
          )}

          {!compact && (
            <>
              {movie.homepage && (
                <Link
                  href={movie.homepage}
                  className={`${size4} text-blue-500 underline hover:text-blue-800`}
                >
                  Lien vers le site du film
                </Link>
              )}

              {!!movie.imdbId && (
                <Link
                  href={`https://www.imdb.com/title/${movie.imdbId}`}
                  className={`${size4} text-blue-500 underline hover:text-blue-800`}
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
