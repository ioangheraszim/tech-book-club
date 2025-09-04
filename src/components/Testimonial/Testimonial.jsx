import './Testimonials.scss'
import useInView from '../../hooks/useInView'

// Image import

import stars from '../../assets/images/icon-star.svg'

export default function Testimonials() {
  const [ref, isVisible] = useInView({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className={`testimonials ${isVisible ? 'testimonials--visible' : ''}`}
    >
      <div className="container">
        <div className="testimonial__container">
          <ul className="testimonial__stars">
            {[...Array(5)].map((_, i) => (
              <li
                key={i}
                className={`testimonial__star ${isVisible ? `animate-fade-up delay-${i + 1}` : ''}`}
              >
                <img src={stars} alt="star image rating" />
              </li>
            ))}
          </ul>
          <div
            className={`testimonial__content ${isVisible ? 'animate-fade-up delay-6' : ''}`}
          >
            <blockquote>
              "This book club transformed my technical reading from a solitary
              activity into an enriching community experience. The discussions
              are gold!"
            </blockquote>
            <p className="author delay-7">Sara Chen, Software Architect</p>
          </div>
        </div>
      </div>
    </section>
  )
}
