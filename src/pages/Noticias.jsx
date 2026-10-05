import { useSupabaseData } from '../hooks/useSupabaseData';

export default function Noticias() {
  const { data: noticias, loading, error } = useSupabaseData('noticias', {
    order: 'fecha',
    ascending: false
  });

  if (loading) return <p className="p-8 text-center text-gray-400">Cargando noticias...</p>;
  if (error) return <p className="p-8 text-center text-red-500">Error: {error}</p>;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-8">
          Noticias y Actividades
        </h2>
        <div className="space-y-4">
          {noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-buap-azul-oscuro">{noticia.titulo}</h3>
                <p className="text-sm text-gray-500">{noticia.fecha}</p>
              </div>
              <span className="text-buap-azul-claro text-xl">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}