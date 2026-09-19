const express = require('express');
const {
  obtenerClientes,
  crearCliente
} = require('../controllers/clienteController');

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);

module.exports = router;
