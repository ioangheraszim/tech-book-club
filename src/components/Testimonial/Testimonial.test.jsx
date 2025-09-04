import { render, screen } from '@testing-library/react'
import Testimonial from './Testimonial'
import { describe, it, expect } from 'vitest'

describe('Testimonials', () => {
  it('renders user quotes', () => {
    render(<Testimonial />)
    expect(
      screen.getByText(
        /This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!/i
      )
    ).toBeInTheDocument()
  })
})
