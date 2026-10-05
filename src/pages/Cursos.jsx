import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSupabaseData } from '../hooks/useSupabaseData';

export default function Cursos() {
  const [filtro, setFiltro] = useState('todos');
  const { data: cursos, loading, error } = useSupabaseData('cursos');

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando cursos...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;

  const cursosFiltrados =
    filtro === 'todos' ? cursos : cursos.filter((c) => c.carrera === filtro);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-4">
          Cursos para Profesores
        </h2>

        {/* Filtros */}
        <div className="flex gap-2 mb-6 flex-wrap">
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

        {/* Grid de cursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cursosFiltrados.map((curso) => (
            <Link
  key={curso.id}
  to={`/cursos/${curso.id}`}
  className="group bg-white rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-buap-azul-claro overflow-hidden hover:shadow-md transition-all duration-300 flex h-44"
>
  {/* Columna izquierda: texto */}
  <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
    <div>
      <h3 className="font-semibold text-buap-azul-oscuro leading-tight line-clamp-2">
        {curso.titulo}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Duración: {curso.duracion}
      </p>
      <span className="inline-block mt-2 text-xs bg-buap-azul-claro/10 text-buap-azul-oscuro px-2 py-1 rounded">
        {curso.carrera}
      </span>
    </div>

    <span className="inline-block mt-4 text-sm font-semibold text-buap-azul-claro group-hover:underline">
      Ir al curso →
    </span>
  </div>

  {/* Columna derecha: imagen con división vertical */}
  <div className="w-32 sm:w-40 md:w-48 shrink-0 border-l border-gray-200 bg-gray-50">
    <img
      src={curso.imagen_url || 'https://via.placeholder.com/300x300?text=Curso'}
      alt={curso.titulo}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
</Link>
          ))}
        </div>

        {cursosFiltrados.length === 0 && (
          <p className="text-center text-gray-400 py-8">
            No hay cursos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}