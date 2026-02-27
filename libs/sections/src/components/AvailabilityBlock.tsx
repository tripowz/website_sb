import React from 'react'
import { formatDate, getNightsCount } from '@smartbooking/booking'

interface DayPrice {
  date: Date
  price: number
  currency: string
  soldOut?: boolean
}

interface AvailabilityBlockProps {
  days: DayPrice[]
  checkIn: Date | null
  checkOut: Date | null
  onChangeRange?: (checkIn: Date | null, checkOut: Date | null) => void
}

export function AvailabilityBlock({ days, checkIn, checkOut, onChangeRange }: AvailabilityBlockProps) {
  const handleDayClick = (day: Date) => {
    if (!onChangeRange) return
    if (!checkIn || (checkIn && checkOut)) {
      onChangeRange(day, null)
      return
    }
    if (day.getTime() <= checkIn.getTime()) {
      onChangeRange(day, null)
    } else {
      onChangeRange(checkIn, day)
    }
  }

  const isInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false
    const t = date.getTime()
    return t >= checkIn.getTime() && t <= checkOut.getTime()
  }

  const isEdge = (date: Date) => {
    if (!checkIn || !checkOut) return false
    const t = date.getTime()
    return t === checkIn.getTime() || t === checkOut.getTime()
  }

  const nights = getNightsCount(checkIn, checkOut)

  return (
    <section className="rounded-3xl border border-[color:var(--color-border-subtle)] bg-[var(--color-surface)] p-6 sm:p-8">
      <header className="mb-6 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
            Доступность
          </p>
          <h2 className="text-xl font-medium tracking-tight text-[var(--color-text)]">
            Выберите даты для этого номера
          </h2>
        </div>
        {nights > 0 && (
          <p className="text-xs text-[var(--color-muted)]">
            {nights} ноч{nights === 1 ? 'ь' : nights < 5 ? 'и' : 'ей'}
          </p>
        )}
      </header>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {days.map(({ date, price, currency, soldOut }) => {
          const inRange = isInRange(date)
          const edge = isEdge(date)

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={soldOut}
              onClick={() => handleDayClick(date)}
              className={`
                flex flex-col items-start justify-between
                rounded-2xl border px-3 py-3 text-left
                transition-all duration-200
                ${
                  soldOut
                    ? 'border-transparent bg-transparent text-[var(--color-muted)] opacity-40 cursor-not-allowed'
                    : inRange
                    ? 'border-[color:var(--color-accent)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]'
                    : 'border-[color:var(--color-border-subtle)]/80 bg-[var(--color-surface)] hover:border-[color:var(--color-accent)]/70 hover:bg-[var(--color-surface-elevated)]'
                }
              `}
            >
              <span className="text-xs text-[var(--color-muted)]">
                {formatDate(date)}
                {edge && !soldOut ? ' • выбрано' : ''}
              </span>
              <span className="mt-2 text-sm font-medium text-[var(--color-text)]">
                {price.toLocaleString('ru-RU', {
                  style: 'currency',
                  currency,
                  maximumFractionDigits: 0,
                })}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

