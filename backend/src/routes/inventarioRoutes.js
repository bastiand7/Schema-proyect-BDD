const express = require('express');
const { registrarSobrante } = require('../controllers/inventarioController');

const router = express.Router();

router.post('/sobrante', registrarSobrante);

module.exports = router;
