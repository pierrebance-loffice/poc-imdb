import { discoverMovies } from '@app/lib/service/api/discovery'
import BaseLayout from '@app/ui/base-layout/base-layout'
import Discoveries from '@app/ui/discoveries/discoveries'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'MyIMDB',
    keywords: ['cinema', 'movies', 'actors', 'directors'],
    description: 'Descripption for this home page',
  }
}

export default async function Home() {
  const discoveries = await discoverMovies(1, 'popularity.desc')
  return (
    <BaseLayout enableButton={false}>
      <Discoveries apiPage={1} displayPage={1} sorting="popularity.desc" discoveries={discoveries} />
    </BaseLayout>
  )
}
