'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface CarouselImage {
  src: string
  alt: string
}

interface ImageCarouselProps {
  images?: CarouselImage[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const defaultImages: CarouselImage[] = [
    { src: '/images/portfolio-1.jpg', alt: 'Mandala Art 1' },
    { src: '/images/portfolio-2.jpg', alt: 'Mandala Art 2' },
    { src: '/images/portfolio-5.jpg', alt: 'Mandala Art 3' },
    { src: '/images/portfolio-7.jpg', alt: 'Mandala Art 4' },
    { src: '/images/portfolio-6.jpg', alt: 'Mandala Art 5' },
  ]

  const router = useRouter()
  const carouselImages = images || defaultImages
  const [isClient, setIsClient] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Duplicate images to create seamless infinite loop
  const duplicatedImages = [...carouselImages, ...carouselImages, ...carouselImages]

  const animationDuration = carouselImages.length * 3 // 3 seconds per image

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const handleImageClick = () => {
    router.push('/collection')
  }

  if (!isClient) return null

  return (
    <div className="w-full overflow-hidden bg-sgma-beige py-4">
      {/* Film Strip Container */}
      <style>{`
        @keyframes filmstrip {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(carouselImages.length * 200) / 3}px);
          }
        }

        .filmstrip-scroll {
          animation: filmstrip ${animationDuration}s linear infinite;
        }

        .filmstrip-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Images Strip - Continuous Scroll */}
        <div className={`flex gap-3 w-max filmstrip-scroll ${isPaused ? 'paused' : ''}`}>
          {duplicatedImages.map((image, index) => (
            <div
              key={`${index}`}
              onClick={handleImageClick}
              className="flex-shrink-0 relative w-48 h-48 rounded-lg overflow-hidden shadow-lg border-2 border-sgma-navy/20 hover:border-sgma-cta transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="192px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
