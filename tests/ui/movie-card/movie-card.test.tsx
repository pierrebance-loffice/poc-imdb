import MovieCard from '@app/ui/movie-card/movie-card'
import { render, screen } from '@testing-library/react'
import { mockMovie } from '@tests/mocks/movie'

describe('MovieCard component', () => {
  it('renders the poster ', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByAltText('poster')).toBeInTheDocument()
    expect(screen.getByAltText('poster')).toHaveAttribute(
      'src',
      '/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2Fposter%2F123%2Fbig&w=640&q=75',
    )
  })

  it('renders no poster ', async () => {
    render(<MovieCard movie={mockMovie({ posterPath: undefined })} compact={false} />)
    expect(screen.getByTestId('no-poster')).toBeInTheDocument()
  })

  it('renders person role', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} personRole="Job in crew or character in cast" />)
    expect(screen.getByText('Job in crew or character in cast')).toBeInTheDocument()
  })

  it('renders the title and release date', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByText('Super movie (2025)')).toBeInTheDocument()
  })

  it('renders the tagline', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByText('Bla bla bla')).toBeInTheDocument()
  })

  it('renders no tagline', async () => {
    render(<MovieCard movie={mockMovie({ tagline: undefined })} compact={false} />)
    expect(screen.queryByText('Bla bla bla')).not.toBeInTheDocument()
  })

  it('renders the overview', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByText('Résumé du film')).toBeInTheDocument()
    expect(screen.getByText('Overview')).toBeInTheDocument()
  })

  it('renders no overview', async () => {
    render(<MovieCard movie={mockMovie({ overview: undefined })} compact={false} />)
    expect(screen.queryByText('Résumé du film')).not.toBeInTheDocument()
    expect(screen.queryByText('Overview')).not.toBeInTheDocument()
  })

  it('renders no link to movie website', async () => {
    render(<MovieCard movie={mockMovie({ homepage: undefined })} compact={false} />)
    expect(screen.queryByText('Lien vers le site du film')).not.toBeInTheDocument()
  })

  it('renders a link to movie website', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByText('Lien vers le site du film')).toBeInTheDocument()
    expect(screen.getByText('Lien vers le site du film')).toHaveAttribute('href', 'http://www.super-movie.com')
  })

  it('renders no link to movie page on IMDB', async () => {
    render(<MovieCard movie={mockMovie({ imdbId: undefined })} compact={false} />)
    expect(screen.queryByText('Lien vers la page IMDB du film')).not.toBeInTheDocument()
  })

  it('renders a link to movie page on IMDB', async () => {
    render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(screen.getByText('Lien vers la page IMDB du film')).toBeInTheDocument()
    expect(screen.getByText('Lien vers la page IMDB du film')).toHaveAttribute(
      'href',
      'https://www.imdb.com/title/12345',
    )
  })

  it('renders youtube videos', async () => {
    const { container } = render(<MovieCard movie={mockMovie()} compact={false} />)
    expect(container.querySelectorAll('iframe').length).toBe(1)
    expect(container.querySelector('iframe')).toHaveAttribute('src', 'https://www.youtube.com/embed/youtube')
  })

  it('renders in compact mode', async () => {
    const { container } = render(<MovieCard movie={mockMovie()} compact={true} />)
    expect(screen.queryByText('Lien vers la page IMDB du film')).not.toBeInTheDocument()
    expect(screen.queryByText('Lien vers la page IMDB du film')).not.toBeInTheDocument()
    expect(container.querySelectorAll('iframe').length).toBe(0)
  })
})
