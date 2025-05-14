"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Calendar, Clock, Package, Contact, Mail, PhoneCall, Ruler, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/lib/resendService"
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

export function ServiceForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    originAddress: "",
    destinationAddress: "",
    cargoType: "light",
    date: "",
    time: "",
    comments: "",
    length: "",
    height: "",
    depth: "",
    weight: "",
    productImage: null as File | null,
    productImageUrl: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  /*  const { isLoaded } = useLoadScript({
     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
   })
 
   const center = useMemo(() => ({ lat: 8.9824, lng: -79.5199 }), []) // Panama City coordinates */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      let imageUrl = ""
      if (formData.productImage) {
        const dataImage = new FormData()
        dataImage.append("file", formData.productImage)
        dataImage.append("upload_preset", "service-carga") // Asegúrate de reemplazar esto con tu upload preset de Cloudinary

        const response = await fetch(`https://api.cloudinary.com/v1_1/dyunwgwjk/image/upload`, {
          method: "POST",
          body: dataImage,
        })

        const data = await response.json()
        imageUrl = data.secure_url
      }
      const dataToSend = {
        ...formData,
        productImageUrl: imageUrl,
      }

      await sendEmail(dataToSend)
      alert("Correo electrónico enviado con éxito!")
      setFormData({
        name: "",
        email: "",
        phone: "",
        originAddress: "",
        destinationAddress: "",
        cargoType: "light",
        date: "",
        time: "",
        comments: "",
        length: "",
        height: "",
        depth: "",
        weight: "",
        productImage: null as File | null,
        productImageUrl: "",
      })
      window.location.reload()
    } catch (error) {
      console.error(error)
      alert("Error al enviar el correo electrónico. Por favor, inténtelo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData({ ...formData, productImage: file })
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-2xl font-bold text-[#0052CC]">Solicitud de Servicio</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Personal Information Section */}
            <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Información Personal</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre Completo</Label>
                  <div className="relative">
                    <Contact className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="name"
                      required
                      placeholder="Ingrese Nombre Completo"
                      className="pl-8"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <div className="relative">
                    <PhoneCall className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="Ingrese el Teléfono"
                      className="pl-8"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="Ingrese el Correo electrónico"
                    className="pl-8"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Dirección</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="origin">Dirección de Origen</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      required
                      id="origin"
                      placeholder="Ingrese la dirección de origen"
                      className="pl-8"
                      value={formData.originAddress}
                      onChange={(e) => setFormData({ ...formData, originAddress: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="destination">Dirección de Destino</Label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="destination"
                      required
                      placeholder="Ingrese la dirección de destino"
                      className="pl-8"
                      value={formData.destinationAddress}
                      onChange={(e) => setFormData({ ...formData, destinationAddress: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              {/*  {isLoaded ? (
                <div className="h-64 w-full">
                  <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="w-full h-full rounded-md"
                  >
                    <Marker position={center} />
                  </GoogleMap>
                </div>
              ) : (
                <div>Loading map...</div>
              )} */}
            </div>

            {/* Package Information Section */}
            <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Información del Paquete</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="length">Largo [Mts]</Label>
                  <div className="relative">
                    <Ruler className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="length"
                      type="number"
                      required
                      placeholder="Largo [Mts]"
                      className="pl-8"
                      value={formData.length}
                      onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="height">Alto [Mts]</Label>
                  <div className="relative">
                    <Ruler className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="height"
                      type="number"
                      required
                      placeholder="Alto [Mts]"
                      className="pl-8"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="depth">Profundidad [Mts]</Label>
                  <div className="relative">
                    <Ruler className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="depth"
                      type="number"
                      required
                      placeholder="Profundidad [Mts]"
                      className="pl-8"
                      value={formData.depth}
                      onChange={(e) => setFormData({ ...formData, depth: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="weight">Peso (Lbs)</Label>
                  <div className="relative">
                    <Package className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="weight"
                      type="number"
                      required
                      placeholder="Peso en Lbs"
                      className="pl-8"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="productImage">Imagen del producto</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="w-32 h-32"
                    onClick={() => document.getElementById("productImage")?.click()}
                  >
                    {previewUrl ? (
                      <Image
                        src={previewUrl || "/placeholder.svg"}
                        alt="Product preview"
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    ) : (
                      <ImageIcon className="h-6 w-6" />
                    )}
                  </Button>
                  <Input
                    id="productImage"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tipo de Carga</Label>
                <RadioGroup
                  required
                  defaultValue="light"
                  onValueChange={(value) => setFormData({ ...formData, cargoType: value })}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem value="light" id="light" className="peer sr-only" />
                    <Label
                      htmlFor="light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#22C55E] [&:has([data-state=checked])]:border-[#22C55E]"
                    >
                      <Package className="mb-2 h-6 w-6" />
                      Liviana
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="medium" id="medium" className="peer sr-only" />
                    <Label
                      htmlFor="medium"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#EF4444] [&:has([data-state=checked])]:border-[#EF4444]"
                    >
                      <Package className="mb-2 h-6 w-6" />
                      Mediana
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="heavy" id="heavy" className="peer sr-only" />
                    <Label
                      htmlFor="heavy"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#EAB308] [&:has([data-state=checked])]:border-[#EAB308]"
                    >
                      <Package className="mb-2 h-6 w-6" />
                      Pesada
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Fecha y Hora</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Fecha</Label>
                  <div className="relative">
                    <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      required
                      id="date"
                      type="date"
                      className="pl-8"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Hora</Label>
                  <div className="relative">
                    <Clock className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      required
                      id="time"
                      type="time"
                      className="pl-8"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Comments Section */}
            <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold">Comentarios Adicionales</h3>
              <div className="grid gap-2">
                <Label htmlFor="comments">Comentarios</Label>
                <Textarea
                  id="comments"
                  placeholder="Ingrese cualquier información adicional relevante"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                />
              </div>
            </div>
          </div>

          <Button disabled={isSubmitting} type="submit" className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90">
            {isSubmitting ? "Enviando..." : "Solicitar Servicio"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
