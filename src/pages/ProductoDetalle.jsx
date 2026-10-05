import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../utils/supabase';

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single();

      if (error) setError(error.message);
      else setProducto(data);
      setLoading(false);
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando producto...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;
  if (!producto) return <p className="p-8 text-center text-red-500">Producto no encontrado.</p>;

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/productos" className="text-sm text-buap-azul-claro hover:underline">
          ← Volver a productos
        </Link>

        <h1 className="font-display text-3xl font-bold text-buap-azul-oscuro mt-4 mb-2">
          {producto.titulo}
        </h1>

        {producto.categoria && (
          <p className="text-gray-500 mb-6">Categoría: {producto.categoria}</p>
        )}

        {producto.etiqueta && (
          <span className="inline-block text-xs bg-buap-azul-claro/10 text-buap-azul-oscuro px-2 py-1 rounded mb-6">
            {producto.etiqueta}
          </span>
        )}

        <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
          <h2 className="font-semibold text-buap-azul-oscuro mb-2">Descripción</h2>
          <p className="text-gray-700 whitespace-pre-wrap">
            {producto.descripcion || 'Sin descripción disponible.'}
          </p>
        </div>
      </div>
    </section>
  );
}