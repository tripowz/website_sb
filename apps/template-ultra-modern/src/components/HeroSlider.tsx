import React from 'react'
import { demoHotel } from '../data/demo'

type Slide = {
  image: string
  title: string
  subtitle: string
}

const SLIDE_INTERVAL = 7000

export function HeroSlider() {
  const slides: Slide[] = React.useMemo(
    () => [
      {
        image: demoHotel.heroImage,
        title: demoHotel.name,
        subtitle: demoHotel.tagline,
      },
      {
        image: demoHotel.rooms[0]?.images[0],
        title: demoHotel.rooms[0]?.name ?? 'Номера Superior',
        subtitle: 'Уютные пространства с панорамным видом на город.',
      },
      {
        image: demoHotel.rooms[1]?.images[0],
        title: demoHotel.rooms[1]?.name ?? 'Deluxe Suite',
        subtitle: 'Просторные люксы для долгих выходных и праздников.',
      },
      {
        image: demoHotel.rooms[2]?.images[0],
        title: demoHotel.rooms[2]?.name ?? 'Penthouse',
        subtitle: 'Пентхаус с панорамным остеклением и видом на город.',
      },
    ].filter((s): s is Slide => Boolean(s.image)),
    [],
  )

  const [activeIndex, setActiveIndex] = React.useState(0)
  const timeoutRef = React.useRef<number | null>(null)

  const goTo = React.useCallback(
    (index: number) => {
      setActiveIndex((prev) => {
        const next = (index + slides.length) % slides.length
        return next === prev ? prev : next
      })
    },
    [slides.length],
  )

  const goNext = React.useCallback(() => {
    goTo(activeIndex + 1)
  }, [activeIndex, goTo])

  const goPrev = React.useCallback(() => {
    goTo(activeIndex - 1)
  }, [activeIndex, goTo])

  React.useEffect(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(goNext, SLIDE_INTERVAL)
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [activeIndex, goNext])

  const activeSlide = slides[activeIndex]

  if (!activeSlide) return null

  return (
    <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image + index}
            className={`
              absolute inset-0 transition-opacity duration-700
              ${index === activeIndex ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
            Boutique hotel
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {activeSlide.title}
          </h1>
          <p className="max-w-xl text-sm text-white/80 sm:text-base">
            {activeSlide.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.2em]">Рейтинг</span>
              <span className="font-semibold">{demoHotel.rating}</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-[0.2em]">Отзывы</span>
              <span className="font-semibold">{demoHotel.reviewsCount}</span>
            </span>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`
                    h-1.5 rounded-full transition-all duration-200
                    ${index === activeIndex ? 'w-8 bg-white' : 'w-3 bg-white/40 hover:bg-white/70'}
                  `}
                  aria-label={`Показать слайд ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
                aria-label="Предыдущий слайд"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-sm hover:bg-black/40"
                aria-label="Следующий слайд"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

