const pool = require('../config/db');

const obtenerAgenda = async (req, res) => {
  try {
    const consulta = `
SELECT
  s.idServicio, s.fechaProgramada, s.horaInicio, s.horaFin, s.estado, s.tipoServicio,
  CONCAT(c.nombres, ' ', c.apellidos) AS cliente_nombre,
  CONCAT(u.nombres, ' ', u.apellidos) AS tecnico_nombre
FROM Servicio s
JOIN Cliente c ON s.idCliente = c.idCliente
JOIN Usuario u ON s.idUsuario = u.idUsuario;`;

    const [servicios] = await pool.query(consulta);
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener la agenda',
      error: error.message
    });
  }
};

module.exports = { obtenerAgenda };
