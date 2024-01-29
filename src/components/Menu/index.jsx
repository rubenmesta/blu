import React from 'react';

export default function Menu() {
  return (
    <section id="diner" class="uk-section uk-section-large">
      <div class="uk-container">
        <div class="uk-grid uk-child-width-1-2@l uk-flex-middle">
          <div uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true">
            <h2 class="uk-margin-small-top menu-title">Dinner Menu</h2>
            <div class="menu-content">
              <table class="uk-table">
                <thead>
                  <tr>
                    <th scope="col">Menu Item</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Mushroom Flatbread</strong> - Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Consequuntur
                      repudiandae eos repellat aliquam inventore deleniti
                      aspernatur ut
                    </td>
                    <td>$12</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bison Burger</strong> - Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Consequuntur
                      repudiandae eos repellat aliquam inventore deleniti
                      aspernatur ut
                    </td>
                    <td>$15</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Buffalo Chicken Wrap</strong> - Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Consequuntur
                      repudiandae eos repellat aliquam inventore deleniti
                      aspernatur ut
                    </td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>MIxed Green Salad</strong> - Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Consequuntur
                      repudiandae eos repellat aliquam inventore deleniti
                      aspernatur ut
                    </td>
                    <td>$12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            class="uk-margin"
            uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true"
          >
            <img src="./img/steak.jpg" alt="" uk-img="" />
          </div>
        </div>
      </div>
    </section>
  );
}
