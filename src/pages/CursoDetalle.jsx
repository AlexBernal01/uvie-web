import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../utils/supabase';

export default function CursoDetalle() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurso = async () => {
      const { data, error } = await supabase
        .from('cursos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) setError(error.message);
      else setCurso(data);
      setLoading(false);
    };

    fetchCurso();
  }, [id]);

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando curso...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;
  if (!curso) return <p className="p-8 text-center text-red-500">Curso no encontrado.</p>;

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/cursos" className="text-sm text-buap-azul-claro hover:underline">
          ← Volver a cursos
        </Link>

        <h1 className="font-display text-3xl font-bold text-buap-azul-oscuro mt-4 mb-2">
          {curso.titulo}
        </h1>

        <p className="text-gray-500 mb-6">Duración: {curso.duracion}</p>

        <span className="inline-block text-xs bg-buap-azul-claro/10 text-buap-azul-oscuro px-2 py-1 rounded mb-6">
          {curso.carrera}
        </span>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-semibold text-buap-azul-oscuro mb-2">Descripción</h2>
          <p className="text-gray-700 whitespace-pre-wrap">
            {curso.descripcion || 'Sin descripción disponible.'}
          </p>
        </div>
      </div>
    </section>
  );
}