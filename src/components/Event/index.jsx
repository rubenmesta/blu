import React from 'react';

export default function Event() {
  return (
    <section class="uk-section uk-section-secondary uk-section-large">
      <div class="uk-container">
        <div class="uk-grid">
          <div class=" uk-width-1-2@m uk-flex-middle">
            <h6>Sunday, April 28th at 6:30 PM</h6>
            <h2 class="uk-margin-small-top uk-h1">
              SILVERADO VINEYARDS WINE DINNER
            </h2>
            <p>
              Enjoy Hors d’ Oeuvres, Five Premium Wines and Four Chef Inspired
              Courses at the Silverado Wine Dinner. Specially Priced Bottles,
              Limited Seating; $125 + tax and gratuity. Reservations are
              required.
            </p>
            <a href="#" class="uk-button uk-button-primary">
              RESERVE A TABLE
            </a>
          </div>

          <div class="uk-width-1-2@m uk-flex-middle uk-align-center">
            <img src="./img/silverado.png" width="400px" uk-img />
          </div>
        </div>
      </div>
    </section>
  );
}
