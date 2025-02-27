import { GenreProvider } from '@/app/contexts/genre-context'
import { getGenres } from '@/app/lib/services/genres'
import Discoveries from '@/app/ui/discoveries/discoveries'
import BaseLayout from './ui/base-layout/base-layout'

export default async function Home() {
  const genres = await getGenres()
  return (
    <GenreProvider data={genres}>
      <BaseLayout enableButton={false}>
        <Discoveries />
      </BaseLayout>
    </GenreProvider>
  )
}
