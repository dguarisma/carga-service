import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Calendar, ArrowLeft, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VideoPlayer } from "@/components/video-player"
import { trabajosRealizados } from "@/lib/data"

// Esta función es necesaria para generar rutas estáticas con output: export
export function generateStaticParams() {
  return trabajosRealizados.map((trabajo) => ({
    id: trabajo.id.toString(),
  }))
}

export default function TrabajoDetalle({ params }: { params: { id: string } }) {
  const trabajo = trabajosRealizados.find((t) => t.id === Number.parseInt(params.id))

  if (!trabajo) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/#trabajos-realizados">
              <Button variant="ghost" className="text-[#2078E6] hover:text-[#2078E6]/80 p-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Trabajos Realizados
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              {trabajo.mediaType === "image" ? (
                <Image
                  src={trabajo.mediaUrl || "/placeholder.svg"}
                  alt={trabajo.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <VideoPlayer src={trabajo.mediaUrl} thumbnail={trabajo.thumbnail} className="h-full" />
              )}
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#2078E6] text-white border-none">{trabajo.date}</Badge>
                <Badge variant="outline" className="text-gray-600">
                  {trabajo.mediaType === "video" ? "Video" : "Imagen"}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-[#2078E6] mb-4">{trabajo.title}</h1>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-[#F20031]" />
                  <span>{trabajo.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-[#02AD25]" />
                  <span>{trabajo.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#DFCB00]" />
                  <span>Proyecto completado</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-3">Descripción del Proyecto</h2>
                <p className="text-gray-700 mb-4">
                  {trabajo.description}. Este proyecto fue realizado con éxito en {trabajo.location} durante{" "}
                  {trabajo.date}. Nuestro equipo profesional se encargó de todo el proceso, garantizando un servicio de
                  calidad y satisfacción del cliente.
                </p>

                <h2 className="text-xl font-semibold mb-3">Detalles del Servicio</h2>
                <p className="text-gray-700 mb-4">
                  {trabajo.title === "Servicio de Mudanza"
                    ? "Realizamos el traslado completo de muebles y enseres, con personal capacitado y vehículos adecuados para garantizar la seguridad de sus pertenencias."
                    : trabajo.title.includes("Aire Acondicionado")
                      ? "Nuestro servicio de traslado de aires acondicionados incluye desmontaje, transporte seguro y reinstalación en el destino, todo con técnicos especializados."
                      : trabajo.title.includes("Limpieza")
                        ? "Ofrecemos servicios completos de limpieza de proyectos, incluyendo remoción de escombros, limpieza profunda y preparación del espacio para su uso."
                        : "Brindamos servicios profesionales de transporte y logística, adaptados a las necesidades específicas de cada cliente."}
                </p>

                <h2 className="text-xl font-semibold mb-3">¿Por qué elegir CargaService?</h2>
                <ul className="list-disc pl-5 text-gray-700 mb-4">
                  <li>Personal altamente capacitado y con experiencia</li>
                  <li>Vehículos adecuados para cada tipo de carga</li>
                  <li>Puntualidad y responsabilidad garantizada</li>
                  <li>Precios competitivos en el mercado</li>
                  <li>Servicio personalizado según sus necesidades</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/cotizar">
                  <Button className="bg-[#2078E6] hover:bg-[#2078E6]/90 w-full sm:w-auto">
                    Solicitar un servicio similar
                  </Button>
                </Link>
                <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-[#02AD25] text-[#02AD25] hover:bg-[#02AD25]/10"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
