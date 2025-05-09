import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import '../index.css'; // estilos

function ProgramModal({ showModal, handleModal, id, title, content }) {
  return (
    <Modal show={showModal} onHide={handleModal} id={id} 
    className="modalProgramas" 
    centered 
    size='xl'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body 
      className='modal-text-justify'>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProgramModal;