import './Footer.scss'
import Button from '../ButtonComp/ButtonComp'

// Image imports

import linkedin from '../../assets/images/logo-linkedin.svg'
import bluesky from '../../assets/images/logo-bluesky.svg'
import avatars from '../../assets/images/image-avatars.webp'
import stars from '../../assets/images/icon-star.svg'
import arrowUp from '../../assets/images/icon-arrow-up.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
                src={arrowUp}
                alt="icon arrow up"
              />
            </Button>
          </div>
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
              <p className="cta__data cta__data--white">
                200+ developers joined already
              </p>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <div className="info">
            <p className="info__year">©{currentYear} - Tech Book Club</p>
          </div>
          <div className="socials">
            <a href="#">
              <img src={bluesky} alt="blue sky logo" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
