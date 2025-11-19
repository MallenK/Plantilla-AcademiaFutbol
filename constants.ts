import { CalendarEvent, Coach, PricingTier, Program, Stat } from './types';

export const ACADEMY_NAME = "APEX ACADEMY";

export const STATS: Stat[] = [
  { id: 1, value: 1250, suffix: "+", label: "Goles Marcados" },
  { id: 2, value: 450, suffix: "", label: "Alumnos Activos" },
  { id: 3, value: 12, suffix: "", label: "Categorías" },
  { id: 4, value: 98, suffix: "%", label: "Tasa de Aprobación" },
];

export const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "Desarrollo Base",
    ageRange: "6 - 10 Años",
    description: "Fundamentos técnicos y coordinación motora. El inicio del viaje.",
    image: "https://picsum.photos/800/600?random=1",
    features: ["Control de balón", "Psicomotricidad", "Juego en equipo"]
  },
  {
    id: 2,
    title: "Tecnificación Pro",
    ageRange: "11 - 15 Años",
    description: "Perfeccionamiento táctico y técnico. Intensidad competitiva media.",
    image: "https://picsum.photos/800/600?random=2",
    features: ["Táctica defensiva", "Finalización", "Análisis de video"]
  },
  {
    id: 3,
    title: "Elite Performance",
    ageRange: "16 - 21 Años",
    description: "Preparación para el fútbol profesional. Alto rendimiento físico.",
    image: "https://picsum.photos/800/600?random=3",
    features: ["Alto rendimiento", "Scouting activo", "Nutrición deportiva"]
  }
];

export const COACHES: Coach[] = [
  {
    id: 1,
    name: "Carlos 'El Muro' Mendoza",
    role: "Director Deportivo",
    license: "UEFA Pro",
    specialty: "Táctica Defensiva",
    image: "https://picsum.photos/400/500?random=10",
    stats: [{ label: "Exp", value: "15 Años" }, { label: "Títulos", value: "12" }]
  },
  {
    id: 2,
    name: "Elena Vargas",
    role: "Entrenadora Sub-15",
    license: "Licencia A",
    specialty: "Metodología Ofensiva",
    image: "https://picsum.photos/400/500?random=11",
    stats: [{ label: "Exp", value: "8 Años" }, { label: "Formados", value: "200+" }]
  },
  {
    id: 3,
    name: "Marco Rossi",
    role: "Preparador Físico",
    license: "PhD Ciencias Deporte",
    specialty: "Potencia y Resistencia",
    image: "https://picsum.photos/400/500?random=12",
    stats: [{ label: "Exp", value: "10 Años" }, { label: "Lesiones", value: "<2%" }]
  }
];

export const PRICING: PricingTier[] = [
  {
    id: 1,
    name: "Cantera",
    price: "80€",
    period: "/mes",
    features: ["2 Entrenamientos semanales", "Kit de entrenamiento básico", "Seguro deportivo", "Evaluación trimestral"],
    highlighted: false
  },
  {
    id: 2,
    name: "Pro Academy",
    price: "150€",
    period: "/mes",
    features: ["4 Entrenamientos semanales", "Kit completo (Entreno + Partido)", "Análisis de video mensual", "Partidos de liga", "Nutricionista"],
    highlighted: true
  },
  {
    id: 3,
    name: "Elite",
    price: "250€",
    period: "/mes",
    features: ["Entrenamiento diario", "Sesiones individuales 1a1", "Plan de carrera deportiva", "Scouting internacional", "Fisioterapia incluida"],
    highlighted: false
  }
];

// Generate dynamic dates for the calendar demo
const today = new Date();
export const EVENTS: CalendarEvent[] = [
  {
    id: 1,
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1),
    type: 'training',
    title: "Entrenamiento Táctico",
    time: "17:30 - 19:00",
    location: "Campo 1"
  },
  {
    id: 2,
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
    type: 'match',
    title: "Apex vs. City Juniors",
    time: "10:00 Kick-off",
    location: "Estadio Municipal"
  },
  {
    id: 3,
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
    type: 'training',
    title: "Sesión Física & Gym",
    time: "16:00 - 18:00",
    location: "Centro de Alto Rendimiento"
  },
  {
    id: 4,
    date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10),
    type: 'tournament',
    title: "Copa Regional - Fase Grupos",
    time: "09:00 - 14:00",
    location: "Complejo Deportivo Norte"
  }
];