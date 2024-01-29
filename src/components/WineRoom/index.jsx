import React from 'react';

export default function WineRoom() {
  return (
    <section
      id="lounge"
      class="uk-section uk-section-secondary uk-section-large"
    >
      <div class="uk-container">
        <div class="uk-grid">
          <div
            class=" uk-width-1-2@m uk-flex-middle"
            uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true"
          >
            <h6>Wine Room</h6>
            <h2 class="uk-margin-small-top uk-h1">Bar & Lounge</h2>
            <p>
              Our Bar & Lounge is an ideal celebration venue. Enjoy tableside
              dinners for 16-18 in the Wine Room, or host a party for up to
              forty five guests using the full area including booths, high tops
              and the bar.
            </p>

            <p>
              Larger parties of up to 150 can be accommodated the main dining
              room.
            </p>
            <a href="#" class="uk-button uk-button-primary">
              RESERVE A TABLE
            </a>
          </div>

          <div
            class="uk-width-1-2@m uk-flex-middle uk-align-center"
            uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true"
          >
            <img src="./img/private.jpg" width="400px" uk-img />
          </div>
        </div>
      </div>
    </section>
  );
}
