import { render, screen } from '@testing-library/react'
import Hero from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero component', () => {
  it('renders the hero title', () => {
    render(<Hero />)
    const title = screen.getByText(/Join the ultimate tech book club/i)
    expect(title).toBeInTheDocument()
  })

  it('renders the call to action button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('button', { name: /review membership options/i })
    ).toBeInTheDocument()
  })
})
