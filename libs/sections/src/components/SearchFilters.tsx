import React from 'react'
import type { Room } from '@smartbooking/booking'

interface SearchFiltersProps {
  rooms: Room[]
  onFilterChange: (filters: Filters) => void
  currentFilters: Filters
}

export interface Filters {
  priceMin: number
  priceMax: number
  amenities: string[]
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'popularity'
}

export function SearchFilters({ rooms, onFilterChange, currentFilters }: SearchFiltersProps) {
  // Calculate price range
  const prices = rooms.map((r) => r.price.amount)
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)

  // Get unique amenities
  const allAmenities = Array.from(
    new Set(rooms.flatMap((r) => r.amenities.map((a) => a.icon))),
  )

  const handleAmenityToggle = (icon: string) => {
    const updated = currentFilters.amenities.includes(icon)
      ? currentFilters.amenities.filter((a) => a !== icon)
      : [...currentFilters.amenities, icon]
    onFilterChange({ ...currentFilters, amenities: updated })
  }

  return (
    <aside className="space-y-8">
      {/* Sort */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
          Сортировка
        </h3>
        <select
          value={currentFilters.sortBy}
          onChange={(e) =>
            onFilterChange({
              ...currentFilters,
              sortBy: e.target.value as any,
            })
          }
          className="
            w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5
            text-sm font-medium text-gray-900
            outline-none focus:border-gray-900
          "
        >
          <option value="price-asc">По цене: от меньшей</option>
          <option value="price-desc">По цене: от большей</option>
          <option value="rating">По рейтингу</option>
          <option value="popularity">По популярности</option>
        </select>
      </div>

      {/* Price range */}
      <div className="border-t border-gray-100 pt-8">
        <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
          Цена (RUB)
        </h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-500 block mb-2">От</label>
            <input
              type="number"
              value={currentFilters.priceMin}
              onChange={(e) =>
                onFilterChange({
                  ...currentFilters,
                  priceMin: Number(e.target.value),
                })
              }
              min={minPrice}
              max={maxPrice}
              className="
                w-full rounded-lg border border-gray-200 bg-white px-3 py-2
                text-sm font-medium text-gray-900
                outline-none focus:border-gray-900
              "
            />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-2">До</label>
            <input
              type="number"
              value={currentFilters.priceMax}
              onChange={(e) =>
                onFilterChange({
                  ...currentFilters,
                  priceMax: Number(e.target.value),
                })
              }
              min={minPrice}
              max={maxPrice}
              className="
                w-full rounded-lg border border-gray-200 bg-white px-3 py-2
                text-sm font-medium text-gray-900
                outline-none focus:border-gray-900
              "
            />
          </div>
        </div>
      </div>

      {/* Amenities */}
      {allAmenities.length > 0 && (
        <div className="border-t border-gray-100 pt-8">
          <h3 className="text-xs uppercase tracking-[0.15em] text-gray-400 font-medium mb-4">
            Удобства
          </h3>
          <div className="space-y-2">
            {allAmenities.map((amenity) => (
              <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={currentFilters.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="
                    h-4 w-4 rounded border-gray-300 accent-gray-900
                    cursor-pointer
                  "
                />
                <span className="text-sm text-gray-600 capitalize">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
