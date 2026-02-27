import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const themes = ['minimal', 'luxury', 'dark', 'modern'] as const
type Theme = (typeof themes)[number]

export function Navigation() {
  const location = useLocation()
  const [theme, setTheme] = React.useState<Theme>('minimal')

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { label: 'Главная', href: '/' },
    { label: 'Номера', href: '/rooms' },
    { label: 'Услуги', href: '/services' },
    { label: 'О нас / Контакты', href: '/about' },
    { label: 'Галерея', href: '/gallery' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between border-b border-[color:var(--color-border-subtle)]/60">
          {/* Logo */}
          <Link
            to="/"
            className="text-base font-semibold tracking-[0.18em] uppercase text-[var(--color-text)]"
          >
            Casa Aurelia
          </Link>

          {/* Nav items */}
          <div className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  text-xs font-medium uppercase tracking-[0.18em]
                  pb-1 border-b
                  transition-colors duration-200
                  ${
                    isActive(item.href)
                      ? 'border-[color:var(--color-accent)] text-[var(--color-accent)]'
                      : 'border-transparent text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[color:var(--color-border-subtle)]'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme switcher */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-[color:var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-3 py-1.5">
              {themes.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTheme(value)}
                  className={`
                    text-[9px] uppercase tracking-[0.16em]
                    px-2 py-0.5 rounded-full
                    transition-all duration-150
                    ${
                      theme === value
                        ? 'bg-[color:var(--color-accent)] text-white'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                    }
                  `}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
