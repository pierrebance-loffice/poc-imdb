import { Grid2 } from '@mui/material'
import { Discovery } from '@app/lib/service/models/discovery'
import DiscoveryCard from '@app/ui/discovery-card/discovery-card'

export default function DiscoveriesGrid({
  discoveries,
}: {
  discoveries: Discovery[]
}) {
  return (
    <Grid2 container columns={5} rowSpacing={2} columnSpacing={2}>
      {discoveries.map((discovery) => (
        <Grid2 key={`grid-${discovery.id}`} size={1}>
          <DiscoveryCard discovery={discovery} />
        </Grid2>
      ))}
    </Grid2>
  )
}
