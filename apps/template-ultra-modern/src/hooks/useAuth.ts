import { useState, useCallback, useEffect } from 'react'
import type { User } from '../data/users'
import { mockUsers } from '../data/users'
import { mockBookings } from '../data/bookings'

interface AuthContextType {
  user: (User & { bookings: any[] }) | null
  isLoggedIn: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, phone: string) => Promise<void>
  logout: () => void
}

const STORAGE_KEY = 'auth_user'

export function useAuth(): AuthContextType {
  const [user, setUser] = useState<(User & { bookings: any[] }) | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Initialize from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const userData = JSON.parse(stored)
        const enrichedUser = enrichUserWithBookings(userData)
        setUser(enrichedUser)
      }
    } catch (error) {
      console.error('Failed to restore auth:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      const foundUser = mockUsers.find(
        (u) => u.email === email && u.password === password,
      )

      if (!foundUser) {
        throw new Error('Invalid credentials')
      }

      const enrichedUser = enrichUserWithBookings(foundUser)
      setUser(enrichedUser)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(foundUser))
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signup = useCallback(
    async (name: string, email: string, password: string, phone: string) => {
      setIsLoading(true)
      try {
        // Check if email exists
        if (mockUsers.some((u) => u.email === email)) {
          throw new Error('Email already registered')
        }

        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        const newUser: User = {
          id: `user-${Date.now()}`,
          name,
          email,
          password,
          phone,
          bookings: [],
          createdAt: new Date().toISOString().split('T')[0],
        }

        const enrichedUser = enrichUserWithBookings(newUser)
        setUser(enrichedUser)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
      } finally {
        setIsLoading(false)
      }
    },
    [],
  )

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return {
    user,
    isLoggedIn: !!user,
    isLoading,
    login,
    signup,
    logout,
  }
}

// Helper to enrich user with booking details
function enrichUserWithBookings(user: User) {
  const bookingDetails = mockBookings.filter((b) =>
    user.bookings.includes(b.id),
  )
  return { ...user, bookings: bookingDetails }
}
