import PersonMovies from '@app/ui/person-movies/person-movies'
import { render, screen, within } from '@testing-library/react'
import { mockPerson, mockPersonMovie } from '@tests/mocks/person'

describe('PersonMovies component', () => {
  it('renders credits', async () => {
    render(<PersonMovies person={mockPerson()} />)
    expect(screen.getAllByAltText('poster-mini')).toHaveLength(4)
  })

  it('renders credits per batches of 6', async () => {
    const cast = Array.from(Array(10).keys()).map((id) =>
      mockPersonMovie({ id })
    )
    render(
      <PersonMovies person={mockPerson({ credits: { cast, crew: [] } })} />
    )
    expect(screen.getAllByAltText('poster-mini')).toHaveLength(6)
  })

  it('renders the movie name', async () => {
    render(<PersonMovies person={mockPerson()} />)
    expect(
      within(screen.getByTestId('credits-movie-123')).getByText('Super movie')
    ).toBeInTheDocument()
    expect(
      within(screen.getByTestId('credits-movie-234')).getByText(
        'The fellowship of the ring'
      )
    ).toBeInTheDocument()
    expect(
      within(screen.getByTestId('credits-movie-345')).getByText(
        'The two towers'
      )
    ).toBeInTheDocument()
    expect(
      within(screen.getByTestId('credits-movie-456')).getByText(
        'The return of the king'
      )
    ).toBeInTheDocument()
  })
})
