import { useState } from 'react';
import { contenido } from '../data/contenido';

export default function Cursos() {
  const [filtro, setFiltro] = useState('todos');

  const cursosFiltrados = filtro === 'todos' 
    ? contenido.cursos 
    : contenido.cursos.filter(c => c.carrera === filtro);

  return (
    <section id="cursos" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-4">
          Cursos para Profesores
        </h2>
        
        <div className="flex gap-2 mb-6">
          {['todos', 'administracion', 'gastronomia', 'comercio'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filtro === f 
                  ? 'bg-buap-azul-oscuro text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {f === 'todos' ? 'Todos' : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cursosFiltrados.map((curso) => (
            <div key={curso.id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-buap-azul-claro">
              <h3 className="font-semibold text-buap-azul-oscuro">{curso.titulo}</h3>
              <p className="text-sm text-gray-500">Duración: {curso.duracion}</p>
              <span className="inline-block mt-2 text-xs bg-buap-azul-claro/10 text-buap-azul-oscuro px-2 py-1 rounded">
                {curso.carrera}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}