import React, { useState, useEffect, useRef } from 'react'
import type { BookingSearch } from '@smartbooking/booking'
import { CalendarIcon, UsersIcon, SearchIcon } from './Icons'

interface BookingBarProps {
  search: BookingSearch
  onFieldChange: <K extends keyof BookingSearch>(field: K, value: BookingSearch[K]) => void
  onSearch: () => void
  isValid: boolean
}

export function BookingBar({ search, onFieldChange, onSearch, isValid }: BookingBarProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const formatDateValue = (date: Date | null): string => {
    if (!date) return ''
    return date.toISOString().split('T')[0]
  }

  return (
    <>
      {/* Sentinel element to detect scroll position */}
      <div ref={sentinelRef} className="h-0" />

      <div
        className={`
          z-50 transition-all duration-500 ease-out
          ${isSticky
            ? 'fixed left-0 right-0 top-0 px-4 py-3 sm:px-6'
            : 'relative -mt-10 px-4 sm:px-6'
          }
        `}
      >
        <div
          className={`
            mx-auto max-w-4xl
            rounded-2xl border border-white/30
            bg-white/70 shadow-glass
            backdrop-blur-xl
            transition-all duration-500
            ${isSticky ? 'rounded-xl bg-white/85 shadow-float' : ''}
          `}
        >
          <div className="flex flex-col items-stretch gap-0 sm:flex-row sm:items-center">
            {/* Check-in */}
            <div
              className={`
                group flex-1 px-6 py-5
                border-b border-gray-200/40 sm:border-b-0 sm:border-r
                transition-colors duration-200
                ${focusedField === 'checkIn' ? 'bg-white/50 rounded-l-2xl' : ''}
              `}
            >
              <label className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
                <CalendarIcon size={12} className="text-gray-300" />
                Заезд
              </label>
              <input
                type="date"
                value={formatDateValue(search.checkIn)}
                onChange={(e) =>
                  onFieldChange('checkIn', e.target.value ? new Date(e.target.value) : null)
                }
                onFocus={() => setFocusedField('checkIn')}
                onBlur={() => setFocusedField(null)}
                className="
                  w-full bg-transparent text-sm font-medium text-gray-900
                  placeholder:text-gray-300
                  outline-none
                "
                placeholder="Выберите дату"
              />
            </div>

            {/* Check-out */}
            <div
              className={`
                group flex-1 px-6 py-5
                border-b border-gray-200/40 sm:border-b-0 sm:border-r
                transition-colors duration-200
                ${focusedField === 'checkOut' ? 'bg-white/50' : ''}
              `}
            >
              <label className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
                <CalendarIcon size={12} className="text-gray-300" />
                Выезд
              </label>
              <input
                type="date"
                value={formatDateValue(search.checkOut)}
                onChange={(e) =>
                  onFieldChange('checkOut', e.target.value ? new Date(e.target.value) : null)
                }
                onFocus={() => setFocusedField('checkOut')}
                onBlur={() => setFocusedField(null)}
                className="
                  w-full bg-transparent text-sm font-medium text-gray-900
                  placeholder:text-gray-300
                  outline-none
                "
                placeholder="Выберите дату"
              />
            </div>

            {/* Guests */}
            <div
              className={`
                group flex-1 px-6 py-5
                border-b border-gray-200/40 sm:border-b-0 sm:border-r
                transition-colors duration-200
                ${focusedField === 'guests' ? 'bg-white/50' : ''}
              `}
            >
              <label className="mb-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
                <UsersIcon size={12} className="text-gray-300" />
                Гости
              </label>
              <select
                value={search.guests}
                onChange={(e) => onFieldChange('guests', Number(e.target.value))}
                onFocus={() => setFocusedField('guests')}
                onBlur={() => setFocusedField(null)}
                className="
                  w-full bg-transparent text-sm font-medium text-gray-900
                  outline-none appearance-none cursor-pointer
                "
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}
                  </option>
                ))}
              </select>
            </div>

            {/* Search button */}
            <div className="px-3 py-3 sm:pr-3">
              <button
                onClick={onSearch}
                disabled={!isValid}
                className="
                  flex h-12 w-full items-center justify-center gap-2
                  rounded-xl bg-gray-900 px-8
                  text-sm font-medium text-white
                  transition-all duration-200
                  hover:bg-gray-800
                  active:scale-[0.98]
                  disabled:opacity-40 disabled:cursor-not-allowed
                  sm:w-auto
                "
              >
                <SearchIcon size={16} className="text-white" />
                <span>Найти</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
