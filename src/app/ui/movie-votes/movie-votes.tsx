import { Discovery } from '@app/lib/service/models/discovery'
import { Movie } from '@app/lib/service/models/movie'
import { Rating } from '@mui/material'

export default function MovieVotes(props: {
  movie: Discovery | Movie
  size: 'small' | 'medium' | 'large'
}) {
  const {
    movie: { voteCount, voteAverage },
    size,
  } = props
  return (
    <>
      <Rating readOnly value={voteAverage / 2} precision={0.1} size={size} />
      {`${voteCount} vote${voteCount > 1 ? 's' : ''}`}
    </>
  )
}
