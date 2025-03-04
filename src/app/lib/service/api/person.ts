import { notFound } from 'next/navigation'
import axios from 'axios'
import { cache } from 'react'
import { toPerson } from '@/app/lib/service/adapters/person'
import { IApiPerson, Person } from '../models/person'

export const getPerson = cache(async (id: string): Promise<Person> => {
  const url = `${process.env.API_ENDPOINT}/person/${id}?language=${process.env.API_LANG}&api_key=${process.env.API_KEY}&append_to_response=credits%2Cimages`
  const { data } = await axios.get<IApiPerson>(url)
  if (!data) notFound()
  return toPerson(data)
})
