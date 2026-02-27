import React, { useMemo } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import * as QRCode from 'qrcode.react'
import { demoHotel } from '../data/demo'

export function Confirmation() {
  const { bookingId } = useParams<{ bookingId: string }>()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const roomId = searchParams.get('roomId') || 'superior'
  const nights = Number(searchParams.get('nights')) || 2
  const total = Number(searchParams.get('total')) || 19210

  const room = useMemo(
    () => demoHotel.rooms.find((r) => r.id === roomId),
    [roomId],
  )

  if (!room) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Ошибка</h1>
        <button
          onClick={() => navigate('/')}
          className="rounded-lg bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800"
        >
          Вернуться на главную
        </button>
      </div>
    )
  }

  const checkInDate = new Date()
  const checkOutDate = new Date(checkInDate.getTime() + nights * 24 * 60 * 60 * 1000)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Success header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">
            Бронирование подтверждено!
          </h1>
          <p className="text-lg text-gray-500">
            Спасибо за ваше доверие. Проверьте почту для деталей.
          </p>
        </div>

        {/* Booking details */}
        <div className="rounded-2xl border border-gray-100 p-8 mb-8 bg-white shadow-subtle">
          {/* Reference number */}
          <div className="mb-8 pb-8 border-b border-gray-100">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
              Номер бронирования
            </p>
            <p className="text-3xl font-semibold tracking-tight text-gray-900 font-mono">
              {bookingId}
            </p>
          </div>

          {/* Hotel and room info */}
          <div className="grid gap-8 md:grid-cols-2 mb-8 pb-8 border-b border-gray-100">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                Отель
              </p>
              <h2 className="text-xl font-semibold text-gray-900">{demoHotel.name}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {demoHotel.address}, {demoHotel.city}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                Номер
              </p>
              <h2 className="text-xl font-semibold text-gray-900">{room.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{room.area} м² • до {room.capacity} гостей</p>
            </div>
          </div>

          {/* Dates */}
          <div className="grid gap-8 md:grid-cols-3 mb-8 pb-8 border-b border-gray-100">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                Заезд
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {checkInDate.toLocaleDateString('ru-RU')}
              </p>
              <p className="text-xs text-gray-500 mt-1">с 15:00</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                Выезд
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {checkOutDate.toLocaleDateString('ru-RU')}
              </p>
              <p className="text-xs text-gray-500 mt-1">до 12:00</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
                Ночей
              </p>
              <p className="text-lg font-semibold text-gray-900">{nights}</p>
            </div>
          </div>

          {/* Price */}
          <div className="text-right mb-8 pb-8 border-b border-gray-100">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-2">
              Итого к оплате
            </p>
            <p className="text-4xl font-semibold text-gray-900">
              {(total / 1000).toFixed(1)}K RUB
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium">
              QR код для check-in
            </p>
            <div className="p-4 bg-white border-2 border-gray-200 rounded-lg">
              <QRCode.QRCodeSVG value={bookingId || 'booking-ref'} size={200} level="H" />
            </div>
            <p className="text-xs text-gray-500 text-center max-w-xs">
              Покажите этот код при заезде для ускоренной регистрации
            </p>
          </div>
        </div>

        {/* Next steps */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Что дальше?</h3>
          <div className="space-y-3">
            {[
              '✓ Письмо с подтверждением отправлено на вашу почту',
              '✓ Вы можете отменить или изменить бронирование до 24 часов',
              '✓ Отель свяжется с вами для подтверждения прибытия',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-gray-600">
                <span className="text-green-600">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="
              rounded-lg border border-gray-200 bg-white text-gray-900 py-3 px-6
              text-sm font-medium transition-all
              hover:border-gray-300 hover:bg-gray-50
            "
          >
            🖨️ Печать
          </button>
          <button
            onClick={() => navigate('/account/bookings')}
            className="
              rounded-lg bg-gray-900 text-white py-3 px-6
              text-sm font-medium transition-all
              hover:bg-gray-800 active:scale-95
            "
          >
            Мои бронирования
          </button>
          <button
            onClick={() => navigate('/')}
            className="
              rounded-lg border border-gray-900 bg-gray-900 text-white py-3 px-6
              text-sm font-medium transition-all
              hover:bg-gray-800 active:scale-95
            "
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}
