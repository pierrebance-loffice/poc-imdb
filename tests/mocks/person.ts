import { Person, PersonMovie } from '@app/lib/service/models/person'

export const mockPersonMovie = (
  overrides?: Partial<PersonMovie>
): PersonMovie => {
  return {
    id: 123,
    title: 'Super movie',
    posterPath: {
      small: 'http://localhost:3000/poster/123/small',
      big: 'http://localhost:3000/poster/123/big',
    },
    ...overrides,
  }
}

export const mockPerson = (overrides?: Partial<Person>): Person => {
  return {
    id: 1,
    name: 'Smeagol',
    birthday: new Date('2012-01-01'),
    biography: 'Biography',
    popularity: 1000,
    homepage: 'http://www.super-movie.com',
    imdbId: '12345',
    images: [
      {
        small: 'http://localhost:3000/profile/1/1/small',
        big: 'http://localhost:3000/profile/1/1/big',
      },
      {
        small: 'http://localhost:3000/profile/1/2/small',
        big: 'http://localhost:3000/profile/1/2/big',
      },
    ],
    knownForDepartment: 'Acting',
    character: 'Gollum',
    placeOfBirth: 'The Shire',
    profilePath: {
      small: 'http://localhost:3000/profile/1/small',
      big: 'http://localhost:3000/profile/1/big',
    },
    credits: {
      cast: [
        mockPersonMovie({
          id: 234,
          title: 'The fellowship of the ring',
          posterPath: {
            small: 'http://localhost:3000/poster/234/small',
            big: 'http://localhost:3000/poster/234/big',
          },
        }),
        mockPersonMovie({
          id: 456,
          title: 'The two towers',
          posterPath: {
            small: 'http://localhost:3000/poster/456/small',
            big: 'http://localhost:3000/poster/456/big',
          },
        }),
        mockPersonMovie({
          id: 567,
          title: 'The return of the king',
          posterPath: {
            small: 'http://localhost:3000/poster/567/small',
            big: 'http://localhost:3000/poster/567/big',
          },
        }),
      ],
      crew: [mockPersonMovie()],
    },
    ...overrides,
  }
}
