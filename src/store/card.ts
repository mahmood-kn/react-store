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
      if (state.products.length > 0) {
        let current = state.products.filter(
          (p) => p.product.id === action.payload.product.id
        );
        if (current.length === 1) {
          current[0].amount += action.payload.amount;
        } else if (current.length === 0) {
          state.products.push(action.payload);
        }
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addProduct } = card.actions;

export default card.reducer;
