import React, { useState } from 'react';
import '../index.css';
import emailjs from 'emailjs-com';

const Contacto = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('form'); // 'form', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.send(
      'consulta_web25',
      'template_nxqhfc4',
      formData,
      'cDbyBHp6-t5fDaf_A'
    ).then(
      () => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      () => {
        setStatus('error');
      }
    );
  };

  // Mensaje dinámico según el estado
  if (status === 'success') {
    return (
      <div className="mensaje-exito">
        <h3> <n>Mensaje enviado con éxito</n></h3>
        <p>Nos pondremos en contacto contigo pronto.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="mensaje-error">
        <h3><n>Hubo un error al enviar el mensaje</n></h3>
        <p>Por favor, inténtalo de nuevo más tarde.</p>
        <button onClick={() => setStatus('form')}>Volver</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
            <option value="" disabled>Selecciona un asunto</option>
            <option value="Consulta">Consulta</option>
            <option value="Soporte">Soporte</option>
            <option value="Otros">Otros</option>
        </select>
      </div>
      <div className="form-row2">
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default Contacto;
