import { useState, useEffect } from 'react'
import { discoverMovies, DiscoveryResults } from '@/app/lib/services/discovery'

export const useDiscoveries = (page: number, sorting: string) => {
  const [loading, setLoading] = useState(true)
  const [discoveries, setDiscoveries] = useState<undefined | DiscoveryResults>()
  const [error, setError] = useState<
    undefined | unknown | { message?: string }
  >()

  useEffect(() => {
    discoverMovies(page, sorting)
      .then(setDiscoveries)
      .catch((e: { status_message?: string }) => setError(e.status_message))
      .finally(() => setLoading(false))
  }, [page, sorting])

  return { error, loading, discoveries }
}
