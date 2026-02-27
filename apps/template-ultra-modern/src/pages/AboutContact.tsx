import React from 'react'
import { demoHotel } from '../data/demo'

export function AboutContact() {
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
              О нас / Контакты
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              {demoHotel.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 space-y-20">
        {/* О нас */}
        <section className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              О нас
            </h2>
            <p className="text-lg text-gray-900">
              {demoHotel.name} — это не просто отель. Это место, где минимализм встречается с роскошью,
              а тишина становится предметом искусства. Интерьеры, свет и сервис собраны вокруг одной
              идеи — создать пространство, в котором легко дышать.
            </p>
            <p>
              Мы расположены в самом сердце города, всего в нескольких шагах от ключевых культурных
              точек. Здесь вы можете сочетать деловые встречи, спокойный отдых и вечерние прогулки
              по любимым улицам.
            </p>
            <p>
              Команда отеля верит, что настоящая забота — это внимание к деталям. От качества белья
              и аромата в лобби до идеальной температуры в вашем номере.
            </p>
          </div>

          <aside className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              Кратко
            </h2>
            <div className="grid gap-4 text-sm text-gray-600">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Адрес</p>
                <p className="font-medium">
                  {demoHotel.address}
                  <br />
                  {demoHotel.city}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Телефон</p>
                <p className="font-medium">+7 (495) 123-45-67</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <p className="font-medium">info@thegrand.ru</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Режим работы</p>
                <p className="font-medium">Круглосуточно, 24/7</p>
              </div>
            </div>
          </aside>
        </section>

        {/* Контакты + карта */}
        <section className="grid gap-12 lg:grid-cols-2">
          {/* Форма контактов (упрощённая) */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">
              Написать нам
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Имя</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                  placeholder="Ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Сообщение</label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Ваш запрос или комментарий..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gray-900 text-white py-3.5 text-sm font-medium transition-all duration-200 hover:bg-gray-800 active:scale-[0.98]"
              >
                Отправить
              </button>
            </form>
          </div>

          {/* Карта / блок локации */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-6">
              Расположение
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 mb-6">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-sm text-gray-500">{demoHotel.address}</p>
                  <p className="text-xs text-gray-400 mt-1">{demoHotel.city}</p>
                  <p className="mt-3 text-xs text-gray-400">
                    Здесь может быть интерактивная карта (Google / Яндекс)
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-600">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Как добраться
                </p>
                <p>
                  15 минут пешком от метро, трансфер из аэропорта Шереметьево и Домодедово по запросу.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  Парковка
                </p>
                <p>Подземная парковка для гостей отеля, доступ круглосуточно.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

