"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface VideoPlayerProps {
  src: string
  thumbnail?: string
  className?: string
}

export function VideoPlayer({ src, thumbnail, className = "" }: VideoPlayerProps) {
  const [isError, setIsError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Reiniciar el estado de error cuando cambia la fuente
    setIsError(false)
  }, [src])

  const handleError = () => {
    console.error("Error loading video:", src)
    setIsError(true)
  }

  // Detener la propagación del evento click para que no interfiera con la navegación
  const handleVideoClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
  }

  return (
    <div className={`relative w-full h-full rounded-t-lg overflow-hidden bg-black ${className}`}>
      {isError ? (
        <div className="flex items-center justify-center h-full w-full bg-gray-900 text-white p-4 text-center">
          <p>No se pudo cargar el video. Por favor, inténtelo de nuevo más tarde.</p>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          controls
          preload="metadata"
          poster={thumbnail}
          className="w-full h-full object-contain"
          onError={handleError}
          onClick={handleVideoClick}
          onTouchStart={handleVideoClick}
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      )}
    </div>
  )
}
