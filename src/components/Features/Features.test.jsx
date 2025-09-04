import { render, screen } from '@testing-library/react'
import Features from './Features'
import { describe, it, expect } from 'vitest'

describe('Features component', () => {
  it('renders feature titles', () => {
    render(<Features />)
    expect(
      screen.getByText(/Read together, grow together/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Not your average book club/i)).toBeInTheDocument()
  })
})
