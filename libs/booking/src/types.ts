// ── Core domain types for the SmartBooking platform ──

export interface Hotel {
  id: string
  name: string
  tagline: string
  description: string
  address: string
  city: string
  stars: number
  heroImage: string
  galleryImages: string[]
  facts: HotelFact[]
  rooms: Room[]
  rating: number
  reviewsCount: number
}

export interface Room {
  id: string
  name: string
  description: string
  images: string[]
  capacity: number
  area: number // m²
  amenities: RoomAmenity[]
  price: RoomPrice
  badges: Badge[]
  available: boolean
}

export interface RoomPrice {
  amount: number
  currency: string
  perNight: boolean
  originalAmount?: number
  discountPercent?: number
}

export interface RoomAmenity {
  id: string
  label: string
  icon: AmenityIcon
}

export type AmenityIcon =
  | 'wifi'
  | 'ac'
  | 'tv'
  | 'minibar'
  | 'safe'
  | 'balcony'
  | 'bath'
  | 'shower'
  | 'parking'
  | 'breakfast'
  | 'pool'
  | 'spa'
  | 'gym'
  | 'pet'
  | 'view'
  | 'kitchen'

export interface Badge {
  id: string
  type: BadgeType
  label: string
}

export type BadgeType =
  | 'promo'
  | 'member-discount'
  | 'low-availability'
  | 'new'
  | 'popular'
  | 'best-price'

export interface HotelFact {
  id: string
  label: string
  value: string
  icon?: FactIcon
}

export type FactIcon =
  | 'clock'
  | 'food'
  | 'car'
  | 'wifi'
  | 'pet'
  | 'child'
  | 'language'
  | 'card'

export interface BookingSearch {
  checkIn: Date | null
  checkOut: Date | null
  guests: number
  rooms: number
}

export interface GlobalBannerData {
  text: string
  ctaLabel: string
  onCtaClick: () => void
  visible: boolean
}
