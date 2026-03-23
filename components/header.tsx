"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Instagram, Menu, X, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'Calculadora', href: '/#calculadora' },
  { label: 'Trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/#contacto' },
]

const WHATSAPP_ICON = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const TIKTOK_ICON = (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 32 32">
    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
  </svg>
)

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-16 w-16 shrink-0">
              <Image src="/logo.webp" alt="CargaService Logo" fill className="object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-[#1565E8] font-medium text-sm uppercase tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Social icons — xl only */}
            <div className="hidden xl:flex items-center gap-3 mr-1">
              <a
                href="https://www.tiktok.com/@carga.service?_t=ZM-8zLpKc0tQpy&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors p-1.5 rounded-full hover:bg-gray-100"
              >
                {TIKTOK_ICON}
              </a>
              <a
                href="https://instagram.com/cargaservice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-600 transition-colors p-1.5 rounded-full hover:bg-pink-50"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="tel:+5076870-1740"
                className="text-green-600 hover:text-green-700 transition-colors p-1.5 rounded-full hover:bg-green-50"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://wa.link/w72qmg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#02AD25] hover:text-[#02AD25]/80 transition-colors p-1.5 rounded-full hover:bg-green-50"
              >
                {WHATSAPP_ICON}
              </a>
            </div>

            <Link href="/cotizar" className="hidden sm:block">
              <Button className="bg-[#1565E8] hover:bg-[#1254c5] text-white font-bold px-5 shadow-md shadow-blue-200">
                Cotizar Ahora
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-4 py-5">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 hover:text-[#1565E8] hover:bg-blue-50 font-medium py-3 px-4 rounded-xl transition-colors text-sm uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
              <Link href="/cotizar" onClick={() => setMobileOpen(false)} className="flex-1">
                <Button className="w-full bg-[#1565E8] hover:bg-[#1254c5] font-bold">
                  Cotizar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="https://wa.link/w72qmg" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#02AD25] text-[#02AD25] hover:bg-[#02AD25] hover:text-white">
                  {WHATSAPP_ICON}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
