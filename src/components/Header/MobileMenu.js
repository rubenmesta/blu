import React, { useState } from 'react';
import mobileStyles from '../../../mobileStyles/MobileMenu.module.scss';
import clsx from 'classnames';

const MobileMenu = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileNav = () => {
    document.documentElement.classList.add('mobile-nav-open');
    setMobileNavOpen(true);

    const navigation = document.querySelector('.navigation') as HTMLDivElement;
    if (navigation) {
      navigation.classList.add('open');
      navigation.style.left = '0px';

      const itemOpen = document.querySelector(
        '.navigation ul li a.item-open'
      ) as HTMLAnchorElement;
      if (itemOpen) {
        itemOpen.scrollIntoView(false);
      }
    }
  };

  const closeMobileNav = (e: React.MouseEvent) => {
    e.preventDefault();
    document.documentElement.classList.remove('mobile-nav-open');
    setMobileNavOpen(false);

    const navigation = document.querySelector('.navigation') as HTMLDivElement;
    if (navigation) {
      navigation.classList.remove('open');
      navigation.style.left = '100%';
    }
  };

  return (
    <>
      {isMobileNavOpen && (
        <div
          className={clsx(mobileStyles.navigation, mobileStyles.overlay)}
          style={{ left: '100%' }}
        >
          <div className={mobileStyles.closeMenu}>
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
          <div className={mobileStyles.inner}>
            <ul>
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
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
