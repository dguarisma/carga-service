import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Phone, Mail, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="sm:text-4xl text-2xl font-bold text-[#2078E6]">
              Bienvenidos a CargaService
            </h1>
            <p className="sm:text-xl text-base text-gray-600">
              Servicios de Transporte Rápido y Seguro
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="sm:text-2xl text-balance text-lg font-bold text-[#2078E6]">
                SERVICIOS DE TRASLADOS ADAPTADOS A TUS NECESIDADES:
              </h2>
              <ul className="space-y-3 text-base sm:text-lg">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#02AD25]" />
                  TRANSPORTE DE MERCANCIA
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#F20031]" />
                  ACARREOS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#DFCB00]" />
                  MUDANZAS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#2078E6]" />
                  LIMPIEZA DE PROYECTOS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#02AD25]" />
                  COMPRA DE MATERIALES
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/cotizar">
                  <Button className="bg-[#2078E6] hover:bg-[#2078E6]/90">
                    Cotizar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Formato%20para%20fotos%20reales-Bsh7eVciSnoImiP4RgKi9eKa15nx5s.png"
                alt="CargaService Truck"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-semibold text-[#2078E6]">MEJOR PRECIO GARANTIZADO</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-[#2078E6] mb-6 text-center">¡CONTÁCTANOS!</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <a href="tel:+5076870-1740" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#2078E6] transition-colors">
                <Phone className="h-6 w-6 text-[#2078E6]" />
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-sm text-gray-600">+507 6870-1740</div>
                </div>
              </a>
              <a href="https://wa.link/w72qmg" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#02AD25] transition-colors">
                <svg className="h-6 w-6 text-[#02AD25]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-gray-600">+507 6870-1740</div>
                </div>
              </a>
              <a href="mailto:carga.service@gmail.com" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#F20031] transition-colors">
                <Mail className="h-6 w-6 text-[#F20031]" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600">carga.service@gmail.com</div>
                </div>
              </a>
              <a href="https://instagram.com/cargaservice" className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-[#DFCB00] transition-colors">
                <Instagram className="h-6 w-6 text-[#DFCB00]" />
                <div>
                  <div className="font-semibold">Instagram</div>
                  <div className="text-sm text-gray-600">@cargaservice</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

