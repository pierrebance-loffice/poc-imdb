import { Skeleton } from '@mui/material'
import MovieCardSkeleton from '@app/ui/skeletons/movie-card/movie-card'

export default function MovieSkeleton() {
  return (
    <div className="mx-auto mt-2 flex w-full max-w-7xl flex-col justify-between gap-4 text-sm">
      <Skeleton variant="text" height={60} className="w-4/12" />
      <div className="flex gap-2">
        <Skeleton
          variant="rounded"
          className="w-1/6 rounded-full"
          height={30}
        />
        <Skeleton
          variant="rounded"
          className="w-1/6 rounded-full"
          height={30}
        />
        <Skeleton
          variant="rounded"
          className="w-1/6 rounded-full"
          height={30}
        />
        <Skeleton
          variant="rounded"
          className="w-1/6 rounded-full"
          height={30}
        />
      </div>
      <MovieCardSkeleton />
    </div>
  )
}
