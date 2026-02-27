import React from 'react'
import type { HotelFact } from '@smartbooking/booking'
import { FactIconComponent } from './Icons'

interface FactsBoxProps {
  facts: HotelFact[]
  title?: string
}

export function FactsBox({ facts, title = 'Важная информация' }: FactsBoxProps) {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h2>
        </div>

        {/* Facts grid with thin dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`
                flex flex-col gap-3 px-8 py-8
                ${index > 0 ? 'border-t border-gray-100 sm:border-t-0' : ''}
                ${index > 0 ? 'sm:border-l sm:border-gray-100' : ''}
                ${index === 0 ? '' : ''}
              `}
            >
              {/* Icon */}
              {fact.icon && (
                <div className="mb-1">
                  <FactIconComponent icon={fact.icon} size={22} className="text-gray-300" />
                </div>
              )}

              {/* Label */}
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                {fact.label}
              </span>

              {/* Value */}
              <span className="text-base font-medium text-gray-900">
                {fact.value}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="mt-2 border-t border-gray-100" />
      </div>
    </section>
  )
}
