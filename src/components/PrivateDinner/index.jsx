import React from 'react';

export default function PrivateDinner() {
  return (
    <section id="private" class="uk-section uk-section-default">
      <div class="uk-container">
        <div class="uk-section uk-section-small">
          <ul
            class="uk-subnav uk-subnav-pill uk-flex uk-flex-center"
            uk-switcher="connect: .uk-switcher; animation: uk-animation-fade"
          >
            <li>
              <a class="uk-border-pill" href="#">
                Events
              </a>
            </li>
            <li>
              <a class="uk-border-pill" href="#">
                Dinner
              </a>
            </li>
            <li>
              <a class="uk-border-pill" href="#">
                Lounge
              </a>
            </li>
          </ul>
        </div>

        <ul class="uk-switcher uk-margin-top uk-margin-bottom">
          <li>
            <div
              class="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src="./img/events.jpg" alt="" uk-img />
              </div>
              <div uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 class="uk-text-primary">MAKE THEM FEEL SPECIAL</h6>
                <h2 class="uk-margin-small-top">Private Events</h2>
                <p>
                  There’s always a good reason to dine at blu grub, but our
                  collection of special deals and occasions make it all the more
                  enticing. Browse our dining events and start planning your
                  next dinner date.
                </p>
                <div class="uk-button uk-button-primary uk-first-column">
                  See Events Menu
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              class="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src="./img/chef-cooking2.jpg" alt="" uk-img />
              </div>
              <div uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 class="uk-text-primary">World-class Cuisine</h6>
                <h2 class="uk-margin-small-top">Menu</h2>
                <p>
                  Whether you’re craving lobster fried green tomatoes, prime New
                  York strip, or a handcrafted cocktail, our menus have it all.
                </p>
                <div class="uk-button uk-button-primary uk-first-column">
                  See Dinner Menus
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              class="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src="./img/happy-hour.jpg" alt="" uk-img />
              </div>
              <div uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 class="uk-text-primary">HAPPY HOUR</h6>
                <h2 class="uk-margin-small-top">BAR B</h2>
                <p>
                  Life gets a little happier every day from 4 to 6pm at Bar B.
                  Enjoy special deals on a wide selection of craft cocktails,
                  microbrews, and wine.
                </p>
                <div class="uk-button uk-button-primary uk-first-column">
                  See Bar Menu
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              class="uk-grid uk-child-width-1-2@l uk-flex-middle"
              uk-grid
              uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium"
            >
              <div>
                <img src="./img/events.jpg" alt="" uk-img />
              </div>
              <div uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 class="uk-text-primary">MAKE THEM FEEL SPECIAL</h6>
                <h2 class="uk-margin-small-top">Private Events</h2>
                <p>
                  There’s always a good reason to dine at blu grub, but our
                  collection of special deals and occasions make it all the more
                  enticing. Browse our dining events and start planning your
                  next dinner date.
                </p>
                <div class="uk-button uk-button-primary uk-first-column">
                  See Events Menu
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
