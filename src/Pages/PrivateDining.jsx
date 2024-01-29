import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SectionContent from '../components/Section';
import Specials from '../components/Specials';
import PrivateDinner from '../components/PrivateDinner';
import WineRoom from '../components/WineRoom';
import ContactUs from '../components/ContactUs';

export default function PrivateDining() {
  return (
    <>
      <Hero
        srcSet="./img/private-dining.jpg"
        src="./img/blu-homepage-mobile.jpg"
        title={'Private Dining'}
      />
      <PrivateDinner />
      <WineRoom />
      <ContactUs />
    </>
  );
}
