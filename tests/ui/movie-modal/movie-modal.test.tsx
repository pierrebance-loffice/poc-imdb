import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/navigation'
import MovieModal from '@app/ui/movie-modal/movie-modal'
import { mockMovie } from '@tests/mocks/movie'
import { mockPerson } from '@tests/mocks/person'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    back: jest.fn().mockResolvedValue(undefined),
    push: jest.fn().mockResolvedValue(undefined),
  })),
  usePathname: jest.fn(),
}))

describe('MovieModal component', () => {
  const mockRouter = {
    back: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)
  })

  it('renders movie card', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()}></MovieModal>
      </div>
    )
    expect(screen.getByText('Super movie (2025)')).toBeInTheDocument()
  })

  it('renders movie card with cast character', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()} person={mockPerson()}></MovieModal>
      </div>
    )
    expect(screen.getByText('Smeagol: Gollum')).toBeInTheDocument()
  })

  it('renders movie card with crew job', async () => {
    render(
      <div>
        <MovieModal
          movie={mockMovie()}
          person={mockPerson({
            id: 3,
            name: 'Mr Director',
            popularity: 10000,
            job: 'Director',
          })}
        ></MovieModal>
      </div>
    )
    expect(screen.getByText('Mr Director: Director')).toBeInTheDocument()
  })

  it('renders a close button', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()}></MovieModal>
      </div>
    )
    expect(screen.getByTestId('btn-close-movie-modal')).toBeInTheDocument()
  })

  it('closes modal', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()}></MovieModal>
      </div>
    )
    await userEvent.click(screen.getByTestId('btn-close-movie-modal'))
    expect(screen.queryByText('Super movie (2025)')).not.toBeInTheDocument()
    expect(
      screen.queryByTestId('btn-close-movie-modal')
    ).not.toBeInTheDocument()
  })

  it('navigate back', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()}></MovieModal>
      </div>
    )
    await userEvent.click(screen.getByTestId('btn-close-movie-modal'))
    expect(mockRouter.back).toHaveBeenCalledWith()
  })

  it('renders a link to person page', async () => {
    render(
      <div>
        <MovieModal movie={mockMovie()}></MovieModal>
      </div>
    )
    expect(screen.getByText('Consulter la page du film')).toBeInTheDocument()
  })
})
