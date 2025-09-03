import './Journey.scss'

export default function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <div className="journey__container">
          <h2 className="title">Your tech reading journey</h2>
          <ul className="journey__list">
            <li className="list__item">
              <div className="numbah">1</div>
              <p>Choose your membership tier</p>
            </li>
            <li className="list__item">
              <div className="numbah">2</div>
              <p>Get your monthly book selection</p>
            </li>
            <li className="list__item">
              <div className="numbah">3</div>
              <p>Join our discussion forums</p>
            </li>
            <li className="list__item">
              <div className="numbah">4</div>
              <p>Attend exclusive meetups</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
