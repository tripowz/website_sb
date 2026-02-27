import React from 'react'
import { demoHotel } from '../data/demo'

export function Location() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <header className="mb-12">
          <div className="mb-6 rounded-3xl overflow-hidden border border-[color:var(--color-border-subtle)]">
            <div className="relative aspect-[21/8] w-full overflow-hidden">
              <img
                src={demoHotel.heroImage}
                alt={demoHotel.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/90 via-transparent to-[var(--color-bg)]/60" />
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              Локация
            </p>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
              Тихое убежище
              <br />
              в центре движения.
            </h1>
            <p className="text-lg text-[var(--color-muted)]">
              Мы находимся в архитектурном квартале рядом с музеями, галереями и небольшими
              ресторанами. Всё важное — в пешей доступности, но за окнами по‑прежнему тихо.
            </p>
          </div>
        </header>

        <section className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
                Адрес
              </h2>
              <p className="text-sm text-[var(--color-muted)] mb-1">Boutique Hotel “Casa Aurelia”</p>
              <p className="text-lg font-medium text-[var(--color-text)]">
                {demoHotel.address}, {demoHotel.city}
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
                Как добраться
              </h2>
              <div className="space-y-6">
                {[
                  {
                    label: 'Самолёт',
                    desc: '30–40 минут на машине от аэропорта. По запросу организуем тихий трансфер без брендирования.',
                  },
                  {
                    label: 'Поезд',
                    desc: '15 минут на такси от главного вокзала или 20 минут пешком через исторический центр.',
                  },
                  {
                    label: 'Авто',
                    desc: 'Подземный паркинг для гостей, зарядка для электромобилей, прямой доступ к лобби.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border-t border-[color:var(--color-border-subtle)] pt-4"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--color-text)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-10 lg:pl-8">
            <div className="rounded-2xl overflow-hidden border border-[color:var(--color-border-subtle)] bg-[var(--color-surface-elevated)]">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                    Карта
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    Здесь может быть интерактивная карта с отмеченным отелем и ближайшими объектами.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[color:var(--color-border-subtle)] pt-6">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
                Соседство
              </h2>
              <div className="space-y-4 text-sm text-[var(--color-muted)]">
                <p>• Галерея современного искусства — 4 мин пешком</p>
                <p>• Маленькая эспрессо-бар на углу — 2 мин</p>
                <p>• Парк для утренних прогулок — 6 мин</p>
                <p>• Ресторан с дегустационным меню — 3 мин</p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

