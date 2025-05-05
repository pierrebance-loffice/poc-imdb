import MoviePeople from '@app/ui/movie-people/movie-people'
import { render, screen, within } from '@testing-library/react'
import { mockMovie, mockMoviePerson } from '@tests/mocks/movie'

describe('MoviePeople component', () => {
  it('renders credits', async () => {
    render(<MoviePeople movie={mockMovie()} />)
    expect(screen.getAllByAltText('photo-mini')).toHaveLength(3)
  })

  it('renders credits per batches of 6', async () => {
    const cast = Array.from(Array(10).keys()).map((id) => mockMoviePerson({ id }))
    render(<MoviePeople movie={mockMovie({ credits: { cast, crew: [] } })} />)
    expect(screen.getAllByAltText('photo-mini')).toHaveLength(6)
  })

  it('renders the person name', async () => {
    render(<MoviePeople movie={mockMovie()} />)
    expect(within(screen.getByTestId('credits-person-0')).getByText('Mr Director')).toBeInTheDocument()
  })

  it('renders the person tag for director', async () => {
    render(<MoviePeople movie={mockMovie()} />)
    expect(within(screen.getByTestId('credits-person-0')).getByTestId('person-job')).toBeInTheDocument()
  })

  it('renders no person tag for others', async () => {
    render(<MoviePeople movie={mockMovie()} />)
    expect(within(screen.getByTestId('credits-person-1')).queryByTestId('person-job')).not.toBeInTheDocument()
  })
})
