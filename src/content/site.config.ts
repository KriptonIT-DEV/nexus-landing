export const site = {
  name: "Konnect 360",
  tagline: "CRM Omnicanal · Lima, Perú",
  description:
    "Plataforma CRM omnicanal con IA integrada. Gestiona WhatsApp, Instagram, Messenger y Web Widget desde un único inbox.",
  url: "https://konnect-360.com",
  email: "ventas@konnect-360.com",
  address: {
    line1: "Av. Mayor Andres Razuri N° 172",
    line2: "Lima – San Miguel",
    country: "Perú",
  },
} as const

export const nav = {
  primary: [
    { href: "/#start", label: "Inicio", hash: "start" },
    { href: "/#why-us", label: "¿Por qué nosotros?", hash: "why-us" },
    { href: "/#services", label: "Servicios", hash: "services" },
    { href: "/about", label: "Nosotros" },
    { href: "/plans", label: "Planes" },
    { href: "/contact", label: "Contacto" },
  ],
  cta: { label: "Inicia sesión" },
} as const

export const footerLinks = {
  product: [
    { href: "/#start", label: "Inicio" },
    { href: "/#why-us", label: "¿Por qué nosotros?" },
    { href: "/#services", label: "Servicios" },
    { href: "/about", label: "Sobre nosotros" },
    { href: "/plans", label: "Planes" },
    { href: "/contact", label: "Contacto" },
  ],
  legal: [
    { href: "/privacy", label: "Políticas de privacidad" },
    { href: "/terms", label: "Términos de uso" },
    { href: "/data-processing", label: "Tratamiento de datos" },
  ],
  social: [
    { href: "#", label: "Instagram", platform: "instagram" },
    { href: "#", label: "LinkedIn", platform: "linkedin" },
    { href: "#", label: "YouTube", platform: "youtube" },
    { href: "#", label: "WhatsApp", platform: "whatsapp" },
  ],
} as const

export type SocialPlatform = (typeof footerLinks.social)[number]["platform"]
