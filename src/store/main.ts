import { createSlice } from '@reduxjs/toolkit';
import { MainState } from '../models/mainState';

const initialState: MainState = {
  products: [],
};

const main = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const mainActions = main.actions;

export default main.reducer;
