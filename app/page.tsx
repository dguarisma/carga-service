import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TrabajosRealizados } from "@/components/trabajos-realizados"
import { PanamaCalculator } from "@/components/panama-calculator"
import {
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Package,
  Home as HomeIcon,
  Building2,
  Truck,
  Zap,
  Trash2,
  ShoppingCart,
  BarChart3,
  MapPin,
  Globe,
  Settings2,
  Box,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Star,
  ChevronRight,
} from "lucide-react"

/* ─── Services ─────────────────────────────────────────────── */
const SERVICES = [
  {
    icon: Package,
    title: "Transporte de Mercancía",
    desc: "Transporte seguro de productos, mercancía y carga a nivel nacional con seguimiento.",
    color: "bg-blue-50 text-blue-600",
    popular: true,
  },
  {
    icon: HomeIcon,
    title: "Mudanzas Residenciales",
    desc: "Embalamos, transportamos e instalamos todo en tu nuevo hogar con cuidado total.",
    color: "bg-emerald-50 text-emerald-600",
    popular: true,
  },
  {
    icon: Building2,
    title: "Mudanzas Comerciales",
    desc: "Reubica tu oficina o negocio sin interrumpir operaciones. Planificación incluida.",
    color: "bg-violet-50 text-violet-600",
    popular: false,
  },
  {
    icon: Truck,
    title: "Acarreos",
    desc: "Traslado rápido de artículos individuales, electrodomésticos y equipos del hogar.",
    color: "bg-orange-50 text-orange-600",
    popular: false,
  },
  {
    icon: Zap,
    title: "Servicio Express",
    desc: "Entrega el mismo día en Ciudad de Panamá y área metropolitana. Urgente y confiable.",
    color: "bg-yellow-50 text-yellow-600",
    popular: true,
  },
  {
    icon: Trash2,
    title: "Limpieza de Proyectos",
    desc: "Retiro de escombros, materiales sobrantes y residuos post-construcción.",
    color: "bg-red-50 text-red-600",
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "Compra y Entrega de Materiales",
    desc: "Compramos y entregamos los materiales de construcción que necesitas directamente en obra.",
    color: "bg-teal-50 text-teal-600",
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Logística Empresarial",
    desc: "Soluciones B2B de distribución y cadena de suministro para tu empresa.",
    color: "bg-indigo-50 text-indigo-600",
    popular: false,
  },
  {
    icon: MapPin,
    title: "Entregas a Domicilio",
    desc: "Última milla para e-commerce, tiendas y negocios en línea. Entrega rápida y segura.",
    color: "bg-pink-50 text-pink-600",
    popular: false,
  },
  {
    icon: Globe,
    title: "Transporte Interiorano",
    desc: "Cobertura completa en las 10 provincias y comarcas indígenas de la República.",
    color: "bg-cyan-50 text-cyan-600",
    popular: false,
  },
  {
    icon: Settings2,
    title: "Carga Pesada e Industrial",
    desc: "Maquinaria, equipos industriales y objetos de gran peso o dimensión sobredimensionada.",
    color: "bg-slate-50 text-slate-600",
    popular: false,
  },
  {
    icon: Box,
    title: "Almacenamiento Temporal",
    desc: "Bodega segura y monitoreada mientras planificas tu mudanza o proyecto de construcción.",
    color: "bg-amber-50 text-amber-600",
    popular: false,
  },
]

/* ─── Coverage zones ───────────────────────────────────────── */
const ZONES = [
  { name: "Ciudad de Panamá", cities: "Balboa, Las Cumbres, Pacora, Tocumen, San Miguelito…" },
  { name: "Panamá Oeste", cities: "La Chorrera, Arraiján, Capira, San Carlos, Chame…" },
  { name: "Colón", cities: "Colón, Portobelo, Nombre de Dios, Donoso…" },
  { name: "Coclé", cities: "Penonomé, Aguadulce, Antón, Natá, La Pintada…" },
  { name: "Herrera", cities: "Chitré, Ocú, Parita, Pesé, Los Pozos…" },
  { name: "Los Santos", cities: "Las Tablas, Tonosí, Pedasí, Guararé, Macaracas…" },
  { name: "Veraguas", cities: "Santiago, Soná, Montijo, Atalaya, Las Palmas…" },
  { name: "Chiriquí", cities: "David, Boquete, Volcán, Puerto Armuelles, Bugaba…" },
  { name: "Bocas del Toro", cities: "Bocas Town, Changuinola, Almirante, Chiriquí Grande…" },
  { name: "Darién", cities: "La Palma, Metetí, Yaviza, Santa Fe, Garachiné…" },
  { name: "Comarcas Indígenas", cities: "Kuna Yala, Emberá-Wounaan, Ngäbe-Buglé, Madungandí…" },
]

/* ─── Why us ───────────────────────────────────────────────── */
const WHY_US = [
  { icon: Shield, title: "Seguridad Garantizada", desc: "Tu carga protegida de principio a fin con embalaje profesional y manejo cuidadoso." },
  { icon: Clock, title: "Puntualidad Total", desc: "Llegamos a tiempo, siempre. Nos comprometemos con horarios y los cumplimos." },
  { icon: Award, title: "Mejor Precio del Mercado", desc: "Precios transparentes, sin cobros ocultos. Cotización detallada antes de comenzar." },
  { icon: Globe, title: "Cobertura Nacional", desc: "Llegamos a las 10 provincias y comarcas. Donde estés en Panamá, estamos nosotros." },
  { icon: Star, title: "Equipo Profesional", desc: "Personal capacitado, uniformado y con experiencia en manejo de todo tipo de carga." },
  { icon: CheckCircle2, title: "Servicio 24/7", desc: "Disponibles todos los días del año. Llámanos o escríbenos en cualquier momento." },
]

/* ─── WhatsApp SVG ─────────────────────────────────────────── */
const WA_SVG = (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

/* ═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden hero-pattern"
        style={{ background: "linear-gradient(135deg, #0B1426 0%, #0D2356 55%, #1a3a8a 100%)" }}
      >
        {/* Glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1565E8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#1565E8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-semibold mb-5 border border-white/15">
                <span>🇵🇦</span>
                <span>El servicio de transporte #1 en Panamá</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Tu carga,<br />
                <span className="text-[#1565E8]">nuestra<br className="hidden sm:block" /> misión.</span>
              </h1>

              <p className="text-base lg:text-xl text-blue-200 mt-5 max-w-lg leading-relaxed">
                Mudanzas, transporte de mercancía, logística empresarial y más — cobertura nacional, precio justo y servicio garantizado.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8">
                <Link href="/cotizar">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#1565E8] hover:bg-[#1254c5] text-white text-base font-bold px-7 py-6 rounded-xl shadow-lg shadow-blue-500/30"
                  >
                    Cotizar — Es Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-[#02AD25] hover:bg-[#028f1e] text-white text-base font-bold px-7 py-6 rounded-xl shadow-lg shadow-green-500/20"
                  >
                    {WA_SVG}
                    <span className="ml-2">WhatsApp</span>
                  </Button>
                </a>
                <a href="tel:+5076870-1740" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white text-base font-bold px-7 py-6 rounded-xl"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    +507 6870-1740
                  </Button>
                </a>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
                {[
                  { num: "500+", label: "Servicios" },
                  { num: "11", label: "Provincias" },
                  { num: "24/7", label: "Disponible" },
                  { num: "100%", label: "Garantizado" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl lg:text-3xl font-black text-white">{s.num}</div>
                    <div className="text-xs text-blue-300 mt-0.5 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — truck image */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#1565E8]/20 rounded-3xl blur-2xl scale-95" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/services/camion.webp"
                    alt="CargaService — Flota de transporte"
                    width={580}
                    height={400}
                    className="object-cover w-full"
                    priority
                  />
                  {/* Price badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-xl">
                    <div className="text-xs text-gray-500 font-medium">Precio competitivo</div>
                    <div className="text-base font-black text-[#1565E8]">MEJOR PRECIO GARANTIZADO</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚛", title: "Flota Propia", sub: "Vehículos de todo tamaño" },
              { icon: "📍", title: "Cobertura Nacional", sub: "11 provincias y comarcas" },
              { icon: "💰", title: "Sin Cobros Ocultos", sub: "Precio transparente siempre" },
              { icon: "⚡", title: "Respuesta en 15 min", sub: "Cotización inmediata" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-black text-[#0B1426] text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1565E8]/8 text-[#1565E8] rounded-full px-4 py-2 text-sm font-bold mb-4">
              Nuestros Servicios
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1426] tracking-tight">
              Soluciones para cada necesidad
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
              Desde mudarte de casa hasta distribuir tu negocio en todo Panamá — cubrimos todo lo que necesitas mover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="service-card relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl cursor-default"
                >
                  {service.popular && (
                    <span className="absolute top-4 right-4 text-xs font-bold bg-[#1565E8] text-white px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${service.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-black text-[#0B1426] text-base mb-2 leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                  <Link
                    href="/cotizar"
                    className="inline-flex items-center gap-1 text-[#1565E8] font-bold text-sm mt-4 hover:gap-2 transition-all"
                  >
                    Cotizar <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/cotizar">
              <Button
                size="lg"
                className="bg-[#1565E8] hover:bg-[#1254c5] text-white font-bold px-10 py-6 rounded-xl text-base shadow-lg shadow-blue-100"
              >
                Solicitar Cotización Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1565E8]/8 text-[#1565E8] rounded-full px-4 py-2 text-sm font-bold mb-4">
              ¿Cómo funciona?
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1426] tracking-tight">
              Simple. Rápido. Confiable.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#1565E8] to-[#1565E8] opacity-20" />

            {[
              {
                step: "01",
                emoji: "📲",
                title: "Contáctanos",
                desc: "Escríbenos por WhatsApp, llama, o llena el formulario en línea. Te respondemos en menos de 15 minutos.",
              },
              {
                step: "02",
                emoji: "📋",
                title: "Recibe tu cotización",
                desc: "Te enviamos una cotización detallada, transparente y sin cobros ocultos. Sin compromisos.",
              },
              {
                step: "03",
                emoji: "🚛",
                title: "Tu carga en camino",
                desc: "Nuestro equipo recoge y entrega tu carga de forma segura y puntual, donde la necesites.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#1565E8] text-white text-xs font-black flex items-center justify-center shadow-lg">
                  {item.step}
                </div>
                <div className="text-5xl mb-4 mt-2">{item.emoji}</div>
                <h3 className="text-xl font-black text-[#0B1426] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#02AD25] hover:bg-[#028f1e] text-white font-bold px-8 py-6 rounded-xl text-base gap-2"
              >
                {WA_SVG}
                Empezar por WhatsApp
              </Button>
            </a>
            <Link href="/cotizar">
              <Button
                size="lg"
                variant="outline"
                className="border-[#1565E8] text-[#1565E8] hover:bg-[#1565E8] hover:text-white font-bold px-8 py-6 rounded-xl text-base"
              >
                Llenar formulario
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ─────────────────────────────────────────── */}
      <section
        id="cobertura"
        className="py-24"
        style={{ background: "linear-gradient(135deg, #0B1426 0%, #0D2356 55%, #1a3a8a 100%)" }}
      >
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-bold mb-4 border border-white/15">
              <Globe className="h-4 w-4 text-[#1565E8]" />
              Cobertura Nacional
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Llegamos a toda la república
            </h2>
            <p className="text-blue-200 text-lg mt-4 max-w-2xl mx-auto">
              Desde Bocas del Toro hasta Darién, pasando por todas las provincias y comarcas. Si es Panamá, llegamos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ZONES.map((zone, i) => (
              <div
                key={zone.name}
                className="bg-white/6 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#1565E8]/30 flex items-center justify-center text-xs font-black text-[#1565E8]">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-bold text-sm">{zone.name}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{zone.cities}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-200 text-sm mb-5">
              ¿No ves tu ciudad? <span className="text-white font-bold">Escríbenos — probablemente también llegamos.</span>
            </p>
            <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#02AD25] hover:bg-[#028f1e] text-white font-bold px-10 py-6 rounded-xl text-base gap-2"
              >
                {WA_SVG}
                Consultar disponibilidad
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR ───────────────────────────────────────── */}
      <PanamaCalculator />

      {/* ── PORTFOLIO ────────────────────────────────────────── */}
      <TrabajosRealizados />

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1565E8]/8 text-[#1565E8] rounded-full px-4 py-2 text-sm font-bold mb-4">
              ¿Por qué elegirnos?
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1426] tracking-tight">
              La diferencia CargaService
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              No somos solo un camión — somos tu aliado logístico de confianza en Panamá.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#1565E8]/30 hover:bg-blue-50/50 transition-all">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[#1565E8] flex items-center justify-center shadow-md shadow-blue-100">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-[#0B1426] mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #02AD25 0%, #028f1e 100%)" }}
      >
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🇵🇦</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            ¿Listo para mover lo que necesitas?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-xl mx-auto">
            Escríbenos ahora por WhatsApp y recibe tu cotización gratis en menos de 15 minutos. Sin compromisos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white text-[#02AD25] hover:bg-green-50 font-black text-base px-10 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
              >
                {WA_SVG}
                <span className="ml-2">Cotizar por WhatsApp</span>
              </Button>
            </a>
            <Link href="/cotizar">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-base px-10 py-6 rounded-xl"
              >
                Formulario de cotización
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#1565E8]/8 text-[#1565E8] rounded-full px-4 py-2 text-sm font-bold mb-4">
              Contáctanos
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0B1426] tracking-tight">
              Estamos aquí para ti
            </h2>
            <p className="text-gray-500 text-lg mt-4">
              Elige el canal que prefieras — respondemos rápido.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* WhatsApp */}
            <a
              href="https://wa.link/w72qmg"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-white border-2 border-gray-100 hover:border-[#02AD25] rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#02AD25]/10 group-hover:bg-[#02AD25] flex items-center justify-center text-[#02AD25] group-hover:text-white transition-all shrink-0">
                {WA_SVG}
              </div>
              <div>
                <div className="font-black text-[#0B1426] text-lg">WhatsApp</div>
                <div className="text-gray-500 text-sm">+507 6870-1740</div>
                <div className="text-[#02AD25] text-xs font-bold mt-1">Respuesta inmediata</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+5076870-1740"
              className="group flex items-center gap-5 bg-white border-2 border-gray-100 hover:border-[#1565E8] rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1565E8]/10 group-hover:bg-[#1565E8] flex items-center justify-center text-[#1565E8] group-hover:text-white transition-all shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="font-black text-[#0B1426] text-lg">Llamar</div>
                <div className="text-gray-500 text-sm">+507 6870-1740</div>
                <div className="text-[#1565E8] text-xs font-bold mt-1">Atención 24/7</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:carga.service@gmail.com"
              className="group flex items-center gap-5 bg-white border-2 border-gray-100 hover:border-red-400 rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 group-hover:bg-red-500 flex items-center justify-center text-red-500 group-hover:text-white transition-all shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="font-black text-[#0B1426] text-lg">Email</div>
                <div className="text-gray-500 text-sm">carga.service@gmail.com</div>
                <div className="text-red-500 text-xs font-bold mt-1">Respuesta en el día</div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/cargaservice"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-white border-2 border-gray-100 hover:border-pink-400 rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-50 group-hover:bg-pink-500 flex items-center justify-center text-pink-500 group-hover:text-white transition-all shrink-0">
                <Instagram className="h-6 w-6" />
              </div>
              <div>
                <div className="font-black text-[#0B1426] text-lg">Instagram</div>
                <div className="text-gray-500 text-sm">@cargaservice</div>
                <div className="text-pink-500 text-xs font-bold mt-1">Síguenos</div>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@carga.service?_t=ZM-8zLpKc0tQpy&_r=1"
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-5 bg-white border-2 border-gray-100 hover:border-black rounded-2xl p-6 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-black flex items-center justify-center text-black group-hover:text-white transition-all shrink-0">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                </svg>
              </div>
              <div>
                <div className="font-black text-[#0B1426] text-lg">TikTok</div>
                <div className="text-gray-500 text-sm">@carga.service</div>
                <div className="text-gray-600 text-xs font-bold mt-1">Mira nuestros trabajos</div>
              </div>
            </a>

            {/* Cotizar */}
            <Link
              href="/cotizar"
              className="group flex items-center gap-5 bg-[#1565E8] border-2 border-[#1565E8] rounded-2xl p-6 transition-all hover:shadow-lg hover:bg-[#1254c5]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white shrink-0">
                <ArrowRight className="h-6 w-6" />
              </div>
              <div>
                <div className="font-black text-white text-lg">Cotizar Servicio</div>
                <div className="text-blue-200 text-sm">Formulario completo</div>
                <div className="text-white text-xs font-bold mt-1">Gratis · Sin compromiso</div>
              </div>
            </Link>
          </div>

          {/* Address */}
          <div className="mt-10 flex items-start gap-3 justify-center text-center">
            <MapPin className="h-5 w-5 text-[#1565E8] mt-0.5 shrink-0" />
            <p className="text-gray-500 text-sm">
              <span className="font-bold text-[#0B1426]">Oficina: </span>
              PH Emerald Local 3B, Villa Zaita, Corregimiento Ernesto Campos, Panamá Norte
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
