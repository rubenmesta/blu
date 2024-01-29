import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SectionContent from '../components/Section';
import Specials from '../components/Specials';
import Menu from '../components/Menu';
import Event from '../components/Event';

const Menus = () => {
  return (
    <>
      <Hero
        srcSet="./img/menu-banner.jpg"
        src="./img/blu-homepage-mobile.jpg"
        title={'Menus'}
      />
      <Menu />
      <Event />
      <Specials />
    </>
  );
};

export default Menus;
