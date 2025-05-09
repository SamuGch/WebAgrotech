import React, { useState } from 'react';
import '../index.css';
import background from '../assets/media/cultivos.jpeg';
import Contacto from './Contacto';
import ProgramModal from './ProgramModal';

const Final = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <section
      id="final"
      className="fullscreen"
      style={{
        background: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
        padding: '3rem 1rem'
      }}
    >
      <div className="cotizacion">
        <h2>¿LISTO PARA EL DESARROLLO?</h2>
        <button className="buttonCotizacion" onClick={handleModal}>
          Contáctanos
        </button>
      </div>

      {/* Modal con formulario de contacto */}
      <ProgramModal
        showModal={showModal}
        handleModal={handleModal}
        id="contactoModal"
        title=<strong>AGROTECH</strong>
        content={<Contacto onSuccess={handleModal} />}
      />
    </section>
  );
};

export default Final;
