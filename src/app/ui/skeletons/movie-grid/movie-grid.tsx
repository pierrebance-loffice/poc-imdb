import { Grid2, Skeleton } from '@mui/material'

export default function MovieGridSkeleton() {
  return (
    <Grid2 container columns={5} rowSpacing={2} columnSpacing={2}>
      <Grid2 key={`grid-1`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-2`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-3`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-4`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-5`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-6`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-7`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-8`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-9`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
      <Grid2 key={`grid-10`} size={1}>
        <Skeleton variant="rectangular" width={240} height={500} />
      </Grid2>
    </Grid2>
  )
}
