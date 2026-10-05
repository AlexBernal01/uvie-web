import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CarruselNoticias({ noticias = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (noticias.length <= 1) return;
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % noticias.length);
    }, 3200);
    return () => clearInterval(intervalo);
  }, [noticias.length]);

  if (!noticias.length) return null;

  const irA = (i) => setIndex(i);
  const anterior = () => setIndex((prev) => (prev - 1 + noticias.length) % noticias.length);
  const siguiente = () => setIndex((prev) => (prev + 1) % noticias.length);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl font-bold text-buap-azul-oscuro">
            Noticias Recientes
          </h2>
          <Link to="/noticias" className="text-sm text-buap-azul-claro hover:underline">
            Ver todas →
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {noticias.map((noticia) => (
              <div key={noticia.id} className="min-w-full relative">
                <img
                  src={noticia.imagen || 'https://picsum.photos/seed/placeholder/1200/500'}
                  alt={noticia.titulo}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-xs text-white/70 mb-1">{noticia.fecha}</p>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">
                    {noticia.titulo}
                  </h3>
                  {noticia.contenido && (
                    <p className="text-sm text-white/80 line-clamp-2 max-w-2xl">
                      {noticia.contenido}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {noticias.length > 1 && (
            <>
              <button
                onClick={anterior}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                aria-label="Anterior"
              >
                ‹
              </button>
              <button
                onClick={siguiente}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
                aria-label="Siguiente"
              >
                ›
              </button>
            </>
          )}

          {noticias.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {noticias.map((_, i) => (
                <button
                  key={i}
                  onClick={() => irA(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? 'bg-white w-6' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a noticia ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}