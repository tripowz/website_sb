import React from 'react'
import { demoHotel } from '../data/demo'

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={demoHotel.heroImage}
          alt={demoHotel.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white mb-3">
              О нас
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              {demoHotel.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24">
        {/* Story */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">
            Наша история
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              {demoHotel.name} — это не просто отель. Это место, где минимализм встречается с роскошью,
              а тишина становится предметом искусства. Основанный в 2018 году архитектором Андреем Вороновым,
              отель стал воплощением идеи о том, что истинная роскошь — это пространство и покой.
            </p>
            <p>
              Каждый элемент интерьера был тщательно подобран: от мрамора Каррара в ванных комнатах
              до авторской мебели датских дизайнеров. Мы верим, что детали создают атмосферу,
              а атмосфера создаёт незабываемые впечатления.
            </p>
            <p>
              Расположенный в самом сердце Москвы, всего в нескольких шагах от Большого театра
              и Красной площади, {demoHotel.name} предлагает уникальное сочетание
              столичного ритма и абсолютного спокойствия.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">
            Наши ценности
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: 'Минимализм',
                text: 'Мы убираем лишнее, чтобы оставить только важное. Каждый предмет несёт смысл.',
              },
              {
                title: 'Внимание',
                text: 'Персонал предвосхищает ваши желания. Мы помним ваши предпочтения.',
              },
              {
                title: 'Тишина',
                text: 'Звукоизоляция класса А, отсутствие лишнего шума. Ваш покой — наш приоритет.',
              },
            ].map((value) => (
              <div key={value.title} className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="mb-24">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">
            Награды и признание
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { year: '2024', award: 'Best Boutique Hotel — Travel Awards' },
              { year: '2023', award: 'Design Hotel of the Year — AD Magazine' },
              { year: '2023', award: 'Top 10 Luxury Hotels — Condé Nast Traveller' },
              { year: '2022', award: 'Excellence in Hospitality — World Hotels' },
            ].map((item) => (
              <div
                key={item.award}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100"
              >
                <span className="text-2xl font-semibold text-gray-200 font-mono">
                  {item.year}
                </span>
                <span className="text-sm text-gray-600">{item.award}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-8">
            В цифрах
          </h2>
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-4 text-center">
            {[
              { value: '5', label: 'Звёзд' },
              { value: '9.4', label: 'Рейтинг' },
              { value: '847', label: 'Отзывов' },
              { value: '2018', label: 'Год открытия' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-semibold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
