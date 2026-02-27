import React from 'react'
import { demoHotel } from '../data/demo'

export function Amenities() {
  const amenities = demoHotel.rooms[0]?.amenities ?? []

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            Сервисы и удобства
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
            Тихая роскошь
            <br />
            в деталях сервиса.
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Тёплые текстуры, мягкий свет и сервис, который остаётся почти незаметным. Всё настроено
            на то, чтобы вы могли просто быть.
          </p>
        </header>

        <section className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className="rounded-2xl border border-[color:var(--color-border-subtle)] bg-[var(--color-surface)] p-6"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                    {amenity.icon}
                  </p>
                  <h3 className="text-lg font-medium text-[var(--color-text)] mb-2">
                    {amenity.label}
                  </h3>
                  <p className="text-sm text-[var(--color-muted)]">
                    Спокойный, продуманный сервис без визуального шума. Удобство, которое ощущается,
                    а не демонстрируется.
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden border border-[color:var(--color-border-subtle)] bg-[var(--color-surface)]">
              <div className="aspect-[21/9] w-full bg-[url('/images/spa.jpg')] bg-cover bg-center" />
            </div>
          </div>

          <aside className="space-y-8 lg:pl-8">
            <div className="border-t border-[color:var(--color-border-subtle)] pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                Для вас
              </h2>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                <li>• Спокойная spa-зона с тёплым светом</li>
                <li>• Завтрак в номер без строгих часов</li>
                <li>• Плотные льняные шторы для идеального сна</li>
                <li>• Персональные рекомендации по городу</li>
              </ul>
            </div>

            <div className="border-t border-[color:var(--color-border-subtle)] pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                Для работы
              </h2>
              <ul className="space-y-3 text-sm text-[var(--color-muted)]">
                <li>• Тихие пространства с естественным светом</li>
                <li>• Быстрый и стабильный Wi‑Fi</li>
                <li>• Небольшие переговорные на 2–4 человека</li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

