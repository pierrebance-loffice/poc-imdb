import { Person, PersonMovie } from '@app/lib/service/models/person'

export const mockImage = (type: string, id: string, size: string) =>
  `http://localhost:3000/${type}/${id}/${size}`

export const mockImages = (type: string, id: string) => {
  return {
    small: mockImage(type, id, 'small'),
    big: mockImage(type, id, 'big'),
  }
}

export const mockPersonMovie = (
  overrides?: Partial<PersonMovie>
): PersonMovie => {
  return {
    id: 123,
    title: 'Super movie',
    posterPath: mockImages('poster', '123'),
    ...overrides,
  }
}

export const mockPerson = (overrides?: Partial<Person>): Person => {
  return {
    id: 1,
    name: 'Smeagol',
    birthday: new Date('2012-01-01'),
    biography: 'I got a precious',
    popularity: 1000,
    homepage: 'http://www.gollum.com',
    imdbId: '12345',
    images: [mockImages('profile', '1/1'), mockImages('profile', '1/2')],
    knownForDepartment: 'Acting',
    character: 'Gollum',
    placeOfBirth: 'The Shire',
    profilePath: mockImages('profile', '1'),
    credits: {
      cast: [
        mockPersonMovie({
          id: 234,
          title: 'The fellowship of the ring',
          posterPath: mockImages('poster', '234'),
        }),
        mockPersonMovie({
          id: 345,
          title: 'The two towers',
          posterPath: mockImages('poster', '345'),
        }),
        mockPersonMovie({
          id: 456,
          title: 'The return of the king',
          posterPath: mockImages('poster', '456'),
        }),
      ],
      crew: [mockPersonMovie()],
    },
    ...overrides,
  }
}
