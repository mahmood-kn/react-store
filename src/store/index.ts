import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './main';
import loadingReducer from './loading';
import cardReducer from './card';

const store = configureStore({
  reducer: { main: mainReducer, loading: loadingReducer, card: cardReducer },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
