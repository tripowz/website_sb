import React, { useState, useMemo } from 'react'
import { ReviewCard } from '@smartbooking/sections'
import { demoHotel, demoReviews } from '../data/demo'

export function Reviews() {
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'rating-high' | 'rating-low'>('date')

  const filteredReviews = useMemo(() => {
    let result = [...demoReviews]

    // Filter by rating
    if (filterRating !== null) {
      result = result.filter((r) => r.rating === filterRating)
    }

    // Sort
    switch (sortBy) {
      case 'date':
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      case 'rating-high':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'rating-low':
        result.sort((a, b) => a.rating - b.rating)
        break
    }

    return result
  }, [filterRating, sortBy])

  // Calculate average rating
  const avgRating = useMemo(() => {
    const sum = demoReviews.reduce((acc, r) => acc + r.rating, 0)
    return (sum / demoReviews.length).toFixed(1)
  }, [])

  // Rating distribution
  const ratingDist = useMemo(() => {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    demoReviews.forEach((r) => dist[r.rating]++)
    return dist
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Отзывы гостей
          </h1>
          <p className="text-lg text-gray-500">
            {demoHotel.name} — {demoHotel.reviewsCount} отзывов
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-4">
          {/* Sidebar — stats and filters */}
          <div className="lg:col-span-1">
            {/* Rating overview */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="text-6xl font-semibold text-gray-900 mb-2">
                {avgRating}
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill={i < Math.round(Number(avgRating)) ? '#1a1a1a' : 'none'}
                    stroke={i < Math.round(Number(avgRating)) ? '#1a1a1a' : '#d1d5db'}
                    strokeWidth="1.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                На основе {demoReviews.length} отзывов
              </p>
            </div>

            {/* Rating distribution */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
                Распределение
              </h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <button
                    key={star}
                    onClick={() =>
                      setFilterRating(filterRating === star ? null : star)
                    }
                    className={`
                      flex items-center gap-3 w-full text-left py-1
                      transition-opacity
                      ${filterRating !== null && filterRating !== star ? 'opacity-30' : ''}
                    `}
                  >
                    <span className="text-sm text-gray-600 w-3">{star}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-900 rounded-full transition-all"
                        style={{
                          width: `${(ratingDist[star] / demoReviews.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-6 text-right">
                      {ratingDist[star]}
                    </span>
                  </button>
                ))}
              </div>
              {filterRating !== null && (
                <button
                  onClick={() => setFilterRating(null)}
                  className="mt-3 text-xs text-gray-500 hover:text-gray-900 underline"
                >
                  Сбросить фильтр
                </button>
              )}
            </div>

            {/* Sort */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
                Сортировка
              </h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="
                  w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5
                  text-sm font-medium text-gray-900
                  outline-none focus:border-gray-900
                "
              >
                <option value="date">По дате</option>
                <option value="rating-high">Рейтинг: высокий</option>
                <option value="rating-low">Рейтинг: низкий</option>
              </select>
            </div>
          </div>

          {/* Reviews grid */}
          <div className="lg:col-span-3">
            {filteredReviews.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {filteredReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    guestName={review.guestName}
                    rating={review.rating}
                    text={review.text}
                    date={review.date}
                    avatar={review.avatar}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Отзывов не найдено
                </h2>
                <p className="text-gray-500 text-sm">
                  Попробуйте изменить фильтр
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
