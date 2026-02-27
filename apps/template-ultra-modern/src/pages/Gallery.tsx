import React, { useMemo } from 'react'
import { demoHotel } from '../data/demo'

export function Gallery() {
  const images = useMemo(() => {
    const base: string[] = []

    // Основная галерея отеля
    if (demoHotel.galleryImages) {
      base.push(...demoHotel.galleryImages)
    }

    // Первые несколько изображений из номеров
    demoHotel.rooms.forEach((room) => {
      base.push(...room.images.slice(0, 4))
    })

    // Удаляем дубликаты
    return Array.from(new Set(base))
  }, [])

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null)

  const close = () => setActiveIndex(null)

  React.useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <header className="mb-12 sm:mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
            Галерея
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)] mb-3">
                Пространства, в которых хочется остаться.
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-muted)] max-w-xl">
                Интерьеры, виды из окон и детали, которые создают ощущение тихой роскоши. Все
                фотографии — из {demoHotel.name}.
              </p>
            </div>
          </div>
        </header>

        {/* Мозаика галереи */}
        <section className="grid gap-4 sm:gap-6 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px]">
          {images.map((src, index) => {
            const isWide = index % 7 === 0
            const isTall = index % 9 === 0

            const spanClasses =
              isWide && isTall
                ? 'md:col-span-2 md:row-span-2'
                : isWide
                  ? 'md:col-span-2'
                  : isTall
                    ? 'md:row-span-2'
                    : ''

            return (
              <div
                key={src}
                className={`
                  relative overflow-hidden rounded-2xl bg-gray-100
                  border border-[color:var(--color-border-subtle)]
                  ${spanClasses}
                `}
                onClick={() => setActiveIndex(index)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={src}
                  alt={`Hotel view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 cursor-zoom-in"
                  loading={index > 4 ? 'lazy' : 'eager'}
                />
              </div>
            )
          })}
        </section>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && images[activeIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex]}
              alt={`Hotel view ${activeIndex + 1}`}
              className="max-h-[90vh] w-full object-contain rounded-2xl shadow-2xl"
            />
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

