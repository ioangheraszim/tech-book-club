import { render, screen } from '@testing-library/react'
import Membership from './Membership'
import { describe, it, expect } from 'vitest'

describe('Membership', () => {
  it('renders pricing options', () => {
    render(<Membership />)
    expect(screen.getByText(/Starter/i)).toBeInTheDocument()
    expect(screen.getByText(/Pro/i)).toBeInTheDocument()
    expect(screen.getByText(/Enterprise/i)).toBeInTheDocument()
  })
})
