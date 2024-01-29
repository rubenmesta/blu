import React from 'react';
import styles from './Hero.module.scss';
import clsx from 'classnames';

export default function Hero({ srcSet, src, title }) {
  return (
    <div className={styles.hero}>
      <picture>
        <source
          media="(min-width: 650px)"
          // srcSet="./img/blu-homepage.jpg"
          srcSet={srcSet}
          className="img-responsive"
        />

        <img
          // src="./img/blu-homepage-mobile.jpg"
          src={src}
          className={clsx(styles.imageResponsive, styles.heroImage)}
          alt="chef"
        />
      </picture>
      <div className={styles.homeTitle}>
        Asian-Fused
        <span className="hero-title">{title}</span>
      </div>
    </div>
  );
}
