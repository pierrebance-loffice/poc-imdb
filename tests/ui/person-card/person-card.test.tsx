import PersonCard from '@app/ui/person-card/person-card'
import { render, screen } from '@testing-library/react'
import { mockImages, mockPerson } from '@tests/mocks/person'

describe('PersonCard component', () => {
  it('renders the profile picture ', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getByAltText('photo')).toBeInTheDocument()
    expect(screen.getByAltText('photo')).toHaveAttribute(
      'src',
      '/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2Fprofile%2F1%2Fbig&w=640&q=75'
    )
  })

  it('renders no profile picture ', async () => {
    render(
      <PersonCard
        person={mockPerson({ profilePath: undefined })}
        compact={false}
      />
    )
    expect(screen.getByTestId('no-photo')).toBeInTheDocument()
  })

  it('renders person role', async () => {
    render(
      <PersonCard
        person={mockPerson()}
        compact={false}
        personRole="Job in crew or character in cast"
      />
    )
    expect(
      screen.getByText('Job in crew or character in cast')
    ).toBeInTheDocument()
  })

  it('renders the name', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getByText('Smeagol')).toBeInTheDocument()
  })

  it('renders the birth date', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getByText('01/01/2012')).toBeInTheDocument()
  })

  it('renders no birth place', async () => {
    render(
      <PersonCard
        person={mockPerson({ placeOfBirth: undefined })}
        compact={false}
      />
    )
    expect(screen.queryByText('The Shire')).not.toBeInTheDocument()
  })

  it('renders the birth place', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getByText('The Shire')).toBeInTheDocument()
  })

  it('renders no biography', async () => {
    render(
      <PersonCard
        person={mockPerson({ biography: undefined })}
        compact={false}
      />
    )
    expect(screen.queryByText('Biographie')).not.toBeInTheDocument()
    expect(screen.queryByText('- I got a precious')).not.toBeInTheDocument()
  })

  it('renders biography', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getByText('Biographie')).toBeInTheDocument()
    expect(screen.getByText('- I got a precious')).toBeInTheDocument()
  })

  it('renders no link to person website', async () => {
    render(
      <PersonCard
        person={mockPerson({ homepage: undefined })}
        compact={false}
      />
    )
    expect(
      screen.queryByText('Lien vers le site du film')
    ).not.toBeInTheDocument()
  })

  it('renders a link to person website', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(
      screen.getByText('Lien vers le site de la personne')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Lien vers le site de la personne')
    ).toHaveAttribute('href', 'http://www.gollum.com')
  })

  it('renders no link to person page on IMDB', async () => {
    render(
      <PersonCard person={mockPerson({ imdbId: undefined })} compact={false} />
    )
    expect(
      screen.queryByText('Lien vers la page IMDB de la personne')
    ).not.toBeInTheDocument()
  })

  it('renders a link to person page on IMDB', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(
      screen.getByText('Lien vers la page IMDB de la personne')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Lien vers la page IMDB de la personne')
    ).toHaveAttribute('href', 'https://www.imdb.com/name/12345')
  })

  it('renders person pictures', async () => {
    render(<PersonCard person={mockPerson()} compact={false} />)
    expect(screen.getAllByTestId('photo-mini').length).toBe(2)
  })

  it('renders 16 person pictures max', async () => {
    const images = Array.from(Array(20).keys()).map((id) =>
      mockImages('person', id.toString())
    )
    render(<PersonCard person={mockPerson({ images })} compact={false} />)
    expect(screen.getAllByTestId('photo-mini').length).toBe(16)
  })

  it('renders in compact mode', async () => {
    render(<PersonCard person={mockPerson()} compact={true} />)
    expect(
      screen.queryByText('Lien vers la page IMDB de la personne')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('Lien vers la page IMDB de la personne')
    ).not.toBeInTheDocument()
    expect(screen.queryAllByTestId('photo-mini').length).toBe(0)
  })
})
