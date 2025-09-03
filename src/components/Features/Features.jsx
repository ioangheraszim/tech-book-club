import './Features.scss'

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__container">
          <div className="features__content">
            <div className="features__image">
              <img
                src="./src/assets/images/image-read-together.webp"
                alt="an image of people reading books"
              />
            </div>
            <div className="features__text">
              <h2 className="title">Read toghether, grow toghether</h2>
              <ul className="features__list">
                <li>
                  Monthly curated techs reads selected by industrial experts
                </li>
                <li>Virtual and in-person meetups for deep-dive discussions</li>
                <li>Early access to new tech book releases</li>
                <li>Author Q&A sessions with tech thought leaders</li>
              </ul>
            </div>
          </div>
          <div className="features__discussion">
            <div className="features__image">
              <img src="./src/assets/images/image-not-average.webp" alt="" />
            </div>
            <div className="features__text">
              <div>
                <h2 className="title">Not your average book club</h2>
                <div className="cirlce-image"></div>
              </div>
              <p className="discussion__text">
                Connect with a community that speaks your language - from
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
