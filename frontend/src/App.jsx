import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Agenda from './pages/Agenda';
import Clientes from './pages/Clientes';
import Inventario from './pages/Inventario';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Dashboard principal</h1>} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
