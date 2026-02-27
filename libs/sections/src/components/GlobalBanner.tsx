import React, { useState } from 'react'
import type { GlobalBannerData } from '@smartbooking/booking'

interface GlobalBannerProps {
  data: GlobalBannerData
}

export function GlobalBanner({ data }: GlobalBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  if (!data.visible || dismissed) return null

  return (
    <div className="relative bg-gray-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-6 py-2.5">
        <p className="text-sm font-normal tracking-wide text-gray-300">
          {data.text}
        </p>
        <button
          onClick={data.onCtaClick}
          className="
            rounded-full border border-white/20 bg-white/10
            px-4 py-1 text-xs font-medium text-white
            transition-all duration-200
            hover:bg-white hover:text-gray-900
          "
        >
          {data.ctaLabel}
        </button>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          text-gray-500 transition-colors hover:text-white
        "
        aria-label="Закрыть"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
