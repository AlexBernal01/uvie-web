import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const plantillasBase = [
  {
    id: 'cuadro-comparativo',
    categoria: 'Material didáctico con IA',
    titulo: 'Cuadro comparativo',
    texto: `Necesito que elabores un cuadro comparativo sobre [TEMA] para la materia de [NOMBRE DE LA MATERIA] de la carrera de [NOMBRE DE LA CARRERA], dirigido a estudiantes de [NIVEL].

El cuadro debe comparar al menos cuatro conceptos, enfoques o elementos distintos, utilizando cinco criterios de comparación relevantes. Cada criterio debe estar claramente definido en la primera columna y cada elemento debe tener su propia columna. Usa ejemplos concretos y lenguaje sencillo para que cualquier estudiante pueda comprenderlo.

Entrega el resultado en formato de tabla, precedido por un párrafo breve de introducción que explique qué se compara y por qué es relevante para la materia.`
  },
  {
    id: 'mapa-conceptual',
    categoria: 'Material didáctico con IA',
    titulo: 'Mapa conceptual',
    texto: `Elabora un mapa conceptual sobre [TEMA] para la materia de [NOMBRE DE LA MATERIA], dirigido a estudiantes de [NIVEL].

El objetivo de aprendizaje es que los estudiantes comprendan [OBJETIVO DE APRENDIZAJE]. El mapa debe tener un concepto principal al centro, entre cinco y siete conceptos secundarios conectados directamente al central, y cada concepto secundario debe incluir al menos dos subconceptos. Utiliza conectores lógicos como "se divide en", "se caracteriza por" o "depende de", organizando la información de lo general a lo particular.

Entrega el resultado en formato de texto jerárquico con sangrías, listo para ser trasladado a Canva, Lucidchart o PowerPoint.`
  },
  {
    id: 'diagrama-flujo',
    categoria: 'Material didáctico con IA',
    titulo: 'Diagrama de flujo',
    texto: `Elabora la estructura de un diagrama de flujo sobre [PROCESO] para la materia de [NOMBRE DE LA MATERIA] de la carrera de [NOMBRE DE LA CARRERA].

El diagrama debe iniciar con un nodo de Inicio y terminar con un nodo de Fin, incluir decisiones con salidas de Sí o No, y contener entre seis y diez pasos claramente definidos. Cada paso debe describir una acción concreta y entendible, usando verbos en infinitivo.

Entrega el resultado como una lista secuencial indicando para cada paso el tipo de nodo (inicio, proceso, decisión o fin), el texto que lleva y a qué nodo conduce después.`
  },
  {
    id: 'linea-tiempo',
    categoria: 'Material didáctico con IA',
    titulo: 'Línea del tiempo',
    texto: `Elabora una línea del tiempo sobre [TEMA O PERIODO] para la materia de [NOMBRE DE LA MATERIA], cubriendo desde [AÑO DE INICIO] hasta [AÑO FINAL].

Incluye al menos ocho eventos relevantes ordenados cronológicamente. Para cada evento indica el año, un título breve y una descripción de una sola línea. Al finalizar, señala los tres momentos más importantes y justifica brevemente por qué lo fueron.

Entrega el resultado en formato de lista cronológica, listo para trasladarse a Canva, PowerPoint o TimeGraphics.`
  },
  {
    id: 'examen',
    categoria: 'Evaluación y rúbricas',
    titulo: 'Examen con reactivos',
    texto: `Elabora un examen sobre [TEMA] para la materia de [NOMBRE DE LA MATERIA] de la carrera de [NOMBRE DE LA CARRERA], dirigido a estudiantes de [NIVEL].

El examen debe contener alrededor de [NÚMERO DE REACTIVOS] preguntas con una duración estimada de [DURACIÓN]. Incluye cinco preguntas de opción múltiple con cuatro opciones cada una y respuesta correcta marcada, tres de verdadero o falso con justificación, tres preguntas abiertas de análisis o aplicación, dos de relación de columnas y un caso práctico final con dos preguntas.

Al finalizar, agrega la hoja de respuestas correctas, los criterios de calificación sugeridos por sección y el nivel de dificultad aproximado. Entrega el resultado listo para imprimir o pegar en Word.`
  },
  {
    id: 'rubrica',
    categoria: 'Evaluación y rúbricas',
    titulo: 'Rúbrica de evaluación',
    texto: `Elabora una rúbrica para evaluar [QUÉ SE VA A EVALUAR] en la materia de [NOMBRE DE LA MATERIA], dirigida a estudiantes de [NIVEL]. La ponderación total es de [PONDERACIÓN].

La rúbrica debe tener entre cuatro y seis criterios de evaluación, cuatro niveles de desempeño (excelente, bueno, regular e insuficiente), un puntaje claro asignado por nivel en cada criterio y una descripción precisa de lo que se espera en cada uno. Incluye una fila final con el puntaje máximo total.

Entrega el resultado en formato de tabla, listo para pegar en Word o Excel.`
  },
  {
    id: 'reactivos',
    categoria: 'Evaluación y rúbricas',
    titulo: 'Banco de reactivos',
    texto: `Elabora un banco de [CANTIDAD] reactivos de opción múltiple sobre [TEMA O UNIDAD] para la materia de [NOMBRE DE LA MATERIA], dirigido a estudiantes de [NIVEL].

Cada reactivo debe tener un enunciado claro y contextualizado, cuatro opciones identificadas como A, B, C y D, una sola respuesta correcta y un comentario breve que explique por qué esa es la correcta. Varía el nivel de dificultad entre básico, intermedio y avanzado.

Agrupa los reactivos por nivel de dificultad y entrega el resultado listo para exportar a Word, Excel o Google Forms.`
  },
  {
    id: 'planeacion-clase',
    categoria: 'Planeación docente',
    titulo: 'Planeación de una clase',
    texto: `Elabora la planeación de una clase sobre [TEMA] para la materia de [NOMBRE DE LA MATERIA] de la carrera de [NOMBRE DE LA CARRERA], dirigida a aproximadamente [NÚMERO DE ESTUDIANTES] estudiantes, con una duración de [DURACIÓN].

La planeación debe incluir un objetivo general y tres objetivos específicos, los contenidos clasificados en conceptuales, procedimentales y actitudinales, la secuencia didáctica dividida en inicio, desarrollo y cierre con tiempos asignados, las actividades del docente y de los estudiantes, los recursos y materiales necesarios, la forma de evaluación (diagnóstica, formativa y sumativa) y una bibliografía sugerida.

Entrega el resultado en formato de tabla, listo para integrarse a un formato institucional.`
  },
  {
    id: 'secuencia',
    categoria: 'Planeación docente',
    titulo: 'Secuencia didáctica',
    texto: `Elabora una secuencia didáctica completa para la unidad [UNIDAD O TEMA] de la materia [NOMBRE DE LA MATERIA], en la carrera de [NOMBRE DE LA CARRERA], con una duración de [NÚMERO DE SESIONES].

La secuencia debe incluir la competencia a desarrollar, los resultados de aprendizaje esperados, los contenidos por sesión, las actividades de aprendizaje por sesión divididas en inicio, desarrollo y cierre, las evidencias de aprendizaje, los instrumentos de evaluación y los recursos didácticos y tecnológicos.

Entrega el resultado organizado como una tabla por sesión, listo para aplicarse en clase.`
  },
  {
    id: 'resumen-articulo',
    categoria: 'Apoyo a la investigación',
    titulo: 'Resumen de artículo',
    texto: `Elabora un resumen estructurado del siguiente artículo:

[PEGA AQUÍ EL TEXTO O EL LINK DEL ARTÍCULO]

El resumen debe incluir la referencia completa, el objetivo del estudio, la metodología utilizada, los principales hallazgos, las conclusiones y limitaciones, una frase final con la aportación más relevante y tres posibles aplicaciones para docencia o investigación.

Extensión máxima de una página, con lenguaje claro y académico.`
  },
  {
    id: 'ficha-apa',
    categoria: 'Apoyo a la investigación',
    titulo: 'Ficha bibliográfica APA',
    texto: `Elabora una ficha bibliográfica en formato APA 7 a partir de la siguiente fuente:

[PEGA AQUÍ LOS DATOS O EL LINK]

La ficha debe incluir la referencia completa en APA 7, el tipo de fuente, un resumen breve de tres líneas, una cita textual relevante con número de página si aplica, tres palabras clave y una nota sobre la utilidad potencial para investigación o docencia.`
  },
  {
    id: 'servicio',
    categoria: 'Sobre la UVIE',
    titulo: 'Solicitar servicio de capacitación',
    texto: `Soy profesor de la carrera de [NOMBRE DE LA CARRERA] y necesito información sobre el servicio de capacitación en [TEMA].

Indícame qué servicios ofrece la UVIE relacionados con mi solicitud, cómo puedo agendar una sesión, qué información debo proporcionar para formalizar la solicitud, si existen costos o tiempos estimados y con qué área o persona debo contactarme.

Entrega la respuesta con pasos claros y lenguaje sencillo.`
  },
  {
    id: 'curso',
    categoria: 'Cursos y formación',
    titulo: 'Buscar un curso',
    texto: `Soy docente de la carrera de [NOMBRE DE LA CARRERA] y me interesa tomar un curso sobre [TEMA] para aplicarlo en mis clases.

Indícame qué cursos ofrece la UVIE relacionados con ese tema, la duración, modalidad y fechas disponibles, si hay cupo y cómo inscribirme, si otorgan constancia o créditos y a quién debo contactar para más información.

Entrega la respuesta de forma clara y ordenada.`
  },
  {
    id: 'proyecto',
    categoria: 'Vinculación',
    titulo: 'Vinculación para proyecto',
    texto: `Represento a [NOMBRE DE LA EMPRESA U ORGANIZACIÓN] del sector [SECTOR] y me interesa vincularme con la UVIE para un proyecto sobre [TEMA].

Indícame cómo funciona el proceso de vinculación, qué tipos de proyectos se pueden desarrollar, qué información necesitan de mi parte, los tiempos y costos aproximados y con quién puedo dar seguimiento.

Entrega la respuesta con pasos concretos.`
  },
  {
    id: 'investigacion',
    categoria: 'Investigación',
    titulo: 'Apoyo a investigación',
    texto: `Soy investigador de la carrera de [NOMBRE DE LA CARRERA] y necesito apoyo para investigar sobre [TEMA].

Indícame si la UVIE ofrece apoyo metodológico, técnico o de datos, qué tipo de colaboraciones se pueden establecer, si hay convocatorias o proyectos activos relacionados, cómo contactar al área de investigación y qué productos o resultados se esperan.

Entrega la respuesta de forma ordenada y con lenguaje claro.`
  },
  {
    id: 'noticias',
    categoria: 'Noticias',
    titulo: 'Noticias recientes',
    texto: `Soy profesor de la carrera de [NOMBRE DE LA CARRERA] y me interesa conocer las noticias recientes de la UVIE sobre [TEMA].

Resume las tres noticias más relevantes de los últimos meses, indicando fecha y fuente de cada una, explicando brevemente por qué son relevantes para la docencia y sugiriendo cómo puedo aprovecharlas en clase.`
  },
  {
    id: 'contacto',
    categoria: 'Contacto',
    titulo: 'Contactar al área de vinculación',
    texto: `Soy alumno de la carrera de [NOMBRE DE LA CARRERA] y necesito saber cómo contactar al área de vinculación de la UVIE.

Proporcióname el correo, teléfono o formulario de contacto, el horario de atención, el nombre del área responsable, qué información debo preparar antes de escribirles y el tiempo estimado de respuesta.`
  },
  {
    id: 'alumno',
    categoria: 'Para alumnos',
    titulo: 'Cursos para alumnos',
    texto: `Soy alumno de la carrera de [NOMBRE DE LA CARRERA] y quiero saber qué cursos y talleres ofrece la UVIE para mi formación.

Indícame cuáles están disponibles actualmente, su modalidad, duración y fechas, los requisitos de inscripción, si tienen costo o son gratuitos y si otorgan constancia o créditos.`
  },
  {
    id: 'empresa',
    categoria: 'Para empresas',
    titulo: 'Diagnóstico de IA',
    texto: `Represento a una MIPYME del sector [SECTOR] y me interesa un diagnóstico de IA para mi negocio.

Indícame qué incluye el diagnóstico, cómo se agenda y cuánto tarda, qué información debo proporcionar, costos aproximados y qué beneficios podría esperar.`
  }
];

function ParrafoEditable({ texto, onCambiar }) {
  const [activo, setActivo] = useState(null);
  const [valorTemp, setValorTemp] = useState('');

  const confirmar = (indice, etiquetaOriginal) => {
    if (valorTemp.trim() === '') {
      setActivo(null);
      return;
    }
    const partes = texto.split(/(\[[^\]]+\])/g);
    let contador = 0;
    const nuevoTexto = partes
      .map((p) => {
        if (p.startsWith('[') && p.endsWith(']')) {
          const actual = contador;
          contador++;
          if (actual === indice) {
            return valorTemp;
          }
        }
        return p;
      })
      .join('');
    onCambiar(nuevoTexto);
    setActivo(null);
    setValorTemp('');
  };

  const partes = texto.split(/(\[[^\]]+\])/g);
  let contadorHuecos = -1;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
      {partes.map((part, i) => {
        const esCorchete = part.startsWith('[') && part.endsWith(']');
        if (esCorchete) {
          contadorHuecos++;
          const indiceActual = contadorHuecos;

          if (activo === indiceActual) {
            return (
              <input
                key={i}
                type="text"
                autoFocus
                value={valorTemp}
                onChange={(e) => setValorTemp(e.target.value)}
                onBlur={() => confirmar(indiceActual, part)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    confirmar(indiceActual, part);
                  }
                  if (e.key === 'Escape') {
                    setActivo(null);
                    setValorTemp('');
                  }
                }}
                placeholder={part.replace(/^\[|\]$/g, '')}
                className="inline-block bg-white border border-buap-azul-claro rounded px-1 py-0.5 text-xs text-buap-azul-oscuro focus:outline-none min-w-[8rem] mx-0.5"
              />
            );
          }

          return (
            <button
              key={i}
              onClick={() => {
                setActivo(indiceActual);
                setValorTemp('');
              }}
              className="bg-yellow-100 text-buap-azul-oscuro font-semibold px-1.5 py-0.5 rounded hover:bg-yellow-200 transition cursor-pointer mx-0.5"
            >
              {part}
            </button>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
}

export default function BancoPrompters() {
  const [filtro, setFiltro] = useState('Todas');
  const [textos, setTextos] = useState(() =>
    Object.fromEntries(plantillasBase.map((p) => [p.id, p.texto]))
  );
  const [copiado, setCopiado] = useState(null);

  const categorias = useMemo(
    () => ['Todas', ...new Set(plantillasBase.map((p) => p.categoria))],
    []
  );

  const actualizar = (id, valor) => {
    setTextos((prev) => ({ ...prev, [id]: valor }));
  };

  const restaurar = (id) => {
    const original = plantillasBase.find((p) => p.id === id);
    setTextos((prev) => ({ ...prev, [id]: original.texto }));
  };

  const copiar = async (id) => {
    try {
      await navigator.clipboard.writeText(textos[id]);
      setCopiado(id);
      setTimeout(() => setCopiado(null), 2000);
    } catch {
      alert('No se pudo copiar. Selecciona el texto manualmente.');
    }
  };

  const plantillasFiltradas =
    filtro === 'Todas'
      ? plantillasBase
      : plantillasBase.filter((p) => p.categoria === filtro);

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-3xl font-bold text-buap-azul-oscuro mb-2">
          Banco de Prompters
        </h1>
        <p className="text-gray-600 mb-2">
          Cada tarjeta ya trae el prompter redactado. Haz clic sobre cualquier palabra
          resaltada en{' '}
          <span className="bg-yellow-100 text-buap-azul-oscuro px-1.5 py-0.5 rounded text-xs font-semibold">
            amarillo
          </span>{' '}
          para reemplazarla por tus datos.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Abre el chat con el botón <span className="font-semibold text-buap-azul-oscuro">"Chat"</span> en la esquina inferior derecha.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`text-xs px-3 py-1.5 rounded-full font-semibold transition ${
                filtro === cat
                  ? 'bg-buap-azul-oscuro text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {plantillasFiltradas.map((p) => {
            const esCopiado = copiado === p.id;

            return (
              <div
                key={p.id}
                className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs uppercase tracking-wide text-buap-azul-claro font-semibold">
                    {p.categoria}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {p.titulo}
                  </span>
                </div>

                <ParrafoEditable
                  texto={textos[p.id]}
                  onCambiar={(nuevo) => actualizar(p.id, nuevo)}
                />

                <div className="flex flex-wrap gap-2 mt-3">
                  <button
                    onClick={() => copiar(p.id)}
                    className={`text-xs px-4 py-2 rounded-lg font-semibold transition ${
                      esCopiado
                        ? 'bg-green-100 text-green-700'
                        : 'bg-buap-azul-oscuro text-white hover:bg-buap-azul-claro'
                    }`}
                  >
                    {esCopiado ? '✓ Copiado' : 'Copiar prompter'}
                  </button>
                  <button
                    onClick={() => restaurar(p.id)}
                    className="text-xs px-4 py-2 rounded-lg font-semibold text-gray-500 hover:text-buap-azul-oscuro transition"
                  >
                    Restaurar original
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 bg-buap-azul-claro/10 rounded-lg border border-buap-azul-claro/30">
          <p className="text-sm text-buap-azul-oscuro">
            💡 <span className="font-semibold">Tip:</span> Solo haz clic sobre las palabras
            resaltadas en{' '}
            <span className="bg-yellow-100 text-buap-azul-oscuro px-1.5 py-0.5 rounded text-xs font-semibold">
              amarillo
            </span>
            , escribe tu dato y presiona <span className="font-semibold">Enter</span>. Después pulsa{' '}
            <span className="font-semibold">"Copiar prompter"</span> y pégalo en el chat.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-buap-azul-claro hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}