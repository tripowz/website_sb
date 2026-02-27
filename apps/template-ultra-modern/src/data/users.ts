// Mock user data for localStorage-based auth

export interface User {
  id: string
  name: string
  email: string
  password: string // plain text for mock, never do this in production!
  phone: string
  bookings: string[] // booking IDs
  createdAt: string
}

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Мария Иванова',
    email: 'maria@example.com',
    password: 'password123',
    phone: '+7 (999) 123-45-67',
    bookings: ['booking-1'],
    createdAt: '2024-01-01',
  },
  {
    id: 'user-2',
    name: 'Иван Петров',
    email: 'ivan@example.com',
    password: 'password123',
    phone: '+7 (999) 234-56-78',
    bookings: [],
    createdAt: '2024-01-02',
  },
]
