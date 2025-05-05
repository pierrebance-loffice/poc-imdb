import { Skeleton } from '@mui/material'

export default function MovieCardSkeleton() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2" style={{ width: '300px' }}>
        <Skeleton variant="rounded" height={450} width={300} />

        <div className="flex flex-col" style={{ width: '300px' }}>
          <div className="flex items-center justify-between" style={{ width: '300px' }}>
            <div className="flex gap-1">
              <Skeleton variant="circular" height={20} width={20} />
              <Skeleton variant="circular" height={20} width={20} />
              <Skeleton variant="circular" height={20} width={20} />
              <Skeleton variant="circular" height={20} width={20} />
              <Skeleton variant="circular" height={20} width={20} />
              <Skeleton variant="circular" height={20} width={20} />
            </div>
            <Skeleton variant="rounded" height={20} width={80} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton variant="rounded" height={30} width={400} />
        <Skeleton variant="rectangular" className="w-full" height={200} width={400} />
        <Skeleton variant="rounded" className="w-1/3" height={20} />
        <Skeleton variant="rounded" className="w-1/2" height={20} />
      </div>
    </div>
  )
}
