import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { isAuthenticated, login, logout } from '../utils/auth';

const dataVisitas = [
  { mes: 'Ene', visitas: 120 },
  { mes: 'Feb', visitas: 200 },
  { mes: 'Mar', visitas: 350 },
  { mes: 'Abr', visitas: 280 },
  { mes: 'May', visitas: 420 },
  { mes: 'Jun', visitas: 500 },
];

export default function DevZone() {
  const [autenticado, setAutenticado] = useState(isAuthenticated());
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const manejarLogin = (e) => {
    e.preventDefault();
    if (login(password)) {
      setAutenticado(true);
      setError('');
    } else {
      setError('Contraseña incorrecta. Intenta de nuevo.');
    }
    setPassword('');
  };

  const manejarLogout = () => {
    logout();
    setAutenticado(false);
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="font-display text-2xl font-bold text-buap-azul-oscuro mb-4">
            Zona de Desarrolladores
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Acceso restringido. Ingresa la contraseña para continuar.
          </p>
          <form onSubmit={manejarLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-buap-azul-claro"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-buap-azul-oscuro text-white py-2 rounded-lg hover:bg-buap-azul-claro transition"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-display text-3xl font-bold text-buap-azul-oscuro">
            Dashboard de Análisis
          </h1>
          <button
            onClick={manejarLogout}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Visitas totales</p>
            <p className="text-3xl font-bold text-buap-azul-oscuro">1,870</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Interacciones con chatbot</p>
            <p className="text-3xl font-bold text-buap-azul-oscuro">342</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Cursos activos</p>
            <p className="text-3xl font-bold text-buap-azul-oscuro">4</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="font-display font-bold text-buap-azul-oscuro mb-4">
            Visitas mensuales
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataVisitas}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="visitas" 
                stroke="#09b5e2" 
                strokeWidth={3}
                dot={{ fill: '#122e48', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}