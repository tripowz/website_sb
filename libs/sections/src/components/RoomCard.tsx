import React, { useState, useCallback } from 'react'
import type { Room } from '@smartbooking/booking'
import { formatPrice } from '@smartbooking/booking'
import { AmenityIconComponent, ChevronLeftIcon, ChevronRightIcon, AreaIcon, UsersIcon } from './Icons'
import { BadgeGroup } from './Badge'

interface RoomCardProps {
  room: Room
  onBook?: (roomId: string) => void
}

export function RoomCard({ room, onBook }: RoomCardProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = room.images.length > 0 ? room.images : ['/placeholder-room.jpg']

  const nextImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImage((prev) => (prev + 1) % images.length)
    },
    [images.length],
  )

  const prevImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    },
    [images.length],
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-float">
      {/* Image gallery — 70% of card height */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
        {/* Images */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${room.name} — фото ${i + 1}`}
              className="h-full w-full flex-shrink-0 object-cover"
              loading="lazy"
            />
          ))}
        </div>

        {/* Navigation arrows — appear on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="
                absolute left-3 top-1/2 -translate-y-1/2
                flex h-8 w-8 items-center justify-center
                rounded-full bg-white/80 backdrop-blur-sm
                opacity-0 transition-all duration-200
                group-hover:opacity-100
                hover:bg-white hover:scale-105
              "
              aria-label="Предыдущее фото"
            >
              <ChevronLeftIcon size={16} className="text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                flex h-8 w-8 items-center justify-center
                rounded-full bg-white/80 backdrop-blur-sm
                opacity-0 transition-all duration-200
                group-hover:opacity-100
                hover:bg-white hover:scale-105
              "
              aria-label="Следующее фото"
            >
              <ChevronRightIcon size={16} className="text-gray-700" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentImage(i)
                  }}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${i === currentImage
                      ? 'w-4 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/70'
                    }
                  `}
                  aria-label={`Фото ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges overlay — top-left corner */}
        {room.badges.length > 0 && (
          <div className="absolute left-3 top-3">
            <BadgeGroup badges={room.badges} />
          </div>
        )}
      </div>

      {/* Content area — clean, spacious */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Room name */}
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900">
            {room.name}
          </h3>
          <p className="mt-1 text-sm text-gray-400 line-clamp-2">
            {room.description}
          </p>
        </div>

        {/* Quick specs — area & capacity */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <AreaIcon size={14} className="text-gray-300" />
            {room.area} м²
          </span>
          <span className="flex items-center gap-1.5">
            <UsersIcon size={14} className="text-gray-300" />
            до {room.capacity} {room.capacity === 1 ? 'гостя' : room.capacity < 5 ? 'гостей' : 'гостей'}
          </span>
        </div>

        {/* Amenities — small gray icons */}
        <div className="flex flex-wrap gap-3">
          {room.amenities.slice(0, 6).map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center gap-1.5"
              title={amenity.label}
            >
              <AmenityIconComponent icon={amenity.icon} size={14} className="text-gray-300" />
              <span className="text-xs text-gray-400">{amenity.label}</span>
            </div>
          ))}
          {room.amenities.length > 6 && (
            <span className="text-xs text-gray-300">
              +{room.amenities.length - 6}
            </span>
          )}
        </div>

        {/* Price + Book CTA — bottom of card */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-50">
          <div>
            {room.price.originalAmount && (
              <span className="text-sm text-gray-300 line-through">
                {formatPrice(room.price.originalAmount, room.price.currency)}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-medium tracking-tight text-gray-900">
                {formatPrice(room.price.amount, room.price.currency)}
              </span>
              {room.price.perNight && (
                <span className="text-xs text-gray-400">/ ночь</span>
              )}
            </div>
          </div>

          <button
            onClick={() => onBook?.(room.id)}
            disabled={!room.available}
            className="
              rounded-xl bg-gray-900 px-6 py-2.5
              text-sm font-medium text-white
              transition-all duration-200
              hover:bg-gray-800
              active:scale-[0.97]
              disabled:opacity-30 disabled:cursor-not-allowed
            "
          >
            {room.available ? 'Забронировать' : 'Нет мест'}
          </button>
        </div>
      </div>
    </article>
  )
}

// Grid layout for room cards
interface RoomGridProps {
  rooms: Room[]
  onBook?: (roomId: string) => void
}

export function RoomGrid({ rooms, onBook }: RoomGridProps) {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Номера
          </h2>
          <p className="mt-4 max-w-lg text-base text-gray-400">
            Выберите идеальный номер для вашего пребывания
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  )
}
