import './Hero.scss'
import Button from '../ButtonComp/ButtonComp'

// Image imports

import heroImg from '../../assets/images/image-hero.webp'
import logo from '../../assets/images/logo.svg'
import arrowDown from '../../assets/images/icon-arrow-down.svg'
import stars from '../../assets/images/icon-star.svg'
import avatars from '../../assets/images/image-avatars.webp'

export default function Hero() {
  return (
    <>
      <section className={`hero`}>
        <div className="container">
          <div className="">
            <nav>
              <div>
                <img
                  className="logo"
                  src={logo}
                  alt="Tech Book Club logo"
                  width="190"
                  height="35"
                  loading="eager"
                />
              </div>
            </nav>
            <div className="hero__section">
              <div className="hero__content">
                <h1 className="hero__title">
                  Join the ultimate tech book club
                </h1>
                <p className="hero__subtext">
                  Turn your reading time into learning time with fellow tech
                  enthusiasts. Get curated recommendations, join vibrant
                  discussions, and level up your skills one chapter at a time.
                </p>
                <div className="hero__cta">
                  <Button
                    className="btn btn--flex"
                    text="REVIEW MEMBERSHIP OPTIONS"
                    type="button"
                  >
                    <img
                      className="bouncy__image"
                      src={arrowDown}
                      alt="arrow down for button"
                    />
                  </Button>
                  <div className="cta__testimonial">
                    <img
                      className="cta__image"
                      src={avatars}
                      alt="images of people who wrote testimonials"
                    />
                    <div className="cta__rating">
                      <div className="stars">
                        <img src={stars} alt="star" />
                        <img src={stars} alt="star" />
                        <img src={stars} alt="star" />
                        <img src={stars} alt="star" />
                        <img src={stars} alt="star" />
                      </div>
                      <p className="cta__data">
                        200+ developers joined already
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__image">
                <img src={heroImg} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
