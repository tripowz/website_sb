import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { demoHotel } from '../data/demo'
import { mockBookings } from '../data/bookings'

export function MyBookings() {
  const { user, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  // Show all mock bookings for demo (not just user's)
  const bookings = isLoggedIn && user ? user.bookings : mockBookings

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">
              Мои бронирования
            </h1>
            <p className="text-gray-500">
              {bookings.length} {bookings.length === 1 ? 'бронирование' : 'бронирований'}
            </p>
          </div>
          <button
            onClick={() => navigate('/account')}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Назад
          </button>
        </div>

        {bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((booking: any) => {
              const room = demoHotel.rooms.find((r) => r.id === booking.roomId)
              return (
                <div
                  key={booking.id}
                  className="rounded-2xl border border-gray-100 p-6 transition-all hover:shadow-float"
                >
                  <div className="flex gap-6">
                    {/* Room image */}
                    {room && (
                      <div className="hidden sm:block w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={room.images[0]}
                          alt={room.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Booking info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {room?.name || 'Номер'}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">
                            {demoHotel.name} • {booking.id}
                          </p>
                        </div>
                        <span
                          className={`
                            rounded-full px-3 py-1 text-xs font-medium
                            ${booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-700'
                              : booking.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }
                          `}
                        >
                          {booking.status === 'confirmed'
                            ? 'Подтверждено'
                            : booking.status === 'pending'
                              ? 'Ожидание'
                              : 'Отменено'}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                        <div>
                          <span className="text-gray-400">Заезд: </span>
                          <span className="font-medium text-gray-900">{booking.checkIn}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Выезд: </span>
                          <span className="font-medium text-gray-900">{booking.checkOut}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Гостей: </span>
                          <span className="font-medium text-gray-900">{booking.guests}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Итого: </span>
                          <span className="font-medium text-gray-900">
                            {(booking.price.total / 1000).toFixed(1)}K {booking.price.currency}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <div className="text-6xl">🏨</div>
            <h2 className="text-xl font-semibold text-gray-900">
              У вас пока нет бронирований
            </h2>
            <p className="text-gray-500 text-sm text-center max-w-md">
              Выберите номер и забронируйте его прямо сейчас. Лучшие цены только на нашем сайте.
            </p>
            <button
              onClick={() => navigate('/')}
              className="
                rounded-xl bg-gray-900 text-white py-3 px-8
                text-sm font-medium transition-all
                hover:bg-gray-800 active:scale-95
              "
            >
              Выбрать номер
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
