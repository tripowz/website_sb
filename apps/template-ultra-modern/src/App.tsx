import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { RoomDetail } from './pages/RoomDetail'
import { Amenities } from './pages/Amenities'
import { AboutContact } from './pages/AboutContact'
import { Gallery } from './pages/Gallery'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* 1. Главная */}
          <Route path="/" element={<Home />} />

          {/* 2. Номера (список) */}
          <Route path="/rooms" element={<SearchResults />} />
          {/* Детальная страница номера (дополнительный маршрут внутри раздела "Номера") */}
          <Route path="/rooms/:roomId" element={<RoomDetail />} />

          {/* 3. Услуги */}
          <Route path="/services" element={<Amenities />} />

          {/* 4. О нас / Контакты */}
          <Route path="/about" element={<AboutContact />} />

          {/* 5. Галерея */}
          <Route path="/gallery" element={<Gallery />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
