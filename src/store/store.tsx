import { configureStore, Action } from "@reduxjs/toolkit";
import bookReducer from "./reducers/bookReducer";
import { ThunkAction } from "redux-thunk";
import booksAddedToCartReducer from "./reducers/booksAddedToCartReducer";

const store = configureStore({
  reducer: {
    books: bookReducer,
    booksAddedToCart: booksAddedToCartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
