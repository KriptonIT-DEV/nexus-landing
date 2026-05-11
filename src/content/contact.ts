import whatsapp from "@/assets/icons/whatsapp.svg"
import instagram from "@/assets/icons/instagram.svg"
import messenger from "@/assets/icons/messenger.svg"
import webwidget from "@/assets/icons/webwidget.svg"
import chrome from "@/assets/icons/chrome.svg"
import chatia from "@/assets/icons/chatia.svg"
import youtube from "@/assets/icons/youtube.svg"
import linkedin from "@/assets/icons/linkedin.svg"
import byrecomendation from "@/assets/icons/byrecomendation.svg"
import social from "@/assets/icons/social.svg"

export const contactHero = {
  title: "Ponte en contacto",
  description: "Nuestro equipo estará encantado de ayudarte",
} as const

export const contactSteps = [
  { id: 1, label: "Información" },
  { id: 2, label: "Configuración" },
  { id: 3, label: "Revisión" },
] as const

export const channels = [
  { id: "whatsapp", label: "WhatsApp", icon: whatsapp },
  { id: "instagram", label: "Instagram", icon: instagram },
  { id: "messenger", label: "Messenger", icon: messenger },
  { id: "widget", label: "Web Widget", icon: webwidget },
] as const

export const agentRanges = [
  { value: "1-5", label: "1 – 5 agentes" },
  { value: "5-10", label: "5 – 10 agentes" },
  { value: "+10", label: "+10 agentes" },
] as const

export const discoverySources = [
  { id: "websearch", label: "Búsqueda en Google", icon: chrome },
  { id: "chatia", label: "Chat IA", icon: chatia },
  { id: "videoyoutube", label: "Video de YouTube", icon: youtube },
  { id: "linkedin", label: "LinkedIn", icon: linkedin },
  { id: "byrecomendation", label: "Por recomendación", icon: byrecomendation },
  { id: "bysocial", label: "Redes sociales", icon: social },
] as const

export type ChannelId = (typeof channels)[number]["id"]
export type DiscoverySourceId = (typeof discoverySources)[number]["id"]
