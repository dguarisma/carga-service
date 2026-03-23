import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

const SERVICES_COL1 = [
  'Transporte de Mercancía',
  'Mudanzas Residenciales',
  'Mudanzas Comerciales',
  'Acarreos',
  'Servicio Express',
  'Limpieza de Proyectos',
]

const SERVICES_COL2 = [
  'Compra y Entrega de Materiales',
  'Logística Empresarial',
  'Entregas a Domicilio',
  'Transporte Interiorano',
  'Carga Pesada e Industrial',
  'Almacenamiento Temporal',
]

const WHATSAPP_SVG = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TIKTOK_SVG = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 32 32">
    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-[#0B1426] text-white">
      {/* Main footer body */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + Address */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="relative h-16 w-16">
                <Image src="/logo.webp" alt="CargaService" fill className="object-contain" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tu aliado de confianza para transporte y mudanzas en toda la República de Panamá. Rápido, seguro y con precio justo.
            </p>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#1565E8] mt-0.5 shrink-0" />
              <div className="text-sm text-gray-400 leading-relaxed">
                <p className="text-white font-semibold">PH Emerald Local 3B</p>
                <p>Villa Zaita</p>
                <p>Corregimiento Ernesto Campos</p>
                <p>Panamá Norte, Panamá</p>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.tiktok.com/@carga.service?_t=ZM-8zLpKc0tQpy&_r=1"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all"
              >
                {TIKTOK_SVG}
              </a>
              <a
                href="https://instagram.com/cargaservice"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-pink-500 hover:text-white transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.link/w72qmg"
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#02AD25] hover:text-white transition-all"
              >
                {WHATSAPP_SVG}
              </a>
              <a
                href="tel:+5076870-1740"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#1565E8] hover:text-white transition-all"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services Col 1 */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1565E8]/25">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_COL1.map((s) => (
                <li key={s}>
                  <Link
                    href="/cotizar"
                    className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1565E8]/40 group-hover:bg-[#1565E8] transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Col 2 */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1565E8]/25">
              Más Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_COL2.map((s) => (
                <li key={s}>
                  <Link
                    href="/cotizar"
                    className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1565E8]/40 group-hover:bg-[#1565E8] transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-base mt-7 mb-4 pb-2 border-b border-[#1565E8]/25">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/trabajos" className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors">
                  Trabajos Realizados
                </Link>
              </li>
              <li>
                <Link href="/cotizar" className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors">
                  Solicitar Cotización
                </Link>
              </li>
              <li>
                <a href="/#calculadora" className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors">
                  Calculadora de Precios
                </a>
              </li>
              <li>
                <a href="/#cobertura" className="text-gray-400 hover:text-[#1565E8] text-sm transition-colors">
                  Cobertura Nacional
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-base mb-5 pb-2 border-b border-[#1565E8]/25">
              Contáctanos
            </h3>
            <div className="space-y-4">
              <a
                href="https://wa.link/w72qmg"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#02AD25]/15 flex items-center justify-center shrink-0 group-hover:bg-[#02AD25] transition-all">
                  <span className="text-[#02AD25] group-hover:text-white">{WHATSAPP_SVG}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-xs">+507 6870-1740</p>
                </div>
              </a>

              <a
                href="tel:+5076870-1740"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1565E8]/15 flex items-center justify-center shrink-0 group-hover:bg-[#1565E8] transition-all">
                  <Phone className="h-4 w-4 text-[#1565E8] group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Teléfono</p>
                  <p className="text-gray-400 text-xs">+507 6870-1740</p>
                </div>
              </a>

              <a
                href="mailto:carga.service@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-all">
                  <Mail className="h-4 w-4 text-red-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Email</p>
                  <p className="text-gray-400 text-xs">carga.service@gmail.com</p>
                </div>
              </a>

              <a
                href="https://instagram.com/cargaservice"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center shrink-0 group-hover:bg-pink-500 transition-all">
                  <Instagram className="h-4 w-4 text-pink-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Instagram</p>
                  <p className="text-gray-400 text-xs">@cargaservice</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CargaService. Todos los derechos reservados.</p>
          <span className="text-xl">🇵🇦</span>
        </div>
      </div>
    </footer>
  )
}
