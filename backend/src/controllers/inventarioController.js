const pool = require('../config/db');

const registrarSobrante = async (req, res) => {
  try {
    const { idServicio, idProducto, cantidad, condicion, descripcion } = req.body;

    const [resultado] = await pool.execute(
      `INSERT INTO Material_Sobrante
        (idServicio, idProducto, cantidad, condicion, descripcion)
       VALUES (?, ?, ?, ?, ?)`,
      [idServicio, idProducto, cantidad, condicion, descripcion]
    );

    res.status(201).json({
      mensaje: 'Material sobrante registrado correctamente',
      insertId: resultado.insertId
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al registrar el material sobrante',
      error: error.message
    });
  }
};

module.exports = { registrarSobrante };
