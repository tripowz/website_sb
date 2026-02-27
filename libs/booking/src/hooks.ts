import { useState, useCallback, useMemo } from 'react'
import type { BookingSearch, Room } from './types'

export function useBookingSearch(initialSearch?: Partial<BookingSearch>) {
  const [search, setSearch] = useState<BookingSearch>({
    checkIn: initialSearch?.checkIn ?? null,
    checkOut: initialSearch?.checkOut ?? null,
    guests: initialSearch?.guests ?? 2,
    rooms: initialSearch?.rooms ?? 1,
  })

  const updateField = useCallback(
    <K extends keyof BookingSearch>(field: K, value: BookingSearch[K]) => {
      setSearch((prev) => ({ ...prev, [field]: value }))
    },
    [],
  )

  const reset = useCallback(() => {
    setSearch({
      checkIn: null,
      checkOut: null,
      guests: 2,
      rooms: 1,
    })
  }, [])

  const isValid = useMemo(
    () => search.checkIn !== null && search.checkOut !== null && search.guests > 0,
    [search],
  )

  return { search, updateField, reset, isValid }
}

export function useRoomFilter(rooms: Room[]) {
  const [sortBy, setSortBy] = useState<'price' | 'area' | 'capacity'>('price')

  const sorted = useMemo(() => {
    return [...rooms].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price.amount - b.price.amount
        case 'area':
          return b.area - a.area
        case 'capacity':
          return b.capacity - a.capacity
        default:
          return 0
      }
    })
  }, [rooms, sortBy])

  const available = useMemo(() => sorted.filter((r) => r.available), [sorted])

  return { sorted, available, sortBy, setSortBy }
}

export function formatPrice(amount: number, currency: string): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date | null): string {
  if (!date) return ''
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
  }).format(date)
}

export function getNightsCount(checkIn: Date | null, checkOut: Date | null): number {
  if (!checkIn || !checkOut) return 0
  const diff = checkOut.getTime() - checkIn.getTime()
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}
