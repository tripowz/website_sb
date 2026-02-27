import React from 'react'

interface FooterProps {
  hotelName: string
  address: string
  city: string
}

export function Footer({ hotelName, address, city }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-900">
              {hotelName}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {address}
              <br />
              {city}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Навигация
            </h4>
            <ul className="space-y-3">
              {['Номера', 'О нас', 'Контакты', 'Политика конфиденциальности'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-gray-500">+7 (495) 000-00-00</li>
              <li className="text-sm text-gray-500">info@hotel.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-300">
            © {year} {hotelName}. Все права защищены. Powered by SmartBooking.
          </p>
        </div>
      </div>
    </footer>
  )
}
