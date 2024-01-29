import React from 'react';

export default function () {
  return (
    <section class="uk-section uk-section-default">
      <div class="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
        <h2 class="">Contact Us</h2>
      </div>
      <div class="uk-container uk-container-xsmall">
        <form class=" uk-margin contact-us" uk-grid>
          <div class="uk-width-1-1 uk-inline form-input">
            <label class="uk-form-label" for="">
              Name
            </label>

            <input
              id="name"
              class="uk-input"
              type="text"
              placeholder="Full Name"
            />
            <div class="text-error"></div>
          </div>
          <div class="uk-width-1-1 uk-inline form-input">
            <label class="uk-form-label" for="">
              Email
            </label>

            <input
              id="email"
              class="uk-input"
              type="email"
              placeholder="Email"
            />
            <div class="text-error"></div>
          </div>
          <div className="form-inputs form-input">
            <div class="uk-width-1-4@s ">
              <label class="uk-form-label" for="">
                Zip Code
              </label>
              <input
                id="zip"
                name="zip"
                class="uk-input"
                type="text"
                placeholder="Zip Code"
                maxlength="5"
              />
              <div class="text-error"></div>
            </div>
            <div class="uk-width-1-2@s ">
              <label class="uk-form-label" for="">
                City
              </label>
              <input
                id="city"
                name="city"
                class="uk-input"
                type="text"
                placeholder="City"
              />
            </div>
            <div class="uk-width-1-4@s ">
              <label class="uk-form-label" for="">
                State
              </label>
              <input
                id="state"
                name="state"
                class="uk-input"
                type="text"
                maxlength="2"
                placeholder="State"
              />
            </div>
          </div>
          <div class="uk-width-1-1 form-input">
            <label class="uk-form-label" for="">
              Comments
            </label>
            <input
              id="comments"
              class="uk-input"
              type="text"
              placeholder="Comments"
            />
          </div>
          <div className="submit-button-container">
            <button class="uk-button uk-width-1-4@s form-input submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
