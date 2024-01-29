import React from 'react';

export const Specials = () => {
  return (
    <section className="uk-section uk-section-default specials">
      <div className="uk-container uk-container-xsmall uk-text-center uk-section ">
        <h2>Events & Specials</h2>
      </div>
      <div className="uk-container">
        <div
          className="uk-grid uk-grid-large uk-child-width-1-3@m"
          uk-grid
          uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium; repeat: true"
        >
          <div className="uk-text-center special-item">
            <img src="./img/happy-hour.jpg" uk-img alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Mondays
            </h4>
            <p>
              Half Price Select Bottles of Wine <br />
              Half Price Chef Select Oysters
            </p>
          </div>
          <div className="uk-text-center special-item">
            <img src="./img/wine.jpg" uk-img alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Wednesdays
            </h4>
            <p>
              Beer ‘N Burger Nite <br /> Half Price Sliders & $5 Craft Pints.
            </p>
          </div>
          <div className="uk-text-center special-item">
            <img src="./img/events.jpg" uk-img alt="Image" />
            <h4 className="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">
              Thursdays
            </h4>
            <p>
              Half Price Select Bar Apps <br /> Live Piano 6pm - 9pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Specials;
