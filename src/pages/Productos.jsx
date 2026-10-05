import { useSupabaseData } from '../hooks/useSupabaseData';

export default function Productos() {
  const { data: productos, loading, error } = useSupabaseData('productos');

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando productos...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-8">
          Productos Insignia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-buap-azul-oscuro text-white p-4">
                <h3 className="font-display font-bold text-lg">{producto.titulo}</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                <h4 className="font-semibold text-sm text-buap-azul-oscuro mb-2">
                  Entregables:
                </h4>
                <ul className="text-sm text-gray-500 space-y-1">
                  {(producto.entregables || []).map((e, i) => (
                    <li key={i}>• {e}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}