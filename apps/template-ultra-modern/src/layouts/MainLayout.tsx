import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { Footer } from '@smartbooking/sections'
import { demoHotel } from '../data/demo'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Add padding-top for fixed navigation */}
      <main className="pt-16">
        <Outlet />
      </main>

      <Footer
        hotelName={demoHotel.name}
        address={demoHotel.address}
        city={demoHotel.city}
      />
    </div>
  )
}
