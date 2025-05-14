import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoPlayer } from "@/components/video-player"
import { trabajosRealizados } from "@/lib/data"

export default function TodosLosTrabajos() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Link href="/#trabajos-realizados">
              <Button variant="ghost" className="text-[#2078E6] hover:text-[#2078E6]/80 p-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a inicio
              </Button>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2078E6] mb-2">Todos Nuestros Trabajos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora nuestra colección de proyectos realizados. Cada trabajo refleja nuestro compromiso con la calidad
              y satisfacción del cliente.
            </p>
          </div>

          {/* Lista de trabajos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {trabajosRealizados.map((trabajo) => (
              <Link
                href={`/trabajos/${trabajo.id}`}
                key={trabajo.id}
                className="block transition-transform duration-300 hover:-translate-y-1"
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative h-64">
                    {trabajo.mediaType === "image" ? (
                      <Image
                        src={trabajo.mediaUrl || "/placeholder.svg"}
                        alt={trabajo.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <VideoPlayer src={trabajo.mediaUrl} thumbnail={trabajo.thumbnail} />
                    )}
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-[#2078E6] text-white border-none">{trabajo.date}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{trabajo.date}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{trabajo.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#2078E6] mb-1">{trabajo.title}</h3>
                    <p className="text-gray-700">{trabajo.description}</p>
                  </CardContent>
                  <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {trabajo.mediaType === "video" ? "Video disponible" : "Galería de fotos"}
                    </div>
                    <div className="text-[#2078E6] font-medium flex items-center">
                      Ver detalles
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
