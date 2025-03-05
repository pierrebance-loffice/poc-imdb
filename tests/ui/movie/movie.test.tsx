import Movie from '@app/ui/movie/movie'
import { render, screen } from '@testing-library/react'
import { mockMovie } from '@tests/mocks/movie'

describe('Movie component', () => {
  it('renders movie card', async () => {
    const MovieComponent = await Movie({ movie: mockMovie() })
    render(MovieComponent)
    expect(screen.getByText('Super movie (2025)')).toBeInTheDocument()
  })

  it('renders no movie credit', async () => {
    const MovieComponent = await Movie({
      movie: mockMovie({ credits: { cast: [], crew: [] } }),
    })
    render(MovieComponent)
    expect(screen.queryByText('Crédits')).not.toBeInTheDocument()
  })

  it('renders movie credits', async () => {
    const MovieComponent = await Movie({ movie: mockMovie() })
    render(MovieComponent)
    expect(screen.getByText('Crédits')).toBeInTheDocument()
  })
})
