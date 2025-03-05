import { Skeleton } from '@mui/material'

import MovieGridSkeleton from '@app/ui/skeletons/movie-grid/movie-grid'

export default function MoviesSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton variant="rectangular" height={68} className="w-full" />
      <div className=" mx-auto mt-4 flex w-full max-w-7xl flex-col justify-between gap-5 text-sm">
        <Skeleton variant="text" height={40} className="w-4/12" />
        <Skeleton
          variant="rectangular"
          height={70}
          className="flex items-center"
        />
        <MovieGridSkeleton />
      </div>
    </div>
  )
}
