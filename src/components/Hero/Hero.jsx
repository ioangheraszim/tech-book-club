import './Hero.scss'
import Button from '../button/Button'
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="">
            <nav>
              <div>
                <img
                  className="logo"
                  src="./src/assets/images/logo.svg"
                  alt="tech book club logo"
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
                      src="./src/assets/images/icon-arrow-down.svg"
                      alt="arrow down for button"
                    />
                  </Button>
                  <div className="cta__testimonial">
                    <img
                      className="cta__image"
                      src="./src/assets/images/image-avatars.webp"
                      alt=""
                    />
                    <div className="cta__rating">
                      <span className="stars">
                        <img src="./src/assets/images/icon-star.svg" alt="" />
                        <img src="./src/assets/images/icon-star.svg" alt="" />
                        <img src="./src/assets/images/icon-star.svg" alt="" />
                        <img src="./src/assets/images/icon-star.svg" alt="" />
                        <img src="./src/assets/images/icon-star.svg" alt="" />
                      </span>
                      <p className="cta__data">
                        200+ developers joined already
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__image">
                <img src="./src/assets/images/image-hero.webp" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
