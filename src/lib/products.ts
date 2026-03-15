export interface Product {
  name: string;
  slug: string;
  size: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'sets' | 'glasses' | 'barista-tools' | 'gift-card';
}

export const sets: Product[] = [
  { name: 'The Family Set', slug: 'family-set', size: '4 Glasses', price: 80, originalPrice: 155, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop', category: 'sets' },
  { name: 'The Latte Lovers', slug: 'latte-lovers', size: '2 Glasses + Carafe', price: 94, originalPrice: 105, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=800&fit=crop', category: 'sets' },
  { name: 'The Espresso Lovers', slug: 'espresso-lovers', size: '2 Glasses + Carafe', price: 85, originalPrice: 95, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=800&fit=crop', category: 'sets' },
  { name: 'The Pourover Lovers', slug: 'pourover-lovers', size: '2 Glasses + Carafe', price: 77, originalPrice: 85, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=800&fit=crop', category: 'sets' },
];

export const glasses: Product[] = [
  { name: 'The Espresso', slug: 'espresso', size: '3oz / 90ml', price: 35, image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Cortado', slug: 'cortado', size: '4.5oz / 130ml', price: 40, image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Tasting', slug: 'tasting', size: '5oz / 150ml', price: 40, image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Latte', slug: 'latte', size: '8oz / 240ml', price: 40, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Latte XL', slug: 'latte-xl', size: '12oz / 350ml', price: 40, image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Tasting', slug: 'tasting-2', size: '6oz / 180ml', price: 40, image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Iced Coffee', slug: 'iced-coffee', size: '16oz / 475ml', price: 45, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=800&fit=crop', category: 'glasses' },
  { name: 'The Carafe', slug: 'carafe', size: '17oz / 500ml', price: 25, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=800&fit=crop', category: 'glasses' },
];

export const baristaTools: Product[] = [
  { name: 'Happy Pucks', slug: 'happy-pucks', size: 'Set of 2', price: 19, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=800&fit=crop', category: 'barista-tools' },
  { name: 'Mad Pucks', slug: 'mad-pucks', size: 'Set of 2', price: 19, image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=800&fit=crop', category: 'barista-tools' },
  { name: 'The Coffee Tray', slug: 'coffee-tray', size: 'Walnut', price: 25, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop', category: 'barista-tools' },
  { name: 'The Carafe', slug: 'carafe-tool', size: '17oz / 500ml', price: 25, image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=800&fit=crop', category: 'barista-tools' },
];

export const reviews = [
  { name: 'Sarah M.', verified: true, date: 'Dec 2024', text: 'These glasses are absolutely stunning. The quality is incredible and they make my morning coffee feel so special.', product: 'The Latte' },
  { name: 'James K.', verified: true, date: 'Nov 2024', text: 'Best espresso glasses I have ever owned. The double wall keeps my drink hot and the design is beautiful.', product: 'The Espresso' },
  { name: 'Emily R.', verified: true, date: 'Nov 2024', text: 'Bought the family set as a gift and everyone loved it. Beautiful packaging too!', product: 'The Family Set' },
  { name: 'Michael T.', verified: true, date: 'Oct 2024', text: 'The cortado glass is perfect size. Feels premium in hand and looks amazing on any surface.', product: 'The Cortado' },
  { name: 'Lisa P.', verified: true, date: 'Oct 2024', text: 'Love the iced coffee glass! Perfect for summer. The shape is unique and holds just the right amount.', product: 'The Iced Coffee' },
];
