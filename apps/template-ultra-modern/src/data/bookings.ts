// Mock booking data

export interface MockBooking {
  id: string
  hotelId: string
  roomId: string
  checkIn: string
  checkOut: string
  guests: number
  guestName: string
  email: string
  phone: string
  price: {
    subtotal: number
    taxes: number
    total: number
    currency: string
  }
  paymentMethod: string
  status: 'confirmed' | 'pending' | 'cancelled'
  createdAt: string
}

export const mockBookings: MockBooking[] = [
  {
    id: 'booking-1',
    hotelId: 'the-grand',
    roomId: 'superior',
    checkIn: '2024-02-28',
    checkOut: '2024-03-02',
    guests: 2,
    guestName: 'Мария Иванова',
    email: 'maria@example.com',
    phone: '+7 (999) 123-45-67',
    price: {
      subtotal: 17000,
      taxes: 2210,
      total: 19210,
      currency: 'RUB',
    },
    paymentMethod: 'card',
    status: 'confirmed',
    createdAt: '2024-01-15',
  },
]
