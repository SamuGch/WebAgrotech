import React from 'react';
import '../index.css'; //estilos
import logo from '../assets/media/Logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logoOficial" className="logo-img" />
        <p className="logo">A G R O T E C H</p>
      </div>
      <nav>
        <a href="#somos">¿Quiénes somos?</a>
        <a href="#nuestrosProgramas">Más de nosotros</a>
        <a href="#final">Contáctanos</a>
      </nav>
    </header>
  );
};

export default Header;
