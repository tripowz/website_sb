import React, { useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Stepper, BookingSummary } from '@smartbooking/sections'
import { demoHotel } from '../data/demo'

interface BookingData {
  roomId: string
  checkIn: string
  checkOut: string
  guests: number
  guestName: string
  email: string
  phone: string
  specialRequests: string
  paymentMethod: 'card' | 'bank' | 'cash'
}

const steps = [
  { number: 1, title: 'Подтверждение', completed: false },
  { number: 2, title: 'Данные гостя', completed: false },
  { number: 3, title: 'Оплата', completed: false },
  { number: 4, title: 'Итого', completed: false },
]

export function BookingFlow() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)

  const roomId = searchParams.get('roomId') || 'superior'
  const checkIn = searchParams.get('checkIn') || '2024-03-01'
  const checkOut = searchParams.get('checkOut') || '2024-03-03'
  const guests = Number(searchParams.get('guests')) || 2

  const [formData, setFormData] = useState<BookingData>({
    roomId,
    checkIn,
    checkOut,
    guests,
    guestName: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: 'card',
  })

  const room = useMemo(
    () => demoHotel.rooms.find((r) => r.id === roomId),
    [roomId],
  )

  const nights = useMemo(() => {
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }, [checkIn, checkOut])

  const priceData = useMemo(() => {
    if (!room) return null
    const subtotal = room.price.amount * nights
    const taxes = Math.round(subtotal * 0.13) // 13% VAT
    return {
      subtotal,
      taxes,
      total: subtotal + taxes,
      currency: room.price.currency,
    }
  }, [room, nights])

  if (!room || !priceData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Номер не найден</h1>
        <button
          onClick={() => navigate('/')}
          className="rounded-lg bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800"
        >
          Вернуться на главную
        </button>
      </div>
    )
  }

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleConfirm = () => {
    // Generate booking ID
    const bookingId = `booking-${Date.now()}`
    navigate(`/confirmation/${bookingId}?roomId=${roomId}&nights=${nights}&total=${priceData.total}`)
  }

  const updateField = <K extends keyof BookingData>(field: K, value: BookingData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Подтверждение бронирования
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between p-4 border border-gray-100 rounded-lg">
                    <span className="text-gray-600">Номер</span>
                    <span className="font-medium text-gray-900">{room.name}</span>
                  </div>
                  <div className="flex justify-between p-4 border border-gray-100 rounded-lg">
                    <span className="text-gray-600">Заезд</span>
                    <span className="font-medium text-gray-900">{checkIn}</span>
                  </div>
                  <div className="flex justify-between p-4 border border-gray-100 rounded-lg">
                    <span className="text-gray-600">Выезд</span>
                    <span className="font-medium text-gray-900">{checkOut}</span>
                  </div>
                  <div className="flex justify-between p-4 border border-gray-100 rounded-lg">
                    <span className="text-gray-600">Гостей</span>
                    <span className="font-medium text-gray-900">{guests}</span>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Информация о госте
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Фамилия и имя
                    </label>
                    <input
                      type="text"
                      value={formData.guestName}
                      onChange={(e) => updateField('guestName', e.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                      placeholder="Мария Иванова"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                      placeholder="maria@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Особые пожелания (опционально)
                    </label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => updateField('specialRequests', e.target.value)}
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 resize-none"
                      rows={4}
                      placeholder="Например: поздний заезд, высокий этаж..."
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Способ оплаты
                </h2>
                <div className="space-y-3">
                  {[
                    { value: 'card', label: '💳 Кредитная карта' },
                    { value: 'bank', label: '🏦 Банковский перевод' },
                    { value: 'cash', label: '💰 Наличные при прибытии' },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className="flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all"
                      style={{
                        borderColor:
                          formData.paymentMethod === method.value
                            ? '#1a1a1a'
                            : '#f3f4f6',
                        backgroundColor:
                          formData.paymentMethod === method.value
                            ? '#f9fafb'
                            : '#ffffff',
                      }}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value as any}
                        onChange={(e) =>
                          updateField('paymentMethod', e.target.value as any)
                        }
                        className="h-5 w-5 accent-gray-900"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Проверка бронирования
                </h2>
                <div className="space-y-6 text-sm text-gray-600">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-blue-900">
                      ✓ Все данные заполнены корректно. Нажмите "Подтвердить", чтобы завершить бронирование.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Условия отмены:</h3>
                    <p className="text-gray-600">
                      Бесплатная отмена до 24 часов до заезда. После этого времени взимается полная стоимость номера.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar summary */}
          <div>
            <BookingSummary
              data={{
                roomName: room.name,
                roomImage: room.images[0],
                hotelName: demoHotel.name,
                checkIn,
                checkOut,
                nights,
                guests,
                price: priceData,
                guestName: formData.guestName || undefined,
                email: formData.email || undefined,
              }}
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-12 flex gap-4 justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="
              rounded-lg border border-gray-200 bg-white text-gray-900 py-3 px-6
              text-sm font-medium transition-all
              disabled:opacity-30 disabled:cursor-not-allowed
              hover:border-gray-300 hover:bg-gray-50
            "
          >
            ← Назад
          </button>

          {currentStep < 4 ? (
            <button
              onClick={handleNext}
              className="
                rounded-lg bg-gray-900 text-white py-3 px-6
                text-sm font-medium transition-all
                hover:bg-gray-800 active:scale-95
              "
            >
              Далее →
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="
                rounded-lg bg-gray-900 text-white py-3 px-6
                text-sm font-medium transition-all
                hover:bg-gray-800 active:scale-95
              "
            >
              ✓ Подтвердить бронирование
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
