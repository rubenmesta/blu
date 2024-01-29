import React from 'react';
import styles from './Features.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faCalendarAlt,
  faUtensils,
  faGift,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import clsx from 'classnames';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featureContainer}>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faBookOpen} className="fas" />

          <h3>Menus</h3>
          <p>To remain the freshest, the menu changes seasonally.</p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faCalendarAlt} className="fas" />
          <h3>Reservations</h3>
          <p>
            Blu Grub’s is a fine dining restaurant, we make your experience
            memorable.
          </p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faUtensils} className="fas" />
          <h3>Private Dining</h3>
          <p>
            Blu Grub’s Private Dining room is the ideal venue for business
            meetings.
          </p>
        </div>
        <div className={styles.featureItem}>
          <FontAwesomeIcon icon={faGift} className="fas" />
          <h3>Gift Cards</h3>
          <p>
            Gift cards can also be purchased in person at our restaurant
            location.
          </p>
        </div>
      </div>
    </section>
  );
}
