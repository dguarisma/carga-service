"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { VideoPlayer } from "@/components/video-player"
import { trabajosRealizados } from "@/lib/data"

export function TrabajosRealizados() {
  return (
    <section id="trabajos-realizados" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2078E6] mb-2">Trabajos Realizados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conoce algunos de nuestros proyectos completados recientemente. Brindamos servicios de calidad en toda la
            ciudad de Panamá.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trabajosRealizados.map((trabajo) => (
            <Link
              href={`/trabajos/${trabajo.id}`}
              key={trabajo.id}
              className="block transition-transform duration-300 hover:-translate-y-1"
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
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
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#2078E6] text-white border-none">{trabajo.date}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{trabajo.date}</span>
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{trabajo.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2078E6] mb-2">{trabajo.title}</h3>
                  <p className="text-gray-700">{trabajo.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {trabajo.mediaType === "video" ? "Video disponible" : "Galería de fotos"}
                  </div>
                  <div className="text-[#2078E6] font-medium flex items-center">
                    Ver detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/trabajos">
            <Button className="bg-[#2078E6] hover:bg-[#2078E6]/90">
              Ver todos los trabajos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
