import Product from './product';
export interface MainState {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  singleProd: Product | null;
  quickViewOpen: boolean;
  quickProd: Product | null;
}
