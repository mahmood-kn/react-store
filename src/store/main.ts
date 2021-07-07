import { createSlice } from '@reduxjs/toolkit';
import { MainState } from '../models/mainState';

const initialState: MainState = {
  products: [],
  categories: [],
  filteredProducts: [],
  singleProd: null,
};

const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    filterByCategory(state, action) {
      if (action.payload === 'all') {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (p) => p.category === action.payload
        );
      }
    },
    setSingleProd(state, action) {
      state.singleProd = action.payload;
    },
  },
});

export const { setProducts, setCategories, filterByCategory, setSingleProd } =
  main.actions;

export default main.reducer;
