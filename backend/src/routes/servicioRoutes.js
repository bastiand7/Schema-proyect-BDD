const express = require('express');
const { obtenerAgenda } = require('../controllers/servicioController');

const router = express.Router();

router.get('/', obtenerAgenda);

module.exports = router;
