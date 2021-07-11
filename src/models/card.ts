import Product from './product';
export interface SingleCardProd {
  product: Product;
  amount: number;
}
export default interface Card {
  products: SingleCardProd[];
}
