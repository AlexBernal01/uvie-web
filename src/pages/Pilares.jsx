import { useSupabaseData } from '../hooks/useSupabaseData';

export default function Pilares() {
  const { data: pilares, loading, error } = useSupabaseData('pilares', {
    order: 'orden',
    ascending: true
  });

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando pilares...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;

  return (
    <section id="pilares" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-8">
          Los 5 Pilares de Transformación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pilares.map((pilar) => (
            <div key={pilar.id} className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-buap-azul-claro">
              <h3 className="font-display font-bold text-buap-azul-oscuro mb-2">
                {pilar.nombre}
              </h3>
              <p className="text-sm text-gray-600">{pilar.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}