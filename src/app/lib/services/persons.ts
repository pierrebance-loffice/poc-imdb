import { notFound } from 'next/navigation'
import axios from 'axios'
import { cache } from 'react'
import { IApiPerson } from '@/app/lib/services/models'
import { Person } from '@/app/lib/services/types'
import { toPerson } from '@/app/lib/services/utils'

export const getPerson = cache(async (id: string): Promise<Person> => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/person/${id}?language=${process.env.NEXT_PUBLIC_API_LANG}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits%2Cimages`
  const { data } = await axios.get<IApiPerson>(url)
  if (!data) notFound()
  return toPerson(data)
})
