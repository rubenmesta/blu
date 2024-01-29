import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SectionContent from '../components/Section';
import Specials from '../components/Specials';

export default function SpecialEvents() {
  return (
    <>
      <Hero
        srcSet="./img/special-events.jpg"
        src="./img/blu-homepage-mobile.jpg"
        title={'Special Events'}
      />
      <h1 style={{ color: 'black ' }}>Special events</h1>
    </>
  );
}
