import Apple_BYZ_S852I from '@/assets/Apple_BYZ_S852I.png';
import Apple_AirPods from '@/assets/Apple_AirPods.png';
import Apple_EarPods_box from '@/assets/Apple_EarPods_box.png';
import Apple_EarPods from '@/assets/Apple_EarPods.png';
import BOROFONE_BO4 from '@/assets/BOROFONE_BO4.png';
import GERLAX_GH_04 from '@/assets/GERLAX_GH_04.png';
import type { Product } from './types';

export const headphones: Product[] = [
  {
    id: 1,
    img: Apple_BYZ_S852I,
    title: "Apple BYZ S852I",
    price: 2927,
    oldPrice: 3527,
    rate: 4.7,
    category: 'wired'
  },
  {
    id: 2,
    img: Apple_EarPods_box,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    category: 'wired'
  },
  {
    id: 3,
    img: Apple_EarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    category: 'wired'
  },
  {
    id: 4,
    img: Apple_BYZ_S852I,
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
    category: 'wired'
  },
  {
    id: 5,
    img: Apple_EarPods_box,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    category: 'wired'
  },
  {
    id: 6,
    img: Apple_EarPods,
    title: "Apple EarPods",
    price: 2327,
    rate: 4.5,
    category: 'wired'
  },
  {
    id: 7,
    img: Apple_AirPods,
    title: "Apple AirPods",
    price: 9527,
    rate: 4.7,
    category: 'wireless'
  },
  {
    id: 8,
    img: GERLAX_GH_04,
    title: "GERLAX GH-04",
    price: 6527,
    rate: 4.7,
    category: 'wireless'
  },
  {
    id: 9,
    img: BOROFONE_BO4,
    title: "BOROFONE BO4",
    price: 7527,
    oldPrice: 8000,
    rate: 4.7,
    category: 'wireless'
  }
];

// Вспомогательная функция для получения товаров по категории
export const getProductsByCategory = (category: 'wired' | 'wireless'): Product[] => {
  return headphones.filter(product => product.category === category);
};

export const getWiredHeadphones = () => getProductsByCategory('wired')
export const getWirelessHeadphones = () => getProductsByCategory('wireless')
