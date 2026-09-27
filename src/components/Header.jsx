import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-buap-azul-oscuro text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold font-display">BUAP</div>
          <div className="border-l border-white/30 pl-3">
            <div className="text-sm font-semibold">UVIE</div>
            <div className="text-xs text-white/70">Unidad de Vinculación en Inteligencia Estratégica</div>
          </div>
        </div>
        <nav className="flex gap-6 text-sm">
          <a href="#pilares" className="hover:text-buap-azul-claro transition">Pilares</a>
          <a href="#productos" className="hover:text-buap-azul-claro transition">Productos</a>
          <a href="#noticias" className="hover:text-buap-azul-claro transition">Noticias</a>
          <a href="#cursos" className="hover:text-buap-azul-claro transition">Cursos</a>
          
        </nav>
      </div>
    </header>
  );
}