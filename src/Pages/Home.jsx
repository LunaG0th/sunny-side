import React from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Gallery from '../components/Gallery/Gallery';
import Testimonials from '../components/Testimonials/Testimonials';
// import Title from '../components/Title/Title';


function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
  );
}

export default Home;
