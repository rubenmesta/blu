import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SectionContent from '../components/Section';
import Specials from '../components/Specials';

export default function HomePage() {
  return (
    <div className="grid-container">
      <Hero
        srcSet="./img/blu-homepage.jpg"
        src="./img/blu-homepage-mobile.jpg"
        title="Cuisine"
      />
      <Features />
      <SectionContent />
      <Specials />
    </div>
  );
}
