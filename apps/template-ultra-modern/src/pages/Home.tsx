import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBookingSearch } from '@smartbooking/booking'
import {
  GlobalBanner,
  HeroSection,
  BookingBar,
  RoomGrid,
  FactsBox,
} from '@smartbooking/sections'

import { demoHotel, demoBanner } from '../data/demo'

export function Home() {
  const { search, updateField, isValid } = useBookingSearch()
  const navigate = useNavigate()

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams()
    if (search.checkIn) params.set('checkIn', search.checkIn.toISOString().split('T')[0])
    if (search.checkOut) params.set('checkOut', search.checkOut.toISOString().split('T')[0])
    params.set('guests', search.guests.toString())
    navigate(`/search?${params.toString()}`)
  }, [search, navigate])

  const handleBook = useCallback((roomId: string) => {
    navigate(`/rooms/${roomId}`)
  }, [navigate])

  return (
    <div className="min-h-screen bg-white">
      {/* Global promo banner */}
      <GlobalBanner data={demoBanner} />

      {/* Hero section */}
      <HeroSection
        image={demoHotel.heroImage}
        hotelName={demoHotel.name}
        tagline={demoHotel.tagline}
        stars={demoHotel.stars}
      />

      {/* Floating booking bar */}
      <BookingBar
        search={search}
        onFieldChange={updateField}
        onSearch={handleSearch}
        isValid={isValid}
      />

      {/* Room cards grid */}
      <RoomGrid rooms={demoHotel.rooms} onBook={handleBook} />

      {/* Hotel facts */}
      <FactsBox facts={demoHotel.facts} />
    </div>
  )
}
