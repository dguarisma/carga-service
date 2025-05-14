// Tipo de datos para los trabajos realizados
export interface TrabajoRealizadoProps {
  id: number
  title: string
  description: string
  location: string
  date: string
  mediaType: "image" | "video"
  mediaUrl: string
  thumbnail?: string
}

// Datos de los trabajos realizados
export const trabajosRealizados: TrabajoRealizadoProps[] = [
  {
    id: 1,
    title: "Servicio de Mudanza",
    description: "Traslado de Muebles",
    location: "Paitilla",
    date: "Enero 2025",
    mediaType: "video",
    mediaUrl: "/videos/WhatsApp-Video-2025-05-13-at-22.36.39.mp4",
    thumbnail: "/projects/mudanzas-basicas.png",
  },
  {
    id: 2,
    title: "Servicio de Traslado de Aire Acondicionado",
    description: "A Proyecto",
    location: "Veracruz",
    date: "Enero 2025",
    mediaType: "image",
    mediaUrl: "/projects/proyecto-ac-veracruz.jpeg",
  },
  {
    id: 3,
    title: "Servicio de Traslado",
    description: "Entrega de Aire Acondicionado",
    location: "Costa del Este",
    date: "Febrero 2025",
    mediaType: "image",
    mediaUrl: "/projects/proyecto-ac-costa.jpeg",
  },
  {
    id: 4,
    title: "Limpieza de Proyecto",
    description: "Greenwood - Luxor 400",
    location: "Cangrejo y TumbaMuerto",
    date: "Marzo 2025",
    mediaType: "video",
    mediaUrl: "/videos/WhatsApp-Video-2025-05-13-at-22.40.43.mp4",
    thumbnail: "/services/limpieza-proyectos.png",
  },
]
