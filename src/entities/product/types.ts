export type ProductID = number;

export interface Product {
  id: ProductID;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  category: 'wired' | 'wireless';
  description?: string;
}
