import Product from './product';
export interface MainState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
}
