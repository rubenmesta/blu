import React from 'react';

export default function Footer() {
  return (
    <footer className="uk-section uk-section-secondary footer">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large" uk-grid>
          <div className="uk-width-1-3@m footer-item">
            <h5>
              Sign Up for <span id="lower-case">e</span>Newsletter
            </h5>
            <form id="newsletter">
              <div>
                <input
                  className="uk-input uk-form-width-medium news-email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <button className="uk-button uk-button-default news-btn">
                  Submit
                </button>
              </div>
            </form>
            <div className="social-icons">
              <a href="" className="uk-icon-button" uk-icon="twitter"></a>
              <a href="" className="uk-icon-button" uk-icon="facebook"></a>
              <a href="" className="uk-icon-button" uk-icon="instagram"></a>
            </div>
          </div>
          <div className="uk-width-1-3@m footer-item">
            <h5>DINNER HOURS</h5>
            <ul className="uk-list">
              <li>Monday – Thursday: 5:00pm – 9:30pm</li>
              <li>Friday and Saturday: 5:00pm – 10:00pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="uk-width-1-3@m footer-item">
            <h5>CONTACT US</h5>
            <ul className="uk-list">
              <li>Call Us: 317.598.8863</li>
              <li>Location: 1234 E 96th St. Cambridge, MA 01234</li>
              <li>
                Email:{' '}
                <a href="mailto:blu@guestservices.com">blu@guestservices.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
