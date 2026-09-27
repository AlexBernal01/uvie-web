
export const promptsCarreras = {
  gastronomia: {
    titulo: "Gastronomía",
    contexto: `Eres el asistente de la UVIE-BUAP especializado en Gastronomía.
    Responde sobre: tendencias gastronómicas, IA aplicada a menús y recetas,
    turismo inteligente, observatorio de tendencias del sector alimentario,
    y talleres de IA generativa para chefs. Los productos UVIE relevantes son:
    Observatorio de Tendencias Gastronómicas, Programa de Habilitación Digital
    y el Laboratorio de Innovación.`
  },
  administracion: {
    titulo: "Administración",
    contexto: `Eres el asistente de la UVIE-BUAP especializado en Administración.
    Responde sobre: analítica de datos para decisiones empresariales,
    dashboards institucionales, automatización de procesos administrativos,
    IA para gestión pública y privada. Los productos UVIE relevantes son:
    Dashboard Institucional, Programa de Transformación Digital y
    el Observatorio de Inteligencia Estratégica.`
  },
  comercio: {
    titulo: "Comercio Internacional",
    contexto: `Eres el asistente de la UVIE-BUAP especializado en Comercio Internacional.
    Responde sobre: tendencias de mercados globales, IA para análisis de
    exportaciones, turismo inteligente, vinculación con cámaras empresariales,
    y pilotos de implementación para municipios. Los productos UVIE relevantes
    son: Reporte de Madurez Digital Municipal, Diagnóstico de IA en MIPYMES
    y el Laboratorio de Investigación e Innovación.`
  }
};


export const contenido = {
  pilares: [
    { id: 1, nombre: "Academia", descripcion: "Impulsar el uso estratégico de IA y analítica en procesos académicos y de investigación." },
    { id: 2, nombre: "Decisiones", descripcion: "Generar información estratégica para la toma de decisiones institucionales y sectoriales." },
    { id: 3, nombre: "Formación", descripcion: "Fortalecer competencias en tecnologías emergentes y transformación digital." },
    { id: 4, nombre: "Vinculación", descripcion: "Desarrollar proyectos aplicados con gobiernos, estado y empresas." },
    { id: 5, nombre: "Liderazgo", descripcion: "Posicionar a la Facultad como referente regional en innovación aplicada." }
  ],
  productos: [
    {
      id: 1,
      titulo: "Observatorio de Inteligencia Estratégica",
      descripcion: "Monitoreo de tendencias en Gastronomía, Empresas, Turismo, Comercio, Innovación e IA.",
      entregables: ["Boletín Trimestral", "Reporte Anual", "Dashboard Visual"]
    
    },
    {
      id: 2,
      titulo: "Programa de Habilitación y Transformación Digital",
      descripcion: "Capacitación continua tecnológica para la comunidad BUAP y externos.",
      entregables: ["Talleres cortos (4hrs)", "Diplomados", "Microcredenciales", "Repositorio de recursos"]
    },
    {
      id: 3,
      titulo: "Laboratorio de Investigación e Innovación",
      descripcion: "Espacio de apoyo a la investigación, cuerpos académicos y desarrollo de soluciones tecnológicas.",
      entregables: ["Prototipos funcionales", "Evento Institucional CA's", "Pilotos para Municipios"]
    }
  ],
  noticias: [
    { id: 1, titulo: "UVIE presenta su primer boletín trimestral sobre IA en los negocios", fecha: "2025-01-15" },
    { id: 2, titulo: "Taller de IA generativa para docentes de la Facultad de Administración", fecha: "2025-02-20" },
    { id: 3, titulo: "Primer Encuentro de Cuerpos Académicos de la UVIE", fecha: "2025-03-10" }
  ],
  cursos: [
    { id: 1, titulo: "IA Generativa para Docentes", duracion: "4 horas", carrera: "administracion" },
    { id: 2, titulo: "Analítica de Datos para Toma de Decisiones", duracion: "8 horas", carrera: "administracion" },
    { id: 3, titulo: "Tendencias Gastronómicas e IA", duracion: "4 horas", carrera: "gastronomia" },
    { id: 4, titulo: "Turismo Inteligente y Transformación Digital", duracion: "6 horas", carrera: "comercio" }
  ]
};