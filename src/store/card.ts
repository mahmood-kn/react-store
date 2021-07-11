import { createSlice } from '@reduxjs/toolkit';
import Card from 'models/card';

const initialState: Card = {
  products: [],
};

const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = card.actions;

export default card.reducer;
