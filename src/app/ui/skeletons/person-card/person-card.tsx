import { Skeleton } from '@mui/material'

export default function PersonCardSkeleton() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2" style={{ width: '300px' }}>
        <Skeleton variant="rounded" height={450} width={300} />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton variant="rounded" height={30} width={400} />
        <Skeleton variant="rectangular" className="w-full" height={200} width={400} />
      </div>
    </div>
  )
}
