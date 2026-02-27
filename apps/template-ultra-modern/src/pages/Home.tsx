import React, { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBookingSearch } from '@smartbooking/booking'
import { GlobalBanner, BookingBar, RoomGrid, FactsBox, ReviewCarousel } from '@smartbooking/sections'

import { demoHotel, demoBanner, demoReviews } from '../data/demo'
import { HeroSlider } from '../components/HeroSlider'

export function Home() {
  const { search, updateField, isValid } = useBookingSearch()
  const navigate = useNavigate()

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams()
    if (search.checkIn) params.set('checkIn', search.checkIn.toISOString().split('T')[0])
    if (search.checkOut) params.set('checkOut', search.checkOut.toISOString().split('T')[0])
    params.set('guests', search.guests.toString())
    navigate(`/rooms?${params.toString()}`)
  }, [search, navigate])

  const handleBook = useCallback(
    (roomId: string) => {
      navigate(`/rooms/${roomId}`)
    },
    [navigate],
  )

  const galleryPreview = useMemo(() => {
    const fromGallery = demoHotel.galleryImages ?? []
    const fromRooms = demoHotel.rooms.flatMap((room) => room.images.slice(0, 2))
    const combined = [...fromGallery, ...fromRooms]
    return Array.from(new Set(combined)).slice(0, 3)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <GlobalBanner data={demoBanner} />
      <HeroSlider />
      <BookingBar
        search={search}
        onFieldChange={updateField}
        onSearch={handleSearch}
        isValid={isValid}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 space-y-20">
        {/* Популярные номера */}
        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                Популярные номера
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                Пространства для тихого отдыха.
              </h2>
            </div>
          </div>
          <RoomGrid rooms={demoHotel.rooms} onBook={handleBook} />
        </div>

        <FactsBox facts={demoHotel.facts} />

        <ReviewCarousel
          reviews={demoReviews}
          hotelRating={demoHotel.rating}
          reviewsCount={demoHotel.reviewsCount}
        />

        {/* Превью галереи: 3 фото */}
        <div className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                Галерея
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--color-text)]">
                Несколько кадров атмосферы.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/gallery')}
              className="hidden sm:inline-flex items-center text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              Смотреть всю галерею
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {galleryPreview.map((src) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-2xl bg-gray-100 border border-[color:var(--color-border-subtle)]"
              >
                <img
                  src={src}
                  alt="Hotel gallery preview"
                  className="h-52 sm:h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

