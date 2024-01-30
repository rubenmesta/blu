import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import PrivateDinner from '../components/PrivateDinner';
import Event from '../components/Event';
import Specials from '../components/Specials';

export default function SpecialEvents() {
  return (
    <>
      <Hero
        srcSet="./img/special-events.jpg"
        src="./img/blu-homepage-mobile.jpg"
        title={'Special Events'}
      />
      <Specials />
      <Event />
      <PrivateDinner />
    </>
  );
}
