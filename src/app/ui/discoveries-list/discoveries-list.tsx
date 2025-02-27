import { Discovery } from '@/app/lib/services/types'
import DiscoveryRow from '@/app/ui/discovery-row/discovery-row'

export default function DiscoveriesList({
  discoveries,
}: {
  discoveries: Discovery[]
}) {
  return (
    <div className="flex flex-col gap-2">
      {discoveries.map((discovery) => (
        <DiscoveryRow key={`row-${discovery.id}`} discovery={discovery} />
      ))}
    </div>
  )
}
