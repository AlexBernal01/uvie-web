import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { useSupabaseData } from '../hooks/useSupabaseData';
import CarruselNoticias from '../components/CarruselNoticias';

export default function Home() {
  const { data: pilares, loading: loadingPilares } = useSupabaseData('pilares', {
    order: 'orden',
    ascending: true
  });
  const { data: productos } = useSupabaseData('productos');
  const { data: noticias } = useSupabaseData('noticias', {
    order: 'fecha',
    ascending: false,
    limit: 3
  });
  const { data: cursos } = useSupabaseData('cursos', { limit: 3 });

  const [pilarAbierto, setPilarAbierto] = useState(null);

  const togglePilar = (id) => {
    setPilarAbierto(prev => (prev === id ? null : id));
  };

  return (
    <>
      <Hero />

      
      <CarruselNoticias noticias={noticias} />

      
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-buap-azul-oscuro">
              Pilares
            </h2>
          </div>

          {loadingPilares ? (
            <p className="text-gray-400 text-sm">Cargando pilares...</p>
          ) : (
            <div className="space-y-3">
              {pilares.slice(0, 5).map((pilar) => {
                const abierto = pilarAbierto === pilar.id;
                return (
                  <div
                    key={pilar.id}
                    className="bg-gray-50 rounded-lg border-t-4 border-buap-azul-claro overflow-hidden"
                  >
                    <button
                      onClick={() => togglePilar(pilar.id)}
                      className="w-full flex items-center justify-between px-2 py-2 text-left hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-sm text-buap-azul-oscuro">
                        {pilar.nombre}
                      </h3>
                      <span className="text-buap-azul-claro text-lg font-bold">
                        {abierto ? '−' : '+'}
                      </span>
                    </button>

                    {abierto && (
                      <div className="px-4 pb-4 text-sm text-gray-600 border-t border-gray-200 pt-3">
                        {pilar.descripcion || 'Sin descripción disponible.'}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-display text-2xl font-bold text-buap-azul-oscuro">
        Cursos Destacados
      </h2>
      <Link to="/cursos" className="text-sm text-buap-azul-claro hover:underline">
        Ver más →
      </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cursos.slice(0, 4).map((curso) => (
        <Link
          key={curso.id}
          to={`/cursos/${curso.id}`}
          className="group bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
        >
          {/* Imagen */}
          <div className="relative h-44 w-full overflow-hidden bg-gray-200">
            <img
              src={curso.imagen_url || 'https://via.placeholder.com/400x200?text=Curso'}
              alt={curso.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <span className="absolute top-3 left-3 text-xs bg-buap-azul-oscuro text-white px-2 py-1 rounded">
              {curso.carrera}
            </span>
          </div>

          {/* Contenido */}
          <div className="p-4 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-semibold text-buap-azul-oscuro line-clamp-2">
                {curso.titulo}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Duración: {curso.duracion}
              </p>
            </div>

            <span className="inline-block mt-4 text-sm font-semibold text-buap-azul-claro group-hover:underline">
              Ir al curso →
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold text-buap-azul-oscuro">
              Productos Insignia
            </h2>
            <Link to="/productos" className="text-sm text-buap-azul-claro hover:underline">
              Ver más →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productos.slice(0, 3).map((producto) => (
              <div key={producto.id} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-buap-azul-oscuro">
                  {producto.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {producto.descripcion}
                </p>
                <Link
                  to={`/productos/${producto.id}`}
                  className="inline-block mt-4 text-sm font-semibold text-buap-azul-claro hover:underline"
                >
                  Ir al Producto →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}