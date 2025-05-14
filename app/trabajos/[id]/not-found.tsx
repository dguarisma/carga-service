import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#2078E6] mb-4">Proyecto no encontrado</h1>
          <p className="text-gray-600 mb-8">
            Lo sentimos, el proyecto que estás buscando no existe o ha sido eliminado.
          </p>
          <Link href="/#trabajos-realizados">
            <Button className="bg-[#2078E6] hover:bg-[#2078E6]/90">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Trabajos Realizados
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
