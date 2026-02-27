import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

interface GalleryLightboxProps {
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export function GalleryLightbox({ images, initialIndex = 0, onClose }: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, goToPrevious, goToNext])

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    if (touchStart - touchEnd > 50) goToNext()
    if (touchEnd - touchStart > 50) goToPrevious()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-lg font-medium">Галерея</h2>
          <span className="text-xs text-gray-400 font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="text-gray-300 hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            {isZoomed ? 'Fit' : 'Zoom'}
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close gallery"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main image */}
      <div className="flex-1 flex items-center justify-center overflow-hidden px-4 py-8 relative group">
        <img
          src={images[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
            isZoomed ? 'cursor-zoom-out scale-150' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/10 backdrop-blur-sm
            text-white hover:bg-white/20
            transition-all duration-200
            opacity-0 group-hover:opacity-100
          "
          aria-label="Previous image"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <button
          onClick={goToNext}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white/10 backdrop-blur-sm
            text-white hover:bg-white/20
            transition-all duration-200
            opacity-0 group-hover:opacity-100
          "
          aria-label="Next image"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-1 overflow-x-auto bg-gray-900 px-4 py-3 scrollbar-hide">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => goToImage(i)}
            className={`
              h-14 w-14 flex-shrink-0 rounded-lg overflow-hidden
              transition-all duration-200
              ${i === currentIndex
                ? 'ring-2 ring-white scale-105'
                : 'opacity-50 hover:opacity-75 cursor-pointer'
              }
            `}
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
