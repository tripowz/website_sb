import React from 'react'

const policies = [
  {
    title: 'Бронирование и отмена',
    content: [
      'Бесплатная отмена за 48 часов до заезда для гибких тарифов.',
      'Невозвратные тарифы подразумевают 100% предоплату и не подлежат возврату.',
      'Изменение дат возможно при наличии доступности по текущему тарифу.',
    ],
  },
  {
    title: 'Заезд и выезд',
    content: [
      'Заезд с 15:00, ранний check-in по возможности.',
      'Выезд до 12:00, поздний check-out по запросу и при наличии.',
      'Камера хранения доступна для гостей в день заезда и выезда.',
    ],
  },
  {
    title: 'Дети и дополнительные гости',
    content: [
      'Дети до 6 лет при размещении с родителями без доп. кровати — бесплатно.',
      'Детские кроватки и дополнительные кровати доступны по запросу.',
      'Максимальная вместимость номера указывается при бронировании.',
    ],
  },
  {
    title: 'Домашние животные',
    content: [
      'Мы принимаем небольших собак и кошек по предварительному согласованию.',
      'Дополнительная уборка и welcome-набор для питомца включены в доплату.',
    ],
  },
]

export function Policies() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <header className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            Политики отеля
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-text)] mb-4">
            Прозрачные правила,
            <br />
            спокойное пребывание.
          </h1>
          <p className="text-lg text-[var(--color-muted)]">
            Мы стараемся формулировать правила просто и ясно, чтобы вы могли расслабиться и думать не
            о регламентах, а о времени для себя.
          </p>
        </header>

        <section className="divide-y divide-[color:var(--color-border-subtle)] border-y border-[color:var(--color-border-subtle)]">
          {policies.map((policy, index) => {
            const isOpen = openIndex === index
            return (
              <div key={policy.title}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-sm font-medium tracking-[0.16em] uppercase text-[var(--color-text)]">
                    {policy.title}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 text-sm text-[var(--color-muted)] space-y-2">
                    {policy.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

