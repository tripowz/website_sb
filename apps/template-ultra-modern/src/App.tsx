import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { RoomDetail } from './pages/RoomDetail'
import { SearchResults } from './pages/SearchResults'
import { BookingFlow } from './pages/BookingFlow'
import { Confirmation } from './pages/Confirmation'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Reviews } from './pages/Reviews'
import { Account } from './pages/Account'
import { MyBookings } from './pages/MyBookings'

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/bookings" element={<MyBookings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
