export const plansHero = {
  badge: "Precios",
  title: "Planes",
  description:
    "Elige el plan que mejor se adapte a tu empresa. Sin costos ocultos, sin permanencia.",
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
    name: "Microempresario",
    price: "100",
    contacts: "1,000 contactos al mes",
    description:
      "Ideal para pequeñas empresas que dan sus primeros pasos en la atención digital.",
    featured: false,
    popular: null,
    enterprise: false,
    features: [
      "1,000 contactos al mes",
      "2 canales (WhatsApp + Web Widget)",
      "IA Bot básico integrado",
      "Panel de métricas esenciales",
      "Hasta 5 agentes",
      "Soporte por correo electrónico",
    ],
    cta: { href: "/contact", label: "Comenzar ahora" },
  },
  {
    name: "Startup",
    price: "300",
    contacts: "5,000 contactos al mes",
    description:
      "Para equipos en crecimiento que necesitan escalar su comunicación omnicanal.",
    featured: true,
    popular: "Más popular",
    enterprise: false,
    features: [
      "5,000 contactos al mes",
      "4 canales: WhatsApp, Instagram, Messenger, Web Widget",
      "IA Bot avanzado 24/7",
      "Analytics y reportes en tiempo real",
      "Agentes ilimitados",
      "API & Webhooks incluidos",
      "Soporte prioritario 24/7",
    ],
    cta: { href: "/contact", label: "Comenzar ahora" },
  },
  {
    name: "Empresarial",
    price: null,
    contacts: "Contactos ilimitados",
    description:
      "Solución a medida para grandes empresas con requisitos de escala y personalización.",
    featured: false,
    popular: null,
    enterprise: true,
    features: [
      "Contactos ilimitados",
      "Canales e integraciones personalizadas",
      "IA entrenada con tu marca",
      "Reportes y analytics enterprise",
      "Agentes ilimitados",
      "SLA garantizado",
      "Gerente de cuenta dedicado",
      "Onboarding personalizado",
    ],
    cta: { href: "/contact", label: "Hablar con un agente" },
  },
]

export const plansCta = {
  title: "¿No sabes qué plan elegir?",
  description:
    "Nuestro equipo te ayuda a encontrar la solución perfecta para tu empresa",
  button: { href: "/contact", label: "Agendar una demo" },
} as const
