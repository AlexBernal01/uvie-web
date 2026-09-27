import { contenido } from '../data/contenido';

export default function Pilares() {
  return (
    <section id="pilares" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-8">
          Los 5 Pilares de Transformación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {contenido.pilares.map((pilar) => (
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