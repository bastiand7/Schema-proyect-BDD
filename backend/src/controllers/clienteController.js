const pool = require('../config/db');

const obtenerClientes = async (req, res) => {
  try {
    const [clientes] = await pool.query('SELECT * FROM Cliente');
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener los clientes',
      error: error.message
    });
  }
};

const crearCliente = async (req, res) => {
  try {
    const {
      nombres,
      apellidos,
      telefono,
      correo,
      calle_numero,
      colonia,
      ciudad,
      tipoCliente
    } = req.body;

    const [resultado] = await pool.execute(
      `INSERT INTO Cliente
        (nombres, apellidos, telefono, correo, calle_numero, colonia, ciudad, tipoCliente)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombres, apellidos, telefono, correo, calle_numero, colonia, ciudad, tipoCliente]
    );

    res.status(201).json({
      mensaje: 'Cliente creado correctamente',
      insertId: resultado.insertId
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al crear el cliente',
      error: error.message
    });
  }
};

module.exports = { obtenerClientes, crearCliente };
