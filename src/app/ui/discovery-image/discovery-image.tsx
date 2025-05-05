import { ImageNotSupported } from '@mui/icons-material'
import { CardMedia } from '@mui/material'
import { Discovery } from '@app/lib/service/models/discovery'

export default function DiscoveryImage({
  discovery,
  width,
  height,
}: {
  discovery: Discovery
  width: number
  height: number
}) {
  return (
    <>
      {!!discovery?.posterPath?.small && (
        <CardMedia title={discovery.title} image={discovery.posterPath.small} sx={{ height, width }} />
      )}
      {!discovery?.posterPath?.small && (
        <div className="flex justify-center bg-slate-50 dark:bg-gray-600" style={{ height, width }}>
          <ImageNotSupported className="self-center text-6xl dark:text-gray-200" />
        </div>
      )}
    </>
  )
}
