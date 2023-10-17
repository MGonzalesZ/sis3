import React, { useState } from 'react';
import './Recursos.css';
import BarraPrincipal from '../../BarraPrincipal';
import MFooter from '../UI/MFooter'; // Importa el componente MFooter
import MEspacio from '../UI/MEspacio';

export default function Recursos() {
  const [recursosDisponibles, setRecursosDisponibles] = useState([
    { id: 1, nombre: 'Sala de Estudio 1', disponible: true },
    { id: 2, nombre: 'Sala de Estudio 2', disponible: false },
    { id: 3, nombre: 'Laboratorio de Informática', disponible: true },
    // Agregar más recursos y su disponibilidad aquí
  ]);

  const [reservas, setReservas] = useState([]); // Para almacenar las reservas

  const handleReserva = (recursoId) => {
    // Realiza la reserva del recurso
    const recursoReservado = recursosDisponibles.find((recurso) => recurso.id === recursoId);
    if (recursoReservado) {
      recursoReservado.disponible = false; // Marcar como no disponible
      setReservas([...reservas, recursoReservado]); // Agregar a la lista de reservas
    }
  };

  const renderRecursos = () => {
    return recursosDisponibles.map((recurso) => (
      <div key={recurso.id} className="recurso">
        <h3>{recurso.nombre}</h3>
        <p>Disponibilidad: {recurso.disponible ? 'Disponible' : 'No disponible'}</p>
        {recurso.disponible && (
          <button onClick={() => handleReserva(recurso.id)}>Reservar</button>
        )}
      </div>
    ));
  };

  const renderReservas = () => {
    return reservas.map((reserva) => (
      <div key={reserva.id} className="reserva">
        <h3>Reserva de {reserva.nombre}</h3>
        <p>Recurso reservado. No disponible.</p>
      </div>
    ));
  };

  return (
    <div>
      <BarraPrincipal titulo="Consulta y Reserva de Recursos" />
      <MEspacio altura="50px"/>
      <div id="recursos" className="section">
        <h2>Consulta y Reserva de Recursos</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Recursos Disponibles</h3>
              <div className="recursos-lista">{renderRecursos()}</div>
            </div>
            <div className="col-md-6">
              <h3>Reservas Realizadas</h3>
              <div className="reservas-lista">{renderReservas()}</div>
            </div>
          </div>
        </div>
      </div>

      <MFooter /> 
    </div>
  );
}
