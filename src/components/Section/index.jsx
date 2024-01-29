import React from 'react';
import styles from './Section.module.scss';

const SectionContent = () => {
  return (
    <>
      <section className="main">
        <div className="content">
          <div className="img-side-menu"></div>
          <div className="copy-side">
            <h2>
              MENUS
              <span>What's on the menu</span>
            </h2>
            <div className="menu-content">
              <h3 className="subtitle">Intimate Affairs</h3>
              <p>
                Whether you’re craving lobster fried green tomatoes, prime New
                York strip, or a handcrafted cocktail, our menus have it all.
              </p>
              <a href="/menus" className="button">
                View Menu
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="private">
        <div className="content">
          <div className="copy-side">
            <h2>
              Private
              <span>dining</span>
            </h2>
            <div className="menu-content">
              <h3 className="subtitle">Intimate Affairs</h3>
              <p>
                Whether you’re craving lobster fried green tomatoes, prime New
                York strip, or a handcrafted cocktail, our menus have it all.
              </p>
              <a href="/private-dining" className="button">
                View Menu
              </a>
            </div>
          </div>
          <div className="img-side-private"></div>
        </div>
      </section>
    </>
  );
};

export default SectionContent;
