import './Membership.scss'
import Button from '../button/Button'
export default function Membership() {
  return (
    <section className="membership">
      <div className="container">
        <h2 className="title">Membership Options</h2>
        <div className="membership__options">
          <div className="members__card">
            <h3 className="card__name">Starter</h3>
            <div className="price__container">
              <p>
                $19 <span className="price__month">/month</span>
              </p>
              <hr className="card__divider" />
              <ul>
                <li>1 book/month</li>
                <li>Online forums</li>
              </ul>
              <Button className="btn" text="SUBSCRIBE NOW"></Button>
            </div>
          </div>
          <div className="members__card">
            <h3 className="card__name">Pro</h3>
            <div className="price__container">
              <p>
                $29 <span className="price__month">/month</span>
              </p>
              <hr className="card__divider" />
              <ul>
                <li>2 book/month</li>
                <li>Virtual meetups</li>
              </ul>
              <Button className="btn" text="SUBSCRIBE NOW"></Button>
            </div>
          </div>
          <div className="members__card">
            <h3 className="card__name">Enterprise</h3>
            <div className="price__container">
              <p>Custom</p>
              <hr className="card__divider" />
              <ul>
                <li>Team access</li>
                <li>Private sessions</li>
              </ul>
              <Button className="btn" text="SUBSCRIBE NOW"></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
