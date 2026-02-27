import React from 'react'

interface ReviewCardProps {
  guestName: string
  rating: number
  text: string
  date: string
  avatar?: string
}

export function ReviewCard({ guestName, rating, text, date, avatar }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-6 bg-white transition-shadow duration-300 hover:shadow-float">
      {/* Header */}
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={guestName}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600">
            {guestName.charAt(0)}
          </div>
        )}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{guestName}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={i < rating ? '#1a1a1a' : 'none'}
            stroke={i < rating ? '#1a1a1a' : '#d1d5db'}
            strokeWidth="1.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    </div>
  )
}
