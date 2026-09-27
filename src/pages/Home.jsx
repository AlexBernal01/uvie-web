import Header from '../components/Header';
import Hero from '../components/Hero';
import Pilares from '../components/Pilares';
import ProductosInsignia from '../components/ProductosInsignia';
import Noticias from '../components/Noticias';
import Cursos from '../components/Cursos';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Pilares />
      <ProductosInsignia />
      <Noticias />
      <Cursos />
      <footer className="bg-buap-azul-oscuro text-white text-center py-6 text-sm">
        <p>© 2025 UVIE - Benemérita Universidad Autónoma de Puebla</p>
      </footer>
    </div>
  );
}