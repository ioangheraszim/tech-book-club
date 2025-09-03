import './Footer.scss'
import Button from '../button/Button'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <h2 className="title title--white">
            Ready to debug your reading list?
          </h2>

          <div className="footer__cta">
            <Button
              className="btn btn--flex btn--footer"
              text="REVIEW MEMBERSHIP OPTIONS"
            >
              <img
                className="bouncy__image"
                src="./src/assets/images/icon-arrow-up.svg"
                alt="icon arrow up"
              />
            </Button>
          </div>
          <div className="cta__testimonial">
            <img
              className="cta__image"
              src="./src/assets/images/image-avatars.webp"
              alt="images of people who wrote testimonials"
            />
            <div className="cta__rating">
              <div className="stars">
                <img src="./src/assets/images/icon-star.svg" alt="star" />
                <img src="./src/assets/images/icon-star.svg" alt="star" />
                <img src="./src/assets/images/icon-star.svg" alt="star" />
                <img src="./src/assets/images/icon-star.svg" alt="star" />
                <img src="./src/assets/images/icon-star.svg" alt="star" />
              </div>
              <p className="cta__data cta__data--white">
                200+ developers joined already
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
