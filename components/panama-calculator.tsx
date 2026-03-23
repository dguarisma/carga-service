"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

type ZoneId =
  | "panama-city"
  | "panama-oeste"
  | "colon"
  | "cocle"
  | "herrera"
  | "los-santos"
  | "veraguas"
  | "chiriqui"
  | "bocas"
  | "darien"
  | "comarcas"

interface Zone {
  id: ZoneId
  name: string
  province: string
  cities: string[]
  basePrice: number
}

const ZONES: Zone[] = [
  {
    id: "panama-city",
    name: "Ciudad de Panamá",
    province: "Panamá",
    cities: ["Ciudad de Panamá", "San Miguelito", "Tocumen", "Pacora", "Las Cumbres", "Chilibre", "Chepo", "Balboa"],
    basePrice: 30,
  },
  {
    id: "panama-oeste",
    name: "Panamá Oeste",
    province: "Panamá Oeste",
    cities: ["La Chorrera", "Arraiján", "Capira", "Chame", "San Carlos", "Bejuco", "Nueva Gorgona", "Punta Chame"],
    basePrice: 55,
  },
  {
    id: "colon",
    name: "Colón",
    province: "Colón",
    cities: ["Colón", "Portobelo", "Nombre de Dios", "Donoso", "Santa Isabel", "Omar Torrijos Herrera"],
    basePrice: 70,
  },
  {
    id: "cocle",
    name: "Coclé",
    province: "Coclé",
    cities: ["Penonomé", "Aguadulce", "Antón", "Natá", "La Pintada", "Olá"],
    basePrice: 100,
  },
  {
    id: "herrera",
    name: "Herrera",
    province: "Herrera",
    cities: ["Chitré", "Ocú", "Parita", "Pesé", "Los Pozos", "Las Minas", "Santa María"],
    basePrice: 140,
  },
  {
    id: "los-santos",
    name: "Los Santos",
    province: "Los Santos",
    cities: ["Las Tablas", "Macaracas", "Los Santos", "Tonosí", "Pedasí", "Guararé", "La Villa de Los Santos"],
    basePrice: 150,
  },
  {
    id: "veraguas",
    name: "Veraguas",
    province: "Veraguas",
    cities: ["Santiago", "Soná", "Calobre", "La Mesa", "Montijo", "Atalaya", "San Francisco", "Las Palmas"],
    basePrice: 170,
  },
  {
    id: "chiriqui",
    name: "Chiriquí",
    province: "Chiriquí",
    cities: ["David", "Boquete", "Bugaba", "Dolega", "Barú", "Volcán", "Puerto Armuelles", "Alanje", "Renacimiento"],
    basePrice: 220,
  },
  {
    id: "bocas",
    name: "Bocas del Toro",
    province: "Bocas del Toro",
    cities: ["Bocas Town", "Changuinola", "Almirante", "Chiriquí Grande", "Rambala", "Guabito"],
    basePrice: 290,
  },
  {
    id: "darien",
    name: "Darién",
    province: "Darién",
    cities: ["La Palma", "Metetí", "Yaviza", "Santa Fe", "Sambú", "Garachiné"],
    basePrice: 170,
  },
  {
    id: "comarcas",
    name: "Comarcas Indígenas",
    province: "Comarcas",
    cities: ["Kuna Yala (San Blas)", "Emberá-Wounaan", "Ngäbe-Buglé", "Madungandí", "Wargandí"],
    basePrice: 200,
  },
]

const CARGO_TYPES = [
  { id: "liviana", label: "Carga Liviana", description: "Hasta 300 kg", multiplier: 1.0, emoji: "📦" },
  { id: "mediana", label: "Carga Mediana", description: "300 – 1,000 kg", multiplier: 1.6, emoji: "🛋️" },
  { id: "pesada", label: "Carga Pesada", description: "Más de 1,000 kg", multiplier: 2.5, emoji: "🏭" },
  { id: "express", label: "Servicio Express", description: "Entrega mismo día", multiplier: 1.9, emoji: "⚡" },
]

export function PanamaCalculator() {
  const [fromZone, setFromZone] = useState<ZoneId | "">("")
  const [toZone, setToZone] = useState<ZoneId | "">("")
  const [cargoType, setCargoType] = useState<string>("liviana")
  const [result, setResult] = useState<{ min: number; max: number } | null>(null)

  const calculate = () => {
    if (!fromZone || !toZone) return

    const fromData = ZONES.find((z) => z.id === fromZone)!
    const toData = ZONES.find((z) => z.id === toZone)!
    const cargoData = CARGO_TYPES.find((c) => c.id === cargoType)!

    let basePrice: number
    if (fromZone === toZone) {
      basePrice = fromData.basePrice
    } else {
      const bigger = Math.max(fromData.basePrice, toData.basePrice)
      const smaller = Math.min(fromData.basePrice, toData.basePrice)
      basePrice = bigger + smaller * 0.35
    }

    const price = basePrice * cargoData.multiplier
    setResult({
      min: Math.round(price * 0.82),
      max: Math.round(price * 1.22),
    })
  }

  const canCalculate = fromZone !== "" && toZone !== ""

  return (
    <section id="calculadora" className="py-24 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1565E8]/10 text-[#1565E8] rounded-full px-4 py-2 text-sm font-bold mb-4">
            <Calculator className="h-4 w-4" />
            Calculadora de Precios
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0B1426]">
            ¿Cuánto cuesta tu envío?
          </h2>
          <p className="text-gray-500 text-lg mt-3 max-w-2xl mx-auto">
            Obtén un estimado al instante. Selecciona origen, destino y tipo de carga — cobertura en toda la República de Panamá.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0B1426 0%, #0D2356 55%, #1a3a8a 100%)' }}>
          <div className="p-8 lg:p-12">
            {/* Origin / Destination */}
            <div className="grid md:grid-cols-2 gap-5 mb-7">
              <div>
                <label className="flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-widest mb-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#1565E8]" />
                  Origen
                </label>
                <select
                  value={fromZone}
                  onChange={(e) => setFromZone(e.target.value as ZoneId)}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1565E8] transition appearance-none cursor-pointer text-sm"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled style={{ background: "#0B1426" }}>
                    Selecciona provincia de origen
                  </option>
                  {ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id} style={{ background: "#0B1426" }}>
                      {zone.name} · {zone.province}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-widest mb-2.5">
                  <MapPin className="h-3.5 w-3.5 text-red-400" />
                  Destino
                </label>
                <select
                  value={toZone}
                  onChange={(e) => setToZone(e.target.value as ZoneId)}
                  className="w-full bg-white/10 text-white border border-white/20 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1565E8] transition appearance-none cursor-pointer text-sm"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled style={{ background: "#0B1426" }}>
                    Selecciona provincia de destino
                  </option>
                  {ZONES.map((zone) => (
                    <option key={zone.id} value={zone.id} style={{ background: "#0B1426" }}>
                      {zone.name} · {zone.province}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cargo type */}
            <div className="mb-8">
              <label className="block text-white font-bold text-xs uppercase tracking-widest mb-3">
                Tipo de carga
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {CARGO_TYPES.map((cargo) => (
                  <button
                    key={cargo.id}
                    type="button"
                    onClick={() => setCargoType(cargo.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${cargoType === cargo.id
                        ? "border-[#1565E8] bg-[#1565E8]/20 shadow-lg shadow-blue-500/20"
                        : "border-white/15 bg-white/5 hover:border-white/30"
                      }`}
                  >
                    <div className="text-2xl mb-1.5">{cargo.emoji}</div>
                    <div className="text-white font-bold text-sm leading-tight">{cargo.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{cargo.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={calculate}
              disabled={!canCalculate}
              className="w-full bg-[#1565E8] hover:bg-[#1254c5] text-white text-base font-bold py-7 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/30"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular Estimado de Precio
            </Button>

            {/* Result */}
            {result && (
              <div className="mt-6 p-7 bg-white/8 backdrop-blur border border-white/15 rounded-2xl">
                <p className="text-gray-400 text-sm text-center mb-2">Estimado de precio referencial</p>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-5xl lg:text-6xl font-black text-white">${result.min}</span>
                  <span className="text-3xl text-gray-500 font-light">—</span>
                  <span className="text-5xl lg:text-6xl font-black text-[#1565E8]">${result.max}</span>
                  <span className="text-gray-400 text-xl self-end mb-2">USD</span>
                </div>
                <p className="text-gray-500 text-xs text-center mb-5">
                  * Precio estimado. La cotización final depende de detalles específicos del servicio.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/cotizar">
                    <Button className="w-full sm:w-auto bg-[#1565E8] hover:bg-[#1254c5] text-white font-bold px-8">
                      Cotización exacta gratis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto border-[#02AD25] text-[#02AD25] hover:bg-[#02AD25] hover:text-white font-bold px-8"
                    >
                      Hablar por WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Coverage pills */}
          <div className="px-8 lg:px-12 pb-8">
            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-3">
              Cobertura nacional
            </p>
            <div className="flex flex-wrap gap-2">
              {ZONES.map((zone) => (
                <span key={zone.id} className="text-xs bg-white/8 text-gray-400 border border-white/10 rounded-full px-3 py-1">
                  {zone.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
