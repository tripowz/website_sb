import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function Account() {
  const { user, isLoggedIn, isLoading, login, signup, logout } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      if (mode === 'login') {
        await login(formData.email, formData.password)
      } else {
        await signup(formData.name, formData.email, formData.password, formData.phone)
      }
    } catch (err: any) {
      setError(err.message || 'Произошла ошибка')
    }
  }

  // Logged in — show profile
  if (isLoggedIn && user) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Личный кабинет
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Добро пожаловать, {user.name}
          </p>

          {/* Profile card */}
          <div className="rounded-2xl border border-gray-100 p-8 mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">
              Профиль
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Имя</span>
                <span className="text-sm font-medium text-gray-900">{user.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Email</span>
                <span className="text-sm font-medium text-gray-900">{user.email}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-50">
                <span className="text-sm text-gray-500">Телефон</span>
                <span className="text-sm font-medium text-gray-900">{user.phone}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-sm text-gray-500">Дата регистрации</span>
                <span className="text-sm font-medium text-gray-900">{user.createdAt}</span>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <button
              onClick={() => navigate('/account/bookings')}
              className="
                flex items-center gap-4 p-6 rounded-2xl border border-gray-100
                text-left transition-all hover:shadow-float hover:border-gray-200
              "
            >
              <span className="text-2xl">📋</span>
              <div>
                <p className="text-sm font-medium text-gray-900">Мои бронирования</p>
                <p className="text-xs text-gray-400 mt-1">
                  {user.bookings.length} бронирований
                </p>
              </div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="
                flex items-center gap-4 p-6 rounded-2xl border border-gray-100
                text-left transition-all hover:shadow-float hover:border-gray-200
              "
            >
              <span className="text-2xl">🏨</span>
              <div>
                <p className="text-sm font-medium text-gray-900">Забронировать номер</p>
                <p className="text-xs text-gray-400 mt-1">Выбрать даты и номер</p>
              </div>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="
              w-full rounded-xl border border-gray-200 bg-white text-gray-900 py-3
              text-sm font-medium transition-all
              hover:border-gray-300 hover:bg-gray-50
            "
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    )
  }

  // Not logged in — show login/signup form
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-md px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2 text-center">
          {mode === 'login' ? 'Войти' : 'Регистрация'}
        </h1>
        <p className="text-gray-500 text-center mb-10">
          {mode === 'login'
            ? 'Войдите, чтобы управлять бронированиями'
            : 'Создайте аккаунт для получения скидок'}
        </p>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                placeholder="Мария Иванова"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Пароль</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
              placeholder="••••••••"
            />
          </div>
          {mode === 'signup' && (
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Телефон</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                placeholder="+7 (999) 123-45-67"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="
              w-full rounded-xl bg-gray-900 text-white py-3.5
              text-sm font-medium transition-all duration-200
              hover:bg-gray-800 active:scale-[0.98]
              disabled:opacity-50
            "
          >
            {isLoading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        {/* Demo credentials hint */}
        {mode === 'login' && (
          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">Демо-доступ:</p>
            <p className="text-xs text-gray-600 font-mono">
              maria@example.com / password123
            </p>
          </div>
        )}

        {/* Toggle mode */}
        <p className="mt-8 text-center text-sm text-gray-500">
          {mode === 'login' ? (
            <>
              Нет аккаунта?{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-gray-900 font-medium underline"
              >
                Зарегистрироваться
              </button>
            </>
          ) : (
            <>
              Уже есть аккаунт?{' '}
              <button
                onClick={() => setMode('login')}
                className="text-gray-900 font-medium underline"
              >
                Войти
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  )
}
