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
            En nuestro emprendimiento nos dedicamos al desarrollo de software especializado para optimizar las tareas en el ámbito agrícola.
            Creemos en el poder de la tecnología como herramienta clave para modernizar y hacer más eficientes los procesos del campo.
          </p>
          <p>
            Actualmente, contamos con un sistema innovador de inventarios y control de seguimiento diseñado específicamente para el área de fumigación.
            Esta solución permite llevar un control preciso de insumos, programar y monitorear fumigaciones, y generar reportes que facilitan la toma de decisiones,
            garantizando una gestión más segura, eficiente y sostenible.
          </p>
          <p>
            Nuestro objetivo es seguir creando herramientas tecnológicas que apoyen al agricultor en su labor diaria,
            contribuyendo al desarrollo de una agricultura más inteligente y productiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Somos;
