import { render, screen } from '@testing-library/react'
import Journey from './Journey'
import { describe, it, expect } from 'vitest'

describe('Journey', () => {
  it('renders timeline section', () => {
    render(<Journey />)
    expect(screen.getByText(/Your tech reading journey/i)).toBeInTheDocument()
  })
})
