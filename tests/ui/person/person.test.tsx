import Person from '@app/ui/person/person'
import { render, screen } from '@testing-library/react'
import { mockPerson } from '@tests/mocks/person'

describe('Person component', () => {
  it('renders person card', async () => {
    const PersonComponent = await Person({ person: mockPerson() })
    render(PersonComponent)
    expect(screen.getByText('Smeagol')).toBeInTheDocument()
  })

  it('renders no person credit', async () => {
    const PersonComponent = await Person({
      person: mockPerson({ credits: { cast: [], crew: [] } }),
    })
    render(PersonComponent)
    expect(screen.queryByText('Crédits')).not.toBeInTheDocument()
  })

  it('renders person credits', async () => {
    const PersonComponent = await Person({ person: mockPerson() })
    render(PersonComponent)
    expect(screen.getByText('Crédits')).toBeInTheDocument()
  })
})
