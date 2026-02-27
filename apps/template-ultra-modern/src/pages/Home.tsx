import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBookingSearch } from '@smartbooking/booking'
import {
  GlobalBanner,
  HeroSection,
  BookingBar,
  RoomGrid,
  FactsBox,
  ReviewCarousel,
} from '@smartbooking/sections'

import { demoHotel, demoBanner, demoReviews } from '../data/demo'

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

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <GlobalBanner data={demoBanner} />
      <HeroSection
        image={demoHotel.heroImage}
        hotelName={demoHotel.name}
        tagline={demoHotel.tagline}
        stars={demoHotel.stars}
      />
      <BookingBar
        search={search}
        onFieldChange={updateField}
        onSearch={handleSearch}
        isValid={isValid}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 space-y-20">
        <RoomGrid rooms={demoHotel.rooms} onBook={handleBook} />
        <FactsBox facts={demoHotel.facts} />
        <ReviewCarousel
          reviews={demoReviews}
          hotelRating={demoHotel.rating}
          reviewsCount={demoHotel.reviewsCount}
        />
      </section>
    </div>
  )
}

