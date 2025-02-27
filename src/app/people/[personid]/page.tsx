import * as React from 'react'
import { getPerson } from '@/app/lib/services/persons'
import Person from '@/app/ui/person/person'
import { Metadata } from 'next'

type Props = {
  params: { personid: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const {
    name: title,
    biography: description,
    profilePath,
  } = await getPerson(params.personid)
  return {
    title,
    description,
    openGraph: { images: profilePath ? [profilePath.small] : [] },
  }
}

export default async function PersonHome({ params }: Props) {
  const person = await getPerson(params.personid)
  return <Person person={person} />
}
