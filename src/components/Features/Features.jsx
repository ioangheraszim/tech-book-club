import './Features.scss'
import useInView from '../../hooks/useInView'

// Image imports

import reading from '../../assets/images/image-read-together.webp'
import discussing from '../../assets/images/image-not-average.webp'

export default function Features() {
  const [ref, isVisible] = useInView({ threshold: 0.4 })

  return (
    <section
      ref={ref}
      className={`features ${isVisible ? 'features--visible' : ''}`}
    >
      <div className="container">
        <div className="features__container">
          <div className="features__content">
            <div
              className={`features__image features__image--left ${isVisible ? 'animate-slide-left' : ''}`}
            >
              <img src={reading} alt="an image of people reading books" />
            </div>
            <div
              className={`features__text ${isVisible ? 'animate-fade-up delay-1' : ''}`}
            >
              <h2 className="title">Read together, grow together</h2>
              <ul className="features__list">
                <li className={isVisible ? 'animate-fade-up delay-2' : ''}>
                  Monthly curated tech reads selected by industry experts
                </li>
                <li className={isVisible ? 'animate-fade-up delay-3' : ''}>
                  Virtual and in-person meetups for deep-dive discussions
                </li>
                <li className={isVisible ? 'animate-fade-up delay-4' : ''}>
                  Early access to new tech book releases
                </li>
                <li className={isVisible ? 'animate-fade-up delay-5' : ''}>
                  Author Q&A sessions with tech thought leaders
                </li>
              </ul>
            </div>
          </div>

          <div className="features__discussion">
            <div
              className={`features__image features__image--right ${isVisible ? 'animate-slide-right delay-6' : ''}`}
            >
              <img src={discussing} alt="people discussing a book" />
            </div>
            <div
              className={`features__text ${isVisible ? 'animate-fade-up delay-7' : ''}`}
            >
              <h2 className="title">Not your average book club</h2>
              <div className="cirlce-image"></div>
              <p className="discussion__text">
                Connect with a community that speaks your language — from
                <span className="boldness"> Python</span> to
                <span className="boldness"> TypeScript</span> and everything in
                between. Our discussions blend technical depth with practical
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
