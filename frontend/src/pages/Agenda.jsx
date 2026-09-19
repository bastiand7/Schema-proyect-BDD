import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

function Agenda() {
  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarAgenda = async () => {
      try {
        const respuesta = await api.get('/agenda');
        setServicios(respuesta.data);
      } catch (error) {
        setError(error.message);
      }
    };

    cargarAgenda();
  }, []);

  return (
    <section>
      <h2>Agenda de Servicios</h2>

      {error ? (
        <p>Error al cargar la agenda: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Horario (Inicio - Fin)</th>
              <th>Cliente</th>
              <th>Técnico</th>
              <th>Tipo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {servicios.map((servicio) => (
              <tr key={servicio.idServicio}>
                <td>{servicio.idServicio}</td>
                <td>{servicio.fechaProgramada}</td>
                <td>{`${servicio.horaInicio} - ${servicio.horaFin}`}</td>
                <td>{servicio.cliente_nombre}</td>
                <td>{servicio.tecnico_nombre}</td>
                <td>{servicio.tipoServicio}</td>
                <td>{servicio.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Agenda;
