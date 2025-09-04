import '@testing-library/jest-dom/vitest'

// Mock IntersectionObserver for test environment
class MockIntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver
