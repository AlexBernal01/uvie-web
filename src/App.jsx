import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevZone from './pages/DevZone';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<DevZone />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  );
}

export default App;