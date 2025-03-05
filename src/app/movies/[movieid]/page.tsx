import * as React from 'react'
import { getMovie } from '@app/lib/service/api/movie'
import Movie from '@app/ui/movie/movie'
import { Metadata } from 'next'

type Props = {
  params: { movieid: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    title,
    keywords,
    overview: description,
    posterPath,
  } = await getMovie(params.movieid)
  return {
    title,
    keywords,
    description,
    openGraph: {
      images: posterPath ? [posterPath.small] : [],
    },
  }
}

export default async function MovieHome(props: Props) {
  const movie = await getMovie(props.params.movieid)
  return <Movie movie={movie} />
}
