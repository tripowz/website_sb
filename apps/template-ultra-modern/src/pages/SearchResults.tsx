import React, { useMemo, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { RoomCard, SearchFilters, type Filters } from '@smartbooking/sections'
import { demoHotel } from '../data/demo'

export function SearchResults() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [filters, setFilters] = useState<Filters>({
    priceMin: 0,
    priceMax: 50000,
    amenities: [],
    sortBy: 'price-asc',
  })

  // Parse search params
  const checkIn = searchParams.get('checkIn')
  const checkOut = searchParams.get('checkOut')
  const guests = Number(searchParams.get('guests')) || 2

  // Filter and sort rooms
  const filteredRooms = useMemo(() => {
    let result = demoHotel.rooms.filter((room) => {
      // Price filter
      if (
        room.price.amount < filters.priceMin ||
        room.price.amount > filters.priceMax
      ) {
        return false
      }

      // Amenities filter
      if (filters.amenities.length > 0) {
        const roomAmenityIcons = room.amenities.map((a) => a.icon)
        return filters.amenities.every((a) => roomAmenityIcons.includes(a))
      }

      return true
    })

    // Sort
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price.amount - b.price.amount)
        break
      case 'price-desc':
        result.sort((a, b) => b.price.amount - a.price.amount)
        break
      case 'rating':
        result.sort((a, b) => b.capacity - a.capacity) // Mock rating
        break
      case 'popularity':
        result.sort((a, b) => b.area - a.area) // Mock popularity
        break
    }

    return result
  }, [filters])

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Результаты поиска
          </h1>
          <p className="text-gray-500">
            {checkIn && checkOut ? (
              <>
                {checkIn} → {checkOut}, {guests} {guests === 1 ? 'гость' : 'гостей'}
              </>
            ) : (
              'Доступные номера'
            )}
          </p>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Sidebar filters */}
          <div className="lg:col-span-1 hidden lg:block">
            <SearchFilters
              rooms={demoHotel.rooms}
              onFilterChange={setFilters}
              currentFilters={filters}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {filteredRooms.length > 0 ? (
              <div className="space-y-6">
                {filteredRooms.map((room) => (
                  <div
                    key={room.id}
                    className="grid gap-6 sm:grid-cols-2 p-6 border border-gray-100 rounded-2xl hover:shadow-float transition-all duration-300"
                  >
                    {/* Image */}
                    <button
                      onClick={() => navigate(`/rooms/${room.id}`)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </button>

                    {/* Info */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {room.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                          {room.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <span>{room.area} м²</span>
                          <span>до {room.capacity} гостей</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <div className="text-2xl font-semibold text-gray-900">
                            {(room.price.amount / 1000).toFixed(0)}K RUB
                          </div>
                          <p className="text-xs text-gray-400">/ ночь</p>
                        </div>
                        <button
                          onClick={() => navigate(`/rooms/${room.id}`)}
                          className="
                            rounded-lg bg-gray-900 text-white px-6 py-2 text-sm font-medium
                            hover:bg-gray-800 transition-colors active:scale-95
                          "
                        >
                          Подробнее
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  По вашим критериям номера не найдены
                </h2>
                <p className="text-gray-500 text-sm">
                  Попробуйте изменить фильтры или даты
                </p>
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
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
