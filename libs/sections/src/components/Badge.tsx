import React from 'react'
import type { Badge as BadgeType, BadgeType as BadgeVariant } from '@smartbooking/booking'

interface BadgeProps {
  badge: BadgeType
}

const variantStyles: Record<BadgeVariant, string> = {
  'promo': 'bg-amber-50 text-amber-700',
  'member-discount': 'bg-purple-50 text-purple-700',
  'low-availability': 'bg-red-50 text-red-600',
  'new': 'bg-blue-50 text-blue-600',
  'popular': 'bg-emerald-50 text-emerald-700',
  'best-price': 'bg-gray-100 text-gray-700',
}

export function Badge({ badge }: BadgeProps) {
  const style = variantStyles[badge.type] ?? 'bg-gray-100 text-gray-600'

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full px-3 py-1
        text-xs font-medium
        ${style}
        transition-colors duration-200
      `}
    >
      {badge.label}
    </span>
  )
}

export function BadgeGroup({ badges }: { badges: BadgeType[] }) {
  if (!badges.length) return null

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <Badge key={badge.id} badge={badge} />
      ))}
    </div>
  )
}
