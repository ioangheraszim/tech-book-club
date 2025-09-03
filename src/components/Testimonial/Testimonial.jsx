import './Testimonials.scss'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonial__container">
          <ul className="testimonial__stars">
            <li className="testimonial__star">
              <img
                src="./src/assets/images/icon-star.svg"
                alt=" star image rating"
              />
            </li>
            <li className="testimonial__star">
              <img
                src="./src/assets/images/icon-star.svg"
                alt=" star image rating"
              />
            </li>
            <li className="testimonial__star">
              <img
                src="./src/assets/images/icon-star.svg"
                alt=" star image rating"
              />
            </li>
            <li className="testimonial__star">
              <img
                src="./src/assets/images/icon-star.svg"
                alt=" star image rating"
              />
            </li>
            <li className="testimonial__star">
              <img
                src="./src/assets/images/icon-star.svg"
                alt=" star image rating"
              />
            </li>
          </ul>
          <div className="testimonial__content">
            <blockquote>
              "This book club transformed my technical reading from a solitary
              activity into an enriching community experience. The discussions
              are gold!"
            </blockquote>
            <p className="author">Sara Chen, Software Architect</p>
          </div>
        </div>
      </div>
    </section>
  )
}
