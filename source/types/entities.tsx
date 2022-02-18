export interface CartItem {
  product: Product;
  quantity: number;
  observation?: string;
}

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  isQuantity?: boolean;
}
