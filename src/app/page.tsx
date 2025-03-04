import Discoveries from '@/app/ui/discoveries/discoveries'
import BaseLayout from './ui/base-layout/base-layout'
import { Metadata } from 'next'
import { discoverMovies } from './lib/service/api/discovery'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MyIMDB",
    keywords: ["cinema", "movies", "actors", "directors"],
    description: "Descripption for this home page"
  }
}

export default async function Home() {
  const discoveries = await discoverMovies(1, 'popularity.desc')
  return (
    <BaseLayout enableButton={false}>
      <Discoveries apiPage={1} displayPage={1} sorting='popularity.desc' discoveries={discoveries} />
    </BaseLayout>
  )
}
