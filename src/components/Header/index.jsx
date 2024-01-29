import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import mobileStyles from './MobileMenu.module.scss';
import clsx from 'classnames';
import $ from 'jquery';

export const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    document.documentElement.classList.add('mobile-nav-open');
    setMobileNavOpen(true);

    const navigation = document.querySelector('.navigation');
    if (navigation) {
      navigation.classList.add('open');
      navigation.style.left = '0px';

      const itemOpen = document.querySelector('.navigation ul li a.item-open');
      if (itemOpen) {
        itemOpen.scrollIntoView(false);
      }
    }
  };

  const closeMobileNav = (e) => {
    e.preventDefault();
    document.documentElement.classList.remove('mobile-nav-open');
    setMobileNavOpen(false);

    const navigation = document.querySelector('.navigation');
    if (navigation) {
      navigation.classList.remove('open');
      navigation.style.left = '100%';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = $(window).scrollTop();
      if (scroll > 200) {
        $('.header').css('background', '#0f1d2e');
      } else {
        $('.header').css('background', 'rgba(11, 26, 47, 0.7)');
      }
    };

    $(document).ready(function () {
      $(window).scroll(handleScroll);
    });

    // Clean up event listener on component unmount
    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, []); // Run the effect only once on component mount

  return (
    <>
      <header className="header main-header">
        <div className={styles.logo}>
          <a href="/" title="Home" aria-label="Home">
            <img
              className={styles.logo}
              src="./img/logo2.svg"
              alt="Blu's Logo"
            />
          </a>
        </div>
        <nav className={clsx(styles.nav, styles.mainNav)}>
          <ul id="menu-list">
            <li>
              <a href="/menus">Menus</a>
            </li>
            <li>
              <a href="/private-dining">Private Dining</a>
            </li>
            <li>
              <a href="/special-events">Special Events</a>
            </li>
          </ul>
        </nav>
        <a
          id="mobile-menu-btn"
          className={mobileStyles.mobileMenuBtn}
          onClick={openMobileNav}
        >
          <div className={mobileStyles.bar}></div>
          <div className={mobileStyles.bar}></div>
          <div className={mobileStyles.bar}></div>
          {/* <span>Menu</span> */}
        </a>
      </header>
      {/* <!--Mobile Menu --> */}
      {/* <MobileMenu /> */}
      <div className="navigation overlay" style={{ left: '100%' }}>
        <div id="close-menu" className={'closeMenu'} onClick={closeMobileNav}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="45.078px"
            height="45.078px"
            viewBox="0 0 45.078 45.078"
            style={{ background: 'new 0 0 45.078 45.078' }}
          >
            <g id="Close-mobile">
              <polygon
                points="45.078,4.95 40.129,0 22.54,17.589 4.95,0 0,4.95 17.59,22.539 0,40.129 4.95,45.078 22.539,27.488 40.129,45.078
                 45.078,40.128 27.489,22.539 	"
              ></polygon>
            </g>
          </svg>
        </div>
        <div className={'inner'}>
          <ul>
            <li>
              <a className="item-open" href="/menus">
                Menus
              </a>
            </li>
            <li>
              <a className="item-open" href="/private-dining">
                Private Dining
              </a>
            </li>
            <li>
              <a className="item-open" href="/special-events">
                Special Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- end mobile nav--> */}
    </>
  );
};
