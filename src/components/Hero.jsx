import React from 'react';
import '../index.css';
import background from '../assets/media/plantaciones.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="fullscreen"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
      }}
    >
      <h1>AGROTECH</h1>
      <h3>SEMBRANDO LA INNOVACIÓN</h3>
    </section>
  );
};

export default Hero;
