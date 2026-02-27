import React, { useCallback } from 'react'
import { useBookingSearch } from '@smartbooking/booking'
import {
  GlobalBanner,
  HeroSection,
  BookingBar,
  RoomGrid,
  FactsBox,
  Footer,
} from '@smartbooking/sections'

import { demoHotel, demoBanner } from './data/demo'

export default function App() {
  const { search, updateField, isValid } = useBookingSearch()

  const handleSearch = useCallback(() => {
    // In production, this would trigger an API call
    console.log('Search:', search)
  }, [search])

  const handleBook = useCallback((roomId: string) => {
    console.log('Book room:', roomId)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Global promo banner — slim black bar */}
      <GlobalBanner data={demoBanner} />

      {/* Hero — immersive hotel photo with paspartout */}
      <HeroSection
        image={demoHotel.heroImage}
        hotelName={demoHotel.name}
        tagline={demoHotel.tagline}
        stars={demoHotel.stars}
      />

      {/* Floating booking bar — glassmorphism pill */}
      <BookingBar
        search={search}
        onFieldChange={updateField}
        onSearch={handleSearch}
        isValid={isValid}
      />

      {/* Room cards grid */}
      <RoomGrid rooms={demoHotel.rooms} onBook={handleBook} />

      {/* Hotel facts — minimal grid with dividers */}
      <FactsBox facts={demoHotel.facts} />

      {/* Footer */}
      <Footer
        hotelName={demoHotel.name}
        address={demoHotel.address}
        city={demoHotel.city}
      />
    </div>
  )
}
