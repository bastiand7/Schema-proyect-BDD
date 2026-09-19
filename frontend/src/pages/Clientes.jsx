import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const cargarClientes = async () => {
      try {
        const respuesta = await api.get('/clientes');
        setClientes(respuesta.data);
      } catch (error) {
        setError(error.message);
      }
    };

    cargarClientes();
  }, []);

  return (
    <section>
      <h2>Directorio de Clientes</h2>

      {error ? (
        <p>Error al cargar los clientes: {error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.idCliente}>
                <td>{cliente.idCliente}</td>
                <td>{`${cliente.nombres} ${cliente.apellidos}`}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Clientes;
