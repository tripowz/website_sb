import React, { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { formatPrice } from '@smartbooking/booking'
import { BadgeGroup, GalleryLightbox, AmenityIconComponent, AreaIcon, UsersIcon } from '@smartbooking/sections'
import { demoHotel } from '../data/demo'

export function RoomDetail() {
  const { roomId } = useParams<{ roomId: string }>()
  const navigate = useNavigate()
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const room = useMemo(
    () => demoHotel.rooms.find((r) => r.id === roomId),
    [roomId],
  )

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <h1 className="text-2xl font-semibold text-gray-900">Номер не найден</h1>
        <button
          onClick={() => navigate('/')}
          className="
            rounded-lg bg-gray-900 text-white px-6 py-3 text-sm font-medium
            hover:bg-gray-800 transition-colors
          "
        >
          Вернуться на главную
        </button>
      </div>
    )
  }

  const relatedRooms = demoHotel.rooms.filter((r) => r.id !== room.id).slice(0, 2)

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <button onClick={() => navigate('/')} className="hover:text-gray-600 transition-colors">
              Главная
            </button>
            <span>/</span>
            <button onClick={() => navigate('/')} className="hover:text-gray-600 transition-colors">
              Номера
            </button>
            <span>/</span>
            <span className="text-gray-900 font-medium">{room.name}</span>
          </div>

          {/* Main content grid */}
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Gallery — 2/3 width */}
            <div className="lg:col-span-2">
              {/* Main image */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-100 cursor-pointer group mb-4"
                onClick={() => {
                  setSelectedImageIndex(0)
                  setGalleryOpen(true)
                }}
              >
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    className="drop-shadow-lg"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>

              {/* Image thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {room.images.slice(0, 8).map((src, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedImageIndex(i)
                      setGalleryOpen(true)
                    }}
                    className="
                      group relative aspect-square overflow-hidden rounded-lg bg-gray-100
                      transition-all duration-200 hover:ring-2 hover:ring-gray-300
                    "
                  >
                    <img
                      src={src}
                      alt={`View ${i + 1}`}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  </button>
                ))}
                {room.images.length > 8 && (
                  <button
                    onClick={() => {
                      setSelectedImageIndex(8)
                      setGalleryOpen(true)
                    }}
                    className="
                      aspect-square rounded-lg bg-gray-900 flex items-center justify-center
                      text-white font-medium text-sm hover:bg-gray-800 transition-colors
                    "
                  >
                    +{room.images.length - 8}
                  </button>
                )}
              </div>
            </div>

            {/* Sidebar — 1/3 width */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              {/* Badges */}
              {room.badges.length > 0 && (
                <div className="mb-6">
                  <BadgeGroup badges={room.badges} />
                </div>
              )}

              {/* Title */}
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-3">
                {room.name}
              </h1>
              <p className="text-gray-500 text-sm mb-8">{room.description}</p>

              {/* Specs */}
              <div className="mb-8 flex flex-col gap-3 border-b border-gray-100 pb-8">
                <div className="flex items-center gap-2">
                  <AreaIcon size={16} className="text-gray-300" />
                  <span className="text-sm text-gray-600">
                    Площадь: <span className="font-medium text-gray-900">{room.area} м²</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon size={16} className="text-gray-300" />
                  <span className="text-sm text-gray-600">
                    Гости: <span className="font-medium text-gray-900">до {room.capacity}</span>
                  </span>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
                  Удобства
                </h3>
                <div className="flex flex-col gap-3">
                  {room.amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center gap-2">
                      <AmenityIconComponent icon={amenity.icon} size={14} className="text-gray-300" />
                      <span className="text-sm text-gray-600">{amenity.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 border-b border-gray-100 pb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                  Цена
                </p>
                {room.price.originalAmount && (
                  <p className="text-sm text-gray-400 line-through mb-1">
                    {formatPrice(room.price.originalAmount, room.price.currency)}
                  </p>
                )}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-semibold text-gray-900">
                    {formatPrice(room.price.amount, room.price.currency)}
                  </span>
                  {room.price.perNight && (
                    <span className="text-xs text-gray-400">/ ночь</span>
                  )}
                </div>
                {room.price.discountPercent && (
                  <p className="text-xs text-red-600 font-medium">
                    Экономия {room.price.discountPercent}%
                  </p>
                )}
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate(`/booking?roomId=${room.id}`)}
                disabled={!room.available}
                className="
                  w-full rounded-xl bg-gray-900 text-white py-3
                  text-sm font-medium transition-all duration-200
                  hover:bg-gray-800 active:scale-[0.98]
                  disabled:opacity-30 disabled:cursor-not-allowed
                  mb-3
                "
              >
                {room.available ? 'Выбрать даты и забронировать' : 'Нет в наличии'}
              </button>
              <button
                onClick={() => navigate('/')}
                className="
                  w-full rounded-xl border border-gray-200 bg-white text-gray-900 py-3
                  text-sm font-medium transition-all duration-200
                  hover:border-gray-300 hover:bg-gray-50
                "
              >
                Назад
              </button>
            </div>
          </div>

          {/* Related rooms */}
          {relatedRooms.length > 0 && (
            <div className="mt-24">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
                Похожие номера
              </h2>
              <div className="grid gap-8 sm:grid-cols-2">
                {relatedRooms.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => navigate(`/rooms/${r.id}`)}
                    className="group text-left"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-gray-100">
                      <img
                        src={r.images[0]}
                        alt={r.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">{r.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{r.area} м² • {r.capacity} гостей</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Lightbox */}
      {galleryOpen && (
        <GalleryLightbox
          images={room.images}
          initialIndex={selectedImageIndex}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  )
}
