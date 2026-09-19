const express = require('express');
const { obtenerInventario } = require('../controllers/productoController');

const router = express.Router();

router.get('/', obtenerInventario);

module.exports = router;
