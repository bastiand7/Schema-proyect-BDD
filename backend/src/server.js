const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const clienteRoutes = require('./routes/clienteRoutes');
const productoRoutes = require('./routes/productoRoutes');
const servicioRoutes = require('./routes/servicioRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Permite solicitudes desde el futuro frontend.
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de RG Climas funcionando');
});

app.use('/api/clientes', clienteRoutes);
app.use('/api/inventario', productoRoutes);
app.use('/api/agenda', servicioRoutes);
app.use('/api/movimientos', inventarioRoutes);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
