import './Journey.scss'
import useInView from '../../hooks/useInView'

export default function Journey() {
  const [ref, isVisible] = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`journey ${isVisible ? 'journey--visible' : ''}`}
    >
      <div className="container">
        <div className="journey__container">
          <h2
            className={`title title--journey ${isVisible ? 'animate-fade-up delay-1' : ''}`}
          >
            Your tech reading journey
          </h2>
          <ul className="journey__list">
            <li
              className={`list__item ${isVisible ? 'animate-slide-left delay-2' : ''}`}
            >
              <div className="numbah">1</div>
              <p>Choose your membership tier</p>
            </li>
            <li
              className={`list__item ${isVisible ? 'animate-slide-left delay-3' : ''}`}
            >
              <div className="numbah">2</div>
              <p>Get your monthly book selection</p>
            </li>
            <li
              className={`list__item ${isVisible ? 'animate-slide-left delay-4' : ''}`}
            >
              <div className="numbah">3</div>
              <p>Join our discussion forums</p>
            </li>
            <li
              className={`list__item ${isVisible ? 'animate-slide-left delay-5' : ''}`}
            >
              <div className="numbah">4</div>
              <p>Attend exclusive meetups</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
