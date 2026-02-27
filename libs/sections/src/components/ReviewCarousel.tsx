import React, { useState, useRef, useEffect } from 'react'
import { ReviewCard } from './ReviewCard'
import { ChevronLeftIcon, ChevronRightIcon } from './Icons'

interface Review {
  id: string
  guestName: string
  rating: number
  text: string
  date: string
  avatar?: string
}

interface ReviewCarouselProps {
  reviews: Review[]
  hotelRating?: number
  reviewsCount?: number
}

export function ReviewCarousel({ reviews, hotelRating, reviewsCount }: ReviewCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) el.addEventListener('scroll', checkScroll)
    return () => el?.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = 360
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">
            Отзывы гостей
          </h2>
          {hotelRating && reviewsCount && (
            <p className="text-gray-500">
              <span className="text-2xl font-semibold text-gray-900">{hotelRating}</span>
              <span className="text-sm text-gray-400 ml-2">/ 10 — {reviewsCount} отзывов</span>
            </p>
          )}
        </div>

        {/* Navigation arrows */}
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-gray-200 text-gray-600
              transition-all duration-200
              hover:border-gray-300 hover:bg-gray-50
              disabled:opacity-30 disabled:cursor-not-allowed
            "
          >
            <ChevronLeftIcon size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="
              flex h-10 w-10 items-center justify-center rounded-full
              border border-gray-200 text-gray-600
              transition-all duration-200
              hover:border-gray-300 hover:bg-gray-50
              disabled:opacity-30 disabled:cursor-not-allowed
            "
          >
            <ChevronRightIcon size={18} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-4"
      >
        {reviews.map((review) => (
          <div key={review.id} className="flex-shrink-0 w-[340px] snap-start">
            <ReviewCard
              guestName={review.guestName}
              rating={review.rating}
              text={review.text}
              date={review.date}
              avatar={review.avatar}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
