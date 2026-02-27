import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Номера', href: '/rooms' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-lg font-semibold tracking-tight text-gray-900">
            The Grand
          </Link>

          {/* Nav items */}
          <div className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  text-sm font-medium transition-colors duration-200
                  ${isActive(item.href)
                    ? 'text-gray-900 border-b-2 border-gray-900 pb-0.5'
                    : 'text-gray-500 hover:text-gray-700'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Account / Login */}
          <div className="flex items-center gap-4">
            <Link
              to="/account"
              className="
                text-xs uppercase tracking-[0.15em] font-medium
                text-gray-500 hover:text-gray-900 transition-colors
              "
            >
              Аккаунт
            </Link>
            <Link
              to="/account"
              className="
                rounded-full bg-gray-900 text-white
                px-5 py-2 text-xs font-medium
                transition-all duration-200
                hover:bg-gray-800 active:scale-95
              "
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
