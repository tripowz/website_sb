import React from 'react'

interface HeroSectionProps {
  image: string
  hotelName: string
  tagline: string
  stars?: number
}

export function HeroSection({ image, hotelName, tagline, stars }: HeroSectionProps) {
  return (
    <section className="relative px-4 pt-4 sm:px-6 sm:pt-6">
      {/* Paspartout frame — image with padding creating the "matted" effect */}
      <div className="relative h-[85vh] w-full overflow-hidden rounded-2xl">
        {/* Background image */}
        <img
          src={image}
          alt={hotelName}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Subtle gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Content overlay — minimal text at the bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          {/* Stars */}
          {stars && stars > 0 && (
            <div className="mb-4 flex gap-1.5">
              {Array.from({ length: stars }).map((_, i) => (
                <span key={i} className="text-white/80 text-xs tracking-[0.3em]">
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Hotel name — large, confident typography */}
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {hotelName}
          </h1>

          {/* Tagline — subtle, understated */}
          <p className="mt-4 max-w-lg text-base font-light tracking-wide text-white/70 sm:text-lg">
            {tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
