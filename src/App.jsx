import Hero from './components/Hero/Hero'
import { lazy, Suspense } from 'react'

const Features = lazy(() => import('./components/Features/Features'))
const Journey = lazy(() => import('./components/Journey/Journey'))
const Membership = lazy(() => import('./components/Membership/Membership'))
const Testimonials = lazy(() => import('./components/Testimonial/Testimonial'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Journey />
      <Membership />
      <Testimonials />
      <Footer />
      <Suspense fallback={<div className="loader">Loading...</div>}></Suspense>
    </>
  )
}

export default App
