import {useState, useEffect} from 'react';
import '../index.css'; //estilos
import logo from '../assets/media/Logo.png';

const Header = () => { 
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  // Cierra el menú al cambiar el tamaño de pantalla a grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuAbierto(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="logoOficial" className="logo-img" />
        <p className="logo">A G R O T E C H</p>
      </div>

      <button className = "menu-button" onClick={toggleMenu}>
        ☰
      </button>

      <nav className= {menuAbierto ? 'active': ''}>
        <a href="#somos" onClick = {cerrarMenu}>¿Quiénes somos?</a>
        <a href="#nuestrosProgramas" onClick = {cerrarMenu}>Más de nosotros</a>
        <a href="#final"onClick = {cerrarMenu} >Contáctanos</a>
      </nav>
    </header>
  );
};

export default Header;
