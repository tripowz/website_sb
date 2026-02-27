import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

const defaultProps: IconProps = { className: 'text-gray-400', size: 18 }

export function WifiIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  )
}

export function AcIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4" />
      <path d="M7 20s1.5-2 5-2 5 2 5 2" />
      <path d="M7 18s1.5-1 5-1 5 1 5 1" />
    </svg>
  )
}

export function TvIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}

export function MinibarIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M4 12h16" />
      <circle cx="8" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function SafeIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9v-2" />
    </svg>
  )
}

export function BalconyIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 15h18" />
      <path d="M3 15v6" />
      <path d="M21 15v6" />
      <path d="M12 15V3" />
      <path d="M8 15V9" />
      <path d="M16 15V9" />
    </svg>
  )
}

export function BathIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
      <path d="M6 12V5a2 2 0 0 1 2-2h1" />
    </svg>
  )
}

export function ShowerIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4z" />
      <path d="M8 15v2" />
      <path d="M12 13v4" />
      <path d="M16 15v2" />
      <path d="M12 11v1" />
    </svg>
  )
}

export function ParkingIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  )
}

export function BreakfastIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  )
}

export function PoolIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 16s2-2 4-2 4 2 6 2 4-2 6-2 4 2 4 2" />
      <path d="M2 20s2-2 4-2 4 2 6 2 4-2 6-2 4 2 4 2" />
      <path d="M8 14V4" />
      <path d="M16 14V4" />
      <path d="M8 8h8" />
    </svg>
  )
}

export function SpaIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22c-4-3-8-6-8-11a8 8 0 0 1 16 0c0 5-4 8-8 11z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  )
}

export function GymIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6.5 6.5h11" />
      <path d="M6.5 17.5h11" />
      <path d="M12 6.5v11" />
      <rect x="2" y="8" width="4" height="8" rx="1" />
      <rect x="18" y="8" width="4" height="8" rx="1" />
    </svg>
  )
}

export function PetIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="4" cy="8" r="2" />
      <path d="M12 22c-4 0-7-3-7-7 0-2.5 1.5-5 4-6h6c2.5 1 4 3.5 4 6 0 4-3 7-7 7z" />
    </svg>
  )
}

export function ViewIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function KitchenIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h18" />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
    </svg>
  )
}

// Fact icons

export function ClockIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function FoodIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return <BreakfastIcon className={className} size={size} />
}

export function CarIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return <ParkingIcon className={className} size={size} />
}

export function ChildIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v5" />
      <path d="M9 22l3-8 3 8" />
      <path d="M8 14h8" />
    </svg>
  )
}

export function LanguageIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export function CardIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}

// Navigation icons

export function ChevronLeftIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export function ChevronRightIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export function CalendarIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export function UsersIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function SearchIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function AreaIcon({ className = defaultProps.className, size = defaultProps.size }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M9 3v18" />
    </svg>
  )
}

// Icon resolver by type key
import type { AmenityIcon, FactIcon } from '@smartbooking/booking'

const amenityIconMap: Record<AmenityIcon, React.ComponentType<IconProps>> = {
  wifi: WifiIcon,
  ac: AcIcon,
  tv: TvIcon,
  minibar: MinibarIcon,
  safe: SafeIcon,
  balcony: BalconyIcon,
  bath: BathIcon,
  shower: ShowerIcon,
  parking: ParkingIcon,
  breakfast: BreakfastIcon,
  pool: PoolIcon,
  spa: SpaIcon,
  gym: GymIcon,
  pet: PetIcon,
  view: ViewIcon,
  kitchen: KitchenIcon,
}

const factIconMap: Record<FactIcon, React.ComponentType<IconProps>> = {
  clock: ClockIcon,
  food: FoodIcon,
  car: CarIcon,
  wifi: WifiIcon,
  pet: PetIcon,
  child: ChildIcon,
  language: LanguageIcon,
  card: CardIcon,
}

export function AmenityIconComponent({ icon, ...props }: IconProps & { icon: AmenityIcon }) {
  const Icon = amenityIconMap[icon]
  return Icon ? <Icon {...props} /> : null
}

export function FactIconComponent({ icon, ...props }: IconProps & { icon: FactIcon }) {
  const Icon = factIconMap[icon]
  return Icon ? <Icon {...props} /> : null
}
