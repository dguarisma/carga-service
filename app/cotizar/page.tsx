import { Header } from '@/components/header'
import { ServiceForm } from '@/components/service-form'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#2078E6]">
              Cotizar Servicio
            </h1>
            <p className="text-xl text-gray-600">
              Complete el formulario para recibir una cotización
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceForm />
            <div className="hidden md:block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-12-04%20at%2007.43.00%20(1)-5NWuh3K9dlOlWoI55nrVfWmUROd5jU.jpeg"
                alt="CargaService Truck"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

