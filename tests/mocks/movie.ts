import { Movie, MoviePerson } from '@app/lib/service/models/movie'

export const mockMoviePerson = (overrides?: Partial<MoviePerson>): MoviePerson => {
  return {
    id: 1,
    name: 'Smeagol',
    popularity: 1000,
    character: 'Gollum',
    profilePath: {
      small: 'http://localhost:3000/profile/1/small',
      big: 'http://localhost:3000/profile/1/big',
    },
    ...overrides,
  }
}
export const mockMovie = (overrides?: Partial<Movie>): Movie => {
  return {
    id: 123,
    title: 'Super movie',
    keywords: ['action', 'romance', 'paris', 'cars'],
    tagline: 'Bla bla bla',
    genres: ['Comedy', 'Drama'],
    popularity: 1000,
    video: true,
    voteAverage: 9,
    voteCount: 666,
    overview: 'Overview',
    homepage: 'http://www.super-movie.com',
    imdbId: '12345',
    videos: [
      {
        key: 'youtube',
        name: 'Video 1',
        site: 'YouTube',
      },
      {
        key: 'dailymotion',
        name: 'Video 2',
        site: 'Dailymotion',
      },
    ],
    releaseDate: new Date('2025-01-01'),
    posterPath: {
      small: 'http://localhost:3000/poster/123/small',
      big: 'http://localhost:3000/poster/123/big',
    },
    credits: {
      cast: [
        mockMoviePerson(),
        mockMoviePerson({
          id: 2,
          name: 'Elijah Wood',
          popularity: 2000,
          character: 'Frodo',
        }),
      ],
      crew: [
        mockMoviePerson({
          id: 3,
          name: 'Mr Director',
          popularity: 10000,
          job: 'Director',
        }),
        mockMoviePerson({
          id: 4,
          name: 'Mrs Producer',
          popularity: 10000,
          job: 'Producer',
        }),
      ],
    },
    ...overrides,
  }
}
