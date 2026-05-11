export const hero = {
  badge: "CRM Omnicanal · Lima, Perú",
  title: {
    pre: "El ",
    accent: "CRM",
    post: " más fácil",
    suffix: "que hay.",
  },
  description:
    "Gestiona todos tus canales de comunicación desde un solo lugar. IA integrada, análisis en tiempo real.",
  ctas: {
    primary: { href: "/contact", label: "Agendar demo" },
    secondary: { href: "/about", label: "Nosotros" },
  },
  socialLabel: "Visítanos en:",
} as const

export const whyUs = {
  badge: "¿Por qué nosotros?",
  title: "Bienvenido a Konnect 360",
  description:
    "Konnect 360 cree que no se trata solo de tecnología o negocios, sino de liberar el potencial inherente en cada organización a través de la innovación. Creamos soluciones que descubren tu poder oculto para forjar un futuro mejor.",
  bullets: [
    "IA Chat integrado para atención automatizada 24/7",
    "Gestión unificada de tickets desde múltiples canales",
    "Datos y reportes accionables en tiempo real",
  ],
  quote:
    "Aumente sus leads y obtenga más ventas con nuestra integración avanzada",
} as const

export const stats = [
  { value: "4", label: "Canales integrados" },
  { value: "24/7", label: "Soporte IA" },
  { value: "100%", label: "Cloud nativo" },
  { value: "REST", label: "APIs abiertas" },
] as const

export const services = {
  badge: "Nuestros servicios",
  title: "Servicios",
  subtitle: "Comprometidos con el cambio en la industria",
  items: [
    {
      icon: "MessageCircle",
      title: "Gestión de canales",
      description:
        "Hasta 4 canales para maximizar el alcance de atención al cliente: WhatsApp, Instagram, Messenger y Web Widget.",
    },
    {
      icon: "Brain",
      title: "IA Bot Chat",
      description:
        "Integra tus chats con nuestro IA Bot para recopilar datos de clientes y ofrecer atención personalizada 24/7.",
    },
    {
      icon: "Lock",
      title: "Control de Gestión",
      description:
        "Estadísticas de colaboradores y priorización de tickets para maximizar la eficiencia operativa.",
    },
    {
      icon: "Webhook",
      title: "APIs y Webhooks",
      description:
        "Control total sobre el flujo de datos con integración REST API y Webhooks de todos tus canales.",
    },
  ],
  showcase: {
    metric1: { value: "+10,000", label: "clientes activos" },
    metric2: { value: "4 canales", label: "integrados" },
  },
} as const

export const missionVision = [
  {
    icon: "Rocket",
    label: "Misión",
    body: "Potenciar a personas y empresas con soluciones tecnológicas innovadoras que descubran su poder oculto y forjen un futuro mejor a través de la comunicación omnicanal.",
    tags: ["Experiencia", "Mejora continua", "Innovación"],
  },
  {
    icon: "BarChart3",
    label: "Visión",
    body: "Ser líderes reconocidos en la industria CRM latinoamericana, distinguiéndonos por nuestra dedicación a la excelencia, la mejora continua y la innovación tecnológica.",
    tags: ["Liderazgo", "Excelencia", "Tecnología"],
  },
] as const

export const features = [
  {
    icon: "Check",
    title: "Fácil de usar",
    description:
      "Interfaz intuitiva que no requiere capacitación técnica especializada.",
  },
  {
    icon: "MessageCircle",
    title: "Omnicanal real",
    description:
      "Un inbox unificado para WhatsApp, Instagram, Messenger y Widget web.",
  },
  {
    icon: "BarChart3",
    title: "Reportes en tiempo real",
    description:
      "Dashboards con métricas accionables para tomar mejores decisiones.",
  },
] as const

export const homeCta = {
  title: "Ponte en contacto con nosotros",
  description: "Nuestro equipo estará encantado de ayudarte",
  button: { href: "/contact", label: "Contacto" },
} as const
