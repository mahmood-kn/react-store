import Product from './product';
export default interface Card {
  products: { products: Product; amount: number }[];
}
