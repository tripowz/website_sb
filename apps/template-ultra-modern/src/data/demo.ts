import type { Hotel, GlobalBannerData } from '@smartbooking/booking'

export const demoHotel: Hotel = {
  id: 'the-grand',
  name: 'The Grand',
  tagline: 'Где тишина становится роскошью',
  description:
    'Бутик-отель в самом сердце города. Минималистичный дизайн, безупречный сервис и атмосфера абсолютного спокойствия.',
  address: 'ул. Большая Никитская, 24',
  city: 'Москва, Россия',
  stars: 5,
  heroImage:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=90',
  galleryImages: [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=85',
  ],
  rating: 9.4,
  reviewsCount: 847,
  facts: [
    { id: 'checkin', label: 'Заезд', value: 'с 15:00', icon: 'clock' },
    { id: 'checkout', label: 'Выезд', value: 'до 12:00', icon: 'clock' },
    { id: 'breakfast', label: 'Завтрак', value: '07:00 — 10:30', icon: 'food' },
    { id: 'parking', label: 'Парковка', value: 'Бесплатная', icon: 'car' },
    { id: 'wifi', label: 'Wi-Fi', value: 'Бесплатный', icon: 'wifi' },
    { id: 'pets', label: 'Животные', value: 'Допускаются', icon: 'pet' },
    { id: 'languages', label: 'Языки', value: 'RU / EN / FR', icon: 'language' },
    { id: 'payment', label: 'Оплата', value: 'Карта / Наличные', icon: 'card' },
  ],
  rooms: [
    {
      id: 'superior',
      name: 'Superior',
      description: 'Уютный номер с панорамным видом на город и авторским интерьером',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?auto=format&fit=crop&w=1200&q=85',
      ],
      capacity: 2,
      area: 32,
      amenities: [
        { id: 'a1', label: 'Wi-Fi', icon: 'wifi' },
        { id: 'a2', label: 'Кондиционер', icon: 'ac' },
        { id: 'a3', label: 'Smart TV', icon: 'tv' },
        { id: 'a4', label: 'Мини-бар', icon: 'minibar' },
        { id: 'a5', label: 'Сейф', icon: 'safe' },
        { id: 'a6', label: 'Ванна', icon: 'bath' },
      ],
      price: {
        amount: 8500,
        currency: 'RUB',
        perNight: true,
        originalAmount: 12000,
        discountPercent: 29,
      },
      badges: [
        { id: 'b1', type: 'popular', label: 'Популярный' },
        { id: 'b2', type: 'member-discount', label: '−15% для участников' },
      ],
      available: true,
    },
    {
      id: 'deluxe',
      name: 'Deluxe Suite',
      description: 'Просторный люкс с отдельной гостиной и видом на исторический центр',
      images: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      ],
      capacity: 3,
      area: 54,
      amenities: [
        { id: 'a1', label: 'Wi-Fi', icon: 'wifi' },
        { id: 'a2', label: 'Кондиционер', icon: 'ac' },
        { id: 'a3', label: 'Smart TV', icon: 'tv' },
        { id: 'a4', label: 'Мини-бар', icon: 'minibar' },
        { id: 'a5', label: 'Балкон', icon: 'balcony' },
        { id: 'a6', label: 'Ванна', icon: 'bath' },
        { id: 'a7', label: 'Вид', icon: 'view' },
      ],
      price: {
        amount: 15200,
        currency: 'RUB',
        perNight: true,
      },
      badges: [
        { id: 'b1', type: 'promo', label: 'Промокод GRAND' },
      ],
      available: true,
    },
    {
      id: 'penthouse',
      name: 'Penthouse',
      description: 'Эксклюзивный пентхаус на верхнем этаже с панорамным остеклением',
      images: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
        'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?auto=format&fit=crop&w=1200&q=85',
      ],
      capacity: 4,
      area: 87,
      amenities: [
        { id: 'a1', label: 'Wi-Fi', icon: 'wifi' },
        { id: 'a2', label: 'Кондиционер', icon: 'ac' },
        { id: 'a3', label: 'Smart TV', icon: 'tv' },
        { id: 'a4', label: 'Мини-бар', icon: 'minibar' },
        { id: 'a5', label: 'Балкон', icon: 'balcony' },
        { id: 'a6', label: 'Джакузи', icon: 'bath' },
        { id: 'a7', label: 'Вид', icon: 'view' },
        { id: 'a8', label: 'Кухня', icon: 'kitchen' },
      ],
      price: {
        amount: 42000,
        currency: 'RUB',
        perNight: true,
      },
      badges: [
        { id: 'b1', type: 'low-availability', label: 'Осталось 2 номера' },
        { id: 'b2', type: 'best-price', label: 'Лучшая цена' },
      ],
      available: true,
    },
  ],
}

export const demoBanner: GlobalBannerData = {
  text: 'Зарегистрируйтесь и получите скидку 10% на первое бронирование',
  ctaLabel: 'Log in',
  onCtaClick: () => {
    // noop in demo
  },
  visible: true,
}
