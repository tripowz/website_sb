import React from 'react'
import { formatPrice } from '@smartbooking/booking'

export interface BookingSummaryData {
  roomName: string
  roomImage: string
  hotelName: string
  checkIn: string
  checkOut: string
  nights: number
  guests: number
  price: {
    subtotal: number
    taxes: number
    total: number
    currency: string
  }
  guestName?: string
  email?: string
}

interface BookingSummaryProps {
  data: BookingSummaryData
}

export function BookingSummary({ data }: BookingSummaryProps) {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 bg-white">
      {/* Room preview */}
      <div className="mb-6 flex gap-4">
        <img
          src={data.roomImage}
          alt={data.roomName}
          className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{data.roomName}</h3>
          <p className="text-xs text-gray-400 mt-1">{data.hotelName}</p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-6 border-t border-gray-100 pt-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Заезд</span>
          <span className="font-medium text-gray-900">{data.checkIn}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Выезд</span>
          <span className="font-medium text-gray-900">{data.checkOut}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Ночей</span>
          <span className="font-medium text-gray-900">{data.nights}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Гостей</span>
          <span className="font-medium text-gray-900">{data.guests}</span>
        </div>
      </div>

      {/* Guest info (if provided) */}
      {data.guestName && (
        <div className="mb-6 border-t border-gray-100 pt-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Гость</span>
            <span className="font-medium text-gray-900">{data.guestName}</span>
          </div>
          {data.email && (
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Email</span>
              <span className="font-medium text-gray-900 text-right">{data.email}</span>
            </div>
          )}
        </div>
      )}

      {/* Price breakdown */}
      <div className="space-y-2 border-t border-gray-100 pt-6">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Стоимость ({data.nights} ночей)</span>
          <span>{formatPrice(data.price.subtotal, data.price.currency)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Налоги и сборы</span>
          <span>{formatPrice(data.price.taxes, data.price.currency)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-900 pt-4 border-t border-gray-100">
          <span>Итого</span>
          <span>{formatPrice(data.price.total, data.price.currency)}</span>
        </div>
      </div>
    </div>
  )
}
