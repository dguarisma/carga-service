'use client'

import { useState } from 'react'
import { MapPin, Calendar, Clock, Package, Contact, Mail, PhoneCall } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/lib/resendService'

export function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    originAddress: '',
    destinationAddress: '',
    cargoType: 'light',
    date: '',
    time: '',
    comments: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate distance calculation (in real app, would use Google Maps Distance Matrix API)
    /*  const simulatedDistance = 10 // km
     const calculatedPrice = calculatePrice({
       distance: simulatedDistance,
       cargoType: formData.cargoType as 'light' | 'medium' | 'heavy'
     }) */
    try {
      await sendEmail(formData);
      alert('Correo electrónico enviado con éxito!');
    } catch (error) {
      console.log(error);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg sm:text-2xl font-bold text-[#0052CC]">Solicitud de Servicio</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
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
              <Label htmlFor="email">Correo electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="email"
                  type='email'
                  required
                  placeholder="Ingrese el Correo electrónico"
                  className="pl-8"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <div className="relative">
                <PhoneCall className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  id="phone"
                  type='phone'
                  required
                  placeholder="Ingrese el Teléfono"
                  className="pl-8"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>


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

            <div className="grid gap-2">
              <Label htmlFor="comments">Comentarios Adicionales</Label>
              <Textarea
                id="comments"
                placeholder="Ingrese cualquier información adicional relevante"
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              />
            </div>
          </div>

          <Button
            disabled={isSubmitting}
            type="submit" className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90">
            {isSubmitting ? 'Enviando...' : 'Solicitar Servicio'}
          </Button>

        </form>
      </CardContent>
    </Card>
  )
}

