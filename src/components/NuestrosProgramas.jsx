// NuestrosProgramas.jsx
import React, { useState } from 'react';
import inventarios from '../assets/media/SistemaDeInventarios.avif';
import gps from '../assets/media/SistemaGPS.jpg';
import fumigacion from '../assets/media/fumigacion.jpg';
import ProgramModal from './ProgramModal'; // solo una vez
import '../index.css';

const NuestrosProgramas = () => {
  const [modalInventarioVisible, setModalInventarioVisible] = useState(false);
  const [modalGPSVisible, setModalGPSVisible] = useState(false);

  return (
    <section
      id="nuestrosProgramas"
      className="fullscreen"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${fumigacion})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <h2>NUESTROS PROGRAMAS</h2>
      <div className="container">
        <div className="programas">

          {/* Carta 1: Inventarios */}
          <div
            className="carta"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${inventarios})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <h3>SISTEMA DE INVENTARIOS</h3>
            <button
              className="buttonProgra"
              onClick={() => setModalInventarioVisible(true)}
            >
              Más info
            </button>
          </div>
          <ProgramModal
            showModal={modalInventarioVisible}
            handleModal={() => setModalInventarioVisible(false)}
            id="modalInventarios"
            title="Sistema de Inventarios"
            content={
              <div>
                <p>
                  En <b>AGROTECH</b>, entendemos que una gestión eficiente de insumos, herramientas y productos agrícolas es fundamental para el éxito y sostenibilidad del sector agropecuario. 
                  Por ello, hemos desarrollado un <b>Sistema de Inventarios Virtuales</b> especializado en el área de Agronomía, diseñado para modernizar y optimizar el control de recursos en fincas, cooperativas, centros de acopio y empresas agrícolas.
                </p>

                <p>
                  Nuestro sistema permite llevar un registro detallado y en tiempo real de insumos como fertilizantes, semillas, pesticidas, herramientas y maquinaria, así como productos cosechados, facilitando la trazabilidad y reduciendo pérdidas por caducidad, mal manejo o falta de stock.
                </p>

                <p>
                  Con una interfaz intuitiva y accesible desde cualquier dispositivo con conexión a internet, el sistema ofrece funcionalidades como:
                </p>

                <ul>
                  <li>Registro y clasificación automática de productos agrícolas.</li>
                  <li>Control de entradas y salidas con alertas de stock mínimo.</li>
                  <li>Reportes automáticos de inventario para facilitar la toma de decisiones.</li>
                  <li>Historial de movimientos por lote, proveedor o responsable.</li>
                  <li>Integración con dispositivos móviles para escaneo de códigos y geolocalización.</li>
                </ul>

                <p>
                  <b>AGROTECH</b> apuesta por la innovación tecnológica en el agro, ayudando a productores y técnicos a mantener el control total de sus recursos, optimizando los procesos logísticos y mejorando la productividad en el campo.
                </p>

                <p>
                  Con el Sistema de Inventarios Virtuales de AGROTECH, <b>el campo entra en la era digital</b>.
                </p>
              </div>
            }
          />

          {/* Carta 2: Seguimiento */}
          <div
            className="carta"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(${gps})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <h3>SISTEMA DE SEGUIMIENTO</h3>
            <button
              className="buttonProgra"
              onClick={() => setModalGPSVisible(true)}
            >
              Más info
            </button>
          </div>
          <ProgramModal
            showModal={modalGPSVisible}
            handleModal={() => setModalGPSVisible(false)}
            id="modalGPS"
            title="Sistema de Seguimiento"
            content={
              <div>
              <p>
                En <b>AGROTECH</b>, seguimos comprometidos con la innovación tecnológica al servicio del campo. 
                Por eso hemos creado el <b>Sistema de Seguimiento de Fumigación de Cultivos</b>, una herramienta digital diseñada para mejorar la planificación, ejecución y control de las aplicaciones fitosanitarias en las unidades de producción agrícola.
              </p>
          
              <p>
                Este sistema permite a productores, ingenieros agrónomos y encargados de campo llevar un registro preciso y en tiempo real de todas las actividades de fumigación realizadas en los cultivos, considerando factores como el tipo de producto aplicado, dosis, fecha, responsable, condiciones climáticas y área tratada.
              </p>
          
              <p>Entre sus principales funcionalidades se encuentran:</p>
              <ul>
                <li>Programación de fumigaciones por cultivo, etapa fenológica o tipo de plaga.</li>
                <li>Registro digital de cada aplicación con geolocalización.</li>
                <li>Alertas automáticas sobre intervalos de reentrada y carencia.</li>
                <li>Reportes técnicos e históricos por parcela o cultivo.</li>
                <li>Integración con sensores y dispositivos móviles para facilitar el monitoreo en campo.</li>
              </ul>
          
              <p>
                El Sistema de Seguimiento de Fumigación de <b>AGROTECH</b> no solo garantiza un mejor control y trazabilidad, 
                sino que también promueve el uso responsable de agroquímicos, contribuyendo a una producción más eficiente, segura y sostenible.
              </p>
          
              <p>
                Con <b>AGROTECH</b>, <b>el manejo fitosanitario de los cultivos da un paso hacia el futuro</b>.
              </p>
            </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default NuestrosProgramas;
