import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

const formularioInicial = {
  idServicio: '',
  idProducto: '',
  cantidad: '',
  condicion: '',
  descripcion: ''
};

function Inventario() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [formularioSobrante, setFormularioSobrante] = useState(formularioInicial);

  useEffect(() => {
    const cargarInventario = async () => {
      try {
        const respuesta = await api.get('/inventario');
        setProductos(respuesta.data);
      } catch (error) {
        setError(error.message);
      }
    };

    cargarInventario();
  }, []);

  const manejarCambio = (event) => {
    const { name, value } = event.target;
    setFormularioSobrante((datosActuales) => ({
      ...datosActuales,
      [name]: value
    }));
  };

  const manejarSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.post('/movimientos/sobrante', formularioSobrante);
      alert('Material sobrante registrado correctamente');
      setFormularioSobrante(formularioInicial);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h2>Inventario Actual</h2>

      {error && <p>Error: {error}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Unidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.idProducto}>
              <td>{producto.idProducto}</td>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>{producto.stockActual}</td>
              <td>{producto.unidadMedida}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section>
        <h3>Registrar Material Sobrante</h3>

        <form onSubmit={manejarSubmit}>
          <label htmlFor="idServicio">ID del servicio</label>
          <input
            id="idServicio"
            name="idServicio"
            type="number"
            value={formularioSobrante.idServicio}
            onChange={manejarCambio}
            required
          />

          <label htmlFor="idProducto">ID del producto</label>
          <input
            id="idProducto"
            name="idProducto"
            type="number"
            value={formularioSobrante.idProducto}
            onChange={manejarCambio}
            required
          />

          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            name="cantidad"
            type="number"
            min="0.01"
            step="0.01"
            value={formularioSobrante.cantidad}
            onChange={manejarCambio}
            required
          />

          <label htmlFor="condicion">Condición</label>
          <select
            id="condicion"
            name="condicion"
            value={formularioSobrante.condicion}
            onChange={manejarCambio}
            required
          >
            <option value="">Selecciona una condición</option>
            <option value="Reutilizable">Reutilizable</option>
            <option value="Dañado">Dañado</option>
          </select>

          <label htmlFor="descripcion">Descripción</label>
          <input
            id="descripcion"
            name="descripcion"
            type="text"
            value={formularioSobrante.descripcion}
            onChange={manejarCambio}
          />

          <button type="submit">Registrar Sobrante</button>
        </form>
      </section>
    </section>
  );
}

export default Inventario;
