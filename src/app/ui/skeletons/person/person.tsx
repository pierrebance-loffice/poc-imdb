import { Skeleton } from '@mui/material'
import PersonCardSkeleton from '@app/ui/skeletons/person-card/person-card'

export default function PersonSkeleton() {
  return (
    <div className="mx-auto mt-2 flex w-full max-w-7xl flex-col justify-between gap-4 text-sm">
      <Skeleton variant="text" height={60} className="w-4/12" />
      <PersonCardSkeleton />
    </div>
  )
}
