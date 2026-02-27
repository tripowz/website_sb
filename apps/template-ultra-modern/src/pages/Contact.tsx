import React, { useState } from 'react'
import { demoHotel } from '../data/demo'

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-500">
            Мы всегда рады помочь. Свяжитесь с нами любым удобным способом.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">
              Написать нам
            </h2>

            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Сообщение отправлено!</h3>
                <p className="text-sm text-gray-600">Мы ответим в течение 24 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Тема</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                  >
                    <option value="">Выберите тему</option>
                    <option value="booking">Бронирование</option>
                    <option value="feedback">Отзыв</option>
                    <option value="partnership">Партнёрство</option>
                    <option value="other">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Сообщение</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={6}
                    className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <button
                  type="submit"
                  className="
                    w-full rounded-xl bg-gray-900 text-white py-3.5
                    text-sm font-medium transition-all duration-200
                    hover:bg-gray-800 active:scale-[0.98]
                  "
                >
                  Отправить
                </button>
              </form>
            )}
          </div>

          {/* Contact info + Map */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">
              Информация
            </h2>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {[
                { label: 'Адрес', value: `${demoHotel.address}, ${demoHotel.city}`, icon: '📍' },
                { label: 'Телефон', value: '+7 (495) 123-45-67', icon: '📞' },
                { label: 'Email', value: 'info@thegrand.ru', icon: '✉️' },
                { label: 'Часы работы', value: 'Круглосуточно, 24/7', icon: '🕐' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-sm text-gray-500">
                    {demoHotel.address}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {demoHotel.city}
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">
                Часто задаваемые вопросы
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Как добраться от аэропорта?',
                    a: 'Мы предлагаем трансфер из аэропортов Шереметьево и Домодедово. Стоимость от 3000 RUB.',
                  },
                  {
                    q: 'Есть ли парковка?',
                    a: 'Да, подземная парковка бесплатна для всех гостей отеля.',
                  },
                  {
                    q: 'Можно ли с домашними животными?',
                    a: 'Да, мы приветствуем гостей с питомцами. Доплата 1000 RUB/ночь.',
                  },
                ].map((faq) => (
                  <div key={faq.q} className="border-b border-gray-100 pb-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">{faq.q}</p>
                    <p className="text-sm text-gray-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
