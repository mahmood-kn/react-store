import { createSlice } from '@reduxjs/toolkit';
const initialState: Record<string, boolean> = {
  prodsLoading: false,
  catsLoading: false,
  prodLoading: false,
};
const loading = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setProdsLoading(state, action) {
      state.prodsLoading = action.payload;
    },
    setCatsLoading(state, action) {
      state.catsLoading = action.payload;
    },
    setProdLoading(state, action) {
      state.prodLoading = action.payload;
    },
  },
});

export const { setCatsLoading, setProdLoading, setProdsLoading } =
  loading.actions;

export default loading.reducer;
