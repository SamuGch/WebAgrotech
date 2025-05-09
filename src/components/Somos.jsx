import React from 'react';
import '../index.css';
import background from '../assets/media/Agricultural.jpeg';

const Somos = () => {
  return (
    <section
      id="somos"
      className="fullscreen"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
      }}
      
    >
      <div className="container">
        <div className="img_container"></div>
        <div className="texto">
          <p>
            AGROTECH es una solución innovadora diseñada para optimizar el monitoreo y control de cultivos. <br />
            Nuestra aplicación permite a los agricultores supervisar en tiempo real la ubicación y desempeño de su equipo,
            mejorando la eficiencia operativa y reduciendo costos. 🌱📍
          </p>
        </div>
      </div>
    </section>
  );
};

export default Somos;
