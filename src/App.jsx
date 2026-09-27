import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DevZone from './pages/DevZone';
import Pilares from './pages/Pilares';
import Productos from './pages/Productos';
import Noticias from './pages/Noticias';
import Cursos from './pages/Cursos';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pilares" element={<Pilares />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/dev" element={<DevZone />} />
        </Route>
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;