import type { Hotel, GlobalBannerData } from '@smartbooking/booking'

// Extended demo data with more images and reviews
const superiorImages = [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1576672684247-f2fd8f2186a5?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1565054666747-69f6646db940?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1552940677-72ec8234b6b1?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1540969122614-fdb5e36a464d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1571003123894-169987b86556?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85',
]

const deluxeImages = [
  'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1570129477492-45a003537e1d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1568084309555-218e7960a4a6?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1505693314967-52eb014675ba?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1551024506-5623ee06faf4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1594037807286-4cbb9ced0dfd?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1596178065887-fcf937ff72fe?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1566665556112-652d0eb27b5f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1571848212624-540a95d986c2?auto=format&fit=crop&w=1200&q=85',
]

const penthouseImages = [
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1515263487990-61b07816b362?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1529148482759-b649efb686b8?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1511135920326-de694102de4f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1564629238272-2fd59d92c1e8?auto=format&fit=crop&w=1200&q=85',
]

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
      description: 'Уютный номер с панорамным видом на город и авторским интерьером. Идеален для деловых путешественников и пар.',
      images: superiorImages,
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
      description: 'Просторный люкс с отдельной гостиной и видом на исторический центр. Премиальный сервис и роскошь в каждой детали.',
      images: deluxeImages,
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
      description: 'Эксклюзивный пентхаус на верхнем этаже с панорамным остеклением. Предел роскоши с самыми высокими потолками.',
      images: penthouseImages,
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

export const demoReviews = [
  {
    id: 'r1',
    hotelId: 'the-grand',
    guestName: 'Мария К.',
    rating: 5,
    text: 'Потрясающий отель! Прекрасный сервис, уютные номера, чистота на высоте. Завтрак разнообразный, персонал очень внимателен. Обязательно вернусь!',
    date: '2024-01-15',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'r2',
    hotelId: 'the-grand',
    guestName: 'Иван П.',
    rating: 5,
    text: 'Отличное место для романтического вечера. Элегантный интерьер, спокойная атмосфера, вид на город просто волшебный. Рекомендую!',
    date: '2024-01-10',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'r3',
    hotelId: 'the-grand',
    guestName: 'Анна В.',
    rating: 4,
    text: 'Отель очень понравился. Минималистичный дизайн, качественное обслуживание. Единственное — немного дороговато для этого города.',
    date: '2024-01-05',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'r4',
    hotelId: 'the-grand',
    guestName: 'Сергей Л.',
    rating: 5,
    text: 'Прекрасный выбор для деловой поездки. Быстрый интернет, удобные кровати, тихая атмосфера. Всё, что нужно для работы и отдыха.',
    date: '2023-12-28',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: 'r5',
    hotelId: 'the-grand',
    guestName: 'Ольга М.',
    rating: 5,
    text: 'Это не просто отель, это целое произведение искусства! Минимализм в лучшем виде. Персонал предвидит все пожелания. Спасибо!',
    date: '2023-12-20',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 'r6',
    hotelId: 'the-grand',
    guestName: 'Константин Р.',
    rating: 4,
    text: 'Нравится внимание к деталям. Комната чистая, красивая. Разве что с парковкой нужно разобраться получше, но в целом все хорошо.',
    date: '2023-12-15',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
]

export const demoFacilities = [
  { id: 'f1', name: 'Спа-центр', icon: 'spa' as const },
  { id: 'f2', name: 'Тренажёрный зал', icon: 'gym' as const },
  { id: 'f3', name: 'Ресторан', icon: 'food' as const },
  { id: 'f4', name: 'Wi-Fi', icon: 'wifi' as const },
  { id: 'f5', name: 'Конференц-залы', icon: 'card' as const },
  { id: 'f6', name: 'Парковка', icon: 'car' as const },
]

export const demoBanner: GlobalBannerData = {
  text: 'Зарегистрируйтесь и получите скидку 10% на первое бронирование',
  ctaLabel: 'Log in',
  onCtaClick: () => {
    // noop in demo
  },
  visible: true,
}
