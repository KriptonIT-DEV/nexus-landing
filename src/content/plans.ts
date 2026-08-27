export const plansHero = {
  badge: "Precios",
  title: "Planes",
  description:
    "Cobramos por resultado: consultas resueltas, no por usuario ni por conversación. Sin costos ocultos, sin permanencia.",
} as const

export interface Plan {
  name: string
  price: string | null
  contacts: string
  description: string
  featured: boolean
  popular: string | null
  enterprise: boolean
  features: string[]
  cta: { href: string; label: string }
}

export const plans: Plan[] = [
  {
    name: "Esencial",
    price: "349",
    contacts: "400 resoluciones al mes",
    description:
      "Para negocios que inician: atención automática con IA en todos tus canales desde el primer día.",
    featured: false,
    popular: null,
    enterprise: false,
    features: [
      "400 resoluciones incluidas · S/ 1.80 la adicional",
      "Tope de gasto garantizado: S/ 690 al mes",
      "WhatsApp, Instagram, Messenger, widget web y e-mail",
      "Agentes humanos ilimitados",
      "Nivel de IA Ágil · 1 integración",
      "Retención de datos 12 meses · soporte en 8 h hábiles",
    ],
    cta: { href: "/register?plan=SERV_ESENCIAL", label: "Probar 14 días gratis" },
  },
  {
    name: "Pro",
    price: "690",
    contacts: "1,000 resoluciones al mes",
    description:
      "Para empresas en crecimiento que necesitan más volumen, mejor IA y más integraciones.",
    featured: true,
    popular: "Más popular",
    enterprise: false,
    features: [
      "1,000 resoluciones incluidas · S/ 1.40 la adicional",
      "Tope de gasto garantizado: S/ 1,490 al mes",
      "Todos los canales · agentes humanos ilimitados",
      "Nivel de IA Avanzado · 3 integraciones",
      "Retención de datos 12 meses · soporte en 4 h",
    ],
    cta: { href: "/register?plan=SERV_PRO", label: "Probar 14 días gratis" },
  },
  {
    name: "Corporativo",
    price: "1,490",
    contacts: "2,500 resoluciones al mes",
    description:
      "Para operaciones de alto volumen con integraciones ilimitadas y soporte prioritario.",
    featured: false,
    popular: null,
    enterprise: false,
    features: [
      "2,500 resoluciones incluidas · S/ 0.95 la adicional",
      "Tope de gasto garantizado: S/ 3,900 al mes",
      "Todos los canales · agentes humanos ilimitados",
      "Nivel de IA Experto · integraciones ilimitadas",
      "Retención de datos 24 meses · soporte en 1 h",
    ],
    cta: { href: "/register?plan=SERV_CORPORATIVO", label: "Probar 14 días gratis" },
  },
  {
    name: "Enterprise",
    price: null,
    contacts: "Resoluciones comprometidas",
    description:
      "Operación a medida, pospagada contra volumen comprometido, con CSM dedicado.",
    featured: false,
    popular: null,
    enterprise: true,
    features: [
      "Desde S/ 3,900 al mes · S/ 0.45 la resolución adicional",
      "Nivel de IA Experto+ · integraciones ilimitadas",
      "Retención de datos 36 meses",
      "Soporte en 15 minutos + Customer Success Manager",
      "Implementación vertical y contrato a medida",
    ],
    cta: { href: "/contact", label: "Hablar con un asesor" },
  },
]

export const plansNote =
  "Precios en soles, sin IGV. Cobro recurrente vía Mercado Pago, sin permanencia. Konnect no cobra por usuario: agentes humanos ilimitados en todos los planes."

export const plansCta = {
  title: "¿No sabes qué plan elegir?",
  description:
    "Nuestro equipo te ayuda a encontrar la solución perfecta para tu empresa",
  button: { href: "/contact", label: "Agendar una demo" },
} as const
