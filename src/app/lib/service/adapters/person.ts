import { toImages } from '@app/lib/service/adapters/image'
import {
  IApiPerson,
  IApiPersonMovie,
  Person,
  PersonMovie,
} from '@app/lib/service/models/person'

export function toPersonMovie({
  id,
  poster_path,
  title,
}: IApiPersonMovie): PersonMovie {
  return {
    id,
    title,
    posterPath: poster_path ? toImages(poster_path) : undefined,
  }
}

function toPerson(person: IApiPerson): Person {
  const {
    id,
    name,
    place_of_birth: placeOfBirth,
    biography,
    popularity,
    homepage,
    known_for_department: knownForDepartment,
    job,
    character,
  } = person
  return {
    id,
    name,
    birthday: new Date(person.birthday),
    placeOfBirth,
    biography: biography || undefined,
    popularity,
    profilePath: person.profile_path ? toImages(person.profile_path) : null,
    homepage,
    knownForDepartment,
    job: job || undefined,
    character: character || undefined,
    images: (
      (person.images?.profiles || []).map(({ file_path }) => file_path) || []
    ).map(toImages),
    credits: {
      cast: (person?.credits?.cast || []).map(toPersonMovie),
      crew: (person?.credits?.crew || []).map(toPersonMovie),
    },
    imdbId: person.imdb_id || undefined,
  }
}

export { toPerson }
