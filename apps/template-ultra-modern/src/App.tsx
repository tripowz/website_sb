import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { RoomDetail } from './pages/RoomDetail'
import { SearchResults } from './pages/SearchResults'
import { BookingFlow } from './pages/BookingFlow'
import { Confirmation } from './pages/Confirmation'

// Placeholder pages for Phase 3+ (to be implemented)
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      <p className="text-gray-500">Coming soon...</p>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/:roomId" element={<RoomDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking" element={<BookingFlow />} />
          <Route path="/confirmation/:bookingId" element={<Confirmation />} />
          <Route path="/about" element={<ComingSoon title="About Us" />} />
          <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
          <Route path="/reviews" element={<ComingSoon title="Reviews" />} />
          <Route path="/account" element={<ComingSoon title="Account" />} />
          <Route path="/account/bookings" element={<ComingSoon title="My Bookings" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
