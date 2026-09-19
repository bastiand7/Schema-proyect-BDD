const pool = require('../config/db');

const obtenerInventario = async (req, res) => {
  try {
    const [productos] = await pool.query('SELECT * FROM Producto');
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener el inventario',
      error: error.message
    });
  }
};

module.exports = { obtenerInventario };
